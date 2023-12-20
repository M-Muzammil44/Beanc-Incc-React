const Form = require('../models/database')
const mongoose = require("mongoose")
//file contains all the backend button for frontend

//create a form
const createForm = async (req, res) => {
    const { name, email, phone, message } = req.body;

    // Log received data
    console.log('Received data:', { name, email, phone,  message });

    try {
        // Attempt to create a new form
        const form = await Form.create({ name, email, phone,  message });

        // Log created form
        console.log('Form created:', form);

        // Respond with the created form
        res.status(200).json(form);
    } catch (error) {
        // Log any errors
        console.error('Error creating form:', error);

        // Respond with an error message
        res.status(400).json({ error: error.message });
    }
}

// get all form
const getForms = async (req,res)=> {
    const forms = await Form.find({}).sort({createdAt: -1})

    res.status(200).json(forms)
}

//get a single for
const getForm = async (req,res)=> {
    const {id} = req.params
    console.log('Received data:', id);
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No Such Form found'})
    }
    const form = await Form.findById(id)
  
    if (!form){
        return res.status(404).json({error: 'No Such Form found'})
    }
    res.status(200).json(form)
}


//delete a form
const deleteForm = async (req,res)=> {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No Such Form found'})
    }
    const form = await Form.findOneAndDelete({_id:id})
  
    if (!form){
        return res.status(404).json({error: 'No Such Form found to delete'})
    }
    res.status(200).json(form)
}

//update a form
const updateForm = async (req,res)=> {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No Such Form found'})
    }
    const form = await Form.findByIdAndUpdate({_id:id},{
        ...req.body
    })
  
    if (!form){
        return res.status(404).json({error: 'No Such Form found'})
    }
    res.status(200).json(form)
}


module.exports ={
    createForm,
    getForms,
    getForm,
    deleteForm,
    updateForm
}