export interface Task {
    id: number;
    text: string;
    done: boolean;
}

export class TaskManager {
    private tasks: Task[];

    constructor(tasks: Task[] = []) {
        this.tasks = tasks;
    }

    addTask(text: string): void {
        if (text.trim() === '') return; // can't add blank tasks

        const newTask: Task = {
            id: Date.now(),
            text,
            done: false,
        };

        this.tasks.push(newTask);
    }

    toggleTask(id: number): void {
        this.tasks = this.tasks.map(task =>
            task.id === id ? { ...task, done: !task.done } : task
        );
    }

    deleteTask(id: number): void {
        this.tasks = this.tasks.filter(task => task.id !== id);
    }

    getTasks(): Task[] {
        return this.tasks;
    }
}