'use strict';

import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import Counter from '../components/counter';
import Head from '../components/head';
import Article from '../components/article';
import * as counterActions from '../actions/counterActions';
import { connect } from 'react-redux';
import {IndicatorViewPager, PagerTitleIndicator, PagerDotIndicator} from 'rn-viewpager';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ViewPagerAndroid,
} from 'react-native';
// @connect(state => ({
//   state: state.counter
// }))
class CounterApp extends Component {
  constructor(props) {
    super(props);
  }
  _renderDotIndicator() {
        return <PagerDotIndicator pageCount={3} />;
  }
  render() {
    const { state, actions } = this.props;
    return (
      <View style={{flex: 1}}>
          <View style={{height:40,backgroundColor: '#723D00'}}>

          </View>
          <IndicatorViewPager
              style={{flex: 1}}
              indicator={this._renderDotIndicator()}>
              <View style={{backgroundColor: '#FDAC4F', alignItems: 'center',justifyContent: 'center'}}>
                  <Head />
                  <Counter
                      counter={state.count}
                      {...actions} />
              </View>
              <View style={{backgroundColor: '#FC8600', alignItems: 'center',justifyContent: 'center'}}>
                  <Article />
              </View>
              <View style={{backgroundColor: '#FDAC4F', alignItems: 'center',justifyContent: 'center'}}>

              </View>
          </IndicatorViewPager>
      </View>
    );
  }
}

export default connect(state => ({
    state: state.counter
  }),
  (dispatch) => ({
    actions: bindActionCreators(counterActions, dispatch)
  })
)(CounterApp);
