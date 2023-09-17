import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Layout from "../components/chat/ChatLayout";
import ListMessage from "../components/chat/ListMessage";
import InputMessage from "../components/chat/InputMessage";
import { FontAwesome } from '@expo/vector-icons';

import React, { useState } from "react";
import Scanner from "../components/Scanner";
import ChatInit from "./ChatInit";

function HomeScreen() {

  const [chatStarted, setChatStarted] = useState(false);
  const [scannerOpened, setScannerOpened] = useState(false);


  const handleScanBarcode = () => {
    setScannerOpened(true);
  };


  return !chatStarted ? (
    <ChatInit onContinue={() => setChatStarted(true)} />) :
    
    (

      <Layout>
        {scannerOpened && (<Scanner />)}
        <ListMessage />
        <InputMessage />
        <TouchableOpacity style={styles.button} onPress={() => handleScanBarcode()}>
          <FontAwesome name="barcode" size={24} color="white" />
        </TouchableOpacity>
      </Layout>

    );
}

export default HomeScreen

const styles = StyleSheet.create({
  button: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    width: '15%',
    height: 50,
    marginLeft: 10,
    marginStart: 10,
    textAlign: 'center',
    borderColor: '#10ac84',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#10ac84',
  },
});