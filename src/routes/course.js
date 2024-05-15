const express = require("express");
const router = express.Router();
const courseController = require("../controllers/courses_controller");

router.post("/courses", courseController.create);
router.get("/courses", courseController.search);
router.put("/courses/:id", courseController.update);
router.delete("/courses/:id", courseController.deleteCourse);
router.get('/courses/:id', courseController.searchById);


module.exports = router;
