/**
 * Jobs.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    jobName: { type: 'string', required: true },
    partID: { type: 'number', required: true },
    qty: { type: 'number', required: true  },
  },
  primaryKey:'jobName',
  tableName:'jobs'
};

