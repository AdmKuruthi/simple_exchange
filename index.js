//Essential imports
import express from 'express';
import { dirname } from 'path';
import { fileURLToPath } from 'url';


//Get current directory name
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
//Get port from cmd or default to 3000
const port = process.argv[2] || 3000;

app.set('view engine', 'ejs');

//Set views directory
app.set('views', __dirname + '/views');

//First middleware to parse JSON bodies
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Define public directory for statics
app.use(express.static(__dirname + '/public'));


/**
 * 
 * Area to define routes
 * 
*/
app.get('/', (req, res) => {
    
    
    
    res.render('index', {title: 'Simple Exchange'});

});



app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

//Export app for testing purposes
export default app;