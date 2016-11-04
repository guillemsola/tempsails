/**
 * ReleaseController
 *
 * @description :: Server-side logic for managing releases
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index: function(request, response) {
        // Release.find().exec(function(err, releases) {
        //     console.log(releases);
            return response.view('release', { });
        // });
    },
    postRelease: function(request, response) {
        Release.create(request.body).exec(function(err, release){
            if (err) { return response.serverError(err); }

            return response.view('printrelease', { 'id' : release.id});
        });
        
    },
};

