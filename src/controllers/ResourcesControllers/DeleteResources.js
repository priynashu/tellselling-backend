const fs = require('fs');
const { promisify } = require('util');
const pipeline = promisify(require('stream').pipeline);

// const { uploadFile } = require('../../utils/uploadFile');
const { deleteFile } = require('../../utils/deleteFile');
const Resources = require('../../models/Resources');

const deleteResources = async (req,res) => {
    console.log("delete hit",req.body);
    const deleteId=req.body.deleteId
    try{
        // await deleteFile(req.body.public_id);
        await Resources.deleteOne({_id:deleteId});
        res.status(200).json({message: "Deleted"});
    } catch(error){
        console.log(error);
        return res.status(500).json({ message: 'Something went wrong' });
    }
};

module.exports = {deleteResources};
