import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

interface Props {
  children: React.ReactElement;
}

export function GradientBackground({ children }: Props) {
  return (
    <LinearGradient
      colors={['#009FFD', '#2A2A72']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 2 }}
      style={{
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: '100%',
      }}>
      {children}
    </LinearGradient>
  );
}
