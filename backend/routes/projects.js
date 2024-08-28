// express
const express = require('express');

// router
const router = express.Router();

// controller import
const {
    getProjects,
    createProject,
    deleteProject
} = require('../controllers/projectController');

// http request
router.get('/', getProjects);
router.post('/', createProject);
router.delete('/:id', deleteProject);

// module export
module.exports = router;