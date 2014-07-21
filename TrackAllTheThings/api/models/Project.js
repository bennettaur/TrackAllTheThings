/**
 * Projects.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

	attributes: {
        name: 'STRING',
        description: 'STRING',

        starting_queue: {
            model: 'ProjectQueue',
        },

        ticket_property_template: {
            model: 'TicketPropertyTemplate'
        },

        project_queues: {
            collection: 'ProjectQueue',
            via: 'project'
        },

        permissions: {
            collection: 'UserProjectPermission',
            via: 'project'
        }


	}

};
