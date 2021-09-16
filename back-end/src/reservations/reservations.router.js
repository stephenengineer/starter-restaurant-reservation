/**
 * Defines the router for reservation resources.
 *
 * @type {Router}
 */

const router = require("express").Router();
const controller = require("./reservations.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router
  .route("/")
  .post(controller.create)
  .get(controller.list)
  .all(methodNotAllowed);
router.route("/:reservationId").get(controller.read).all(methodNotAllowed);
router
  .route("/:reservationId/status")
  .put(controller.update)
  .all(methodNotAllowed);

module.exports = router;
