export const CURRENT_USER = {
  id: '1',
  name: 'Michael Johnson',
  avatar: 'MJ',
  avatarColor: 'bg-red-500',
  status: 'online',
};

export const USERS = [
  {
    id: '2',
    name: 'Olivia McKinsey',
    avatar: 'O',
    avatarColor: 'bg-blue-500',
    status: 'online',
    email: 'olivia.Mckinsey@gmail.com',
    phone: '+1 (312) 555-0134',
  },
  {
    id: '3',
    name: 'Sara Williams',
    avatar: 'E',
    avatarColor: 'bg-yellow-500',
    status: 'online',
  },
  {
    id: '4',
    name: 'Frank Thompson',
    avatar: 'F',
    avatarColor: 'bg-green-500',
    status: 'away',
  },
  {
    id: '5',
    name: 'Grace Lee',
    avatar: 'G',
    avatarColor: 'bg-orange-500',
    status: 'offline',
  },
  {
    id: '6',
    name: 'Henry Adams',
    avatar: 'H',
    avatarColor: 'bg-yellow-400',
    status: 'online',
  },
  {
    id: '7',
    name: 'Isabella Martinez',
    avatar: 'I',
    avatarColor: 'bg-orange-400',
    status: 'offline',
  },
  {
    id: '8',
    name: 'James Brown',
    avatar: 'J',
    avatarColor: 'bg-purple-500',
    status: 'online',
  },
  {
    id: '9',
    name: 'Katherine White',
    avatar: 'K',
    avatarColor: 'bg-gray-500',
    status: 'offline',
  },
  {
    id: '10',
    name: 'Lucas Green',
    avatar: 'L',
    avatarColor: 'bg-cyan-500',
    status: 'online',
  },
  {
    id: '11',
    name: 'James West',
    avatar: 'JW',
    avatarColor: 'bg-indigo-500',
  },
];

export const MESSAGES = [
  {
    id: '1',
    senderId: '2',
    content: 'Hi, I recently joined Fit4Life and I\'m trying to access my workout plan, but I can\'t login. Can you help?',
    timestamp: '23:08',
    read: true,
  },
  {
    id: '2',
    senderId: '1',
    content: 'Hello Olivia 👋 I\'m Michael, your AI customer support assistant. Let\'s fix this quickly. Could you confirm the email address?',
    timestamp: '23:08',
    read: true,
  },
  {
    id: '3',
    senderId: '2',
    content: 'Yes, it\'s olivia.Mckinsey@gmail.com',
    timestamp: '23:16',
    read: true,
  },
  {
    id: '4',
    senderId: '1',
    content: 'Thanks! Looks like your reset wasn\'t completed. I\'ve sent a new link - please check your inbox.',
    timestamp: '23:16',
    read: true,
  },
  {
    id: '5',
    senderId: '2',
    content: 'I see it. resetting now...',
    timestamp: '23:17',
    read: true,
  },
  {
    id: '6',
    senderId: '2',
    content: 'Done! I\'m logged in. Thanks!',
    timestamp: '23:20',
    read: true,
  },
  {
    id: '7',
    senderId: '1',
    content: 'Perfect! 🎉 Your plan is ready under "My Programs". Since you\'re starting out, I suggest our Premium Guide - it boosts results and is 20% off here 👉 www.Fit4Life.com/Premium',
    timestamp: '23:20',
    read: true,
  },
  {
    id: '8',
    senderId: '2',
    content: 'Oh my god 😍 I\'ll try it ASAP, thank you so much!!!',
    timestamp: '23:23',
    read: true,
  },
];

export const CONVERSATIONS = [
  {
    id: '1',
    participant: USERS[0],
    lastMessage: MESSAGES[MESSAGES.length - 1],
    messages: MESSAGES,
    unreadCount: 0,
  },
  {
    id: '2',
    participant: USERS[1],
    lastMessage: {
      id: '20',
      senderId: '3',
      content: 'Good Evening, Emily! Hope you are...',
      timestamp: '23:16',
      read: true,
    },
    messages: [],
    unreadCount: 0,
  },
  {
    id: '3',
    participant: USERS[2],
    lastMessage: {
      id: '30',
      senderId: '4',
      content: 'Thank you for signing up Frank! If t...',
      timestamp: '22:28',
      read: true,
    },
    messages: [],
    unreadCount: 0,
  },
  {
    id: '4',
    participant: USERS[3],
    lastMessage: {
      id: '40',
      senderId: '5',
      content: 'I am sending you the report right a...',
      timestamp: '20:43',
      read: true,
    },
    messages: [],
    unreadCount: 0,
  },
  {
    id: '5',
    participant: USERS[4],
    lastMessage: {
      id: '50',
      senderId: '6',
      content: 'Thank you for filing out our survey!',
      timestamp: '17:37',
      read: true,
    },
    messages: [],
    unreadCount: 0,
  },
  {
    id: '6',
    participant: USERS[5],
    lastMessage: {
      id: '60',
      senderId: '7',
      content: 'I will update you soon Isabella!',
      timestamp: '16:01',
      read: true,
    },
    messages: [],
    unreadCount: 0,
  },
  {
    id: '7',
    participant: USERS[6],
    lastMessage: {
      id: '70',
      senderId: '8',
      content: 'Hello James! Let\'s collaborate on...',
      timestamp: '13:44',
      read: true,
    },
    messages: [],
    unreadCount: 0,
  },
  {
    id: '8',
    participant: USERS[7],
    lastMessage: {
      id: '80',
      senderId: '9',
      content: 'Hi Katherine, looking forward to our...',
      timestamp: '09:02',
      read: true,
    },
    messages: [],
    unreadCount: 0,
  },
  {
    id: '9',
    participant: USERS[8],
    lastMessage: {
      id: '90',
      senderId: '10',
      content: 'Hey Lucas! Ready for the holiday...',
      timestamp: '08/06',
      read: true,
    },
    messages: [],
    unreadCount: 0,
  },
];

export const INBOX_CATEGORIES = [
  { id: '1', name: 'My Inbox', count: 0 },
  { id: '2', name: 'All', count: 28 },
  { id: '3', name: 'Unassigned', count: 5 },
];

export const TEAMS = [
  { id: '1', name: 'Sales', icon: '👥', count: 7 },
  { id: '2', name: 'Customer Support', icon: '💬', count: 16 },
];

export const CHANNELS = [
  { id: '1', name: 'Fit4Life', icon: '🏋️' },
  { id: '2', name: 'Product', icon: '📦' },
];

export const CONTACT = {
  id: 'c1',
  firstName: 'Olivia',
  lastName: 'Mckinsey',
  email: 'olivia.Mckinsey@gmail.com',
  phone: '+1 (312) 555-0134',
  assignedTo: USERS[9],
  team: 'Sales Team',
  labels: [
    { id: 'l1', name: 'Closed Won', color: 'blue' },
    { id: 'l2', name: 'Chicago', color: 'green' },
  ],
};

