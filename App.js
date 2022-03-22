import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
  FlatList,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import Todo from './src/components/Todo';
import {fetchTodosStart} from './src/redux/todos/todos.actions';

const App = () => {
  const dispatch = useDispatch();
  const {todos, currentTodo} = useSelector(state => state.todos);

  useEffect(() => {
    dispatch(fetchTodosStart());
  }, [dispatch]);

  useEffect(() => {
    if (!currentTodo.isLoading && currentTodo.data) {
      console.log(currentTodo.data);
    }
  }, [currentTodo]);

  if (todos.isLoading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  const renderItem = ({item}) => <Todo title={item.title} id={item.id} />;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={todos.data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  spinnerTextStyle: {
    color: '#FFF',
  },
});

export default App;
