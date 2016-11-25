/**
 * Release.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

var uuid = require('node-uuid'),
    definitions = require('../services/definitions.js');

module.exports = {

  attributes: {
    id: {
      type: 'string',
      primaryKey: true,
      unique: true,
      defaultsTo: uuid.v4,
    },
    Milestone: {
      type: 'string',
      required: true,
    },
    Urgency: {
      type: 'string',
      enum: definitions.urgency,
      required: true,
    },
    Product: {
      type: 'string',
      required: true,
    },
    Description: {
      type: 'text',
      required: true,
    },
    Prerequisits: {
      type: 'text',
    },
    KnownBugs: {
      type: 'string',
    },
    BA: {
      type: 'email',
      required: true,
    },
    DevOp: {
      type: 'email',
      required: true,
    },
    SM: {
      type: 'email',
      required: true,
    },
    Components: {
      collection: 'component',
      via: 'release'
    }
  }
};

