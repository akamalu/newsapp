import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';


const ListItem = ({imageURL,title,author,onPress}) => {
    return(
    <TouchableOpacity style={styles.itemContainer} onPress={onPress}>
        <View style={styles.leftContainer}>
        {!!imageURL && (
        <Image
           style={{width: 100, height:100,}}
           source={{url: imageURL}}
         />
        )}
          </View>
        <View style={styles.rightContainer}>
         <Text style={styles.text} numberOfLines={3}>
         {title}
         </Text>
         <Text style={styles.subtext}>
           {author}
         </Text>
        </View>
        </TouchableOpacity>
        )}


export default ListItem;




const styles = StyleSheet.create({
    itemContainer: {
      height: 100,
      width: '100%',
      borderColor:'gray',
      borderWidth: 1,
      
      },
    leftContainer:{
      width: 100
  
    },
    rightContainer: {
      flex:1,
      padding:10,
      justifyContent:'space-between'
    },
    text:{
      fontSize: 15
    },
    subtext:{
      fontSize: 14,
      color: 'gray'
    }
  });