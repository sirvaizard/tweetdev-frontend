export default interface User {
  user: {
    id: number;
    username: string;
    name: string;
    email: string;
    bio: string;
    github: string;
    avatar: string;
  }
  token: string;
}