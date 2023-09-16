import { View, Text } from "react-native";
import Layout from "../components/chat/ChatLayout";
import ListMessage from "../components/chat/ListMessage";
import InputMessage from "../components/chat/InputMessage";
import { useState } from "react";

function HomeScreen() {
  let state = false
  return (


       <Layout>
        <ListMessage />
        <InputMessage />
      </Layout> 

  );
}


export default HomeScreen