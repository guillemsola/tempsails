/**
 * ReleaseController
 *
 * @description :: Server-side logic for managing releases
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index: function(request, response) {
        Release.find({id: request.param('id')}).exec(function(err, releases) {
            if (err) { return response.serverError(err); }
            if(typeof releases !== 'undefined') {
                release = releases[0];
            }
            return response.view('release', { 'release': release });
        });
    },
    postRelease: function(request, response) {
        Release.updateOrCreate({id: request.param('id')}, request.body, function(err, release) {
            if (err) { return response.serverError(err); }

            return response.view('printrelease', { 'id' : release.id});
        });
    },
};

