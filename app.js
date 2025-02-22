var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const productsRouter = require('./routes/products');
const servicesRouter = require('./routes/services');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter); 
app.use('/products', productsRouter); 
app.use('/services', servicesRouter); 


/* app.get("/", (req,res) => {
  res.sendFile(path.join(__dirname, "views", "index.html" ))
}); */
/* app.get("/login", (req,res) => {
  res.sendFile(path.join(__dirname, "views", "login.html" ))
});

app.get("/productCart", (req,res) => {
  res.sendFile(path.join(__dirname, "views", "productCart.html" ))
})

app.get("/product", (req,res) => {
  res.sendFile(path.join(__dirname, "views", "product.html" ))
})
app.get("/services", (req,res) => {
  res.sendFile(path.join(__dirname, "views", "services.html" ))
})

app.get("/register", (req,res) => {
  res.sendFile(path.join(__dirname, "views", "register.html" )) // redirige a la pagina de register
});
app.get("/productDetail", (req,res) => {
  res.sendFile(path.join(__dirname, "views", "productDetail.html" )) // redirige a la pagina de detalle_de_producto
}); */


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
