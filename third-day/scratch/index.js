

let spaceButton = document.querySelector("#range");
let blurButton = document.querySelector("#blur");
let colorButton = document.querySelector("#color");


function handleUpdate(event, property_name, value_suffix) {
    let suffix = value_suffix || ""
    console.log(suffix);
    document.documentElement.style.setProperty(`${property_name}`, event.target.value + "" + suffix)

}


spaceButton.addEventListener("change", (event) => handleUpdate(event, "--space", "vh"));
blurButton.addEventListener("change", (event) => handleUpdate(event, "--blur", "px"));
colorButton.addEventListener("change", (event) => handleUpdate(event, "--color"));



