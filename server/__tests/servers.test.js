const request = require('supertest');
const mongoose = require('mongoose');
const router = require('../api');
const Movies = require('../database/movie');
const app = require('../app');

const PORT = process.env.PORT;

//test a fake instance of the server instead of calling the entire thing
app.use('/api', router);

let server;

beforeEach(async () => {
  process.env.NODE_ENV = 'test';
  mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
  mongoose.Promise = Promise;
  await Movies.deleteMany({});
  server = app.listen(PORT);
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
  // it("returns the models as intended", async () => {
  //   const { body } = await request(server).get('/');
  //   expect(body).toHaveLength(2);
  //   expect(body).toBe([
  //     {
  //      title: "John Wick",
  //      thumbsUp: 3,
  //      thumbsDown: 2
  //     },
  //     {
  //       title: "Uncut Gems",
  //       thumbsUp: 5,
  //       thumbsDown: 4
  //     }
  //   ])
  // })
  it("returns the right status", async () => {
    await request(server).get('/').expect(200)
  })
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
