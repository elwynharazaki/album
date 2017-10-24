import React from 'react';
import { Image, Text, View } from 'react-native';

import Card from './Card';
import CardSection from './CardSection'

const AlbumDetail = (props) => {
   return (
      <View>
         <Card>
            <CardSection>
               <View>
                  <Image
                  style={{ width: 50, height: 50}}
                  source={{ uri: props.album.thumbnail_image}}
                  />
               </View>               

               <View style={styles.headerContentStyle}>
                  <Text style={styles.titleTextStyle}>{props.album.title}</Text>
                  <Text style={styles.artisTextStyle}>{props.album.artist}</Text>
               </View>
            </CardSection>

            <CardSection>
               <Image
                  style={{ height: 300, width: '100%' }}
                  source={{ uri: props.album.image }}
               />
            </CardSection>
         </Card>
      </View>
   );
}

const styles = {
   titleTextStyle: {
      color: '#EAF9FF',
      fontSize: 20,
      padding: 2
   },

   artisTextStyle: {
      color: '#6D96B9',
      fontSize: 15,
      padding: 2
   },

   headerContentStyle: {
      justifyContent: 'space-around',
      flexDirection: 'column',
      paddingLeft: 10
   }

};

export default AlbumDetail;