const sdtls=(key,value)=>{
    localStorage.setItem(key,JSON.stringify(value));
}

const dispData=(blogs,parentNode)=>{
    parentNode.innerHTML="";
    blogs.forEach(blog => {
        let tr=document.createElement("tr");
        let td1=document.createElement("td");
        td1.textContent=blog.id;
        let td2=document.createElement("td");
        td2.textContent=blog.title;
        let td3=document.createElement("td");
        td3.textContent=blog.author;
        let td4=document.createElement("td");
        let viewBtn=document.createElement("button");
        viewBtn.textContent="View";
        viewBtn.onclick=()=>{
            console.log(blog,"V");
            sdtls("blogId",blog.id);
            window.location.href="view.html";
        }
        td4.append(viewBtn);
        let td5=document.createElement("td");
        let editBtn=document.createElement("button");
        editBtn.textContent="Edit";
        editBtn.onclick=()=>{
            console.log(blog,"E");
            sdtls("blogId",blog.id);
            window.location.href="edit.html";
        }
        td5.append(editBtn);
        let td6=document.createElement("td");
        let deleteBtn=document.createElement("button");
        deleteBtn.textContent="Delete";
        deleteBtn.onclick=async()=>{
            console.log(blog,"D");
            let res=await fetch(`http://localhost:3000/blogs/${blog.id}`,{
                'method':"DELETE"
            });
            window.location.reload();
        }
        td6.append(deleteBtn);
        tr.append(td1,td2,td3,td4,td5,td6);
        parentNode.append(tr);
    });
}

export {dispData};