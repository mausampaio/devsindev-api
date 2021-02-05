/**
 * Files.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    filename: {
      type: 'string',
      required: true
    },
    url: {
      type: 'string',
      required: true
    },
    path: {
      type: 'string',
      required: true
    }
  },

};

