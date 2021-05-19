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

export function SignUp() {
  const navigation = useNavigation();

  return (
    <Formik
      initialValues={{ email: '', password: '', passwordConfirmation: '' }}
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

                  <InputTitle>Password</InputTitle>
                  <Input
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    textContentType="password"
                    secureTextEntry={true}
                    value={values.password}
                  />

                  <InputTitle>Confirm password</InputTitle>
                  <Input
                    onChangeText={handleChange('passwordConfirmation')}
                    onBlur={handleBlur('passwordConfirmation')}
                    textContentType="password"
                    secureTextEntry={true}
                    value={values.passwordConfirmation}
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
