import express from "express";

import { createUser, deleteUser, findUser, getUsers, updateUser} from "../controllers/users.js";




const router = express.Router();



//toutes les route ici commence avec /users
router.get('/',getUsers);

router.post('/',createUser);

router.get('/:id', findUser);

router.delete('/:id', deleteUser);

router.patch('/:id', updateUser);






export default router;
