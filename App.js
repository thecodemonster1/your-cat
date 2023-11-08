import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, StyleSheet, TextInput, Text, View, Button } from 'react-native';

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

// =================================

// const Cat = () => {
// // const Cat = (props: CatProps) => {
//   const [isHungry, setIsHungry] = useState(true);
//   let owner2 = 'Amhar';
//   let cat2 = 'BT';
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
//       <Text>{`Hello ${owner2}, I am your ${cat2}! and I am ${isHungry ? 'Hungry' : 'Full'}!`}</Text>
//       {/* <Text>Hello {props.owner}, I am your {props.cat}! and I am {isHungry ? 'Hungry' : 'Full'}!</Text> */}
//       <Text></Text>
//       <Button 
//         onPress={() => {
//           setIsHungry(false);
//         }}
//         disabled={!isHungry}
//         title={isHungry ? 'Pour me some milk, please!' : `Thank You ${owner2}` }
//       />
//     </View>
//   );
// };

// export default Cat;

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

// const Cat = () => {
//   return (
//     <View>
//       <Image
//         source={{
//           uri: 'https://reactnative.dev/docs/assets/p_cat1.png',
//         }}
//         style={{width: 200, height: 200}}
//       />
//       <Text>Hello, I am your cat!</Text>
//     </View>
//   );
// };

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

// ===================================

// const Cafe = () => {
//   return (
//     <>
//       <Cat cat="Kitty" owner="Amhar" />
//       <Cat cat="Miskey" owner="Ihlaas"/>
//       <Cat cat="Pixey" owner="Faizal Mama"/>
//     </>
//   );
// };

// export default Cafe;

// ===================================

// const PizzaTranslator = () => {
//   const [text, setText] = useState('');
//   return(
//     <View>
//       <TextInput
//         style={{height: 40,}}
//         placeholder="Type Here"
//         onChangeText={newText => setText(newText)}
//         defaultValue={text}
//       />
//       <Text style={{padding: 10, fontSize: 42}}>
//         {text
//           .split(' ')
//           .map(word => word && '🍕')
//           .join(' ')}
//       </Text>
//     </View>
//   );
// };

// export default PizzaTranslator;

// ===================================

const logo = {
  uri: 'https://reactnative.dev/img/tiny_logo.png',
  width: 64,
  height: 64,
};


const App = () => (
  <ScrollView>
    <Text style={{fontSize: 96}}>Scroll me plz</Text>
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Text style={{fontSize: 96}}>If you like</Text>
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Text style={{fontSize: 96}}>Scrolling down</Text>
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Text style={{fontSize: 96}}>What's the best</Text>
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Text style={{fontSize: 96}}>Framework around?</Text>
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Text style={{fontSize: 80}}>React Native</Text>
  </ScrollView>
);

export default App;

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
