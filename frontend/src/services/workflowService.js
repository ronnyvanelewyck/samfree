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

import axios from "axios";

export async function getAllWorkflows() {
 
let workflows;

  // "http://localhost:5001/api/workflows"

  await axios.get("http://localhost:5001/api/workflows")
  .then(res => {
    const headerDate = res.headers && res.headers.date ? res.headers.date : 'no response date';
   console.log('Status Code:', res.status);
   console.log('Date in Response header:', headerDate);

    workflows = res.data;

  /*  for(workflow of workflows) {
      console.log(`Got workflow with text1: ${workflow.header.text1} ${workflow._id}`);
    }*/
  })
  .catch(err => {
    console.log('Error: ', err.message);
  });





  return workflows;
}
