var request = require('request');

module.exports = function(credentials){
  this.credentials = credentials;
  this.endpoint = 'https://' + credentials.username + ':' + credentials.password + '@' +
    'cloudapi.acquia.com/v1/';

  this.envs = function(site,cb){
    console.log("envs path: " +  'sites/' + site + '/envs.json');
    this._query('sites/' + site + '/envs.json', cb);
  };
  this._query = function(path,cb){
    request(this.endpoint + path, function(err,res,body){
        if(err || res.statusCode != 200){
          console.log("ERROR this._query res=  "+ res.statusCode);
          cb(true, null);
          return;
        }
        console.log("_query res.statusCode: " + res.statusCode);
        console.log("_query body: ", JSON.stringify(body));
        cb(false, JSON.parse(body));
    });
  };
  this._test = function(path){
    this._query(path, function(err,res){
      if(err){
        console.log("ERROR: no data");
        return;
      }
      console.log("response: " + JSON.stringify(res));
    });
  };
};
