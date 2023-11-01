import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-web';

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
  const cat = 'BT';
  return (
    <View style={styles.container}>
      <Text>Enter the owners name? </Text>
      <TextInput style={styles.textInput}
        defaultValue={owner}
      />
      <Text>Enter the Cat name? </Text>
      <TextInput style={styles.textInput}
        defaultValue={cat}
      />
      <Text>Hello {owner}, I am your {cat}!</Text>
    </View>
  );
};

const Cafe = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome to our cafe!</Text>
      <Cat />
    </View>
  );
};

export default Cafe;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput:{
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 5,
    borderRadius: 10,
  },
});
