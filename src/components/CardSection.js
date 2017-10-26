import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
   const { cardSectionStyle } = styles;

   return (
      <View style={cardSectionStyle}>
         {props.children}
      </View>
   );
};

const styles = {
   cardSectionStyle: {
      borderBottomWidth: 2,
      padding: 5,
      backgroundColor: '#0C508B',
      justifyContent: 'flex-start',
      flexDirection: 'row',
      borderColor: '#0C508B',
      position: 'relative'
   }
};

export default CardSection;
