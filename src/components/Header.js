import { Text, View } from 'react-native';
import React from 'react';
import axios from 'axios';

//THIS IS CALLED FUNCTIONAL COMPONENTS
const Header = (props) => {
   const { viewStyle, textStyle } = styles;

   const album = 'http://59ed5606ff7d5d00128e085a.mockapi.io/api/albums'

   return (
  <View style={viewStyle}>
    <Text style={textStyle}>{props.title}</Text>
  </View>
  );
};

const styles = {
   textStyle: {
      color: '#6D96B9',
      fontSize: 50,
      padding: 10,
   },

   viewStyle: {
      backgroundColor: '#0C508B',
      alignItems: 'center',
      shadowColor: '#083861',
      shadowOffset: { width: 0, height: 20 },
      shadowOpacity: 0.9,
      elevation: 5
   }
};
export default Header;