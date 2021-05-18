import express from 'express';
import bodyParser from 'body-parser';
import usersRoutes from './routes/users.js';
import movieRoutes from './routes/movies.js';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/users', usersRoutes);
app.use('/movies', movieRoutes);

app.get('/',(req, res) => res.send('<!DOCTYPE html>\n' +
    '<html>\n' +
    '<head>\n' +
    '    <meta charset="UTF-8">\n' +
    '    <title>Site Web</title>\n' +
    '</head>\n' +
    '<body>\n' +
    '<h1>INFO FILM</h1>\n' +
    '<h4>Entrer le titre</h4>\n' +
    '<form action="/movies" method="post">\n' +
    '    <label for="id">Titre du film</label>\n' +
    '    <input id="id" name="id" type="text"><br>\n' +
    '    <input type="submit" value="Submit">\n' +
    '</form>\n' +
    '\n' +
    '</body>\n' +
    '</html>'));

app.listen(PORT, () => console.log(`server running on port: http://localhost:${PORT}`));




