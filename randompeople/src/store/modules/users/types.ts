export enum ActionTypes {
  dataUsersRequest = 'USERS_REQUEST',
  dataUsersSuccess = 'USERS_SUCCESS',
  dataUsersFailure = 'USERS_FAILURE',
}

interface IName {
  first: string;
  last: string;
  title: string;
}

interface ILocation {
  city: string;
  country: string;
  state: string;
}

interface Iid {
  uuid: string;
}

interface IPicture {
  large: string;
  medium: string;
  thumbnail: string;
}


export interface iUser {
  name: IName;
  gender: string;
  picture: IPicture;
  email: string;
  location:  ILocation;
  login: Iid;
  phone: string;
  cell: string;
}

export interface IUserState {
  data: iUser[];
}