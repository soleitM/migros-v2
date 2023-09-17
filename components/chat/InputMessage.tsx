import React, { useState, useContext, useEffect } from 'react';
import uuid from 'react-uuid';
import { FontAwesome } from '@expo/vector-icons';
import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';


import { DataContext } from '../../context/DataProvider';

const InputMessage = (apiEndpoint:string) => {
	const { setTextInput, initMessage } = useContext<any>(DataContext);
	const [text, setText] = useState<string>('');

	useEffect(() => setText(initMessage), [initMessage])

	const handleSendMessage = () => {

		if (!text.trim()) return;

		setTextInput({
			id: uuid(),
			text: text.trim(),
			user: {
				name: 'you',
				avatar: 'https://i.pravatar.cc/100?u=A08',
			},
			endpoint: apiEndpoint
		});
		setText('');
	};

	return (
		<View style={styles.inputMessage}>
			<TextInput
				style={styles.input}
				onChangeText={(text) => setText(text)}
				value={text}
			/>
			<TouchableOpacity style={styles.button} onPress={() => handleSendMessage()}>
				<FontAwesome name="send" size={24} color="white" />
			</TouchableOpacity>
		</View>
	);
};

export default InputMessage;

const styles = StyleSheet.create({
	inputMessage: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	input: {
		width: '75%',
		height: 50,
		padding: 10,
		fontSize: 14,
		textAlign: 'left',
		color: '#000',
		borderColor: '#10ac84',
		borderWidth: 1,
		borderRadius: 5,
	},
	button: {
		flex: 1,
		maxWidth: 60,
		justifyContent: 'center',
		alignItems: 'center',
		width: '15%',
		height: 50,
		marginLeft: 10,
		marginEnd: 10,
		textAlign: 'center',
		borderColor: '#10ac84',
		borderWidth: 1,
		borderRadius: 5,
		backgroundColor: '#10ac84',
	},
});