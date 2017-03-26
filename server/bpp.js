var express = require('express');
var session = require('express-session');

var app = express();

app.use(session({
  secret: '12345',
  name: 'testapp',   //这里的name值得是cookie的name，默认cookie的name是：connect.sid
  cookie: {maxAge: 80000 },  //设置maxAge是80000ms，即80s后session和相应的cookie失效过期
  resave: false,
  saveUninitialized: true,
}));
app.get('/abc', function(req, res){

  // if(req.session.lastPage) {
  //   console.log('Last page was: ' + req.session.lastPage + ".");
  // }
  req.session.val1 = 'this is val1'
  res.send(req.session.val1)
  // req.session.lastPage = 'abc'; //每一次访问时，session对象的lastPage会自动的保存或更新内存中的session中去。
  // res.send("You're Awesome. And the session expired time is: " + req.session.cookie.maxAge);
});

app.get('/def', function(req, res){
  // if (req.session.lastPage) {
  //   console.log('Last page was: ' + req.session.lastPage + ".");
  // }
  // req.session.lastPage = 'def';
  res.send('22' + req.session.val1);
});

app.get('/ghi', function(req, res){
  if (req.session.lastPage){
    console.log("Last page was: " + req.session.lastPage + ".");
  }

  req.session.lastPage = 'ghi';
  res.send('Are you a suffer? And the session expired time is: ' + req.session.cookie.maxAge);
});
app.listen(5000);
