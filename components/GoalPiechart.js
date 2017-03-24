import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Image } from 'react-native';

export class GoalPiechart extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style= {{ height:150, width: 150 }}
          source={{uri: 'http://icons.iconarchive.com/icons/custom-icon-design/flatastic-4/256/Pie-chart-icon.png'}}
        />
        <View style={styles.textView}>
          <Text style={styles.text}>75% OF YOUR $15 CAP REACHED</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {

  },

  textView: {
    position: 'absolute',
    width: 250,
    marginTop: 100,
    marginLeft: -23,
  },
    text: {
      fontFamily: 'Marker Felt',
    }
});
