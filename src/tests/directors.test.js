const request = require('supertest');
const app = require('../app');


test('GET /directors debe retonar status 200', async() => {
    const res = await request(app).get('/directors');
    expect(res.status).toBe(200)
})

test('POST /directors debe crear un director', async() => {

    const director = {
        firstName: "Tim",
        lastName: "Burtone",
        nationality: "American",
        image: "https://randomuser.me/api/portraits/men/41.jpg",
        birthday: "1958-08-25"
    }
    
    const res = await request(app).post('/directors').send(director);
    id = res.body.id
    expect(res.status).toBe(201);
    expect(res.body.id).toBeDefined();  
})
test("PUT /directors/:id debe actualizar un director", async () => {
    const director = {
        lastName: 'Burton'
    }
    const res = (await request(app).put(`/directors/${id}`).send(director));
    expect(res.status).toBe(200);
    expect(res.body).toMatchObject(director);
})

test('DELETE /directors/:id debe eliminar un director', async() => {
    
    const res = await request(app).delete(`/directors/${id}`);
    expect(res.status).toBe(204)
})
