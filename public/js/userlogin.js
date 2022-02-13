document.querySelector("#login-button").addEventListener('click', async () => {
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value

    const res = await axios({
        method: "GET",
        url: `http://localhost:3001/login/user/?email=${email}&password=${password}`,
        validateStatus: () => true,
    })

    if(res.status == 200){
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('fname', res.data.fname);
        localStorage.setItem('lname', res.data.lname);
        localStorage.setItem('email', res.data.email);
        window.alert("Login Succesful");
        window.location.href = "http://localhost:3001/"
    }else{
        localStorage.clear();
        window.alert("Login Failed");
        window.location.reload();
    }
})  