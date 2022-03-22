import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchTodoByIdStart} from '../redux/todos/todos.actions';

const Todo = ({id, title}) => {
  const dispatch = useDispatch();

  function onPress() {
    dispatch(
      fetchTodoByIdStart({
        id,
      }),
    );
  }

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default Todo;
