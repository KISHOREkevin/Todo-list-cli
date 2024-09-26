import connection from "../db.js";

const listTasks= ()=>{
    connection.connect((err)=>{
      if(err) throw err;
      connection.query(`SELECT * FROM ${process.env.TABLE_NAME}`,(err,results,fields)=>{
        if(err) throw err;
        if(results.length===0){
          console.log("No tasks found !!");
        }else{
          console.log("Tasks in your list")
          results.forEach((task,idex) => {
            console.log("---------------------------------")
            console.log(`${idex}) taskid : ${task.taskid}\n   task : ${task.taskname}`)
          });
        }

      })
      connection.end();
    })
}

export default listTasks