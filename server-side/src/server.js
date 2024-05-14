import express from  'express';
import cors from 'cors';
import TaskRouter from './todo/index.js';
import expressListEndpoints from 'express-list-endpoints';
import bodyParser from 'body-parser';

const server = express();
const port = 3001;
server.use(cors(
    {
        origin:"*",
        methods:"GET,POST,PUT,DELETE",
    }
));
server.use(bodyParser.json());
server.use("/todo", TaskRouter)
server.listen(port,()=>{
    console.table(expressListEndpoints(server));
    console.log(`Server is running on port ${port}`);
})