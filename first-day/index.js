

function handleKeyPress(event) {
    let key_num = event.key.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
    console.log(key_num)
    let element = document.querySelector(`.key[data-key="${key_num}"]`)
    if (element == null) {
        return;
    } else {

        if (!element.classList.contains("playing")) {
            element.classList.add('playing')
        }
        let audio_elem = document.querySelector(`audio[data-key="${key_num}"]`)
        audio_elem.currentTime = 0
        audio_elem.play()
    }
}


function handleTransitionEnd(event) {
    if (event.propertyName !== "transform") {
        return;
    }
    console.log("Transition endede. Removing class")
    event.target.classList.remove("playing")

}


const keys = Array.from(document.querySelectorAll(".key"))
keys.forEach(key => key.addEventListener("transitionend", handleTransitionEnd))

window.addEventListener("keydown", handleKeyPress);
