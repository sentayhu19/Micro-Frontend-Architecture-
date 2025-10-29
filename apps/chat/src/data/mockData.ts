import { Contact, Message } from '../types';

export const mockContacts: Contact[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    avatar: '/image/profile1.jpeg',
    lastMessage: 'Hey, how are you?',
    unreadCount: 2,
    online: true,
  },
  {
    id: '2',
    name: 'Mike Chen',
    avatar: '/image/profile2.jpeg',
    lastMessage: 'Thanks for the update!',
    unreadCount: 0,
    online: true,
  },
  {
    id: '3',
    name: 'Emma Davis',
    avatar: '/image/profile3.jpeg',
    lastMessage: 'See you tomorrow',
    unreadCount: 1, 
    online: false,
  },
  {
    id: '4',
    name: 'Alex Rodriguez',
    avatar: '/images/profile4.jpeg',
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
