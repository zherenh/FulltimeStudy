function renderHTML(url){
    switch(url){
        case "/home":
            
        case "/search":

        case "/profile":

        case "api/db": // 返回接口

        default: `<div>404 not found</div>`
    }
    return 
}

function renderStatus(url){
    let arr = ["/home", "/search"]
    return arr.includes(url)?200:404;
}

module.exports = {
    renderHTML,
    renderStatus
}