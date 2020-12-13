const request = require('supertest');
const mongoose = require('mongoose');
const router = require('../api');
const Movies = require('../database/movie');
const app = require('../app');
const axios = require('axios');

const PORT = process.env.PORT;

//https://medium.com/@tehvicke/integration-and-unit-testing-with-jest-in-nodejs-and-mongoose-bd41c61c9fbc

//test a fake instance of the server instead of calling the entire thing
app.use('/api', router);

let server;

beforeEach(async () => {
  process.env.NODE_ENV = 'test';
  mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
  mongoose.Promise = Promise;
  await Movies.deleteMany({});
  server = app.listen(PORT);
  jest.resetAllMocks();
});

afterEach(done => {
  mongoose.connection.close();
  server.close(done);
})
// //mock data
// jest.mock(Movies, () => [
//   {
//    title: "John Wick",
//    thumbsUp: 3,
//    thumbsDown: 2
//   },
//   {
//     title: "Uncut Gems",
//     thumbsUp: 5,
//     thumbsDown: 4
//   }
// ]);

describe('/GET', () => {

  it("returns the right status", async () => {
    await request(server).get('/').expect(200)
  });

  // it("searches movies from the external API", async () => {
  //   jest.mock('axios');
  //   axios.get = jest.fn();
  //   axios.get.mockImplementationOnce(() => Promise.resolve(
  //       [{
  //         id: 12342,
  //         title: "The Irishman",
  //         director: "Martin Scorcese"
  //       },
  //         {
  //         id: 25234,
  //         title: "Marie Antoinette",
  //         director: "Sofia Coppola"
  //         }]
  //    ));
  //   const response = await request(server).get('/search');
  //   expect(response).toHaveLength(2)
  //   });
  //TODO: fix this test. see: https://medium.com/@lucaspenzeymoog/mocking-api-requests-with-jest-452ca2a8c7d7
  //right now, it just returns the default http page. might need to mock search terms
})




//   /**
//    * Connect to a new in-memory database
//    */
//   beforeAll(async () => {
//     process.env.NODE_ENV = 'test';
//     await mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }, (err) => {
//         if (err) {
//             console.error(err);
//             process.exit(1);
//         }
//     });
//   /**
//    * Disconnect the data and server
//    */
//     afterAll(done => {
//       mongoose.connection.close(done)
//     });
// });
