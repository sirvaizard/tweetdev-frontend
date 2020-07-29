export interface Tweet {
  id: string;
  author_id: string;
  content: string;
  language: string;
  createdAt: string;
  time?: string;
  author: {
    username: string;
    name: string;
    avatar: {
      url: string;
    }
  }
}