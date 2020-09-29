import React from 'react';
import { StyleSheet, Text, View ,FlatList} from 'react-native';


const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First story',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second story',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third story',
  },
];

function Item({ title }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

export default class ReadStoryScreen extends React.Component {

    render(){
        return(
            <View style={styles.container}>
                 <FlatList
                  data={DATA}
                  renderItem={({ item }) => <Item title={item.title} />}
                  keyExtractor={item => item.id}
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
  },item: {
  
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});