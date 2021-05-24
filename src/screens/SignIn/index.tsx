import React, { useEffect, useState } from 'react';
import { Formik } from 'formik';
import { ActivityIndicator, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Yup from 'yup';

import { GradientBackground } from '../../components/GradientBackground';
import logo from '../../assets/logo.png';
import { Spacer } from '../../components/Spacer';
import { useAuth } from '../../contexts/AuthContext';

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

const SignInSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required(),
  password: Yup.string()
    .min(6, 'Min 6 characters')
    .max(20, 'Max 20 characters')
    .required(),
});

export function SignIn() {
  const [isLoading, setIsLoading] = useState(false);
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

  const navigation = useNavigation();
  const { login, anonymousLogin } = useAuth();

  const onKeyboardOpen = () => {
    setIsKeyboardOpen(true);
  };

  const onKeyboardClose = () => {
    setIsKeyboardOpen(false);
  };

  const handleAnonymousLogin = async () => {
    setIsLoading(true);
    await anonymousLogin();
  };

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', onKeyboardOpen);
    Keyboard.addListener('keyboardDidHide', onKeyboardClose);

    // cleanup function
    return () => {
      Keyboard.removeListener('keyboardDidShow', onKeyboardOpen);
      Keyboard.removeListener('keyboardDidHide', onKeyboardClose);
    };
  }, []);

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={SignInSchema}
      onSubmit={async ({ email, password }) => {
        await login(email, password);
      }}>
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        isSubmitting,
        errors,
        touched,
      }) => (
        <GradientBackground>
          <Wrapper>
            {!isKeyboardOpen && (
              <>
                <LogoImg source={logo} />
                <Spacer flex={1} />
              </>
            )}

            {(isSubmitting || isLoading) && (
              <ActivityIndicator size={100} color="#fff" />
            )}

            {!isSubmitting && !isLoading && (
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
                    hasError={!!errors.email && touched.email}
                  />

                  <InputTitle>Password</InputTitle>
                  <Input
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    textContentType="password"
                    secureTextEntry={true}
                    value={values.password}
                    hasError={!!errors.password && touched.password}
                  />
                </Form>

                <Spacer height={30} />

                <Button onPress={() => handleSubmit()}>
                  <ButtonText>Login</ButtonText>
                </Button>
                <Button
                  onPress={handleAnonymousLogin}
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
