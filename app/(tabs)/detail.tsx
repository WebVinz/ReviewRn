import { useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function DetailScreen() {
  const { name } = useLocalSearchParams<{ name?: string }>();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Detail Siswa</Text>
        <View style={styles.row}>
          <Text style={styles.label}>Nama</Text>
          <Text style={styles.value}>{name ?? 'Tanpa Nama'}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const RADIUS = 16;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: RADIUS,
    padding: 16,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    gap: 10,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 2,
  },
  title: { fontSize: 22, fontWeight: '800', color: '#0f172a', marginBottom: 6 },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  label: { fontSize: 14, color: '#64748b' },
  value: { fontSize: 18, fontWeight: '700', color: '#0f172a' },
});
