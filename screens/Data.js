import { StyleSheet, Text, View, Button } from 'react-native';
import Progress from '../components/ProgressChart';
import Pie from '../components/PieChart';

export default function Data({ navigation }) {
    return (
        <View style={styles.container}>
            <Progress />

            <Pie />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
