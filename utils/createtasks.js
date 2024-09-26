import connection from "../db.js";
import { v4 as uuidv4 } from "uuid";
import {randomUUID} from "crypto";
const createTask = (taskname)=>{
   
    connection.connect((err)=>{
        if(err) throw err;
        connection.query(`SELECT * FROM ${process.env.TABLE_NAME}`,(err,results,fields)=>{
            if(err) throw err;
            connection.query(`INSERT INTO ${process.env.TABLE_NAME} VALUES ("${randomUUID()}","${taskname}")`,(err,result)=>{
                if(err) throw err;
                console.log("Task created!!!");
            })
            connection.end();
        })
        
    })
}

export default createTask;