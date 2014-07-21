/**
 * LifeCycleState.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

	attributes: {

        life_cycle: {
            model: 'LifeCycle'
        },

        project_queue: {
            model: 'ProjectQueue'
        },

        actions_from_here: {
            collection: 'LifeCycleAction',
            via: 'from_state',
            dominant: true
        },

        actions_to_here: {
            collection: 'LifeCycleAction',
            via: 'to_state'
        },

        life_cycle_history: {
            collection: 'LifeCycleHistory',
            via: 'state'
        }

	}

};
