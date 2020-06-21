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

  '/':'JobsController.getParts',
  '/Jobs/delete/:jobName':'JobsController.deleteJob',
  '/Jobs/edit/:jobName/:partID':'JobsController.edit',
  '/add': { view: 'pages/post-jobs' },
  'POST /Jobs/Post':'JobsController.addJob',
  '/Jobs/putJob/:jobName':'JobsController.putJobs',

};
