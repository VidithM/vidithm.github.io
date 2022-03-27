const LIGHT_MODE_FONT = "https://fonts.googleapis.com/css2?family=Inconsolata:wght@300&family=Open+Sans:wght@300;400&display=swap";
const DARK_MODE_FONT = "https://fonts.googleapis.com/css2?family=Inconsolata:wght@300&family=Open+Sans:wght@300;400&family=Turret+Road:wght@700&display=swap";

var page_state = {
    dark_mode : false
}

const updatePage = () => {
    if(page_state.dark_mode){
        document.getElementById("css").href = "dark_styles.css";
        document.getElementById("toggle_btn").innerHTML = "Take me to the Light!";
    } else {
        document.getElementById("css").href = "styles.css";
        document.getElementById("toggle_btn").innerHTML = "Take me to the Dark Side";
    }
}

const toggleMode = () => {
    page_state.dark_mode = !page_state.dark_mode;
    updatePage();
}

updatePage();