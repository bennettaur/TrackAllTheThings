/**
 * LifeCycle.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

	attributes: {

        start_state: {
            model: 'LifeCycleState'
        },

        ticket_types: {
            collection: 'TicketType',
            via: 'life_cycle'
        },

        states: {
            collection: 'LifeCycleState',
            via: 'life_cycle'
        }

	}

};
