import express from 'express';
import path from 'path';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../../webpack.config';

const app = express();

const Port = 5000 || process.env;
// ==============================

// load static files=============
app.use(express.static(path.resolve(__dirname, '../../client/public')));
// =============================
app.use(webpackMiddleware(webpack(webpackConfig)));
// =======================================

app.get('/movie/{movie}', (req, res) => res.send(req.params.magnetLink));

app.use(express.static(path.resolve(__dirname, '../../client/public')));

app.get('/*', (req, res) => {
  res.sendfile(path.resolve(__dirname, '../../client/public/index.html'));
});
app.listen(Port, () => console.log('Example app listening on port '+ Port));