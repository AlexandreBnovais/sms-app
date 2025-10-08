import { createStackNavigator } from "@react-navigation/stack";

import { Contact } from "../screens/contactScreen";

export const Routes = () => {
    const Stack = createStackNavigator();
    return(
        <Stack.Navigator>
            <Stack.Screen name="contact" component={Contact} />
        </Stack.Navigator>
    )
}