import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Assalaamu alaikkum, Amhar!!!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }
const Cat = () => {
  const owner = 'Amhar';
  const name = 'Beeti';
  return (
    <View style={styles.container}>
      <Text>Hello {owner}, I am your {name}!</Text>
    </View>
  );
};

export default Cat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
