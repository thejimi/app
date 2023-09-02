function showAlert(type, title, text){
    var element = document.getElementById(`${type}_alert`)
    element.style.display = `flex`
    
    var titleElement = document.getElementById(`${type}_alert_title`)
    var textElement = document.getElementById(`${type}_alert_text`)

    titleElement.innerHTML = title
    textElement.innerHTML = text


    $(`#${type}_alert`).animate({opacity:1})

    setTimeout(() => {
        $(`#${type}_alert`).animate({opacity:0})
        setTimeout(() => {
            element.style.display = `hidden`
        }, 200);
    }, 4000);
}

    if((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1 ) 
    {
        notsupported("Opera")
    }
    else if(navigator.userAgent.indexOf("Edg") != -1 )
    {
        
    }
    else if(navigator.userAgent.indexOf("Chrome") != -1 )
    {
        
    }
    else if(navigator.userAgent.indexOf("Safari") != -1)
    {
        notsupported("Safari")
    }
    else if(navigator.userAgent.indexOf("Firefox") != -1 ) 
    {
        notsupported("Firefox")
    }
    else if((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )) //IF IE > 10
    {
        notsupported("IE")
    }  
    else 
    {
        notsupported("Unknown")
    }

    function notsupported(name){
        setTimeout(() => {
            var element = document.getElementById(`browsernotsupported_alert`)
            element.style.display = `flex`
    
            var textElement = document.getElementById(`browsernotsupported_alert_text`)
            textElement.innerHTML = `${name} is not supported by Filtru yet.`

            $(`#browsernotsupported_alert`).animate({opacity:1})
        }, 500);
    }