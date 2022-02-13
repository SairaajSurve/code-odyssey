window.onload = async function(){
    const token = await localStorage.getItem('token');
    if(token != undefined){
        const ul = document.querySelector("#nav-list");
        const fname = localStorage.getItem('fname');
        const li = ul.children[2];
        li.innerHTML = `Hi ${fname}!`;
        const newli = document.createElement('li');
        newli.innerHTML = `<button id= "logout">Log out</button>`
        ul.appendChild(newli);
        document.querySelector('#logout').addEventListener('click',()=>{
            localStorage.clear();
            window.alert("Logged out");
            window.location.reload();
        })
    }
}
