const mongoose = require('mongoose');
const MovieModel = require('../database/movie')

  /**
   * Connect to a new in-memory database
   */
  beforeAll(async () => {
    process.env.NODE_ENV = 'test';
    await mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }, (err) => {
        if (err) {
            console.error(err);
            process.exit(1);
        }
    });
  /**
   * Disconnect the data and server
   */
    afterAll(done => {
      mongoose.connection.close(done)
    });
});

describe('Movie Model', () => {
  it('creates a new Movie instance', async () => {
    const testMovie = new MovieModel({
      title: "Titanic",
      thumbsUp: 1,
      thumbsDown: 0
    });
    const saveTestMovie = await testMovie.save();
    expect(saveTestMovie._id).toBeDefined();
    expect(saveTestMovie.title).toBe("Titanic");
    expect(saveTestMovie.thumbsUp).toBe(1);
    expect(saveTestMovie.thumbsDown).toBe(0);
  });

  it('should not save a movie without at least 1 thumbs up', async () => {
    const nobodyLikesThisMovie = new MovieModel ({
      title: "controversial opinion",
      thumbsUp: 0,
      thumbsDown: 0
    })
    //err is a mongoose ValidationErrors object
    let err;
    try {
      const cantSaveThisMovie = await nobodyLikesThisMovie.save();
      err = cantSaveThisMovie;
    } catch (error){
      err = error;
    }
      expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
      expect(err.errors.thumbsUp).toBeDefined();
  })
})

