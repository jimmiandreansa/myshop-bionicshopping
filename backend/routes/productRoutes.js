const express = require('express')
const router = express.Router()

const {
    getAllProducts,
    getProductById
} = require('../controllers/productControler')

// * Desc: Ini digunakan untuk mengambil seluruh data product dari database
// * Route: GET /api/products
// * Access: Public
router.get("/", getAllProducts)

// * Desc: Ini digunakan untuk mengambil satu data product dari database berdasarkan id
// * Route: GET /api/products/:id
// * Access: Public
router.get("/:id", getProductById)

module.exports = router