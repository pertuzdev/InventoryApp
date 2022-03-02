import React from 'react';
import {View, Modal, ActivityIndicator} from 'react-native';

import {styles} from './Loader.styles';

export default function Loader({loading}) {
  return (
    <Modal
      transparent={true}
      animationType={'none'}
      visible={loading}
      onRequestClose={() => {
        console.log('close modal');
      }}>
      <View style={styles.modalBackground}>
        <View style={styles.activityIndicatorWrapper}>
          <ActivityIndicator animating={loading} />
        </View>
      </View>
    </Modal>
  );
}
