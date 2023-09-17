import { View, Pressable, Text } from "react-native";
import IconCom from "react-native-vector-icons/MaterialCommunityIcons";
import { useContext } from "react";
import { DataContext } from "../../context/DataProvider";
import { ChatItem } from "../../constants/ChatOverviewData";




function ChatInitialItem({ data }: { data: ChatItem }) {
    const {setInitMessage } = useContext(DataContext);

    const selectedInitialMessage = (message: string ) => 
            setInitMessage(message)

    



    return (
        <View style={{ display: 'flex', marginTop: 5, justifyContent: 'center', alignItems: 'center', marginBottom: 20 }}>
            <IconCom name={data.Icon} size={30} />
            <Text style={{ fontWeight: "600", marginBottom: 20, marginTop: 5, fontSize: 20 }}> {data.title}</Text>
            <Pressable onPress={() => selectedInitialMessage(data.texts[0].text)} style={{ marginBottom: 5, backgroundColor: "#D8D8D8", paddingVertical: 3, padding: 10, borderRadius: 10 }}  >
                <Text>{data.texts[0].text}</Text>
            </Pressable>
            <Pressable onPress={() => selectedInitialMessage(data.texts[1].text)} style={{ marginBottom: 5, backgroundColor: "#D8D8D8", paddingVertical: 3, padding: 10, borderRadius: 10 }}  >
                <Text>{data.texts[1].text}</Text>
            </Pressable>

        </View>
    )

}

export default ChatInitialItem