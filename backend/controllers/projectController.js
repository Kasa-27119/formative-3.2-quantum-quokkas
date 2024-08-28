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
    const {name, imageURL, author, url, description} = req.body

    // adding doc to db
    try {
        const project = await Project.create({
            name, 
            imageURL, 
            author, 
            url, 
            description, 
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

// export functions
module.exports = {
    getProjects,
    createProject, 
    deleteProject
}