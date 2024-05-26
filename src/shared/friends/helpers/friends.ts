import {FriendRequest} from '../../../screens/people/models';
import {UserDetails} from '../../auth/models';

const getFriends = (friendRequests: FriendRequest[], userId: number) => {
  const friends = friendRequests.map(friendRequests => {
    const isUserCreator = userId === friendRequests.creator.id;
    const friendDetails = isUserCreator
      ? friendRequests.receiver
      : friendRequests.creator;

    const {id, firstName, lastName, email} = friendDetails;

    return {
      id,
      email,
      firstName,
      lastName,
    } as UserDetails;
  });

  return friends;
};
