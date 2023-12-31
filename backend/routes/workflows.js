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

const express = require("express");
const router = express.Router();
const validateObjectId = require('../middleware/validateObjectId')
const { Workflow } = require('../models/workflow');
const auth = require('../middleware/auth');


/* R(EAD) - GET */
// get all workflows
router.get("/", [auth] , async (req, res) => {
  const workflow = await Workflow.find().select('-__v');
  res.send(workflow);
});
// get workflow by id
router.get("/:id", [auth], validateObjectId, async (req, res) => {
  const workflow = await Workflow.find({ _id: req.params.id }).select();
  res.send(workflow);
});

module.exports = router;