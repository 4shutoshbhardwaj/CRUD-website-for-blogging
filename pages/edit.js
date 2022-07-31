import navbar from "../components/navbar.js";
import { getData } from "../script/getData.js";

document.querySelector("#navbar_div").innerHTML=navbar();

let blogId=JSON.parse(localStorage.getItem("blogId"))||"";

const initFunc=async(blogId)=>{
    try {
        let data=await getData(`http://localhost:3000/blogs/${blogId}`);
        document.querySelector("#title").value=data.title;
        document.querySelector("#body").value=data.body;
        document.querySelector("#author").value=data.author;
        document.querySelector("#gender").value=data.gender;
    } catch (err) {
        console.log(err);
    }
}

initFunc(blogId);

let editBlog=document.querySelector("#editBlog").addEventListener("click",async()=>{
    try {
        let blogData={
            title:document.querySelector("#title").value,
            body:document.querySelector("#body").value,
            author:document.querySelector("#author").value,
            gender:document.querySelector("#gender").value
        }
        let res=await fetch(`http://localhost:3000/blogs/${blogId}`,{
            method:"PUT",
            body:JSON.stringify(blogData),
            headers:{
                "Content-Type":"application/json"
            }
        });
        location.href="main.html";
    } catch (err) {
        console.log(err);
    }
});