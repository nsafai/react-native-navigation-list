import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import BreedCell from './BreedCell'
import BreedNameCell from './BreedNameCell'
import { cats, dogs } from './breeds'

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'By Breed'
  }

  constructor(props) {
    super(props)

    this.state = {
      selectedIndex: 0
    }
  }

  renderItems({ item, index }) { 
      return (
        <BreedCell 
          data={item}
          style={styles.cell} 
          breed={item.breed} />
        )
  }

  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <FlatList 
          style={styles.list}
          data={cats}
          renderItem={({item}) => <BreedNameCell onPress={() => console.log('Need to implement nav')} item={item} />}
          keyExtractor={(item, index) => `${index}-${item.breed}`}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    flex: 1,
    width: '100%'
  },
  cell: {
    width: '100%'
  },
  separator: {
    
  },
  segmentedControl: {
    width: 150,
    margin: 10
  }
});
