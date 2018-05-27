import React from 'react';
import { StyleSheet, View } from 'react-native';

import MemoList from '../components/MemoList';
import CircleButton from '../elements/CircleButton';

class MemoListScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MemoList navigation={this.props.navigation} />
        <CircleButton style={styles.editButton} onPress={() => {this.props.navigation.navigate('MemoEdit')}}>
          +
        </CircleButton>
      </View>
    );
  }
}
// {'\uf067'}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#FFFDF6'
  },
});

export default MemoListScreen;
