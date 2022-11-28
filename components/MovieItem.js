import { Text, View, StyleSheet, Button } from 'react-native';

export default function MovieItem(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.movie.Title}</Text>
            <Text>{props.movie.Year}</Text>
            <Button
                title="Go to Details"
                onPress={() => {
                    props.navigation.navigate('Details', {
                        imdbID: props.movie.imdbID,
                    });
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
    },
    container: {
        borderBottomColor: 'black',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
});
