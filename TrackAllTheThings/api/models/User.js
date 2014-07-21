/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

	attributes: {
        username: 'STRING',
        passwd: 'STRING',

        project_permissions: {
            collection: 'UserProjectPermission',
            via: 'user'
        },

        user_queues: {
            collection: 'UserQueue',
            via: 'user'
        }

	}

};
