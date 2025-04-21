import { View, Text, ScrollView, StyleSheet } from 'react-native';
// import { Feather } from '@expo/vector-icons';

import Header from '../../components/Header';
import CircleButton from '../../components/CircleButton';
import Icon from '../../components/Icon';

const Detail = (): JSX.Element => {
    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.memoHeader}>
                <Text style={styles.memoTitle}>買い物リスト</Text>
                <Text style={styles.memoDate}>2025年04月14日 10:00</Text>
            </View>
            <ScrollView style={styles.memoBody}>
                <Text style={styles.memoBodyText}>買い物リストの内容</Text>
            </ScrollView>
            <CircleButton style={{ top: 160, bottom: 'auto' }}>
                {/* <Feather name="plus" size={40} /> */}
                <Icon name="pencil" size={40} color="#ffffff" />
            </CircleButton>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    memoHeader: {
        backgroundColor: '#467fd3',
        height: 96,
        justifyContent: 'center',
        paddingVertical: 24,
        paddingHorizontal: 19,
    },
    memoTitle: {
        color: '#ffffff',
        fontSize: 20,
        lineHeight: 32,
        fontWeight: 'bold',
    },
    memoDate: {
        color: '#ffffff',
        fontSize: 12,
        height: 16,
    },
    memoBody: {
        paddingVertical: 32,
        paddingHorizontal: 27,
    },
    memoBodyText: {
        fontSize: 16,
        lineHeight: 24,
        color: '#000000',
    },
});

export default Detail;
