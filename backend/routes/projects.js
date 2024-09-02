// express
const express = require('express');
// router
const router = express.Router();

// multer
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/uploads');
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const ext = path.extname(file.originalname);
        cb(null, uniqueSuffix + ext);
    }
});

const upload = multer({storage});

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
router.post('/', upload.single('image'), createProject);
router.delete('/:id', deleteProject);
router.patch('/:id', updateProject)

// module export
module.exports = router;