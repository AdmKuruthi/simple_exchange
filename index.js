//Essential imports
import express from 'express';
import bodyParser from 'body-parser';
import { dirname } from 'path';
import { fileURLToPath } from 'url';


//Get current directory name
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
//Get port from cmd or default to 3000
const port = process.argv[2] || 3000;


//Set views directory
app.set('views', __dirname + '/views');

//First middleware to parse JSON bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Define public directory for statics
app.use(express.static(__dirname + '/public'));


/**
 * 
 * Area to define routes
 * 
*/




app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

//Export app for testing purposes
export default app;