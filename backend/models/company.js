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
const Joi = require("joi");

// don't pluralise name of db
mongoose.pluralize(null);

// company
const companySchema = new mongoose.Schema({
  name1: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 10,
    trim: true
  },
  name2: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 80,
    trim: true
  }
});

// company model
const Company = mongoose.model("company", companySchema);

// validations
function validateCompany(company) {
  const schema = Joi.object({
    name1: Joi.string().min(3).max(80).required(),
    name2: Joi.string().min(1).max(80).required()
  });
  return schema.validate(company);
}

module.exports = {
  Company,
  validateCompany,
};