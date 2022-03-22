import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

const InputPinCode = () => {
  return (
    <View style={styles.containerInputPinCode}>
      <TouchableOpacity>
        <View style={styles.containerNumber}>
          <Text style={styles.number}>1</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.containerNumber}>
          <Text style={styles.number}>2</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.containerNumber}>
          <Text style={styles.number}>3</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.containerNumber}>
          <Text style={styles.number}>4</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.containerNumber}>
          <Text style={styles.number}>5</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.containerNumber}>
          <Text style={styles.number}>6</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.containerNumber}>
          <Text style={styles.number}>7</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.containerNumber}>
          <Text style={styles.number}>8</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.containerNumber}>
          <Text style={styles.number}>9</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.containerNumber}>
          <Text style={styles.number}>0</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  containerInputPinCode: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  containerNumber: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: '#1a1a1a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  number: {
    fontSize: 30,
    color: '#fff',
  },
});

export default InputPinCode;
