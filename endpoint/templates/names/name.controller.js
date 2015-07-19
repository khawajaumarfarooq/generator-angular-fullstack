'use strict';

var _ = require('lodash');<% if (filters.mongoose) { %>
var <%= classedName %> = require('./<%= name %>.model');<% } %>

exports.index = function(req, res) {<% if (!filters.mongoose) { %>
    res.json([]);<% } %><% if (filters.mongoose) { %>
    <%= classedName %>.find(function (err, <%= name %>) {
        if(err) {
            return handleError(res, err);
        }

        return res.status(200).json(<%= name %>);
  });<% } %>
};
