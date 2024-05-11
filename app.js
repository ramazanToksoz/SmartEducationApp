const express = require('express');
const app=express()

// tepmlete engine
app.set("view engine","ejs")

//middleware
app.use(express.static("public"))


app.get("/",(req,res )=> {
  res.status(200).render("index",{
    page_name:"index"
  })
})
app.get("/about",(req,res )=> {
  res.status(200).render("about",{
    page_name:"about"
  })
})




const PORT=3000
app.listen(PORT,(req,res) => {
  console.log(`port listening ${PORT}`);
})