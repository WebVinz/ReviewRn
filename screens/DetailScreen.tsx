import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { RootStackParamList } from '../types/navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'Detail'>;

export default function DetailScreen({ route }: Props) {
  const { name } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Detail Siswa</Text>
      <Text style={styles.text}>Nama: {name}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, gap: 8 },
  title: { fontSize: 22, fontWeight: '600', marginBottom: 8 },
  text: { fontSize: 18 },
});
