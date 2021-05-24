import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { BackHandler } from 'react-native';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';

import logo from '../../assets/logo.png';
import { MainButtons } from '../../components/MainButtons';
import { GradientBackground } from '../../components/GradientBackground';
import { Spacer } from '../../components/Spacer';
import { useAuth } from '../../contexts/AuthContext';

import { Wrapper, LogoImg, LogoutButton, LogoutText } from './styles';

export function Home() {
  const { logout } = useAuth();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.addListener('beforeRemove', (e) => {
      // Prevent default behavior of going back
      if (e.data.action.type === 'GO_BACK') {
        e.preventDefault();

        BackHandler.exitApp();
      }
    });
  }, [navigation]);

  const handleLogout = () => {
    logout();
  };

  return (
    <GradientBackground>
      <Wrapper>
        <LogoImg source={logo} />

        <Spacer flex={1} />

        <MainButtons />

        <LogoutButton onPress={handleLogout}>
          <LogoutText>
            <Icon name="logout" color="#fff" size={16} /> Log out
          </LogoutText>
        </LogoutButton>
      </Wrapper>
    </GradientBackground>
  );
}
