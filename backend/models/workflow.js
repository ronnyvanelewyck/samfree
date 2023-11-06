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
// const Joi = require("joi");

// don't pluralise name of db
mongoose.pluralize(null);

// workflow
const workflowSchema = new mongoose.Schema({
  header: {
    isActive: {
      type: Boolean,
      default: true
    },
    tasktype: {
      type: String,
      required: true,
      enum: ['standard1', 'standard2', 'standard3']
    },
    text1: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 40,
      match: /^[A-Z]/,
      trim: true
    },
    text2: {
      type: String,
      trim: true
    },
    imageurl: {
      type: String,
      minlength: 12,
      maxlength: 512
    },
    chdate: {
      type: Date,
      default: Date.now
    }
  },
  material: [
    {
      order: {
        type: Number,
        required: true
      },
      text: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 512,
        trim: true
      },
      amount: {
        type: Number,
        required: true
      },
      uom: {
        type: String
      },
      imageurl: {
        type: String,
        minlength: 12,
        maxlength: 512
      }
    }
  ],
  ingredient: [
    {
      order: {
        type: Number,
        required: true
      },
      text: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 512,
        trim: true
      },
      amount: {
        type: Number
      },
      uom: {
        type: String,
        required: true
      },
      allergen:
        [
          {
            type: String,
            minlength: 2,
            maxlength: 512,
            trim: true
          }
        ],
      nutriscore: {
        type: String,
        trim: true
      },
      price: {
        type: Number
      },
      currency: {
        type: String,
        trim: true
      },
      imageurl: {
        type: String,
        minlength: 12,
        maxlength: 512
      }
    }
  ],
  workflow: [
    {
      order: {
        type: Number,
        required: true
      },
      screenformat: {
        type: String,
        required: true,
        enum: ['C0', 'C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'C9', 'C10', 'C11', 'C12', 'C13', 'C14', 'C15']
      },
      steptext: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 20,
        trim: true
      },
      steptitle: {
        type: String,
        maxlength: 256,
        trim: true
      },
      textlines: [
        {
          type: String,
          maxlength: 256,
          trim: true
        }
      ],
      imageurl1: {
        type: String,
        minlength: 12,
        maxlength: 512
      }      
    }
  ]
});


// workflow model
const Workflow = mongoose.model('workflow', workflowSchema);


// validations
function validateWorkflow(workflow) {


}

module.exports =
{
  Workflow,
  validateWorkflow,
  workflowSchema
} 