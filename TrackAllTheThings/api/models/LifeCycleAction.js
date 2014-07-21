/**
 * LifeCycleActions.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

	attributes: {

        action: 'STRING',

        from_state: {
            collection: 'LifeCycleState',
            via: 'actions_from_here'
        },

        to_state: {
            model: 'LifeCycleState'
        }

	}

};
