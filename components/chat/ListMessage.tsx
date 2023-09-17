import React, { useState, useContext, useEffect } from 'react';
import { StyleSheet, View, FlatList, RefreshControl } from 'react-native';

import { useFetchMessage } from '../../hooks/useFetchMessage';
import Message from './Message';
import { DataContext } from '../../context/DataProvider';
import { MessageType } from '../../types/types';


const ListMessage = () => {

	const [messages, setMessages] = useState<MessageType[]>([]);
	
	const { textInput } = useContext<any>(DataContext);
	
	 const { data } = useFetchMessage(textInput);


	useEffect(() => {
		
		if (textInput?.text) {
			setMessages((messages) => [...messages, textInput]);
		}

		if (!!data?.text) {
			setMessages((messages) => [...messages, data]);
		}

	}, [data, data.text, textInput.text]);
	

	return (
		<View>
			<FlatList
				style={styles.listContainer}
				data={messages}
				renderItem={({ item }) => <Message message={item} />}
				keyExtractor={(item) => item.id.toString()}
				refreshControl={
					<RefreshControl
						refreshing={false}
						onRefresh={() => setMessages([])}
					/>
				}
			/>
		</View>
	);
};

export default ListMessage;

const styles = StyleSheet.create({
	listContainer: {
		flex: 1,
		width: '100%',
		marginBottom: 35,
	},
});