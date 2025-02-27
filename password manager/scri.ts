const hidepassword=(password)=>{
    let hiddenpassword="";
    let i=0;
    for(i=0;i<password.length;i++){
        hiddenpassword+="*";
    }
    return hiddenpassword;
}
const copycontent=(content)=>{
    navigator.clipboard.writeText(content).then(()=>{
        alert("copied");
    }).catch(err =>{
        alert("copying failed");
    })
}
const deletePasswordData=(index)=>{
    passworddetails=localStorage.getItem("passworddetails");
    let passworddata=JSON.parse(passworddetails);
    passworddata.splice(index,1);
    localStorage.setItem("passworddetails", JSON.stringify(passworddata));
    alert("deletion successfull");
    populatesavedpassworddetails();
}

    const populatesavedpassworddetails=()=> {
    let table = document.querySelector("table")

    let passworddetails = localStorage.getItem("passworddetails");
    if(passworddetails== null){
        table.innerHTML="no details available";

    }
    else{
        table.innerHTML = `<tr>
        <th>Website</th>
        <th>Username</th>
        <th>Password</th>
        <th>Action</th>
    </tr>`
    let passworddata=JSON.parse(passworddetails);
    let html=""
    let color1= "grey";
    let color2="red";

    for (let i =0;i<passworddata.length; i++){
        if(i%2==0){
            color1="#F9B872";
            color2="#B6E1E7"
        }
        else{
            color1="#B6E1E7";
            color2="#F9B872";
        }

        row=passworddata[i];
        if(row.website=='' || row.username=='' || row.password==''){
            continue;
        }
        else{
        html+= `
        <tr>
            <td style="background-color: ${color1};">${row.website}</td>
            <td style="background-color: ${color2};">${row.username}</td>
            <td style="background-color: ${color1};">${hidepassword(row.password)}</td>
            <td style="background-color: ${color2};"><button onClick="deletePasswordData('${i}')">delete</button></td>
        </tr>
        `;}
        
            

        }
        table.innerHTML=table.innerHTML+html
    }
}
document.querySelector("button").addEventListener("click",(event)=>{
    event.preventDefault();
    let passworddetails = localStorage.getItem("passworddetails");
    if(passworddetails==null){
        let passwordJSON= [];
        passwordJSON.push(
            {
                website: website.value,
                username : Username.value,
                password: Password.value
            }
        );
        alert("password saved");
        localStorage.setItem("passworddetails",JSON.stringify(passwordJSON));
        
    }
    else{
        let passwordJSON=JSON.parse(passworddetails);
        passwordJSON.push(
            {
                website: website.value,
                username : Username.value,
                password: Password.value
            }
        );
        alert("password detail saved");
        localStorage.setItem("passworddetails",JSON.stringify(passwordJSON));
    }
    populatesavedpassworddetails();
})
function resetmyform(){
    document.getElementById("mydetails").reset();
}