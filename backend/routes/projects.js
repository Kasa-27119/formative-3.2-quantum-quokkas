// express
const express = require('express');

// router
const router = express.Router();

// controller import
const {
    getProjects,
    getProject,
    createProject,
    deleteProject,
    updateProject
} = require('../controllers/projectController');

// http request
router.get('/', getProjects);
router.get('/:id', getProject)
router.post('/', createProject);
router.delete('/:id', deleteProject);
router.patch('/:id', updateProject)

// module export
module.exports = router;