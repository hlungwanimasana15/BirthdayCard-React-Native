import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';

const { width, height } = Dimensions.get('window');

function Home() {
  const [recipient, setRecipient] = useState('');
  const [message, setMessage] = useState(['']);
  const [sender, setSender] = useState('');

  const addToCard = (text) => {
    setMessage((prevMessages) => {
      return [...prevMessages, text.trim()];
    });
  };

  const clearState = () => {
    setRecipient('');
    setMessage(['']);
    setSender('');
  };

  useEffect(() => {
    console.log(recipient);
  }, [recipient]);

  useEffect(() => {
    console.log(sender);
  }, [sender]);

  useEffect(() => {
    console.log(message);
  }, [message]);


  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.label}>Recipient:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setRecipient(text)}
          value={recipient}
        />

        <Text style={styles.label}>Message:</Text>
        <TextInput
          style={styles.input}
          multiline
          onChangeText={(text) => setMessage([text.trim()])}
          value={message[0]}
        />

        <Text style={styles.label}>Sender:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setSender(text)}
          value={sender}
        />

        <TouchableOpacity
          style={{ backgroundColor: 'pink', borderRadius: 5, padding: 10 }}
          onPress={() => clearState()}
        >
          <Text style={{ color: 'white' }}>Clear</Text>
        </TouchableOpacity>


        <View style={styles.display}>
          <ImageBackground
            source={require('../assets/frame.png')}
            style={styles.imageBackground}
          >
            <View style={styles.displayedText}>
              <Text style={styles.recipient}>To: {recipient}</Text>
              <Text style={styles.message}>{message ? message.join('\n') : ''}</Text>
              <Text style={styles.sender}>From: {sender}</Text>
            </View>
          </ImageBackground>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 180,
  },
  card: {
    padding: 16,
    borderRadius: 10,
    backgroundColor: '#f0f0f0',
    margin: 20,
    padding: 16,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    borderColor: 'pink',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    padding: 8,
  },
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    width: width - 40,
    height: height / 2,
    alignItems: 'center',
  },
  display: {
    marginTop: 10,


  },
  recipient: {
    fontSize: 20,
    color: 'gray',
    fontFamily: 'Arial',
    fontWeight: 'bold',
  },
  message: {
    fontSize: 20,
    color: 'gray',
    fontFamily: 'Arial',
   
  },
  sender: {
    fontSize: 20,
    color: 'gray',
    fontFamily: 'Arial',
    fontWeight: 'bold',
  },
  displayedText: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 350,
    padding: 20,
    marginBottom: 60,
    borderRadius: 10,
    textAlign: 'center',
  },

});

export default Home;
