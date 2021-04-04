import {IEnvironeer} from "./IEnvironeer";
import firebase from "firebase/app"
require('firebase/database')


var firebaseConfig = {
    apiKey: "AIzaSyCyxdW0ew02JzUffidHIBlhZ2hpTVmfpZs",
    authDomain: "environeers-72cbc.firebaseapp.com",
    projectId: "environeers-72cbc",
    storageBucket: "environeers-72cbc.appspot.com",
    messagingSenderId: "170677792126",
    appId: "1:170677792126:web:e7f3bd12a61e702b74172f",
    measurementId: "G-DFK9EFX8PM"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var database = firebase.database()
// export module Environeer {
    export class Environeer implements IEnvironeer {
        private readonly tasks: string[];
        private points: number;
        private username: string;
        private password: string;

        private readonly pointsPerTask: number;


        constructor(pointsPerTask: number) {
            this.pointsPerTask = pointsPerTask;
            this.points = 0
            this.tasks = ["planted a tree", "reused a shopping bag", "walked instead of taking a car",
                "showered in a shorter time"];
        }

        // firebase update points
        public addPoints(numberOfTasks: number): number {
            this.points += numberOfTasks * this.pointsPerTask;
            //update points
           firebase.database().ref(this.username).set({
                password: this.password,
                points: this.points
            })
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
              
              return this.tasks
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
                
                this.points = 0;
                this.username = username 
                this.password = password
                
                firebase.database().ref(this.username).set({
                    password: this.password,
                    points: this.points
                })

                return "Sign up successful";
            
        }
    }
// }