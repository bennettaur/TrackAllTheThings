/**
 * Tickets.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

	attributes: {
        title: 'STRING',
        description: 'STRING',

        project_queue: {
            model: 'ProjectQueue'
        },

        user_queues: {
            collection: 'UserQueue',
            via: 'tickets',
            dominant: true
        },

        ticket_type: {
            model: 'TicketType'
        },

        current_state: {
            model: 'LifeCycleState'
        },

        ticket_related_to: {
            collection: 'TicketRelation',
            via: 'ticket'
        },

        ticket_related_by: {
            collection: 'TicketRelation',
            via: 'related_ticket'
        },

        comments: {
            collection: 'Comment',
            via: 'ticket'
        },

        tags: {
            collection: 'Tag',
            via: 'tickets',
            dominant: true
        },

        attachments: {
            collection: 'Attachment',
            via: 'ticket'
        },

        properties: {
            collection: 'TicketProperty',
            via: 'property'
        }

	}

};
