/**
 * ReleaseController
 *
 * @description :: Server-side logic for managing releases
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var uuid  = require('node-uuid');

module.exports = {
    
	index: function(request, response) {
        Release.find({id: request.param('id')}).exec(function(err, releases) {
            if (err) { return response.serverError(err); }
            if(typeof releases !== 'undefined') {
                release = releases[0];
            }
            return response.view('release', { 'release': release, 'uuid' : uuid });
        });
    },
    postRelease: function(request, response) {
        var values = request.allParams();
        if( values.id == '' ) {
            delete values.id;
         };
        
        Release.updateOrCreate({ id: values.id }, values, function(err, release) {
            if (err) { return response.serverError(err); }

            return response.view('printrelease', { 'id' : release.id});
        });
    },
};

