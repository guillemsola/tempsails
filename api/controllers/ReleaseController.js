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
        console.log(JSON.stringify(request.params));
        console.log(request.param('Description'));
        Release.create(request.params
        //     {
        //     'Milestone': request.param('Milestone'),
        //     'Urgency': request.param('Urgency'),
        //     'Product': request.param('Product'), 
        // }
        ).exec(function(err, release){
            if (err) { return res.serverError(err); }

            return response.view('printrelease', { 'id' : release.id});
        });
        
    },
};

