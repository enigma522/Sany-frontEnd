import {Text, View} from 'react-native';

import {
  useParticipant,
  MediaStream,
  RTCView,
} from '@videosdk.live/react-native-sdk';
import React from 'react';

const ParticipantView = ({participantId}: any) => {
  const {displayName, webcamStream, webcamOn} = useParticipant(participantId);

  return webcamOn && webcamStream ? (
    <RTCView
      streamURL={new MediaStream([webcamStream.track]).toURL()}
      objectFit={'cover'}
      style={{
        flex: 1,
        borderWidth: 1, 
        borderColor: 'black', 
        borderRadius: 5, 
      }}
    />
  ) : (
    <View
      style={{
        flex: 1,
        backgroundColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{fontSize: 16}}>{displayName}</Text>
    </View>
  );
};

export default ParticipantView;