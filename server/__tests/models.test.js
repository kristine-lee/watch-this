const mongoose = require('mongoose');
const MovieModel = require('../database/movie')

describe('Movie Model', () => {

  beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }, (err) => {
        if (err) {
            console.error(err);
            process.exit(1);
        }
    });

    afterAll(done => {
      mongoose.connection.disconnect()
      done()
    });
});
  it('creates a new Movie instance', async () => {
    const testMovie = new MovieModel({
      title: "Titanic",
      thumbsUp: 1,
      thumbsDown: 0
    });
    const saveTestMovie = await testMovie.save();
    // Object Id should be defined when successfully saved to MongoDB.
    expect(saveTestMovie._id).toBeDefined();
    expect(saveTestMovie.title).toBe("Titanic");
    expect(saveTestMovie.thumbsUp).toBe(1);
    expect(saveTestMovie.thumbsDown).toBe(0);
  });
})

