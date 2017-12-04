import React from 'react';
import { StatusBar, View } from 'react-native';

import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

const App = () => {
	return (
		<View style={{ flex: 1, backgroundColor: '#0C508B' }}>
         <StatusBar
            barStyle='default'
            backgroundColor='transparent'
            translucent
         />
			<Header />
			<AlbumList />
		</View>
	);
};

export default App;
