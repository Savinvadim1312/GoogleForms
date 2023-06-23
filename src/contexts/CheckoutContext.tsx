import { createContext, useContext, useState } from 'react';
import {
  CheckoutData,
  DeliveryInfo,
  PaymentInfo,
  PersonalInfo,
} from '../schema/checkout.schema';

type CheckoutContextType = {
  setPersonal: React.Dispatch<React.SetStateAction<PersonalInfo | null>>;
  setDelivery: React.Dispatch<React.SetStateAction<DeliveryInfo | null>>;
  setPayment: React.Dispatch<React.SetStateAction<PaymentInfo | null>>;
  onSubmitAll: (paymentInfo: PaymentInfo) => Promise<boolean>;
};

const CheckoutContext = createContext<CheckoutContextType>({
  setPersonal: () => {},
  setDelivery: () => {},
  setPayment: () => {},
  onSubmitAll: () => Promise.resolve(false),
});

export default function CheckoutContextProvider({ children }) {
  const [personal, setPersonal] = useState<PersonalInfo | null>(null);
  const [delivery, setDelivery] = useState<DeliveryInfo | null>(null);
  const [payment, setPayment] = useState<PaymentInfo | null>(null);

  const onSubmitAll = async (paymentInfo: PaymentInfo) => {
    setPayment(paymentInfo);

    const checkoutData: CheckoutData = {
      ...personal,
      ...delivery,
      ...paymentInfo,
    };

    console.log('Submitting the multi step form');
    console.log(checkoutData);

    return true;
  };

  return (
    <CheckoutContext.Provider
      value={{ setPersonal, setDelivery, setPayment, onSubmitAll }}
    >
      {children}
    </CheckoutContext.Provider>
  );
}

export const useCheckoutContext = () => useContext(CheckoutContext);
