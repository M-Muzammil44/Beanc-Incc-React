const express = require('express')
const {
    createForm, getForms, getForm,deleteForm, updateForm
} = require('../controller/formsControllers')

const router = express.Router()

// GET all workouts
router.get('/', getForms)

//GET a single workout
router.get('/:id', getForm)

// POST a new workout
router.post('/', createForm)    

    //Delete
router.delete('/:id', deleteForm)

    //Update
router.patch('/:id', updateForm)

module.exports = router