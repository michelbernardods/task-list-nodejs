Challenge 01 bootcamp

About the challenge Create an application to store projects and their tasks from scratch using Express.

POST / projects routes: The route must receive id and title within the body and register a new project within an array in the following format: {id: "1", title: 'New project', tasks: []}; Be sure to send both the project ID and the title in string format with double quotes.

GET / projects: Route that lists all projects and their tasks;

PUT / projects / id The route should only change the project title with the id present in the route parameters;

DELETE / projects / id The route must delete the project with the id present in the route parameters;

POST / projects /: id / tasks: The route must receive a title field and store a new task in the task array of a specific project chosen through the id present in the route parameters;
