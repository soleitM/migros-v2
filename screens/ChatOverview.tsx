import { FlatList, View, StyleSheet, } from "react-native";

import ChatInitialItem from "../components/chat/ChatInitialItem";
import { ChatOverviewData } from "../constants/ChatOverviewData";


    function ChatOverview() {

    return (

        <View >
            <FlatList
                style={styles.listContainer}
                data={ChatOverviewData}
                renderItem={({ item }) => <ChatInitialItem data={item} />}
                keyExtractor={(item) => item.id.toString()}

            />
        </View>
    )
}


const styles = StyleSheet.create({
    listContainer: {
        flex: 1,
        width: '100%',
        marginBottom: 35,
    },
});


export default ChatOverview