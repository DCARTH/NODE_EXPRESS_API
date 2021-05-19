import express from 'express';
import bodyParser from 'body-parser';
import usersRoutes from './routes/users.js';
import movieRoutes from './routes/movies.js';
//import siteweb from 'siteweb.html';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/users', usersRoutes);
app.use('/movies', movieRoutes);
//hey hey you


app.get('/',(req, res) => res.send(`YO`));

app.listen(PORT, () => console.log(`server running on port: http://localhost:${PORT}`));




