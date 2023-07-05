import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MainStack } from './src/navigation/MainStack';
import { TendersProvider } from './src/context/TendersContext';

export default function App() {
  const [tenders, setTenders] = useState([]);

  const addTenders = (tender) => {
    setTenders([...tender]);
  };
  return (
    <TendersProvider value={{
      tenders,
      addTenders,
    }}>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </TendersProvider>
  );
}
