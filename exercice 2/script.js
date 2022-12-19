function searchAge(){
    let searchName = document.getElementById('name').value;
    let searchCountry = document.getElementById('country').value;
    let testObject = {};

    const fetchName = (name, country) => fetch("https://api.agify.io/?name=" + name + "&country_id=" + country);

    fetchName (searchName, searchCountry)
    .then((response) => response.json())
    .then((json)=> { 
        let addDiv = document.createElement("div");
        addDiv.innerText = searchName + ", people with the same name are " + json.age + " years old and there are " + json.count;
        localStorage.setItem('testObject', JSON.stringify(testObject));
        document.body.appendChild(addDiv);
})
.catch((error) => {
    console.log(error);
    });
}
document.getElementById('btn').addEventListener('click',searchAge)

let testObject = {};
let retrievedObject = localStorage.getItem('testObject');

console.log('retrievedObject: ', JSON.parse(retrievedObject));