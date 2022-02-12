document.querySelector("#submit-button").addEventListener('click', async () => {
    const allInput = document.querySelectorAll('input')
    for(let i = 0 ; i < allInput.length ;i++){
        if(allInput[i].value == ""){
            return window.alert("Please Enter All Details");
        }
    }

    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    if(password != document.querySelector("#confirm-password").value ){
        document.querySelector("#confirm-password").value ="";
        document.querySelector("#password").value ="";
        return window.alert("Passwords do not match");
    }
    const fname = document.querySelector("#fname").value;
    const lname = document.querySelector("#lname").value;

    const data = {
        email : email,
        password:password,
        fname : fname,
        lname : lname,
    }

    const res = await axios({
        method: "POST",
        url: `http://localhost:3001/register/user`,
        data : data,
        validateStatus: () => true,
    })

    if(res.status == 200){
        window.alert("Registration Succesful");
        window.location.href = "http://localhost:3001/userlogin.html"
    }
    else if (res.status == 409){
        return window.alert("Email already exists")
    }
    else{
        window.alert("Registration Failed");
        window.location.reload();
    }
})  