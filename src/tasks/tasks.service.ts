import { Injectable } from '@nestjs/common';
import { Task } from './task.model';
import { v4 as uuid } from 'uuid';
import { CreateTaskDto } from './dto/create-task.dto';
@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTasks(): Task[] {
    return this.tasks;
  }

  reopenTask(id: string): Task {
    const task = this.tasks.find((task) => task.id === id);

    if (task.completed && task.reopened < 2) {
      task.reopened++;
      task.completed = false;
    }

    return task;
  }

  createTask(createTaskDto: CreateTaskDto): Task {
    const { description, authorName, authorEmail } = createTaskDto;

    const task: Task = {
      id: uuid(),
      description,
      authorName,
      authorEmail,
      completed: false,
      reopened: 0,
    };

    this.tasks.push(task);

    return task;
  }
}
