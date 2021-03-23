import { FontAwesome } from '@expo/vector-icons';

import React from 'react';

import { Spacer } from '../Spacer';

import { Button, ButtonText } from './styles';

interface Props {
  showPlay?: boolean;
  showStats?: boolean;
}

export function MainButtons({ showPlay = true, showStats = true }: Props) {
  return (
    <>
      {showStats && (
        <Button>
          <ButtonText>Stats</ButtonText>
        </Button>
      )}

      {showPlay && showStats && <Spacer height={20} />}

      {showPlay && (
        <Button>
          <ButtonText>
            <FontAwesome name="play" size={28} /> Play
          </ButtonText>
        </Button>
      )}
    </>
  );
}
