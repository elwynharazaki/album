import React from 'react';
import { View } from 'react-native';

import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

//THIS IS CALLED FUNCTIONAL COMPONENTS
const App = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#0C508B'}}>
      <Header title={'ALBUMS'} />
        <AlbumList />
    </View>
  );
};

export default App;