import * as React from 'react';
import {
  PaperProvider,
  BottomNavigation as Screens,
  Text,
} from 'react-native-paper';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import ChatsScreen from './src/screens/chats';
import {NativeRouter, Route, Routes} from 'react-router-native';
import ChatScreen from './src/screens/Chat';

const MusicRoute = () => <ChatsScreen />;

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;

const NotificationsRoute = () => <Text>Notifications</Text>;

function App(): JSX.Element {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'chats', title: 'Chats', focusedIcon: 'chat'},
    {key: 'calls', title: 'Calls', focusedIcon: 'video'},
    {key: 'people', title: 'People', focusedIcon: 'account'},
    {
      key: 'notifications',
      title: 'Notifications',
      focusedIcon: 'bell',
      unfocusedIcon: 'bell-outline',
    },
  ]);

  const renderScene = Screens.SceneMap({
    chats: MusicRoute,
    calls: AlbumsRoute,
    people: RecentsRoute,
    notifications: NotificationsRoute,
  });

  return (
    <SafeAreaProvider>
      <PaperProvider>
        <NativeRouter>
          <Routes>
            <Route
              path="/"
              element={
                <Screens
                  navigationState={{index, routes}}
                  onIndexChange={setIndex}
                  renderScene={renderScene}
                />
              }
            />
            <Route path="/chat/:chatId" element={<ChatScreen />} />
          </Routes>
        </NativeRouter>
      </PaperProvider>
    </SafeAreaProvider>
  );
}

export default App;
