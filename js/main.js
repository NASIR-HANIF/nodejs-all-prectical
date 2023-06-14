window.onload = () => {
    ajexRequest();
}

function ajexRequest() {
    let form = document.querySelector("#signup-form");
    form.onsubmit = function (e) {
        e.preventDefault();

        const userData = JSON.stringify({
            name: document.querySelector("#name").value,
            email: document.querySelector("#email").value,
            mobile: document.querySelector("#mobile").value,
            password: document.querySelector("#password").value
        })
        const ajex = new XMLHttpRequest();
        ajex.open("POST","/api/signup",true)
        ajex.send(userData);
        ajex.onreadystatechange = function(){
            if(this.readyState == 4){
               let data = JSON.parse(this.response);
              console.log(data)
              console.log(JSON.parse(data.mydata))
            }
        }

    }

}