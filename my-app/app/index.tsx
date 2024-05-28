import { createContext, useContext } from 'react';
import { Text } from 'react-native';

const TestContext = createContext("Test");

export default function HomeScreen() {
  return (
      <>
        <Text>Seth</Text>
        <Text>{useContext(TestContext)}</Text>
        <TestContext.Provider value='Test 2'>
          <Text>{useContext(TestContext)}</Text>
        </TestContext.Provider>
      </>
    );
  }
