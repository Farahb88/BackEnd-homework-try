const express = require("express")
const router = express.Router()
const itemsController = require("../controllers/categoriesController")

router.post("/", itemsController.createCategory)
router.get("/", itemsController.getAllCategories)

module.exports = router