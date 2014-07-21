/**
 * TicketType.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

	attributes: {

        type: 'STRING',

        tickets: {
            collection: 'Ticket',
            via: 'ticket_type'
        },

        property_template: {
            model: 'TicketPropertyTemplate'
        },

        life_cycle: {
            model: 'LifeCycle'
        }

	}

};
