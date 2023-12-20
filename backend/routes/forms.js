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

// POST a new form
router.post('/', createForm)    

    //Delete
router.delete('/:id', deleteForm)



module.exports = router