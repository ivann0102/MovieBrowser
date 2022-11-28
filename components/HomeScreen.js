import { useState } from 'react';
import { TextInput, View, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { key } from '../key';
import MovieItem from './MovieItem';

export default function HomeScreen({ navigation }) {
    const [text, onChangeText] = useState();
    const [movies, setMovies] = useState([{ Title: "Beta Test", Year: "2016", imdbID: "tt0816711" }]);

    function searchMovies() {
        fetch(`https://www.omdbapi.com/?s=${text}&page=1&apikey=${key}`)
            .then((response) => response.json())
            .then((json) => {
                json = json['Search'];
                console.log(json);

                fetch(`https://www.omdbapi.com/?s=${text}&page=2&apikey=${key}`)
                    .then((response) => response.json())
                    .then((json1) => {
                        json = [...json, ...json1['Search']];
                        console.log(json);
                        setMovies(json);
                    })
                    .catch((error) => {
                        console.error(error);
                    });
            })
            .catch((error) => {
                console.error(error);
            });
    }
    return (
        <View style={styles.container}>
            <View style={styles.search}>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                    placeholder="Search..."
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        searchMovies();
                    }}>
                    <FontAwesome name="search" size={35} color="black" />
                </TouchableOpacity>
            </View>
            <ScrollView>
                {movies.map(movie =>
                    <MovieItem movie={movie} navigation={navigation} />
                )}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingBottom: 100,
    },
    input: {
        height: 40,
        paddingRight: 250,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    button: {
        alignSelf: 'center',
        marginBottom: 5,
    },
    search: {
        flexDirection: 'row',
        alignItems: 'stretch',
    },
});
