import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {Appbar, Text} from 'react-native-paper';
import {useNavigate, useParams} from 'react-router-native';

const ChatScreen = () => {
  const navigate = useNavigate();
  const {chatId} = useParams();

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.BackAction
          onPress={() => {
            navigate('/');
          }}
        />
      </Appbar.Header>
      <View style={styles.chatContainer}>
        <Text>Chat Id:{chatId}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  chatContainer: {
    padding: 16,
  },
});

export default ChatScreen;
