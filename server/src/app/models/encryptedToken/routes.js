const Router = require('../../utils/routers/router');
const { processData, loadProcess } = require('./controllers');
const { validateBody, gate } = require('../../utils/routers/validators');

const router = Router();

router.post('/data', validateBody(['timestamp']), gate(11), async ({ body, timestamp }, res) => {
  const result = await processData(timestamp, body.timestamp);
  return res.status(200).return(result);
});

router.post('/big-data', validateBody(['timestamp']), gate(12), async ({ body, timestamp }, res) => {
  const result = await processData(timestamp, body.timestamp);
  return res.status(200).return(result);
});

router.post('/logic', validateBody(['timestamp']), gate(14), async ({ body, timestamp }, res) => {
  const result = await loadProcess(timestamp, body.timestamp);
  return res.status(200).return(result);
});

module.exports = Router().use('/encrypted-token', router);
