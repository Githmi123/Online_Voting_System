import express from 'express';
import {Voter} from '../models/voterModel.js';

const router = express.Router();

router.post('/', async(request, response)=>{
    try{
        if(
            !request.body.firstName||
            !request.body.lastName||
            !request.body.dOB||
            !request.body.nIC||
            !request.body.contactNumber||
            !request.body.stakeholderRole

        )
        {
            return response.status(400).send({
                message: 'Send all required fields: firstName, lastName, dOB, nIC, contactNumber, stakeholderRole'
            });
        }

        const newVoter = {
            firstName: request.body.firstName,
            lastName: request.body.lastName,
            dOB: request.body.dOB,
            nIC: request.body.nIC,
            contactNumber: request.body.contactNumber,
            stakeholderRole: request.body.stakeholderRole,

        };

        const voter = await Voter.create(newVoter);

        return response.status(201).send(voter);
    }catch(error){
        console.log(error.message);
        response.status(500).send({message: error.message});
    }

    }
);

router.get('/', async(request, response)=>{
    try{
        const voters = await Voter.find({});

        return response.status(200).json({
            count: voters.length,
            data: voters
    });
    }catch(error){
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
})

router.get('/:id', async(request, response)=>{
    try{

        const {id} = request.params;
        const voter = await Voter.findById(id)

        return response.status(200).json(voter);
    }catch(error){
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
})


router.put('/:id', async(request, response)=>{
    try{
        if(
            !request.body.firstName||
            !request.body.lastName||
            !request.body.dOB||
            !request.body.nIC||
            !request.body.contactNumber||
            !request.body.stakeholderRole

        )
        {
            return response.status(400).send({
                message: 'Send all required fields: firstName, lastName, dOB, nIC, contactNumber, stakeholderRole'
            });
        }

        const {id} = request.params;
        const result = await Voter.findByIdAndUpdate(id, request.body);

        if(!result){
            return response.status(400).json({message: "Voter not found"});
        }

        return response.status(200).send({message:'Book updated successfully'});


    }catch(error){
        console.log(error.message);
        response.status(500).send({message: error.message});
    }

    }
);

router.delete('/:id', async(request, response)=>{
    try{

        const {id} = request.params;
        const result = await Voter.findByIdAndDelete(id);
        if(!result)
        {
            return response.status(404).json({
                message: 'Book not found'
            });
        }

        
       

        return response.status(200).send({message:'Book deleted successfully'});


    }catch(error){
        console.log(error.message);
        response.status(500).send({message: error.message});
    }

    }
);

export default router;