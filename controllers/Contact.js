import contactModel from "../models/Contact.js";

export const insertContacter = async (req, res) => {
    const { name , email , description } = req.body;
    try {
      const newSauce = new contactModel({name , email , description });
      console.log('created');
      await newSauce.save();
      res.status(201).send({ newSauce });
    } catch (error) {
      console.log(error);
    }
  };
  
  export const getContacter = async (req, res) => {
    try {
      const getSauce = await contactModel.find();
  
      // console.log("getSauce", getSauce);
  
      res.status(200).send( getSauce );
    } catch (error) {
      console.log(error);
    }
  };
  