import express from 'express'
import * as config from './config';

const buildUrl = (version, path) => `/api/${version}/${path}`

function main() {
  const server = express();

  server.use(buildUrl('v1', 'ping'), (req, res) => {
    res.json(new Date().toLocaleString())
  });

  server.listen(config.port, () => {
    console.log(`Server URL: http://localhost:${config.port}/`);
  });
}

main()
