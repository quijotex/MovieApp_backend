const request = require('supertest');
const app = require('../app');
const Actors = require('../models/Actors');
const Directors = require('../models/Directors');
const Genres = require('../models/Genres');
require('../models')

let id;

test('GET /movies debe retonar status 200', async() => {
    //test de integracion que consiste en testear todo
    const res = await request(app).get('/movies');
    expect(res.status).toBe(200)
})
test('POST /movies debe crear una movie', async() => {

    const movie = {
        name: "Gravity",
        image: "https://randomuser.me/api/portraits/men/73.jpg",
        synopsis: "Cualquier cosa",
        releaseYear: "2013"
    }
    
    const res = await request(app).post('/movies').send(movie);
    id = res.body.id
    expect(res.status).toBe(201);
    expect(res.body.id).toBeDefined(); 
})
test("PUT /movies/:id debe actualizar una movie", async () => {
    const movie = {
        synopsis: "Un grupo de astronautas tiene un lio que resolver. Sus vidas estan en peligro"
    }
    const res = (await request(app).put(`/movies/${id}`).send(movie));
    expect(res.status).toBe(200);
    expect(res.body).toMatchObject(movie);
})
test('POST /movies/:id/actors debe insertar los actors de una movie', async () => {
    const actor = await Actors.create({
            firstName: "Jhonny",
            lastName: "Deep",
            nationality: "American",
            image: "https://randomuser.me/api/portraits/men/41.jpg",
            birthday: "1963-06-09"
        
    })
    const res = await request(app).post(`/movies/${id}/actors`).send([actor.id])
    await actor.destroy();
    expect(res.status).toBe(200);
    expect(res.body.length).toBe(1)
})

test('POST /movies/:id/directors debe insertar los directors de una movie', async () => {
    const director = await Directors.create({
        firstName: "Tim",
        lastName: "Burtone",
        nationality: "American",
        image: "https://randomuser.me/api/portraits/men/41.jpg",
        birthday: "1958-08-25"
        
    })
    const res = await request(app).post(`/movies/${id}/directors`).send([director.id])
    await director.destroy();
    expect(res.status).toBe(200);
    expect(res.body.length).toBe(1)
})

test('POST /movies/:id/genres debe insertar los genres de una movie', async () => {
    const genre = await Genres.create({
       name: "Horror"
        
    })
    const res = await request(app).post(`/movies/${id}/genres`).send([genre.id])
    await genre.destroy();
    expect(res.status).toBe(200);
    expect(res.body.length).toBe(1)
})

test('DELETE /movies/:id debe eliminar una movie', async() => {
    const res = await request(app).delete(`/movies/${id}`);
    expect(res.status).toBe(204)
})