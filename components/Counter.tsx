import { useState } from 'react';
import { Button, Text, View } from 'react-native';

export default function Counter() {
  const [count, setCount] = useState<number>(0);

  return (
    <View style={{ gap: 8 }}>
      <Text style={{ fontSize: 16 }}>Hitungan: {count}</Text>
      <Button title="Tambah 1" onPress={() => setCount((c) => c + 1)} />
      <Button title="Reset" onPress={() => setCount(0)} />
    </View>
  );
}
