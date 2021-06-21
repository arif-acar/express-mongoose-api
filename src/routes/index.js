const express = require('express');

const router = express.Router();

const apiRoute = require('./apiRoute');
const docsRoute = require('./docsRoute');

const defaultRoutes = [
  {
    path: '/api',
    route: apiRoute,
  },
  {
    path: '/doc',
    route: docsRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
