import React,{ Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ViewPagerAndroid,
} from 'react-native';

const styles = StyleSheet.create({
    titleText: {
        fontSize: 40,
        fontFamily: 'PoiretOne-Regular',
    },
});

export default class Head extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { counter, increment, decrement } = this.props;
    return (
      <View style={{marginBottom:50}}>
          <Text style={styles.titleText}>SuperCounter</Text>
      </View>
    );
  }
}
