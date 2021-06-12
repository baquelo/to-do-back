export interface Task {
  id: string;
  description: string;
  authorName: string;
  authorEmail: string;
  completed: boolean;
  reopened: number;
}
