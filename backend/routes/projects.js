// express
const express = require('express');

// router
const router = express.Router();

// controller import
const {
    getProjects,
    createProject
} = require('../controllers/projectController');

// http request
router.get('/', getProjects);
router.post('/', createProject);

// module export
module.exports = router;