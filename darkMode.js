let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector("#dark-mode-toggle");

// 1. Check if darkMode is enabled or not
// 2. If its enabled, turn if off
// 3. If its disabled, turn if on

const enableDarkMode = () =>{
    // 1. add darkMode class to the body
    document.body.classList.add("darkMode");
    // 2. update darkMode in localStorage
    localStorage.setItem("darkMode","enabled");
}

if(darkMode == "enabled"){
    enableDarkMode();
}


const disableDarkMode = () =>{
    // 1. remove darkMode class to the body
    document.body.classList.remove("darkMode");
    // 2. update darkMode in localStorage
    localStorage.setItem("darkMode",null);
} 


darkModeToggle.addEventListener("click",()=>{
    let darkMode = localStorage.getItem("darkMode"); // We did this because once the button was clicked it was taking the value of darkMode at the top and wasnt switching it back to lightMode
    if(darkMode !== "enabled"){
        enableDarkMode();
    } else{
        disableDarkMode();
    }
});