import * as React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {Avatar, Text} from 'react-native-paper';
import {useNavigate} from 'react-router-native';

const ChatsScreen = () => {
  const navigate = useNavigate();

  const friends = [
    {
      id: 1,
      name: 'John Doe',
    },
    {
      id: 2,
      name: 'Med Doe',
    },
    {
      id: 3,
      name: 'John Doe',
    },
  ];

  return (
    <View style={styles.container}>
      {friends.map(friend => (
        <Pressable
          key={friend.id}
          onPress={() => navigate(`/chat/${friend.id}`)}>
          <View style={styles.friend}>
            <Avatar.Image
              size={72}
              style={styles.profilePicture}
              source={{
                uri: `https://randomuser.me/api/portraits/men/${friend.id}.jpg`,
              }}
            />
            <View>
              <Text>{friend.name}</Text>
              <Text>Hey there! I am using WhatsApp</Text>
            </View>
          </View>
        </Pressable>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
  },
  friend: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  profilePicture: {
    marginRight: 8,
  },
});

export default ChatsScreen;
