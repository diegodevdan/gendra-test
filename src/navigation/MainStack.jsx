import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/home/HomeScreen';
import DetailsScreen from '../screens/details/Details';

const Stack = createNativeStackNavigator();

export const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#243033',
        },
        headerTintColor: '#fff',
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} options={{title: 'Contratos del Gobierno de México'}}/>
      <Stack.Screen name="Details" component={DetailsScreen} options={{title: 'Detalles del Contrato'}} />
    </Stack.Navigator >
  );
}