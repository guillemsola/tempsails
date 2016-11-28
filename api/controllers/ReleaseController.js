/**
 * ReleaseController
 *
 * @description :: Server-side logic for managing releases
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var definitions = require('../services/definitions.js'),
    atlas = require('../services/atlas.js');

module.exports = {
    
	index: function(request, response) {
        Release.find({id: request.param('id')}).exec(function(err, releases) {
            if (err) { return response.serverError(err); }
            if(typeof releases !== 'undefined') {
                release = releases[0];
            }
            atlas.getApps(function(components) {
                return response.view('release', { 'release': release, 'urgencies' : definitions.urgencies, 'components': components });
            })
        });
    },
    postRelease: function(request, response) {
        var values = request.allParams();
        if( values.id == '' ) {
            delete values.id;
         };
        
        Release.updateOrCreate({ id: values.id }, values, function(err, release) {
            if (err) { return response.serverError(err); }

            // TODO remove debug only view('printrelease', { 'id' : release.id});
            return response.redirect('/');
        });
    },
    listAll: function(request, response) {
        Release.find({}).exec(function(err, releases) {
            return response.view('releases', { 'releases': releases });
        });
    }
};

