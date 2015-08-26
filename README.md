## Summary

### usage JS
```
api.envs(process.env.ACQUIA_SITE, function(err,envs){
  if(err){
    console.log("error looking up envs")
    return
  }
  for(var i = 0; i < envs.length; ++i){
    console.log("env: " + env[i].name + ", version: " + env[i].vcs_path);
  }
});
```
### usage coffee e.g. hubot
```
api.envs process.env.ACQUIA_SITE, (err,envs)->
  if err
    res.reply("error looking up envs")
    return
  res.reply "env: " + site.name + ", version: " + site.vcs_path for site in envs
```


## Installation
```
npm install --save acquia-cloud-client
```
