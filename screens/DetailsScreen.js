import React from 'react';
import { Button, View, Text } from 'react-native';
import { observer, inject } from "mobx-react";
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';

@inject('store') @observer
export default class DetailsScreen extends React.Component {
 


  keyExtractor = (item, index) => index.toString();

  renderItem = ({ item }) => (
    <ListItem title={item.make_display} bottomDivider chevron />
  );
  
  showCarData = () => {
    if (this.props.store.data) {
      return (
        <FlatList
          keyExtractor={this.keyExtractor}
          data={this.props.store.data}
          renderItem={this.renderItem}
        />
      );
    } else {
      return null;
    }
  };
  
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {this.showCarData()}
      </View>
    );
  }
}