import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from "@react-navigation/native";
import lista_generica from "./screens/lista_generica";

const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="lista_generica" component={lista_generica} />
        </Stack.Navigator>
    );
}

export default function App() {
    return (
        <NavigationContainer>
            <MyStack/>
        </NavigationContainer>
    );
}

