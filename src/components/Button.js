import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = (props) => {
   const { buttonStyle, textStyle } = styles;

   return (
      <TouchableOpacity style={{ ...buttonStyle, backgroundColor: props.color || '#0C508B' }}
      onPress={props.buttonPressed}>
         <Text style={textStyle}>{props.children}</Text>
      </TouchableOpacity>
   );
};

const styles = {   
   buttonStyle: {
      alignSelf: 'stretch',
      borderRadius: 4,
      backgroundColor: '#6D96B9',
      width: '100%'
   },

   textStyle: {
      alignSelf: 'center',
      color: '#FFF',
      fontSize: 16,
      fontWeight: '600',
      paddingBottom: 10,
      paddingTop: 10
   }
};

export default Button;
