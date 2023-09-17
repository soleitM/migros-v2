import { FlatList, View, StyleSheet, Text, Pressable } from "react-native";
import IconCom from "react-native-vector-icons/MaterialCommunityIcons";
import { useContext } from "react";
import { DataContext } from "../context/DataProvider";
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
        // backgroundColor: '#222f3e',
        marginBottom: 35,
    },
});


export default ChatOverview