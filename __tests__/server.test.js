"use strict";
const server = require("../src/server");
const supertest = require("supertest");
const request = supertest(server.app);


describe('middleware server', () => {
    let id;

    //-------------------------------------------post method..........................
  it('Post method', async () => {
    const Obj = {
      foodname: 'Pizza',
      foodtype: 'Pizza Hut'
    };
    const response = await request.post('/food').send(Obj);
    
   
    expect(response.status).toEqual(201);
    expect(  response.body.foodname).toBe(Obj.foodname);
    expect(response.body.foodtype).toBe(Obj.foodtype);
  });

//--------------------------------------------------put method-----------------

it('put methd ', async() =>{

  const Obj = {
        foodname: 'Pizza',
        foodtype: 'Pizza Hut'
      };
      const response = await request.put(`/food/7`).send(Obj);
      expect(response.status).toEqual(200);
      expect(response.body.foodname).toBe(Obj.foodname)
  expect(response.body.foodtype).toBe(Obj.foodtype)

})
//-------------------------------------------get method----------------------------------
it('get method to all',async()=>{
  
  const response= await request.get('/food')
  expect(  response.status).toEqual(200)
  expect(typeof response.body).toEqual('object')


})
//------------------------------------------get  specific record----------------------------------
it('get method to specific record ',async()=>{
  const response= await request.get('/food/38')
  expect(  response.status).toEqual(200)
  expect(typeof response.body).toEqual('object')

})
//-----------------------------------------delete record-----------------------------------------------------
it('get method to delete record ',async()=>{

  const response= await request.delete('/food/8')
  expect(  response.status).toEqual(204)


})


  
});