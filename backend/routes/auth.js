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

/*
test users

Admin user
{
    "email": "ronvanelewyck@gmail.com",
    "password": "SAMfree2024"
}

non-Admin user
{
    "email": "rvesolutions@gmail.com",
    "password": "SAMfree2024"
}

*/

const express = require("express");
const router = express.Router();
const Joi = require("joi");
const bcrypt = require('bcrypt');

const { User } = require('../models/user');

// REQUEST API
router.post("/", async (req, res) => {
  // check valid body
  const { error } = validateUser(req.body);
  if (error) { 
    res.status(409).json({ code: '401', message: 'invalid email or password' }); 
  } else {
    // check email is valid
    let user = await User.findOne({ email: req.body.email });
    if (!user) {
      res.status(401).json({ code: '401', message: 'invalid email or password' });
    } else {
      // check password
      const validPassword = await bcrypt.compare(req.body.password, user.password);
      if (!validPassword) {
        res.status(401).json({ code: '401', message: 'invalid email or password' });
      } else {
        // jsonwebtoken
        const token = user.generateAuthToken();
        res.json({ "token": token });
      }
    }
  }

  return res;

});

function validateUser(req) {

  const schema = Joi.object({
    email: Joi.string().required().email(),
    password: Joi.string().required()
  });
  return schema.validate(req);
}



module.exports = router;

