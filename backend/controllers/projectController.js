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
    const {name, imageURL, author, url, description, user_id} = req.body

    // adding doc to db
    try {
        const project = await Project.create({
            name, 
            imageURL, 
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

// export functions
module.exports = {
    getProjects,
    createProject
}