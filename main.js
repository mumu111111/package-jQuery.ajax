window.jQuery= function(nodeOrSelector){
    let nodes={}
    nodes.addClass= function(){}
    nodes.setText= function(){}
    return nodes
}
window.$= window.jQuery

//jQuery.ajax(url,method,body,success, fail)

window.jQuery.ajax= function(url,method,body,success, fail){//发ajax请求
    
    let request= new XMLHttpRequest()
    request.open(method, url) //配置request
    request.onreadystatechange= ()=>{
        if(request.readyState ===4){
            if(request.status >= 200 && request.status < 300){
                success.call(undefined, request.responseText)
            }else if(request.status >= 400){
                fail.call(undefined, request)
            }
        }
    }
    request.send(body)
}

myButton.addEventListener('click', (e)=>{
window.jQuery.ajax(
    '/username',
    'get',
     (responseText)=>{
        console.log(x)
        
     },
    (responseText)=>{
        console.log(x.status)
        console.log(x.responseText)
    }
)
})
