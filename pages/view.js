import {getData} from "../script/getData.js";
import navbar from "../components/navbar.js";

document.querySelector("#navbar_div").innerHTML=navbar();

let blogId=JSON.parse(localStorage.getItem("blogId"))||"";

let root=document.querySelector("#root");

const dispData=(data,parentNode)=>{
    parentNode.innerHTML="";
    // {author,body,gender,id,title}
    let title=document.createElement("p");
    title.textContent="Title : "+data.title;
    let author=document.createElement("p");
    author.textContent="Author : "+data.author;
    let body=document.createElement("p");
    body.textContent="Body : "+data.body;

    parentNode.append(title,body,author);
}

const initFunc=async()=>{
    try {
        let blogData=await getData(`http://localhost:3000/blogs/${blogId}`);
        console.log(blogData);
        dispData(blogData,root);
    } catch (err) {
        console.log(err);
    }
}

initFunc(blogId);