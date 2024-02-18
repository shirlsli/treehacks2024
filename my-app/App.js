import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignupScreen from "./screens/signup.screen";
import DetailsScreen from "./screens/details.screen";
import '@tamagui/core/reset.css';
import { TamaguiProvider } from 'tamagui';
import tamaguiConfig from './tamagui.config';
import WelcomeScreen from "./screens/welcome.screen";
import HomeScreen from "./screens/home.screen";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <TamaguiProvider config={tamaguiConfig}>
      <NavigationContainer>
        <Stack.Navigator
        screenOptions={{
          headerShown: false // Hide the navigation bar
        }}>
          <Stack.Screen
            name="Signup"
            component={SignupScreen}
          />
          <Stack.Screen
            name="Welcome"
            component={WelcomeScreen}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </TamaguiProvider>
  );
}

