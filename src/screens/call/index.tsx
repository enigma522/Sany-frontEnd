import React,{useContext} from 'react';
import {SafeAreaView} from 'react-native';

import {MeetingProvider} from '@videosdk.live/react-native-sdk';


import {FriendsContext} from '../../shared/friends/contexts/friends.context';
import MeetingView from './components/MeetingView';
import {AuthContext} from '../../shared/auth/contexts/auth.context';

const CallScreen = () => {
  const {userDetails} = useContext(AuthContext);
  const {callDetails} = useContext(FriendsContext);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#F6F6FF'}}>
      {callDetails && userDetails && (
        <MeetingProvider
          config={{
            meetingId: callDetails?.meetingId,
            micEnabled: false,
            webcamEnabled: true,
            name: `${userDetails?.id}`,
          }}
          token={"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiJhZDAyYzYyNi1lMzFkLTRlMTgtYmQ5ZS1jYjE2MDY0YjU1YzQiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTcxNjc3NTU4NywiZXhwIjoxNzE2ODYxOTg3fQ.bcqlGojcbrs91s7TkzP-u6sIij9vLwnzSpaxwCCHhjc"}> 
          <MeetingView />
        </MeetingProvider>
      )}
    </SafeAreaView>
  );
};

export default CallScreen;