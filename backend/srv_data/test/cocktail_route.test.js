const request = require('supertest')
const DB = require('../app/db.config')
const app = require('../app/api')

let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibm9tIjoicm9nZXIiLCJwcmVub20iOiJtYXJjZWwiLCJlbWFpbCI6InJvZ2VyQG1hcmNlbC5jb20iLCJpYXQiOjE3MDc3MzQ3NTYsImV4cCI6MTcwNzczODM1Nn0.s_i2DhOnMuTlvB-9qi_jfuiZDgJKwQdABhvHgHyijXE'
let cocktailId

describe('USER ROUTER', () => {  

    afterAll( async () => {
        DB.sequelize.close()
    })

    describe('TRY PUT', () => {
        it('Should return 400 /=> Missing params', async () => {
            console.log(token)
            const response = await request(app)
                .put('/cocktails')
                .set('authorization', 'Bearer '+token)
                .send({
                    nom: 'cocktail'
                    // prenom: 'roger'
                })
            expect(response.status).toBe(400)
        })

        it('Should return 201 /=> New cocktail', async () => {
            const response = await request(app)
                .put('/cocktails')
                .set('authorization', 'Bearer '+token)
                .send({
                    user_id: 1,
                    nom: 'marcel',
                    description: 'roger',
                    recette: 'test'
                })
            expect(response.status).toBe(201)
            cocktailId = response.body.data.id
        })

        it('Should return 409 /=> add same cocktail', async () => {
            const response = await request(app)
                .put('/cocktails')
                .set('authorization', 'Bearer '+token)
                .send({
                    user_id: 1,
                    nom: 'marcel',
                    description: 'roger',
                    recette: 'test'
                })
            expect(response.status).toBe(409)
        })
    })  

    describe('TRY GET', () => {
        it('Should return 200 /=> Get cocktail', async() => {
            const response = await request(app).get(`/cocktails/${cocktailId}`)
            expect(response.status).toBe(200)
        })
    })
    
    describe('TRY PATCH', () => {
        it('Should return 404 /=> Modify bad cocktail', async () => {
            const response = await request(app)
                .patch('/cocktails/100000')
                .set('authorization', 'Bearer '+token)
                .send({
                    nom: 'marcelllllll'
                })
            expect(response.status).toBe(404)
        })

        it('Should return 200 /=> Modify cocktail', async () => {
            const response = await request(app)
                .patch(`/cocktails/${cocktailId}`)
                .set('authorization', 'Bearer '+token)
                .send({
                    nom: 'marcelllllll'
                })
            expect(response.status).toBe(200)
        })
    })

    describe('TRY DELETE', () => {
        it('Should return 204', async () => {
            const response = await request(app)
                .delete(`/cocktails/${cocktailId}`)
                .set('authorization', 'Bearer '+token)
            expect(response.status).toBe(204)
        })
    })
})