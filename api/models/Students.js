/**
 * Students.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    nome: {
      type: 'string',
      required: true,
      unique: true
    },
    ativo: {
      type: 'boolean',
      defaultsTo: true
    },
    idade: {
      type: 'number',
      required: true,
    },
    foto: {
      model: 'files'
    },
    // socialNetworks: {
    //   type: 'json',
    //   custom: value => {
    //     const obj = JSON.stringify(value);

    //     let replace = obj.replace(/\n/g, '');

    //     replace = JSON.parse(replace);

    //     if (Object.keys(replace).length > 2) {
    //       return false;
    //     } else {
    //       return ['linkedin', 'github'].includes(Object.keys(replace)[0]) && ['linkedin', 'github'].includes(Object.keys(replace)[1]) && _.isString(value.linkedin) && _.isString(value.github)
    //       && _.isObject(value)
    //     }
    //   }
    // }
    linkedin: {
      type: 'string'
    },
    github: {
      type: 'string'
    }
  },

  // customToJSON: function() {
  //   return {
  //     name: this.name,
  //     enable: this.enable,
  //     socialNetwork: {
  //       linkedin: this.linkedin,
  //       github: this.github
  //     }
  //   };
  // }

};

