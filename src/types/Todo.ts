export interface ITodo {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  deadline?: string;
}
export type FilterType = "all" | "completed" | "active";
