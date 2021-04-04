export interface IEnvironeer {
    signUp(username: string, password: string): string;
    login(username: string, password: string): string;
    addPoints(numberOfTasks: number): number;
    removePoints(numberOfTasks: number): number;
    getPoints(): number;
    addTask(task: string): string[];
    getTasks(): string[];
}
