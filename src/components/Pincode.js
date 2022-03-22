import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

function Pincode({value, actived}) {
  console.log(value);
  return (
    <View style={styles.containerPinCode}>
      <View style={[styles.code, actived ? styles.codeActived : '']} />
    </View>
  );
}

const styles = StyleSheet.create({
  containerPinCode: {},
  code: {
    width: 20,
    height: 20,
    borderRadius: 50,
    marginHorizontal: 5,
    backgroundColor: '#000',
    opacity: 0.5,
  },
  codeActived: {
    opacity: 1,
  },
});

export default Pincode;
