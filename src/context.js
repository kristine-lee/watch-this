import React from 'react';

export const MoviesContext = React.createContext([]);
export const SingleMovieContext = React.createContext({
  id: 0,
  title: "",
});

export const MoviesProvider = props => {
  return (
    <MoviesContext.Provider value={[]}>
      {props.children}
    </MoviesContext.Provider>
  )
};

export const SingleMovieProvider = props => {
  return (
    <SingleMovieContext.Provider value={{
      id: 0,
      title: ""
    }}>
      {props.children}
    </SingleMovieContext.Provider>
  )
}

export const MoviesConsumer = MoviesContext.Consumer;
export const SingleMovieConsumer = SingleMovieContext.Consumer;
