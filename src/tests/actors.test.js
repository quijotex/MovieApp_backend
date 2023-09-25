const request = require('supertest');
const app = require('../app');


test('GET /actors debe retonar status 200', async() => {
    const res = await request(app).get('/actors');
    expect(res.status).toBe(200)
})

test('POST /actors debe crear un course', async() => {

    const actor = {
        firstName: "Jhonny",
        lastName: "Deep",
        nationality: "American",
        image: "https://randomuser.me/api/portraits/men/41.jpg",
        birthday: "1963-06-09"
    }
    
    const res = await request(app).post('/actors').send(actor);
    id = res.body.id
    expect(res.status).toBe(201);
    expect(res.body.id).toBeDefined();  
})
test("PUT /actors/:id debe actualizar un actor", async () => {
    const actor = {
        lastName: 'Depp'
    }
    const res = (await request(app).put(`/actors/${id}`).send(actor));
    expect(res.status).toBe(200);
    expect(res.body).toMatchObject(actor);
})

test('DELETE /actors/:id debe eliminar un actor', async() => {
    
    const res = await request(app).delete(`/actors/${id}`);
    expect(res.status).toBe(204)
})
