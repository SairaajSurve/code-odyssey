document.querySelector('#book').addEventListener('click',async ()=>{
    const pincode = 370201;
    const res = await axios({
        method: "GET",
        url: `http://localhost:3001/api/guide/?pincode=${pincode}`,
        validateStatus: () => true,
    })
    document.querySelector("#name").innerHTML = `Name: ${res.data.guide.fname} ${res.data.guide.lname}`;
    document.querySelector("#contact").innerHTML = `Phone no.: ${res.data.guide.contact}`;
    document.querySelector("#description").innerHTML = `Description: ${res.data.guide.description}`;
    document.querySelector("#allocation").style = "display :block !important"
})