const ZermeloSchedule = require('zermelo');
const Zermelo    = new ZermeloSchedule(process.env.school);

Zermelo.logOn({
  'username'  : process.env.username,
  'password'  : process.env.password
}, (err) => {
  if(err) {
    console.error(err);
  }
  console.log('Logged in!');
});
