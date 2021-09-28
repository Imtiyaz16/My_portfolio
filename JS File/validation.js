let fnameNode=document.getElementById("fname");
let spanNode1=document.getElementById("error1");
function validate1(){
    spanNode1.innerHTML="";
    let fname=fnameNode.value;

    if (fname==''){
        spanNode1.innerHTML="*This field is required";
        fnameNode.style.border="2px solid red";
        return false;
    }

    else{
        fnameNode.style.border="2px solid green";
        return true;
    }
}

let spanNode5=document.getElementById("error2");
let emailNode=document.getElementById("email");
function validate2()
{
    spanNode5.innerHTML="";
    let emailId=emailNode.value;
    let subs=emailId.substring(emailId.indexOf('@')+1);
    if(emailId=='')
    {
       spanNode5.innerHTML="*This field is required";
       emailNode.style.border="2px solid red";
       return false;
    }
    else if(!emailId.includes('@') || subs=='')
    {
        spanNode5.innerHTML="*Invalid email";
        emailNode.style.border="2px solid red"; 
        return false;
    }
    
    else{
            emailNode.style.border="2px solid green";
              return true;
    }
}

let subNode=document.getElementById("subject");
let spanNode3=document.getElementById("error3");
function validate3()
{
    spanNode3.innerHTML="";
    let subject=subNode.value;
    if (subject==''){
        spanNode3.innerHTML="*This field is required";
        subNode.style.border="2px solid red";
        return false;
    }

     else if (subject.length >50){
        spanNode3.innerHTML="*Subject is too long";
        subNode.style.border="2px solid red";
        return false;
    }
    else{
        subNode.style.border="2px solid green";
        return true;
    }

}

let msgNode=document.getElementById("textArea");
let spanNode4=document.getElementById("error4");
function validate4()
{
    spanNode4.innerHTML="";
    let message=msgNode.value;
    if(message == ''){
        spanNode4.innerHTML="*This field is required";
        msgNode.style.border="2px solid red";
        return false;
    }
    else if(message.length >150){
        spanNode4.innerHTML="*Message is too long";
        msgNode.style.border="2px solid red";
        return false;
    }
    else{
        msgNode.style.border="2px solid green";
        return true;
    }

}


function Ukey()
{   
  alert("key released");
}
function Dkey(){
    alert("key pressed");
}

// on submit validation

function validateForm(){
    let v1=validate1();
    let v2=validate2();
    let v3=validate3();
    let v4=validate4();
        if(v1&&v2&&v3&&v4){
        return true;

    }
    else 
    return false;
}