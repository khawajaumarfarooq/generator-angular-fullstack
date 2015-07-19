'use strict';

var _ = require('lodash');<% if (filters.mongoose) { %>

var <%= classedName %> = require('./<%= name %>.model');

exports.show = function (req, res) {
    <%= classedName %>.findById(req.params.id, function (err, <%= name %>) {
        if (err) {
            return handleError(res, err);
        }

        if (!<%= name %>) {
            return res.status(404).send('Not Found');
        }

        return res.json(<%= name %>);
    });
};

exports.create = function (req, res) {
    <%= classedName %>.create(req.body, function(err, <%= name %>) {
        if (err) {
            return handleError(res, err);
        }

        return res.status(201).json(<%= name %>);
    });
};

exports.update = function (req, res) {
    if (req.body._id) {
        delete req.body._id;
    }

    <%= classedName %>.findById(req.params.id, function (err, <%= name %>) {
        if (err) {
            return handleError(res, err);
        }

        if (!<%= name %>) {
            return res.status(404).send('Not Found');
        }

        var updated = _.merge(<%= name %>, req.body);

        updated.save(function (err) {
            if (err) {
                return handleError(res, err);
            }

            return res.status(200).json(<%= name %>);
        });
    });
};

exports.destroy = function (req, res) {
    <%= classedName %>.findById(req.params.id, function (err, <%= name %>) {
        if(err) {
            return handleError(res, err);
        }

        if(!<%= name %>) {
            return res.status(404).send('Not Found');
        }

        <%= name %>.remove(function(err) {
            if(err) {
              return handleError(res, err);
            }

            return res.status(204).send('No Content');
        });
    });
};

function handleError(res, err) {
    return res.status(500).send(err);
}<% } %>
