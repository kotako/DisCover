import React from 'react';
import { StyleSheet, View, ToolbarAndroid, ActivityIndicator, StatusBar, Text } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Covers from '../Covers';
import Favorite from '../Favorite';
import Search from '../Search';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  toolbar: {
    marginTop: StatusBar.currentHeight,
    height: 56,
    backgroundColor: "peru"
  }
});

const TabNavigation = TabNavigator({
  Cover: { screen: Covers },
  Favorite: { screen: Favorite },
  Search: { screen: Search }
}, {
  tabBarPosition: "top",
  animationEnabled: true,
  tabBarOptions: {
    style: {
      backgroundColor: "peru"
    }
  }
});

class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ToolbarAndroid
          style={styles.toolbar}
          title="DisCover"
          titleColor="white"
          actions={[{title: "Settings", icon: require("./settings.png"), show: "always"}]}
        />
        <TabNavigation/>
      </View>
    )
  }
}

export default Home;
