// model import
const Project = require('../models/projectModel')

// mongoose import
const mongoose = require('mongoose')

// GET ALL projects
const getProjects = async (req, res) => {
    const projects = await Project.find({}).sort({createdAt: -1})
    res.status(200).json(projects)
}

// CREATE project
const createProject = async (req, res) => {
    const {name, author, url, description, user_id} = req.body

    const imageFilename = req.file ? req.file.filename : null;

    // adding doc to db
    try {
        const project = await Project.create({
            name, 
            image: imageFilename,
            author, 
            url, 
            description,
            user_id
        })
        res.status(200).json(project)
    }
    catch (error) {
        res.status(400).json({error: error.message})
    }
}

// DELETE project
const deleteProject = async (req, res) => {
    const {id} = req.params

    // if project id ISN'T valid
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such project'})
    }

    const project = await Project.findOneAndDelete({_id: id})

    // if there is no project
    if (!project) {
        return res.status(404).json({error: 'No such project'})
    }

    res.status(200).json(project)
}

// Get Single Project
const getProject = async (req, res) => {
    const { id } = req.params
    
    // if project id ISNT'T valid
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such project'})
    }

    // find project by id
    const project = await Project.findById(id)

    //  if project is not found
    if(!project) {
        return res.status(404).json({error: 'No such project'})
    }

    // if project is found
    res.status(200).json(project)
}

// UPDATE single project
const updateProject = async (req, res) => {
    const {id} = req.params

    // check if the project id is a valid MongoDB id
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'no such project'})
    }

    // find project and change what it receives
    const project = await Project.findOneAndUpdate({_id: id}, {
        ...req.body
    }, {new: true})

    // check if is a valid project id
    if (!project) {
        return res.status(404).json({error: 'no such project'})
    }

    // return the updated project
    res.status(200).json(project)
}

// export functions
module.exports = {
    getProjects,
    getProject,
    createProject, 
    deleteProject,
    updateProject
}