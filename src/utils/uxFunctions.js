import React from "react";
export const startLoading = (tag) => {
    let loader = document.createElement('div')
    let main = document.getElementById(tag)
    main.appendChild(loader)
    loader.id = "refreshing-animation"
    loader.className = "loading"
}         
export const finishedLoading = () => {
    const loading = document.getElementById("refreshing-animation")
    if(loading){
        loading.remove();            
    }
}
export const top = (id) => {
    const element = document.getElementById(id) 
    element.scrollIntoView()
    element.remove()
}
export const formattedText = (text) => {
    const splitText = text.split("  ")
    return(
        splitText.map((item) => <p>{item}</p>)
    )
}