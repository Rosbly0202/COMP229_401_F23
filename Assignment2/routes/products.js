var express = require("express");
var router = express.Router();
const productController = require("../controller/products");


router.get("/",productController.getAllProducts);
router.get("/:id",productController.getProductById);
router.post("/",productController.addProduct);
router.put("/:id",productController.updateProductById);

router.delete("/",productController.deleteProduct);
router.delete("/:id",productController.deleteProductById);

module.exports = router;
