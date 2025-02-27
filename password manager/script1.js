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
        let c1="grey";
        let c2="white";

        for (let i =0;i<passworddata.length; i++){
            if(i%2==0){
                c1="#F9B872";
                c2="#B6E1E7";
            }
            else{
                c1="#B6E1E7";
                c2="#F9B872";
            }

            row=passworddata[i];
            if(row.website=='' || row.username=='' || row.password==''){
                continue;
            }
            else{
            html+= `
            <tr>
            <td id="${i+0}" style="background-color: ${c1};">${row.website}</td>
            <td id="${i+1}" style="background-color: ${c2};">${row.username}</td>
            <td id="${i+2}" style="background-color: ${c1};">${hidepassword(row.password)}</td>
            <td style="background-color: ${c2};"><button onClick="deletePasswordData('${i}')">delete</button></td>

            </tr>
            <tr>
            <center><button onClick="window.location.reload();">Close</button></center>
            </tr>
            `;
            

        }}
        table.innerHTML=table.innerHTML+html
    }
}
document.querySelector("button").addEventListener("click",(event)=>{
    event.preventDefault();
    let passworddetails = localStorage.getItem("passworddetails");
    if(passworddetails==null){
        let passwordJSON= [];
        if((website.value=='') || (username.value=='') || (password.value=='')){
            alert("please fill all details");
        }
        else{
        passwordJSON.push(
            {
                website: website.value,
                username : username.value,
                password: password.value
            }
        );
        alert("password saved");
        localStorage.setItem("passworddetails",JSON.stringify(passwordJSON));
        
    }}
    else{
        let passwordJSON=JSON.parse(passworddetails);
        if((website.value=='') || (username.value=='') || (password.value=='')){
            alert("please fill all details");
        }
        else{
        passwordJSON.push(
            {
                website: website.value,
                username : username.value,
                password: password.value
            }
        );
        alert("password detail saved");
        localStorage.setItem("passworddetails",JSON.stringify(passwordJSON));
    }}
    populatesavedpassworddetails();
})


const updatepassworddata=(index)=>{
    const websitedata=document.getElementById(index+"0").innerText;
    const usernamedata=document.getElementById(index+"1").innerText;
    const passworddata=document.getElementById(index+"2").innerText;
}
function resetmyform(){
    document.getElementById("mydetails").reset();
}
function view(){
    populatesavedpassworddetails();
}
