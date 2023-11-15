const express = require('express'); 
const app = express();
const port = 8081; 
const knex = require('knex')(require('../knexfile.js')[process.env.NODE_ENV||'development'])


app.get('/', (request, response) => {
    response.send('Application bussing frfr.')
})

app.listen(port, () => {
    console.log('Your knex worky with da expres')
})

app.get('/pets', (request, response) => {
    knex('pet')
        .select('*')
        .then(pets => {
            var petNames = pets.map(pet => pet.name)
        response.json(petNames); 
        })
})
