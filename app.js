const express = require('express');

const app = express();

app.use(express.json());

let numOfReq = 0;
const projects = [];

//Midlewares checa se o projeto existe;
function checkProjects (req, res, next) {
  const { id } = req.params
  const proj = projects.find( p => p.id === id ) 

  if (!proj) {
    return res.status(400).json({ error: 'Existe não!'})
  }

  next()
}

//Count log
function logReq (req, res, next){
  numOfReq++;

  console.log(`Number of request: ${numOfReq}`);

  return next();
}

app.use(logReq);


// Post
app.post('/projects',( req, res ) => {
    const { id } = req.body;
    const { title } = req.body;

    proj = {
        id,
        title,
        tasks: []
    }

    projects.push( proj );

    res.json( proj )
})

//Post task
app.post('/projects/:id/tasks', checkProjects, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const project = projects.find(p => p.id == id);

  project.tasks.push(title);

  return res.json(project);
});


// Get cadastros
app.get('/projects',( req, res ) => {

    res.json( projects )
})

//Get pelo id específico
app.get('/projects/:id', checkProjects, (req, res) => {
  const { id } = req.params;

  const project = projects.find(p => p.id == id);

  return res.json(project);
});


//Put
app.put('/projects/:id', checkProjects, ( req, res ) => {
    const { id } = req.params;
    const { title } = req.body;

    const project = projects.find( p => p.id === id )

    project.title = title;

    res.json( projects )

})

//Delete
app.delete('/projects/:id', checkProjects, (req, res) => {
  const { id } = req.params;

  const projectIndex = projects.findIndex(p => p.id == id);

  projects.splice(projectIndex, 1);

  return res.send(projects);
});

app.listen( 3333, () => {
    console.log( 'Server ON' );

})