import { Contact, Message } from '../types';

export const mockContacts: Contact[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    avatar: 'https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
    lastMessage: 'Hey, how are you?',
    unreadCount: 2,
    online: true,
  },
  {
    id: '2',
    name: 'Sentayhu Berhanu',
    avatar: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1931',
    lastMessage: 'Thanks for the update!',
    unreadCount: 0,
    online: true,
  },
  {
    id: '3',
    name: 'Emma Davis',
    avatar: 'https://plus.unsplash.com/premium_photo-1689977807477-a579eda91fa2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070',
    lastMessage: 'See you tomorrow',
    unreadCount: 1, 
    online: false,
  },
  {
    id: '4',
    name: 'Alex Rodriguez',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
    lastMessage: 'Great work on the project',
    unreadCount: 0,
    online: true,
  },
];

export const mockMessages: Record<string, Message[]> = {
  '1': [
    {
      id: '1',
      text: 'Hi there! How are you doing?',
      sender: 'other',
      timestamp: new Date(Date.now() - 3600000),
      read: true,
    },
    {
      id: '2',
      text: 'I\'m doing great! Thanks for asking.',
      sender: 'user',
      timestamp: new Date(Date.now() - 3000000),
      read: true,
    },
    {
      id: '3',
      text: 'Hey, how are you?',
      sender: 'other',
      timestamp: new Date(Date.now() - 600000),
      read: false,
    },
    {
      id: '4',
      text: 'Did you get a chance to review the documents?',
      sender: 'other',
      timestamp: new Date(Date.now() - 300000),
      read: false,
    },
  ],
  '2': [
    {
      id: '1',
      text: 'Can you send me the latest report?',
      sender: 'other',
      timestamp: new Date(Date.now() - 7200000),
      read: true,
    },
    {
      id: '2',
      text: 'Sure, I just sent it to your email.',
      sender: 'user',
      timestamp: new Date(Date.now() - 7000000),
      read: true,
    },
    {
      id: '3',
      text: 'Thanks for the update!',
      sender: 'other',
      timestamp: new Date(Date.now() - 6800000),
      read: true,
    },
  ],
  '3': [
    {
      id: '1',
      text: 'Are we still meeting tomorrow?',
      sender: 'user',
      timestamp: new Date(Date.now() - 86400000),
      read: true,
    },
    {
      id: '2',
      text: 'See you tomorrow',
      sender: 'other',
      timestamp: new Date(Date.now() - 82800000),
      read: false,
    },
  ],
  '4': [
    {
      id: '1',
      text: 'I reviewed your code changes.',
      sender: 'other',
      timestamp: new Date(Date.now() - 172800000),
      read: true,
    },
    {
      id: '2',
      text: 'Great work on the project',
      sender: 'other',
      timestamp: new Date(Date.now() - 172000000),
      read: true,
    },
  ],
};
