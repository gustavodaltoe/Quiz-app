import { FontAwesome } from '@expo/vector-icons';

import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Spacer } from '../Spacer';

import { Button, ButtonText } from './styles';

interface Props {
  showPlay?: boolean;
  showStats?: boolean;
}

export function MainButtons({ showPlay = true, showStats = true }: Props) {
  const navigation = useNavigation();

  const handleStatsPress = () => {
    navigation.navigate('stats');
  };

  const handlePlayPress = () => {
    navigation.navigate('challenge');
  };

  return (
    <>
      {showStats && (
        <Button onPress={handleStatsPress}>
          <ButtonText>Stats</ButtonText>
        </Button>
      )}

      {showPlay && showStats && <Spacer height={20} />}

      {showPlay && (
        <Button onPress={handlePlayPress}>
          <ButtonText>
            <FontAwesome name="play" size={28} /> Play
          </ButtonText>
        </Button>
      )}
    </>
  );
}
