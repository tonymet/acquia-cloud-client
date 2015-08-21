c = require('./creds.js');
acquia = require('./index.js');

var api = new acquia(c);
api._test('sites/prod:insomniacevents/envs.json');


api.envs(process.env.ACQUIA_SITE, function(err,res){
  if(err){
    console.log("ERROR: no data");
    return;
  }
  for(var i = 0; i < res.length; ++i){
    console.log("name: " + res[i].name );
    console.log("version: " + res[i].vcs_path );
  }
});
