import { Link, useRouter } from 'expo-router';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';

export default function PersonalDetails() {
  const router = useRouter();

  const nextPage = () => {
    router.push('/checkout/delivery');
  };

  return (
    <View>
      <Text style={{ fontSize: 30 }}>Personal details</Text>

      <Button onPress={nextPage} mode="contained">
        Next
      </Button>
    </View>
  );
}
