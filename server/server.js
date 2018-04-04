import express from 'express';
import path from 'path';

import webpackMiddleware from './utils/webpackMiddleware';
import morganMiddleware from './utils/morganMiddleare';

const server = express();
const assets = path.join(__dirname, '../client/');

webpackMiddleware(server);
morganMiddleware(server);

server.use(express.static(assets));

export default server;
