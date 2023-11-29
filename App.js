
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

import Task from './src/pages/Task';
import NewTask from './src/pages/NewTask';
import Details from './src/pages/Details';
import Login from './src/pages/Login';
import NewUser from './src/pages/NewUser';

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerTintColor: "#FF725E"
          }}
        />

        <Stack.Screen
          name="NewUser"
          component={NewUser}
          options={{
            headerTintColor: "#FF725E"
          }}
        />

        <Stack.Screen
          name="Task"
          component={Task}
          options={{
            headerTintColor: "#FF725E"
          }}
        />

        <Stack.Screen
          name="New Task"
          component={NewTask}
          options={{
            headerTintColor: "#FF725E"
          }}
        />

        <Stack.Screen
          name="Details"
          component={Details}
          options={{
            headerTintColor: "#FF725E"
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
