/**
 * ProjectQueue.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

	attributes: {

        project: {
            model: 'Project'
        },

        tickets: {
            collection: 'Ticket',
            via: 'project_queue'
        },

        life_cycle_states: {
            collection: 'LifeCycleState',
            via: 'project_queue'
        }

	}

};
