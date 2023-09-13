import express from "express";

import { insertContacter } from "./controllers/Contact.js";

const router = express.Router();

router.post("/", insertContacter);

export default router;
