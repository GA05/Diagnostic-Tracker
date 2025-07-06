
export enum Priority {
  Low = 'Low',
  Medium = 'Medium',
  High = 'High',
  Critical = 'Critical',
}

export enum Status {
  Open = 'Open',
  InProgress = 'In Progress',
  Resolved = 'Resolved',
  Closed = 'Closed',
}

export interface Ticket {
  id: string;
  description: string;
  assignee: string;
  status: Status;
  priority: Priority;
  createdAt: Date;
  resolvedAt?: Date;
}

export type View = 'tracker' | 'dashboard';
