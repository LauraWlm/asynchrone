let button = document.querySelector('button')
button.addEventListener("click", ()=> fetchHeroes());


function fetchHeroes() {
 fetch("data.json")
    .then((response) => response.json())
    .then((json)=> {        
      let list = document.createElement("ul");
        document.body.appendChild(list);
        for (let elem of json){
            let liElem = document.createElement("li");
            liElem.innerText = "Her name is " + elem.name + ", " + elem.age + " year old, " +  elem.work;
            list.appendChild(liElem);
            
        }
    })
    .catch((error) => {
        console.log(error);
        });
    }

    function loadObject() {
        let loadObject = localStorage.getItem("Tasks");
        TASKS = JSON.parse(loadObject);
      }