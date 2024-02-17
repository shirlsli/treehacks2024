import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignupScreen from "./screens/signup.screen";
import DetailsScreen from "./screens/details.screen";
import '@tamagui/core/reset.css'
import { TamaguiProvider } from 'tamagui'
import tamaguiConfig from './tamagui.config'


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <TamaguiProvider config={tamaguiConfig}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Signup"
            component={SignupScreen}
            options={{ title: "Signup" }}
          />
          <Stack.Screen
            name="Details"
            component={DetailsScreen}
            options={{ title: "Details" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </TamaguiProvider>
  );
}
