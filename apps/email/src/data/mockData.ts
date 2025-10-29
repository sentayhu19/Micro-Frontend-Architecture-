import { Email, Folder } from '../types';

export const mockFolders: Folder[] = [
  { id: 'inbox', name: 'Inbox', icon: '📥', count: 3 },
  { id: 'sent', name: 'Sent', icon: '📤', count: 0 },
  { id: 'drafts', name: 'Drafts', icon: '📝', count: 2 },
  { id: 'starred', name: 'Starred', icon: '⭐', count: 1 },
  { id: 'trash', name: 'Trash', icon: '🗑️', count: 0 },
];

export const mockEmails: Email[] = [
  {
    id: '1',
    from: 'john.doe@company.com',
    subject: 'Q4 Project Review Meeting',
    preview: 'Hi team, I wanted to schedule a meeting to review our Q4 project progress...',
    body: `Hi team,

I wanted to schedule a meeting to review our Q4 project progress and discuss next steps for Q1.

The meeting will cover:
- Project milestones achieved
- Budget review
- Resource allocation for Q1
- Risk assessment

Please let me know your availability for next week.

Best regards,
John`,
    timestamp: new Date(Date.now() - 3600000),
    read: false,
    starred: false,
    labels: ['work', 'important'],
  },
  {
    id: '2',
    from: 'hr@company.com',
    subject: 'Employee Benefits Update 2024',
    preview: 'Dear employees, We are excited to announce updates to our benefits package...',
    body: `Dear employees,

We are excited to announce updates to our benefits package for 2024.

New benefits include:
- Enhanced health insurance coverage
- Increased 401(k) matching
- Additional paid time off
- Remote work flexibility

Please review the attached documentation and reach out if you have any questions.

HR Department`,
    timestamp: new Date(Date.now() - 7200000),
    read: false,
    starred: true,
    labels: ['hr', 'benefits'],
  },
  {
    id: '3',
    from: 'marketing@company.com',
    subject: 'New Product Launch Campaign',
    preview: 'Team, The new product launch campaign is scheduled for next month...',
    body: `Team,

The new product launch campaign is scheduled for next month. Here's what we need to finalize:

1. Marketing materials
2. Social media strategy
3. PR outreach
4. Launch event planning

Let's sync up this week to ensure we're on track.

Marketing Team`,
    timestamp: new Date(Date.now() - 86400000),
    read: false,
    starred: false,
    labels: ['marketing', 'projects'],
  },
  {
    id: '4',
    from: 'tech-support@company.com',
    subject: 'System Maintenance Notification',
    preview: 'This is to inform you about scheduled system maintenance...',
    body: `Dear users,

This is to inform you about scheduled system maintenance on Saturday, 2AM - 6AM EST.

During this time:
- Email services may be unavailable
- Some applications might experience downtime
- Please save your work before the maintenance window

We apologize for any inconvenience.

IT Support`,
    timestamp: new Date(Date.now() - 172800000),
    read: true,
    starred: false,
    labels: ['it', 'maintenance'],
  },
  {
    id: '5',
    from: 'jane.smith@company.com',
    subject: 'Team Building Event - Save the Date',
    preview: 'Hi everyone! We are organizing a team building event next month...',
    body: `Hi everyone!

We are organizing a team building event next month to celebrate our achievements and strengthen team bonds.

Details:
- Date: TBD (voting poll attached)
- Location: Outdoor Adventure Park
- Activities: Team challenges, BBQ, networking

Please fill out the survey to help us plan accordingly!

Looking forward to seeing everyone there!
Jane`,
    timestamp: new Date(Date.now() - 259200000),
    read: true,
    starred: false,
    labels: ['social', 'events'],
  },
];
