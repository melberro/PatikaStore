
import React from 'react';
import { FlatList, SafeAreaView, View, StyleSheet, Text, TextInput } from 'react-native';
import StoreList from './components/StoreList/StoreList';
import product_data from './product_data';


function App() {
  const renderProducts=({item,index}) => < StoreList isBigItem={index==(product_data.length-1) && (product_data.length%2==1)} products={item} />


  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.headerText}>PATIKASTORE</Text>
      </View>
      <View>
        <TextInput style={styles.input} placeholder='Ara...' />

      
      </View>
      <FlatList 
      numColumns={2}
      data={product_data}
      renderItem={renderProducts} 
      />

    </SafeAreaView>
    
  
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerText: {
    color: '#800080',
    fontSize: 30,
  },
    input: {
      backgroundColor: '#eceff1',
      margin: 5,
      padding: 5,
      borderRadius: 10,
     color: '#b7b9bc',
    },

});

export default App;
