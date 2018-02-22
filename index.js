const express=require("express");
const bodyParser=require("body-parser")
const mysql=require("mysql");
const {con}=require('./db');

const app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.send("Hello");
})
app.post("/dept",(req,res)=>{
    con.query("insert into dept (dname) values('"+req.body.dname+"')",(err,result)=>
    {
        if(err)
        {
            console.log("Error",err);
        }
        else {

            console.log("1 Row Inserted");
        }
    });
})
app.get("/dept",(req,res)=>{
    con.query("select * from dept where flag=1",(err,result)=>
    {
        if(err)
        {
            console.log("Error",err);
        }
        else {
            console.log(result);
        }
    });
})
app.get("/emp",(req,res)=>{
    con.query("select * from emp where flag=1",(err,result)=>
    {
        if(err)
        {
            console.log("Error",err);
        }
        else {
            res.send(result);
            console.log(result);
        }
    });
})
app.post("/emp",(req,res)=>{
    con.query("insert into emp (ename,age,deptid) values('"+req.body.ename+"',"+req.body.age+","+req.body.deptid+")",(err,result)=>
    {
        if(err)
        {
            console.log("Error",err);
        }
        else {
            console.log("1 Row Inserted");
        }
    });
})
app.put("/emp",(req,res)=>{
    con.query("update emp  set ename='"+req.body.ename+"',age="+req.body.age+",deptid="+req.body.deptid+" where eid="+req.body.id+"",(err,result)=>
    {
        if(err)
        {
            console.log("Error",err);
        }
        else {
            console.log("1 Row Updated");
        }
    });
})
app.delete("/emp",(req,res)=>{
    con.query("update emp set flag=false where eid="+req.body.id+"",(err,result)=>
    {
        if(err)
        {
            console.log("Error",err);
        }
        else {
            console.log("1 Row Deleted");
        }
    });
})
app.get("/empg",(req,res)=>{
    con.query("select d.dname,e.ename from emp e,dept d where e.deptid=d.did",(err,result)=>
    {
        if(err)
        {
            console.log("Error",err);
        }
        else {
            console.log(result);
        }
    });
})
app.post("/getdeptwiseSal",(req,res)=>{
    let dname=req.body.dname;

    con.query("call count_sal('"+dname+"')",(err,result)=>{
        if(err)
        {
            console.log("Error",err);
            res.send(err);
        }
        if(result)
        {
            res.send(result);
        }
    })
})

app.listen(5550);