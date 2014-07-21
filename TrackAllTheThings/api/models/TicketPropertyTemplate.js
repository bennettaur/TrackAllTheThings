/**
 * TicketPropertyTemplate.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

	attributes: {

        projects: {
            collection: 'Project',
            via: 'ticket_property_template'
        },

        ticket_types: {
            collection: 'TicketType',
            via: 'property_template'
        },

        property: {
            model: 'Property'
        }

	}

};
