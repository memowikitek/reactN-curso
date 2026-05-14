import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { ScrollView, StyleSheet, View } from 'react-native';

export default function Items() {
    return (
        <ScrollView style={styles.container} contentInsetAdjustmentBehavior="automatic">
            <ThemedView style={styles.container}>
                <View style={styles.textContent}>
                    <ThemedText style={styles.title}>Ajustes</ThemedText>
                </View>
            </ThemedView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 10,
        paddingHorizontal: 20
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 16,
        color: '#111',
        flexShrink: 1
    },
    textContent: {
        flex: 1,
        flexDirection: 'row'
    },
});