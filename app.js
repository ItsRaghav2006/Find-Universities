let url = "http://universities.hipolabs.com/search?name=";

let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
    let country = document.querySelector("input").value;
    
    let colArr = await getCollege(country);
    show(colArr);
});

function show(colArr) {
    let list = document.querySelector("#list");
    list.innerText = "";
    for(college of colArr) {
        console.log(college.name);
        let li = document.createElement("li");
        li.innerText = college.name;
        list.appendChild(li);
    }

}

async function getCollege(country) {
   try {
    let res = await axios.get(url + country);
    return res.data;
   } catch(err) {
    console.log("Error", err);
    return [];
   }
    
}
