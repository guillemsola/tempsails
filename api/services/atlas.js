var http = require('http');

module.exports =  {
    config: require('./config.js'),
    getApps: function(callback){
		var options = {
		  host: this.config.atlas.host,
		  path: this.config.atlas.app,
		  port: this.config.atlas.port,
		  headers: {'accept': 'application/json'}
		};
		var cb = function(response) {
		  var str = '';

		  response.on('data', function (chunk) {
		    str += chunk;
		  });

		  response.on('end', function () {
		    callback(JSON.parse(str).appUnit);
		  });
		}

		http.request(options, cb).end();
	},
}