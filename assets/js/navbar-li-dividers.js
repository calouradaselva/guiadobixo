callNavbarDividers = () => {
    if($("#navbar li").children("hr").length > 0){
        $("#navbar li hr").remove()
    } else {
        $("#navbar li").append("<hr />")
    }
    
}