import { Link, useRouter } from 'expo-router';
import { ScrollView, View } from 'react-native';
import {
  Button,
  Card,
  TextInput,
  useTheme,
  HelperText,
} from 'react-native-paper';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  PersonalInfoSchema,
  PersonalInfo,
} from '../../src/schema/checkout.schema';

import ControlledInput from '../../src/components/ControlledInput';

export default function PersonalDetails() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<PersonalInfo>({
    resolver: zodResolver(PersonalInfoSchema),
  });

  console.log(errors);

  const router = useRouter();
  const theme = useTheme();

  const nextPage = (data) => {
    console.log('Form fields: ', data);

    router.push('/checkout/delivery');
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
        <Card.Title title="Personal information" titleVariant="titleLarge" />
        <Card.Content style={{ gap: 10 }}>
          <ControlledInput
            control={control}
            name="name"
            placeholder="Name"
            label="Name"
          />

          <ControlledInput
            control={control}
            name="email"
            placeholder="hey@gmail.com"
            label="Email"
          />
        </Card.Content>
      </Card>
      <Button onPress={handleSubmit(nextPage)} mode="contained">
        Next
      </Button>
    </ScrollView>
  );
}
