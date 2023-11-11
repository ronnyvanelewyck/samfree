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

const mongoose = require("mongoose");
const jwt = require('jsonwebtoken');
//const Joi = require("joi");

const jwtPrivateKey = "samfreeJWTprivatekey";


// don't pluralise name of db
mongoose.pluralize(null);

// user
const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 40,
    trim: true
  },
  lastname: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 80,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minlength: 5,
    maxlength: 255
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 1024
  },
  isAdmin: Boolean
});

// add methode for authentication to user schema
userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id, isAdmin: this.isAdmin, email: this.email }, jwtPrivateKey);
  return token;
}


// user model
const User = mongoose.model('user', userSchema);



module.exports =
{
  User
}