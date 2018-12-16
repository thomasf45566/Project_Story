const router = require('express').Router();
const controller = require('./controller');

router.route('/story/:id')
  .get(controller.get)
  .put(controller.put)
  .delete(controller.delete);

router.route('/story')
  .post(controller.post);

module.exports = router;