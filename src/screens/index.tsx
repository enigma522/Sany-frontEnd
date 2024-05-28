import React, {useContext, useState} from 'react';
import {View} from 'react-native';

import {NativeRouter, Route, Routes} from 'react-router-native';
import {BottomNavigation as NavScreens, Text} from 'react-native-paper';

import {AuthContext} from '../shared/auth/contexts/auth.context';
import {NavRoutes} from '../shared/constants/navRoutes';
import RegisterScreen from './register';
import LoginScreen from './login';
import ChatScreen from './chat';
import ChatsScreen from './chats';

const Screens = () => {
  const {isLoggedIn} = useContext(AuthContext);

  const [index, setIndex] = useState(0);
  const [routes] = useState(NavRoutes);

  const renderScene = NavScreens.SceneMap({
    chats: () => <ChatsScreen />,
    calls: () => <Text>Calls</Text>,
    people: () => <Text>People</Text>,
    stories: () => <Text>Stories</Text>,
  });

  const renderNavScreensRoute = () => {
    const paths = ['/', '/login'];

    return paths.map(path => (
      <Route
        key="path"
        path={path}
        element={
          // eslint-disable-next-line react-native/no-inline-styles
          <View style={{flex: 1, marginTop: 32}}>
            <NavScreens
              navigationState={{index, routes}}
              onIndexChange={setIndex}
              renderScene={renderScene}
            />
          </View>
        }
      />
    ));
  };

  return (
    <NativeRouter>
      {isLoggedIn ? (
        <Routes>
          {renderNavScreensRoute()}
          <Route path="/chat/:friendId" element={<ChatScreen />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<RegisterScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/login" element={<LoginScreen />} />
        </Routes>
      )}
    </NativeRouter>
  );
};

export default Screens;
