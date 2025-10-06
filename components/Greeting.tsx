import { Text } from 'react-native';

type Props = { name?: string };

export default function Greeting({ name = 'Tamu' }: Props) {
  return <Text style={{ fontSize: 18, marginBottom: 8 }}>Hai, {name}! 👋</Text>;
}
