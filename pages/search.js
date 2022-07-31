import navbar from "../components/navbar.js";
import {getData} from "../script/getData.js";
import {dispData} from "../script/dispData.js";

document.querySelector("#navbar_div").innerHTML=navbar();

let tableBody=document.querySelector("#table-body");
document.querySelector("#searchBtn").addEventListener("click",async()=>{
    try {
        let search=document.querySelector("#search").value;
        let data=await getData(`http://localhost:3000/blogs?q=${search}`);
        console.log(data);
        dispData(data,tableBody);
    } catch (err) {
        console.log(err);
    }
});