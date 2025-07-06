
import { Priority, Status } from './types';

export const PRIORITY_OPTIONS: Priority[] = [Priority.Low, Priority.Medium, Priority.High, Priority.Critical];
export const STATUS_OPTIONS: Status[] = [Status.Open, Status.InProgress, Status.Resolved, Status.Closed];

export const PRIORITY_COLORS: Record<Priority, string> = {
  [Priority.Low]: 'bg-blue-500/20 text-blue-300 border border-blue-500/30',
  [Priority.Medium]: 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30',
  [Priority.High]: 'bg-orange-500/20 text-orange-300 border border-orange-500/30',
  [Priority.Critical]: 'bg-red-500/20 text-red-300 border border-red-500/30',
};

export const STATUS_COLORS: Record<Status, string> = {
  [Status.Open]: 'bg-gray-500/20 text-gray-300 border border-gray-500/30',
  [Status.InProgress]: 'bg-purple-500/20 text-purple-300 border border-purple-500/30',
  [Status.Resolved]: 'bg-green-500/20 text-green-300 border border-green-500/30',
  [Status.Closed]: 'bg-gray-700/20 text-gray-500 border border-gray-700/30',
};
