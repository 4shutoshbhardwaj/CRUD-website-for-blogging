import {getData} from "../script/getData.js";
import navbar from "../components/navbar.js";
import {dispData} from "../script/dispData.js";

document.querySelector("#navbar_div").innerHTML=navbar();

let tableBody=document.querySelector("#table-body");

const initFunc=async()=>{
    try {
        let blogData=await getData(`http://localhost:3000/blogs`);
        console.log(blogData);
        dispData(blogData,tableBody);
    } catch (err) {
        console.log(err);
    }
}

initFunc();