export interface Message {
  id: string;
  text: string;
  sender: 'user' | 'other';
  timestamp: Date;
  read: boolean;
}

export interface Contact {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  unreadCount: number;
  online: boolean;
}
