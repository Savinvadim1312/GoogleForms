import { Slot } from 'expo-router';
import { PaperProvider, MD3LightTheme } from 'react-native-paper';

const theme = {
  ...MD3LightTheme,
  roundness: 1,
};

export default function RootLayout() {
  return (
    <PaperProvider theme={theme}>
      <Slot />
    </PaperProvider>
  );
}
