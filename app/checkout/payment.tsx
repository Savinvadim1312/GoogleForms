import { Link, useRouter } from 'expo-router';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';

export default function PaymentDetails() {
  const router = useRouter();

  const nextPage = () => {
    // Submit

    // TODO: Why it's not navigating home???
    router.push('/');
  };
  return (
    <View>
      <Text style={{ fontSize: 30 }}>Payment details</Text>
      <Link href={'/'}>Home</Link>
      <Button onPress={nextPage} mode="contained">
        Submit
      </Button>
    </View>
  );
}
