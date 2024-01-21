
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearcScreen from './src/Screen/SearcScreen';
import ResultShowScreen from './src/Screen/ResultShowScreen';





const Stack = createNativeStackNavigator();
export default function App() {
  return (
   
      <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Home" component={SearcScreen} />
        <Stack.Screen name="ResulScreen" component={ResultShowScreen} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
