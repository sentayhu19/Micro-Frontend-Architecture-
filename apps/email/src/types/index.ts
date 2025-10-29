export interface Email {
  id: string;
  from: string;
  subject: string;
  preview: string;
  body: string;
  timestamp: Date;
  read: boolean;
  starred: boolean;
  labels: string[];
}

export interface Folder {
  id: string;
  name: string;
  icon: string;
  count: number;
}
