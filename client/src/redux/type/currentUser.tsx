interface CurrentUser {
  _id: string;
  name: string;
  profileImage: string;
  profileImg: string;
  role: string;
  taxiNumber?: string;
  phone?: string;
}

export default CurrentUser;
