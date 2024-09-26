import connection from "../db.js";

const deleteTask = (taskid)=>{
    connection.connect((err)=>{
        if(err) throw err;
        connection.query(`SELECT * FROM ${process.env.TABLE_NAME} WHERE taskid="${taskid}"`,(err,results,fields)=>{
            if(results.length===0) {
                console.log("No task found with this id !!");
            }else{
                connection.query(`DELETE FROM ${process.env.TABLE_NAME} WHERE taskid="${taskid}"`,(err,result)=>{
                    if(err) throw err;
                    console.log("Task deleted successfully..");
                })
            }
            connection.end();
        })
       
    })
}

export default deleteTask;