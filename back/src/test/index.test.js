const app = require('../routes/server');
const session = require('supertest');
const agent = session(app);

describe('Test de RUTAS', ()=> {
    describe('GET rickandmorty/{id}', ()=>{
        it('Responde con status 200', ()=> {
            agent.get('/rickandmorty/character/2').expect(200)
        })
        it('Responde un objeto con las propiedades: id, name, species, gender, status, image', ()=> {
            agent.get('/rickandmorty/character/2').then((res) => {
                expect(res.body).toEqual({
                    "id": 2,
                    "name": "Morty Smith",
                    "species": "Human",
                    "gender": "Male",
                    "status": "Alive",
                    "image":  "https://rickandmortyapi.com/api/character/avatar/2.jpeg"
                })
            })
        })
        it('Si hay un error responde con status: 500', ()=> {
            agent.get('/rickandmorty/character/IDqueNoExiste').expect(500)
        })
    })
    describe("GET rickandmorty/detail/{detailId", () => {
        it('Responde con un status 200', ()=> {
            agent.get('/rickandomorty/detail/2').expect(200)
        })
    })
})
