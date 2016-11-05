/**
 * Release.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    id: {
      type: 'string',
      primaryKey: true,
      unique: true,
      required: true,
      defaultsTo: function() {
        return uuid.v4();
      },
    },
    Milestone: {
      type: 'string',
      required: true,
    },
    Urgency: {
      type: 'string',
      enum: ['Low', 'Medium', 'High', 'Critical', 'Urgent'],
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
  }
};

