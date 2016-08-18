import React,{ Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ViewPagerAndroid,
  Image,
} from 'react-native';

const styles = StyleSheet.create({
    titleText: {
        fontSize: 40,
        fontFamily: 'PoiretOne-Regular',
    },
    articleImg: {
        width: 300,
        height: 200
    },
});

export default class Article extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { counter, increment, decrement } = this.props;
    return (
      <View style={{marginBottom: 50, alignItems: 'center'}}>
          <Text style={styles.titleText}>Article</Text>
          <Image style={styles.articleImg} source={require('../../asset/img/tim_optimized.png')} />
      </View>
    );
  }
}
