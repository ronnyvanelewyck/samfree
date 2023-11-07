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
//const Joi = require("joi");


// don't pluralise name of db
mongoose.pluralize(null);

// task
const taskSchema = new mongoose.Schema({
  owner: {
    creaDate: {
      type: Date,
      default: Date.now,
    },
    modifDate: {
      type: Date,
      default: Date.now,
    },
    firstname: {
      type: String,
      minlength: 1,
      maxlength: 10,
      trim: true,
    },
    lastname: {
      type: String,
      minlength: 1,
      maxlength: 30,
      trim: true,
    },
    company: {
      type: String,
      minlength: 2,
      maxlength: 80,
      trim: true,
    }, 
    businessUnit: {
      type: String,
      minlength: 2,
      maxlength: 80,
      trim: true,
    }
  } , 
  taskType: {
    type: String,
    required: true,
    enum: ['freeType','classType'],
  },

  freeType: {
    urlQrCode: {
      type: String,
      minlength: 12,
      maxlength: 2048
    },
  },
  classType: {
    isExecuted: {
      type: Boolean,
    },
    planDate: {
      type: Date,
    },
    execDate: {
      type: Date,
    },
    order: {
      type: Number,
      required: true
    },
    portion: {
      type: Number,
      default: 0
    },
    company: {
      type: String,
      minlength: 2,
      maxlength: 80,
      trim: true,
    },    
    course: {
      type: String,
      minlength: 2,
      maxlength: 80,
      trim: true,
    },
    teacher: {
      firstname: {
        type: String,
        minlength: 1,
        maxlength: 10,
        trim: true,
      },
      lastname: {
        type: String,
        minlength: 1,
        maxlength: 30,
        trim: true,
      },
      imageurl: {
        type: String,
        minlength: 12,
        maxlength: 2048
      },
    },
    participant: {
      firstname: {
        type: String,
        minlength: 1,
        maxlength: 10,
        trim: true,
      },
      lastname: {
        type: String,
        minlength: 1,
        maxlength: 30,
        trim: true,
      },
      imageurl: {
        type: String,
        minlength: 12,
        maxlength: 2048
      },
      businessUnit: {
        type: String,
        minlength: 2,
        maxlength: 80,
        trim: true,
      },
    },
  },
  workflow: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'workflow'
  },
});


// task model
const Task = mongoose.model('task', taskSchema);



module.exports =
{
  Task
}