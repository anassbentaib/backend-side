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
  

  