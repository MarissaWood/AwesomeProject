import React, { Component } from "react";
import { Image, View, StyleSheet, ScrollView } from "react-native";

import List from "./components/List";
import Input from "./components/Input";
import Title from "./components/Title";

export default class App extends Component {
  state = {
    todos: ["Learn React Native", "Write Code", "Ship App", "Tap to remove"]
  };

  onAddTodo = text => {
    const { todos } = this.state;

    this.setState({
      todos: [text, ...todos]
    });
  };

  onRemoveTodo = index => {
    const { todos } = this.state;

    this.setState({
      todos: todos.filter((todo, i) => i !== index)
    });
  };

  render() {
    const { todos } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{ uri: "http://www.reactnativeexpress.com/logo.png" }}
          />
        </View>
        <Title>To-Do List</Title>
        <Input
          placeholder={"Type a todo, then hit enter!"}
          onSubmitEditing={this.onAddTodo}
        />
        <ScrollView>
          <List list={todos} onPressItem={this.onRemoveTodo} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "stretch"
  },
  imageContainer: {
    flex: 1,
    alignItems: "center"
  },
  image: {
    width: 200,
    height: 200
  }
});
