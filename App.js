import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-web';

// =================================

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Assalaamu alaikkum, Amhar!!!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// =================================

// type CatProps = {
//   cat: string;
//   owner: string;
// };

// const Cat = (props: CatProps) => {
//   // const owner = 'Amhar';
//   // const cat = 'BT';
//   return (
//     <View style={styles.container}>
//       {/* <Text>Enter the owners name? </Text>
//       <TextInput style={styles.textInput}
//         defaultValue={owner}
//       />
//       <Text>Enter the Cat name? </Text>
//       <TextInput style={styles.textInput}
//         defaultValue={cat}
//       /> */}
//       <Text>Hello {props.owner}, I am your {props.cat}!</Text>
//     </View>
//   );
// };

// =====================================

// const Cat = (props) => {
//   return (
//     <View style={styles.container}>
//       <Text>Hello {props.owner}, I am your {props.cat}!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// };

// =====================================

const Cat = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://reactnative.dev/docs/assets/p_cat1.png',
        }}
        style={{width: 200, height: 200}}
      />
      <Text>Hello, I am your cat!</Text>
    </View>
  );
};

// ===================================

// const Cafe = () => {
//   return (
//     <View style={styles.container}>
//       <Text>Welcome to our cafe!</Text>
//       <Cat cat="Kitty" owner="Amhar" />
//       <Cat cat="Miskey" owner="Ihlaas"/>
//       <Cat cat="Pixey" owner="Faizal Mama"/>
//     </View>
//   );
// };

export default Cafe;

// ===================================

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
