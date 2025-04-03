function Submit(){
 let input =document.getElementsByTagName("input");
 console.log(input[0].value);
 let name= document.getElementById("demo");
 console.log("Name:"+name.value);
 let email =document.getElementById("demo1");
 console.log("Email:"+email.value);
 let qualification =document.getElementById("demo2");
 console.log("Qualification:"+qualification[0].value);
 let branch =document.getElementById("demo3");
 console.log("Branch:"+branch[0].value);
 let gender =document.getElementById("demo4");
 console.log("Gender:"+gender.value);
 let language =document.getElementById("demo5");
 console.log("Language:"+language.value);
 let phoneno =document.getElementById("demo6");
 console.log("Mobile:"+phoneno.value);
 let dob = document.getElementById("dob");
 console.log("Date of Birth: " + dob.value);
 
}