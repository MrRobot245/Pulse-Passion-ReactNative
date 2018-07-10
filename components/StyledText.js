import React from 'react';
import { Text } from 'react-native';

class MonoText extends React.Component {
  render() {
    return <Text {...this.props} style={[this.props.style, { fontFamily: 'space-mono' }]} />;
  }
}
class MontText extends React.Component {
  render() {
    return <Text {...this.props} style={[this.props.style, { fontFamily: 'mont' }]} />;
  }
}
class MontBold extends React.Component {
  render() {
    return <Text {...this.props} style={[this.props.style, { fontFamily: 'montBold' }]} />;
  }
}
module.exports = {
  MonoText: MonoText,
  MontText: MontText,
  MontBold: MontBold
}
