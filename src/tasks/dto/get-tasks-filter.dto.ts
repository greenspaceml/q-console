import { TaskStatus } from 'src/tasks/task-status.enum';

export class GetTasksFilterDto {
  status?: TaskStatus;
  search?: string;
}
