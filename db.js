
const mysql=require("mysql");

var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"final12"
})
con.connect((err)=> {
    if (err) {
        console.log("Error", err);
    }
    //
    // con.query("create database final12",(err,res)=>{
    //     if(res){
    //         console.log('Connection Success')
    //     }
    // });
    // con.query(
    //     "create table dept (did Integer primary key auto_increment,dname varchar(20))",
    //     (err, result) => {
    //         if (err) {
    //             console.log("Error", err);
    //         }
    //         if (result) {
    //             console.log("Table Created");
    //
    //         }
    //});
    // con.query(
    //     "create table emp (eid integer primary key auto_increment,ename varchar(50),age integer,deptid integer,foreign key (deptid) references dept (did) )",
    //     (err, result) => {
    //         if (err) {
    //             console.log("Error", err);
    //         }
    //         if (result) {
    //             console.log("Table Created");
    //
    //         }
    //     });
});
module.exports={con};


