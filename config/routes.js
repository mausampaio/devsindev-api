/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {
  'GET /v1/usuarios': 'StudentsController.find',
  'GET /v1/usuarios/:id': 'StudentsController.findOne',
  'POST /v1/usuarios': 'StudentsController.create',
  'DELETE /v1/usuarios/:id': 'StudentsController.remove',
  'PUT /v1/usuarios/:id': 'StudentsController.update',
  'POST /files/upload': 'FilesController.upload',
  'GET /files/download/:id': 'FilesController.download'
};
