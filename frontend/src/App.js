/* Licensed to the Apache Software Foundation (ASF) under one
or more contributor license agreements.  See the NOTICE file
distributed with this work for additional information
regarding copyright ownership.  The ASF licenses this file
to you under the Apache License, Version 2.0 (the
"License"); you may not use this file except in compliance
with the License.  You may obtain a copy of the License at

  http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing,
software distributed under the License is distributed on an
"AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, either express or implied.  See the License for the
specific language governing permissions and limitations
under the License. */

import React, { useState, Fragment } from 'react';
import axios from "axios";

import './App.css';

import { loginUser } from "./services/authService";
import { getAllWorkflows } from "./services/workflowService";
import { getAllTasks } from "./services/taskService";

import WorkflowTable from "./components/workflowTable";
import TaskTable from "./components/taskTable";
import Login from "./components/login";

import AppHeader from './components/appHeader';
import AppFooter from './components/appFooter';



const App = () => {



  const [workflowList, resSetValue] = useState();
  const [isAvailable, isAvailableSetValue] = useState(false);
  const [taskList, taskListSetValue] = useState();
  const [isAvailable2, isAvailable2SetValue] = useState(false);
  const [isToken, isTokenSetValue] = useState(false);
  const [isError, isErrorSetValue] = useState(true);
  const [errorMessage, errorSetValue] = useState();
  const [isItem1Clicked, item1SetValue] = useState(false);
  const [isItem2Clicked, item2SetValue] = useState(false);
  const [isItem3Clicked, item3SetValue] = useState(false);

  const handleGetWorkflows = async () => {

    //await getToken();


    const result = await getAllWorkflows();
    if (result === undefined) {
      isAvailableSetValue(false);
    } else {
      resSetValue(result);
      isAvailableSetValue(true);
    }

    const res2 = await getAllTasks();
    if (res2 === undefined) {
      isAvailable2SetValue(false);
    } else {
      taskListSetValue(res2);
      isAvailable2SetValue(true);
    }

    return result
  };

  const getToken = async (emailIn, passwordIn) => {
    // JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRhYTkzNmUwNGE0YTNhZmQ3OTFiNTUiLCJpc0FkbWluIjp0cnVlLCJlbWFpbCI6InJvbnZhbmVsZXd5Y2tAZ21haWwuY29tIiwiaWF0IjoxNjk5MzkxODUyfQ.g30OY-VtA9wjBiLUn2K-C8a5o2EugvO61beF42AJ5vQ
    const logonData = {
      email: emailIn,
      password: passwordIn,
    };
    const token = await loginUser(logonData);
    axios.defaults.headers.common["x-auth-token"] = token;
    return token;
  };

  const handleLogin = async (emailIn, passwordIn) => {
    const token = await getToken(emailIn, passwordIn);
    if (token === '401') {
      isTokenSetValue(false);
      errorSetValue("email or password are not correct");
    } else {
      isTokenSetValue(true);
      isErrorSetValue(false);
    }
  };



  const handleItem1Click = () => {
    // Add your logic for Item 1 click
    console.log('Item 1 clicked!');
    item1SetValue(true);
    item2SetValue(false);
    item3SetValue(false);
  };

  const handleItem2Click = () => {
    // Add your logic for Item 2 click
    console.log('Item 2 clicked!');
    item1SetValue(false);
    item2SetValue(true);
    item3SetValue(false);
  };

  const handleItem3Click = () => {
    // Add your logic for Item 3 click
    console.log('Item 3 clicked!');
    item1SetValue(false);
    item2SetValue(false);
    item3SetValue(true);
  };

  return (
    <Fragment>

    {/* app header */}
      <AppHeader
        handleItem1Click={handleItem1Click}
        handleItem2Click={handleItem2Click}
        handleItem3Click={handleItem3Click}
      />

      {/* login */}
      {isItem1Clicked && !isToken && isError &&
        <div className="appStyle">
          <Login onSubmit={handleLogin} />
          {errorMessage}
        </div>}

      {/* logout */}

      {/* SAM for FREE */}
      {isItem2Clicked &&
        <div className="appStyle">
          ga naar gratis sam
        </div>}

      {/* SAM Management */}
      {isItem3Clicked &&
        <div className="appStyle">
          ga naar SAMB
        </div>}

      {/* app footer */}
      <AppFooter />
      {/* table */}
      {/*isAvailable && (<pre>{JSON.stringify(workflowList, null, 2)}</pre>)*/}
      {/*isAvailable && (
          <div className="ml-2 mr-2 mb-3 mt-3">
            <WorkflowTable
              list={workflowList}
            />
          </div>
        )*/}
      {/*isAvailable2 && (
          <div className="ml-2 mr-2 mb-3 mt-3">
            <TaskTable
              list={taskList}
            />
          </div>
        )*/}

    </Fragment>


  );
};

export default App;
