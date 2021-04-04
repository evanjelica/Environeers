import {IEnvironeer} from "./IEnvironeer";
// export module Environeer {
    export class Environeer implements IEnvironeer {
        private readonly tasks: string[];
        private points: number;
        private username: string;

        private readonly pointsPerTask: number;


        constructor(pointsPerTask: number) {
            this.pointsPerTask = pointsPerTask;
            this.tasks = ["planted a tree", "reused a shopping bag", "walked instead of taking a car",
                "showered in a shorter time"];
        }

        // firebase update points
        public addPoints(numberOfTasks: number): number {
            this.points += numberOfTasks * this.pointsPerTask;
            //update points
            return this.points;
        }

        public addTask(task: string): string[] {
            this.tasks.push(task);
            return this.tasks;
        }

        public getPoints(): number {
            return this.points;
        }

        public getTasks(): string[] {
            return this.tasks;
        }

        // Need username collection
        public login(username: string, password: string): string {
            let usernameCollection = {password: "", points: 0};
            if (password === usernameCollection.password) {
                this.points = usernameCollection.points;
                this.username = username;
                return "Login successful";
            } else throw new Error("Incorrect Username or Password");
        }

        // Update points in firebase entry
        public removePoints(tasksToRemove: number): number {
            this.points -= tasksToRemove * this.pointsPerTask;
            //update points
            return this.points;
        }

        // Need list of all keys from firebase and add username
        public signUp(username: string, password: string): string {
            let usernames = [] // list of all usernames
            if (usernames.includes(username)) {
                throw new Error("Username already exists");
            } else {
                this.points = 0;
                // add username entry to database
                return "Sign up successful";
            }
        }
    }
// }