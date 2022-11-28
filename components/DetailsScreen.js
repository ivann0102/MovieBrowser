import { Text, View, StyleSheet, Image } from 'react-native';
import { useState, useEffect } from 'react';
import { key } from '../key';

export default function DetailsScreen({ route, navigation }) {
  const [movie, setMovie] = useState({ Title: "Test", Year: "Test", Rated: "Test", Released: "Test", Runtime: "Test" });
  const omdbID = route.params.imdbID;

  useEffect(() => {
    getMovie();
  }, []);
  function getMovie() {
    console.log(`https://www.omdbapi.com/?i=${omdbID}&page=1&apikey=${key}`);
    fetch(`https://www.omdbapi.com/?i=${route.params.imdbID}&apikey=${key}`)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setMovie(json);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  return (
    <View>
      <Text style={styles.title}>{movie["Title"]}</Text>
      <Image style={styles.image} source={{
          uri:  movie.Poster,
        }}/>
      <Text>Year: {movie.Year}</Text>
      <Text>Rated: {movie.Rated}</Text>
      <Text>Released: {movie.Released}</Text>
      <Text>Runtime: {movie.Runtime}</Text>
      <Text>Genre: {movie.Genre}</Text>
      <Text>Plot: {movie.Plot}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  title: {
    fontSize: 20,
  },
  image: {
    width: 200,
    height: 300,
  }
})