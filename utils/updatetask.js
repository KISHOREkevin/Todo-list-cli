import connection from "../db.js";

let updateTask = (taskid,taskname)=>{
  connection.connect((err)=>{
    if(err) throw err;
    connection.query(`SELECT * FROM ${process.env.TABLE_NAME} WHERE taskid="${taskid}"`,(err,results,fields)=>{
      if(results.length===0){
        console.log("No task found with this id !!");
      }else{
        connection.query(`UPDATE ${process.env.TABLE_NAME} SET taskname="${taskname}" WHERE taskid="${taskid}"`,(err,result)=>{
          if(err) throw err;
          console.log("Task updated successfully!!!");
        })
      }
      connection.end();
    })
  })
}

export default updateTask