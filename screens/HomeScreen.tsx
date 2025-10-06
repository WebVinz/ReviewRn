import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useState } from 'react';
import { Button, SafeAreaView, StyleSheet, TextInput, View } from 'react-native';
import Counter from '../components/Counter';
import Greeting from '../components/Greeting';
import type { RootStackParamList } from '../types/navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({ navigation }: Props) {
  const [studentName, setStudentName] = useState<string>('Kevin Ivander');

  const goToDetail = () => {
    navigation.navigate('Detail', { name: studentName.trim() || 'Tanpa Nama' });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.box}>
        <Greeting name="ReviewRN" />
        <Counter />
      </View>

      <View style={styles.box}>
        <TextInput
          placeholder="Ketik nama siswa…"
          value={studentName}
          onChangeText={setStudentName}
          style={styles.input}
        />
        <Button title="Lihat Detail Siswa" onPress={goToDetail} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, gap: 16 },
  box: { gap: 12 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
});
