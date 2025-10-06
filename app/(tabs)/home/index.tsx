import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Counter from '../../../components/Counter';

export default function HomeScreen() {
  const router = useRouter();
  const [name, setName] = useState<string>('Kevin Ivander');

  const goToDetail = () => {
    const finalName = name.trim() || 'Tanpa Nama';
    // relative push ke stack: /home/detail
    router.push({ pathname: '/detail', params: { name: finalName } });
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Kartu judul */}
      <View style={styles.heroCard}>
        <Text style={styles.appBadge}>ReviewRN</Text>
        <Text style={styles.appTitle}>ReviewRN</Text>
        <Text style={styles.appDesc}>
          Aplikasi singkat untuk menyimpan dan melihat detail nama siswa. Masukkan nama di bawah lalu tekan “Tambahkan Data”.
        </Text>
      </View>

      {/* Form + tombol */}
      <View style={styles.formCard}>
        <Text style={styles.label}>Nama Siswa</Text>
        <TextInput
          value={name}
          onChangeText={setName}
          placeholder="Tulis nama siswa..."
          placeholderTextColor="#94a3b8"
          style={styles.input}
        />

        <Pressable onPress={goToDetail} style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}>
          <Text style={styles.buttonText}>Tambahkan Data</Text>
        </Pressable>
      </View>

      {/* Contoh komponen state */}
      <View style={styles.formCard}>
        <Text style={styles.label}>Counter (demo useState)</Text>
        <Counter />
      </View>
    </SafeAreaView>
  );
}

const RADIUS = 16;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, gap: 16 },
  heroCard: {
    backgroundColor: '#0ea5e9',
    borderRadius: RADIUS,
    padding: 18,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 4,
  },
  appBadge: {
    alignSelf: 'flex-start',
    color: '#0ea5e9',
    backgroundColor: '#e0f2fe',
    fontSize: 12,
    fontWeight: '700',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999,
    overflow: 'hidden',
    marginBottom: 8,
  },
  appTitle: { color: 'white', fontSize: 28, fontWeight: '800', marginBottom: 6 },
  appDesc: { color: 'white', opacity: 0.9, fontSize: 14, lineHeight: 20 },

  formCard: {
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
  label: { fontSize: 14, color: '#334155', marginBottom: 4, fontWeight: '600' },
  input: {
    borderWidth: 1,
    borderColor: '#cbd5e1',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 12,
    fontSize: 16,
    color: '#0f172a',
    backgroundColor: '#f8fafc',
  },
  button: {
    marginTop: 6,
    height: 48,
    borderRadius: 12,
    backgroundColor: '#0ea5e9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonPressed: { opacity: 0.85, transform: [{ scale: 0.997 }] },
  buttonText: { color: 'white', fontSize: 16, fontWeight: '700', letterSpacing: 0.3 },
});
