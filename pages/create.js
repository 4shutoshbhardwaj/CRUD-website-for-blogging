import navbar from "../components/navbar.js";

document.querySelector("#navbar_div").innerHTML=navbar();

let createBlog=document.querySelector("#createBlog").addEventListener("click",async()=>{
    try {
        let blogData={
            title:document.querySelector("#title").value,
            body:document.querySelector("#body").value,
            author:document.querySelector("#author").value,
            gender:document.querySelector("#gender").value
        }
        let res=await fetch(`http://localhost:3000/blogs`,{
            method:"POST",
            body:JSON.stringify(blogData),
            headers:{
                "Content-Type":"application/json"
            }
        });
        window.location.href="main.html";
    } catch (err) {
        console.log(err);
    }
})