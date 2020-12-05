const Router = require('../../utils/routers/router');
const { processData, loadProcess } = require('./controllers');
const { validateBody, gate } = require('../../utils/routers/validators');

const router = Router();

router.post('/data', validateBody(['timestamp']), gate(8), async ({ body, timestamp }, res) => {
  const result = await processData(timestamp, body.timestamp);
  return res.status(200).return(result);
});

router.post('/logic', validateBody(['timestamp']), gate(13), async ({ body, timestamp }, res) => {
  const result = await loadProcess(timestamp, body.timestamp);
  return res.status(200).return(result);
});

module.exports = Router().use('/authorization-header', router);
