let testObject = [];

function searchAge(){

    let searchName = document.getElementById('name').value;
    let searchCountry = document.getElementById('country').value;
    

    const fetchName = (name, country) => fetch("https://api.agify.io/?name=" + name + "&country_id=" + country);

    fetchName (searchName, searchCountry)
    .then((response) => response.json())
    .then((json)=> { 
        let addDiv = document.createElement("div");
        addDiv.innerText = searchName + ", people with the same name are " + json.age + " years old and there are " + json.count;
        testObject.push(addDiv.innerText);
        localStorage.setItem('save', JSON.stringify(testObject));
        document.body.appendChild(addDiv);
})
.catch((error) => {
    console.log(error);
    });
}
document.getElementById('btn').addEventListener('click',searchAge)

testObject = JSON.parse(localStorage.getItem('save'));

console.log(testObject);