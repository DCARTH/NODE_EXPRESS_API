import express from "express";
import {createMovie, getMovies} from "../controllers/movies.js";

const router = express.Router();

router.post('/', createMovie);

router.get('/', getMovies);

export default router;