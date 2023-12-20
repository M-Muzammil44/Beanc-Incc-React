const express = require('express')
const {
    createForm, getForms, getForm,deleteForm, updateForm
} = require('../controller/formsControllers')

//controller fucntion can't be directly call in frontend so we use router method to use them at frontend

const router = express.Router()

// GET all form
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