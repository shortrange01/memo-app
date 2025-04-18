import { View, Text, StyleSheet } from 'react-native';

const Index = (): JSX.Element => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerInner}>
                    <Text style={styles.headerTitle}>Memo App</Text>
                    <Text style={styles.headerRight}>ログアウト</Text>
                </View>
            </View>
            <View>
                <View style={styles.memoListItem}>
                    <View>
                        <Text style={styles.memoListItemTitle}>
                            買い物リスト
                        </Text>
                        <Text style={styles.memoListItemDate}>
                            2025年04月14日 10:00
                        </Text>
                    </View>
                    <View>
                        <Text>X</Text>
                    </View>
                </View>
                <View style={styles.memoListItem}>
                    <View>
                        <Text style={styles.memoListItemTitle}>
                            買い物リスト
                        </Text>
                        <Text style={styles.memoListItemDate}>
                            2025年04月14日 10:00
                        </Text>
                    </View>
                    <View>
                        <Text>X</Text>
                    </View>
                </View>
                <View style={styles.memoListItem}>
                    <View>
                        <Text style={styles.memoListItemTitle}>
                            買い物リスト
                        </Text>
                        <Text style={styles.memoListItemDate}>
                            2025年04月14日 10:00
                        </Text>
                    </View>
                    <View>
                        <Text>X</Text>
                    </View>
                </View>
            </View>

            <View style={styles.circleButton}>
                <Text style={styles.circleButtonLabel}>+</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    header: {
        backgroundColor: '#467fd3',
        height: 104,
        justifyContent: 'flex-end',
    },
    headerInner: {
        alignItems: 'center',
    },
    headerTitle: {
        marginBottom: 8,
        fontSize: 22,
        lineHeight: 32,
        fontWeight: 'bold',
        color: '#ffffff',
    },
    headerRight: {
        position: 'absolute',
        right: 16,
        bottom: 16,
        color: 'rgba(255,255,255,0.7)',
    },
    memoListItem: {
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 16,
        paddingHorizontal: 19,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0,0,0,0.15)',
    },
    memoListItemTitle: {
        fontSize: 16,
        lineHeight: 32,
    },
    memoListItemDate: {
        fontSize: 12,
        lineHeight: 16,
        color: '#848484',
    },
    circleButton: {
        width: 64,
        height: 64,
        borderRadius: 32,
        backgroundColor: '#467fd3',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 40,
        right: 40,
        shadowColor: '#000000',
        shadowOpacity: 0.25,
        shadowRadius: 8,
        shadowOffset: {
            width: 0,
            height: 8,
        },
        elevation: 8,
    },
    circleButtonLabel: {
        color: '#ffffff',
        fontSize: 40,
        lineHeight: 40,
    },
});

export default Index;
