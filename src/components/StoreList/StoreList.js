import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './StoreList.style';

const storeList = ({products, isBigItem}) => {
  return (
    <View style={isBigItem ? styles.bigContainer : styles.container}>
      <View style={styles.subContainer}>
        <View style={isBigItem ? styles.bigItemImage : styles.imageContainer}>
          <Image
            resizeMode={isBigItem ? 'contain' : 'stretch'}
            style={ styles.image}
            source={{uri: products.imgURL}}
          />
        </View>
         <Text style={styles.title}>{products.title}</Text>
        <View style={styles.textContainer}>
         
          <Text style={styles.price}>{products.price} </Text>
          {!products.inStock && <Text style={styles.inStock}>STOKTA YOK</Text>}
        </View>
      </View>
    </View>
  );
};

export default storeList;
