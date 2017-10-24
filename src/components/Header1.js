import { Text, View } from 'react-native';
import React from 'react';
import axios from 'axios';

const Header = () => {
   const { viewStyle, textStyle } = styles;

   const weather = 'http://api.openweathermap.org/data/2.5/weather?q=Serpong&appid=4f3cdc2cde3ffd674711f5533acae677'

   axios.get(weather)
   .then((response) => {
      console.log(response.data.name);
      console.log(response.data.weather[0].description);
      console.log(Math.round(((response.data.main.temp) - 273) * 100) / 100);
   })
      .catch((error) => {
         console.log('ERROR', error);
      });

   return (
  <View style={viewStyle}>
    <Text style={textStyle}>WEATHER</Text>
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