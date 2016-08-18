
import React,{ Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ViewPagerAndroid,
} from 'react-native';
import * as Animatable from 'react-native-animatable';

const styles = StyleSheet.create({
  button: {
    width: 150,
    height: 50,
    padding: 10,
    backgroundColor: '#BD6500',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 3
  },
  buttonText: {
    fontFamily: 'PoiretOne-Regular',
    fontSize: 30,
  },
  numText: {
    fontFamily: 'PoiretOne-Regular',
    fontSize: 50,
    marginBottom: 50,
  },
});

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.anim = this.anim.bind(this);
  }
  anim() {
      this.refs.anim.bounce(1500);
  }
  render() {
    const { counter, increment, decrement } = this.props;

    return (

      <View style={{alignItems: 'center'}}>
        <Animatable.Text ref='anim' style={styles.numText}>{counter}</Animatable.Text>
        <TouchableOpacity onPress={increment} style={styles.button}>
          <Text style={styles.buttonText}>Up</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={decrement} style={styles.button}>
          <Text style={styles.buttonText}>Down</Text>
        </TouchableOpacity>
      </View>

    );
  }
}
