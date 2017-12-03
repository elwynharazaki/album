import { Text, View } from 'react-native';
import React from 'react';

const Header = (props) => {
	const { textStyle, headerStyle } = styles;

	return (
		<View style={headerStyle}>
			<Text style={textStyle}>{props.title}</Text>
		</View>
	);
};

const styles = {
	headerStyle: {
		alignItems: 'center',
		backgroundColor: '#0C508B',
		elevation: 2,
		shadowColor: '#083861',
		shadowOpacity: 0.9
   },

   textStyle: {
		color: '#6D96B9',
		fontSize: 30,
		padding: 5
   }
};

export default Header;
