import React from 'react';
import ParticipantView from './ParticipantView';

const ParticipantList = ({participants}: any) => {
  return participants.map((p: any) => (
    <ParticipantView key={p} participantId={p} />
  ));
};

export default ParticipantList;