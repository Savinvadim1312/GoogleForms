import { Link, useRouter } from 'expo-router';
import { ScrollView, View } from 'react-native';
import {
  Button,
  Card,
  TextInput,
  useTheme,
  Switch,
  Text,
  Checkbox,
} from 'react-native-paper';

export default function PaymentDetails() {
  const router = useRouter();
  const theme = useTheme();

  const nextPage = () => {
    // Submit

    // TODO: Why it's not navigating home???
    router.push('/');
  };
  return (
    <ScrollView
      contentContainerStyle={{
        gap: 15,
        maxWidth: 500,
        width: '100%',
        alignSelf: 'center',
      }}
      showsVerticalScrollIndicator={false}
    >
      <Card style={{ backgroundColor: theme.colors.background }}>
        <Card.Title title={'Payment details'} titleVariant="titleLarge" />
        <Card.Content style={{ gap: 10 }}>
          <TextInput
            label={'Card number'}
            placeholder="4242 4242 4242 4242"
            style={{ backgroundColor: theme.colors.background }}
          />
          <View style={{ flexDirection: 'row', gap: 15 }}>
            <TextInput
              label={'Expiration date'}
              placeholder="mm/yyyy"
              style={{ backgroundColor: theme.colors.background, flex: 3 }}
            />
            <TextInput
              label={'Security code'}
              style={{ backgroundColor: theme.colors.background, flex: 2 }}
            />
          </View>

          <Checkbox.Item label="Save payment information" status="checked" />
        </Card.Content>
      </Card>

      <Button onPress={nextPage} mode="contained">
        Submit
      </Button>
    </ScrollView>
  );
}
