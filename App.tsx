import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

import Loading from '@components/Loading';
import { StatusBar } from 'react-native';
import NewGroup from '@screens/NewGroup';

export default function App() {

  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  })

  return (
    <>
      {
        fontsLoaded ?
          <>
            <NewGroup />
            <StatusBar
              barStyle="light-content"
              backgroundColor="transparent"
              translucent
            />
          </>
          : <Loading />
      }
    </>
  );
}

