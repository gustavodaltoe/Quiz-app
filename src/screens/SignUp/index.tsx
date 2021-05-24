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

const SignUpSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required(),
  password: Yup.string()
    .min(6, 'Min 6 characters')
    .max(20, 'Max 20 characters')
    .required(),
  passwordConfirmation: Yup.string()
    .min(6, 'Min 6 characters')
    .max(20, 'Max 20 characters')
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required(),
});

export function SignUp() {
  const navigation = useNavigation();
  const { register } = useAuth();

  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

  const onKeyboardOpen = () => {
    setIsKeyboardOpen(true);
  };

  const onKeyboardClose = () => {
    setIsKeyboardOpen(false);
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
      initialValues={{ email: '', password: '', passwordConfirmation: '' }}
      validationSchema={SignUpSchema}
      onSubmit={async ({ email, password }) => {
        register(email, password);
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

                  <InputTitle>Confirm password</InputTitle>
                  <Input
                    onChangeText={handleChange('passwordConfirmation')}
                    onBlur={handleBlur('passwordConfirmation')}
                    textContentType="password"
                    secureTextEntry={true}
                    value={values.passwordConfirmation}
                    hasError={
                      !!errors.passwordConfirmation &&
                      touched.passwordConfirmation
                    }
                  />
                </Form>

                <Spacer height={30} />

                <Button onPress={() => handleSubmit()}>
                  <ButtonText>Register</ButtonText>
                </Button>

                <Spacer height={20} />

                <NotRegisteredText>Already has an account?</NotRegisteredText>
                <Button
                  onPress={() => navigation.navigate('sign-in')}
                  style={{ backgroundColor: 'transparent' }}>
                  <TransparentButtonText>Sign In</TransparentButtonText>
                </Button>
              </>
            )}
          </Wrapper>
        </GradientBackground>
      )}
    </Formik>
  );
}
