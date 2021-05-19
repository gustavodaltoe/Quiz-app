import React from 'react';
import { Formik } from 'formik';
import { ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { GradientBackground } from '../../components/GradientBackground';
import logo from '../../assets/logo.png';
import { Spacer } from '../../components/Spacer';

import {
  Wrapper,
  LogoImg,
  Input,
  Button,
  ButtonText,
  Form,
  InputTitle,
  TransparentButtonText,
  NotRegisteredText,
} from './styles';

interface FormProps {
  email: string;
  password: string;
}

export function SignIn() {
  const navigation = useNavigation();

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={async (values) => {
        console.log(values);
      }}>
      {({ handleChange, handleBlur, handleSubmit, values, isSubmitting }) => (
        <GradientBackground>
          <Wrapper>
            <LogoImg source={logo} />

            <Spacer flex={1} />

            {isSubmitting && <ActivityIndicator />}

            {!isSubmitting && (
              <>
                <Form>
                  <InputTitle>Email</InputTitle>
                  <Input
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    autoCapitalize="none"
                    keyboardType="email-address"
                    autoCompleteType="email"
                    textContentType="emailAddress"
                    value={values.email}
                  />

                  <Spacer height={12} />

                  <InputTitle>Password</InputTitle>
                  <Input
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    textContentType="password"
                    secureTextEntry={true}
                    value={values.password}
                  />
                </Form>

                <Spacer height={30} />

                <Button onPress={() => handleSubmit()}>
                  <ButtonText>Login</ButtonText>
                </Button>
                <Button
                  onPress={() => navigation.navigate('home')}
                  style={{ backgroundColor: 'transparent' }}>
                  <TransparentButtonText>
                    Login as a guest
                  </TransparentButtonText>
                </Button>

                <Spacer height={20} />

                <NotRegisteredText>Not yet registered?</NotRegisteredText>
                <Button
                  onPress={() => navigation.navigate('sign-up')}
                  style={{ backgroundColor: 'transparent' }}>
                  <TransparentButtonText>Sign Up</TransparentButtonText>
                </Button>
              </>
            )}
          </Wrapper>
        </GradientBackground>
      )}
    </Formik>
  );
}
