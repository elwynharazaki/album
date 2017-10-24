import React, { Component } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';

/*
//THIS IS CALLED FUNCTIONAL COMPONENTS, NOT AUTO RENDER/REFRESH CONTENTS (COMPONENTS)
const AlbumList = () => {
   //const albums = ['Album 1', 'Album 2']; //COMPONENTS LEVEL = LOCAL VARIABLE
   // state = //STATE IS A VARIABLE
   state = { albums: [] };
*/
//THIS CODE BLOCK WILL AUTO RENDER, THIS IS NOT A FUNCTIONAL BASE COMPONENTS
class AlbumList extends Component {
   state = { albums:[] }; //STATE IS A VARIABLE

   componentWillMount() {
      console.log('Will Mount');

      axios.get('http://59ed5606ff7d5d00128e085a.mockapi.io/api/albums')
      .then((data) => {
         this.setState({ albums: data }); //AUTO RENDER/REFRESH CONTENTS
      });
   }
   
   //RENDERALBUMS FUNCTION TO CHECK IF DATA IS AVAILABLE AT FIRST RENDER TO AVOID ERROR DISPLAY
   renderAlbums() {
      if (this.state.albums.length > 0) {
         return <Text>{this.state.albums[0].title}</Text>;
      //albums.map((response) => {
      //   return <Text>{response.data}</Text>;
      });
   }

   render () {
      console.log('render albums', this.state.albums);
      
      return (
         <View>
            {this.renderAlbums()}
         </View>
      );
   }
};

export default AlbumList;