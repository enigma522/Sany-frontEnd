
export const createMeeting = async (): Promise<string> => {
  const res = await fetch('https://api.videosdk.live/v2/rooms', {
    method: 'POST',
    headers: {
      authorization: `${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiJhZDAyYzYyNi1lMzFkLTRlMTgtYmQ5ZS1jYjE2MDY0YjU1YzQiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTcxNjc3NTU4NywiZXhwIjoxNzE2ODYxOTg3fQ.bcqlGojcbrs91s7TkzP-u6sIij9vLwnzSpaxwCCHhjc"}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({}),
  });

  const {roomId} = await res.json();

  return roomId;
};