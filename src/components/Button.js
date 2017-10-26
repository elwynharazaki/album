import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const CustomButton = (props) => {
   const { buttonStyle, textStyle } = styles;

   return (
      <TouchableOpacity style={{ ...buttonStyle, backgroundColor: props.color || '#0C508B' }}
      onPress={props.buttonPressed}>
         <Text style={textStyle}>{props.children}</Text>
      </TouchableOpacity>
   );
};

const styles = {
   textStyle: {
      alignSelf: 'center',
      color: '#FFF',
      fontSize: 16,
      fontWeight: '600',
      paddingTop: 10,
      paddingBottom: 10
   },
   buttonStyle: {
      alignSelf: 'stretch',
      alignItems: 'center',
      flex: 1,
      color: '#6D96B9',
      fontSize: 15,
      padding: 2
   }
};

export default CustomButton;
