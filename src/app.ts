import http = require('http');
import * as express from 'express';
import createError = require('http-errors');
import path = require('path');
import cookieParser = require('cookie-parser');
import logger = require('morgan');
import handlebars = require('express-handlebars');
import * as debugHelper from 'debug';
import { normalizePort } from './utils';
import { indexRouter } from './routes';

const debug = debugHelper('nodejs-dev:server');
const app: express.Express = express();
const port = normalizePort(process.env.PORT || '3000');
const server = http.createServer(app);

app.set('views', path.join(__dirname, '../', 'views'));
app.set('view engine', 'handlebars');

app.engine('handlebars', handlebars.engine({ layoutsDir: path.join(__dirname, '../', 'views', 'layouts') }));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

app.use('/', indexRouter);

app.use((_req, _res, next) => next(createError(404)));

app.use(function (err, req, res, _next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  console.log(err)
});

app.set('port', port);

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
    default:
      throw error;
  }
}

function onListening() {
  const addr = server.address();
  const bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}
