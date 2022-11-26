import { StyleSheet, Dimensions } from "react-native";

const {height,width}=Dimensions.get('window')
export default StyleSheet.create({
    container: {
       
        width: width / 2,

        
    },
    subContainer: {
        backgroundColor: "#eceff1",
        margin:10,
        padding:10,
        height: height*0.4,
    },
    image: { 
        width: '100%',
        height: '100%',
    
     },
    title: {
        fontWeight: 'bold',
        fontSize: 14,
        color: 'black',
    },
    price: {
        color: '808080',
        fontSize: 13,
        fontWeight: "bold",
    
    },
    inStock: {
        fontSize: 13,
        color: 'red',
        fontWeight: 'bold',

    },
    bigContainer: {
       
        width: width,
    

    },
    imageContainer: {
        backgroundColor: 'white',
        height: height*0.27,
    },
    textContainer: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    bigItemImage: {
        backgroundColor: 'white',
        height: height*0.31

    },
  


})