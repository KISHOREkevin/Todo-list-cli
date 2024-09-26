#!/usr/bin/env node --env-file=.env
import readline from "readline";
import createTask from "./utils/createtasks.js";
import deleteTask from "./utils/deletetask.js";
import listTasks from "./utils/listtasks.js";
import updateTask from "./utils/updatetask.js";

const choice = process.argv[2];

const readInput = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
switch(choice){
    case "--help":
        console.log("-------------------------------------");
        console.log("My Todolist Project\nSyntax : task [argument]\nArguments:\n --list - to see added tasks\n --add - for adding task\n --update - update the task\n --delete - delete a task\n for further information refer documentation.");
        console.log("-------------------------------------");
        readInput.close();
        break;
    case "--add":
        console.log("Adding the task ...\n");
        readInput.question("taskname : ",(task)=>{
            createTask(task);
            readInput.close();
        });
        break;
    case "--list":
        listTasks();
        readInput.close();
        break;
    case "--update":
        console.log("Updating the task...\n");
        readInput.question("taskid : ",(taskid)=>{
            readInput.question("taskname: ",(taskname)=>{
               
                updateTask(taskid,taskname);
                
                readInput.close();
            })
            
        });
        
        break;
    case "--delete":
        console.log("Deleting the task ...\n");
        readInput.question("taskid : ",(taskid)=>{
            deleteTask(taskid);
            readInput.close();
        });
        break;
    default:
        console.log("type '--help' for more information...");
        readInput.close();
        break;
}

