import React from 'react';
import { Snackbar } from 'react-native-paper';

import { useToaster } from '../../contexts/ToasterContext';

export const Toaster = () => {
  const { visible, onDismiss, duration, message } = useToaster();

  return (
    <Snackbar visible={visible} onDismiss={onDismiss} duration={duration}>
      {message}
    </Snackbar>
  );
};
