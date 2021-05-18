import { v4 as uuidv4 } from 'uuid';
//import nameToImdb from "name-to-imdb";

let users = [];
let movies = [];



export const createUser = (req, res) => {

    const user = req.body;

    users.push({ ...user, id: uuidv4()});

    res.send('User with the name ' + user.Prenom + ' added to the database');
}

export const getUsers = (req, res) => {

    res.send(users);
}
export const deleteUser = (req, res) => {
    const { id } = req.params;

    users = users.filter((user) => user.id !== id);

    res.send('User with the id:' + id +' deleted')
}

export  const findUser = (req, res) => {
    const { id } = req.params;

    const foundUser = users.find((user) => user.id === id);

    res.send(foundUser);
}

export const updateUser = (req, res) => {

    const { id } = req.params;

    const { Prenom, NomDeFamille, Age } = req.body;

    const user = users.find((user) => user.id === id);

    if(Prenom) user.Prenom = Prenom;

    if(NomDeFamille) user.NomDeFamille = NomDeFamille;

    if(Age) user.Age = Age;

    res.send('User with the id: ' + id + ' has been updated');

}
