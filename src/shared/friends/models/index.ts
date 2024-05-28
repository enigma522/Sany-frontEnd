import {UserDetails} from '../../auth/models';

export interface ActiveFriend extends UserDetails {
  isActive: boolean;
}
