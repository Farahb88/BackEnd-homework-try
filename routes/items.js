const express = require("express")
const router = express.Router()
const itemsController = require("../controllers/itemsController")

router.post("/", itemsController.createItem)
router.get("/", itemsController.getAllItems)
router.delete("/:id", itemsController.deleteItem)
router.get("/:id", itemsController.getSingleItem)
router.put("/:id", itemsController.updateItem)






module.exports = router