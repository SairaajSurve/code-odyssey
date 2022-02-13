document.querySelector('#book').addEventListener('click', async () => {
    const pincode = 370201;
    const token = localStorage.getItem('token');
    // console.log(token);
    // console.log("hi");
    if(token == undefined){
        console.log("hi");
        document.querySelector('#book').classList.add('disabled:opacity-50');
        document.querySelector('#book').classList.remove("bg-teal-500");
        document.querySelector('#book').classList.add("bg-teal-900");
        window.alert("Please Login");
        window.location.href = "/userlogin.html";
        return;
    }
    const res = await axios({
        method: "GET",
        url: `http://localhost:3001/api/guide/?pincode=${pincode}`,
        validateStatus: () => true,
    })
    document.querySelector("#name").innerHTML = `Name: ${res.data.guide.fname} ${res.data.guide.lname}`;
    document.querySelector("#contact").innerHTML = `Phone no.: ${res.data.guide.contact}`;
    document.querySelector("#description").innerHTML = `${res.data.guide.description}`;
    document.querySelector("#allocation").style = "display :block !important"
})