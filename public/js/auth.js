window.onload = async function(){
    const token = sessionStorage.getItem('token');
    if(token != undefined){
        const ul = document.querySelector("#nav-list");
        const fname = sessionStorage.getItem('fname');
        const li = ul.children[2];
        li.innerHTML = `Hi ${fname}!`;
        const newli = document.createElement('li');
        newli.innerHTML = `<button id= "logout">Log out</button>`
        ul.appendChild(newli);
        document.querySelector('#logout').addEventListener('click',()=>{
            console.log("clicked");
            sessionStorage.clear();
            window.alert("Logged out");
            window.location.reload();
        })
    }
}