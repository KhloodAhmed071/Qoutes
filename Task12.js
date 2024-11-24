let myRquest = new XMLHttpRequest();

myRquest.onreadystatechange = function () {
    if (this.readyState === 4) {
        if (this.status === 200) {
            let JsData = JSON.parse(this.responseText);
            console.log(JsData);

            let Content = document.getElementsByClassName("Content")[0];
                let classElement = document.createElement("div");
                classElement.className = "classElement";
                let qouteElement = document.createElement("p");
                qouteElement.textContent = JsData.quote;
                classElement.appendChild(qouteElement);

                let authorElement = document.createElement("h4");
                authorElement.textContent = JsData.author;
                classElement.appendChild(authorElement);

                let copyButton = document.createElement("button")
                copyButton.textContent = "Copy";
                copyButton.onclick = function () {
                    navigator.clipboard.writeText(element.quote);
                }

                classElement.appendChild(copyButton);


                Content.appendChild(classElement);
            
        }
        else {
            console.log("there is a problem");
        }
    }
    else {
        console.log("Not Found");
    }
}
let randomValue = Math.ceil(Math.random()*1200)
myRquest.open("GET", `https://dummyjson.com/quotes/${randomValue}`);
myRquest.send();





























