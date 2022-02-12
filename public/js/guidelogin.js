document.querySelector("#login-button").addEventListener('click', async () => {
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value

    const res = await axios({
        method: "GET",
        url: `http://localhost:3001/login/guide/?email=${email}&password=${password}`,
        validateStatus: () => true,
    })

    if(res.status == 200){
        sessionStorage.setItem('token', res.data.token);
        sessionStorage.setItem('fname', res.data.fname);
        sessionStorage.setItem('lname', res.data.lname);
        sessionStorage.setItem('email', res.data.email);
        sessionStorage.setItem('rating', res.data.rating);
        sessionStorage.setItem('description', res.data.description);
        sessionStorage.setItem('contact', res.data.contact);
        window.alert("Login Succesful");
        window.location.href = "http://localhost:3001/"
    }else{
        sessionStorage.clear();
        window.alert("Login Failed");
        window.location.reload();
    }
})  