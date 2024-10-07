import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image } from 'react-native';
import { Pesquisar_Item, Tarefa } from './src/';

export default function lista_generica() {
    return (
        <View style={styles.container}>
            <Image
                source={require('./assets/topo.png')}
                style={styles.topo}
            />
            <Pesquisar_Item style={styles.pesquisa} />
            <Tarefa />
            <Tarefa />
            <Tarefa />
            <Tarefa />
            <Tarefa />
            <Tarefa />
            <Image
                source={require('./assets/Down.png')}
                style={styles.downImage}
            />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8CBD8C',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 10,
        gap: 10,
    },
    topo: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
        marginBottom: 40,
    },
    downImage: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 200,
    },
    pesquisa: {
        marginTop: 1,
    },
});
