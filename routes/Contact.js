import express from "express";
  
import {  insertContacter, getContacter } from '../controllers/Contact.js'

const router = express.Router()

router.get('/',getContacter)
router.post('/',insertContacter)


export default router