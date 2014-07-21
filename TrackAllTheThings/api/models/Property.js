/**
 * Properties.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

	attributes: {

        ticket_properties: {
            collection: 'TicketProperty',
            via: 'property'
        },

        type: {
            model: 'PropertyType'
        },

        ticket_templates: {
            collection: 'TicketPropertyTemplate',
            via: 'property'
        }

	}

};
