import { Text, View } from 'react-native';
import React from 'react';

const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  const album = 'http://59ed5606ff7d5d00128e085a.mockapi.io/api/albums';

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
    padding: 10
   },

  viewStyle: {
    alignItems: 'center',
    backgroundColor: '#0C508B',
    elevation: 5,
    shadowColor: '#083861',
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 0.9
   }
};

export default Header;
