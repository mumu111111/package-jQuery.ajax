window.jQuery = function (nodeOrSelector) {
    let nodes = {}
    nodes.addClass = function () { }
    nodes.setText = function () { }
    return nodes
}
window.$ = window.jQuery


window.jQuery.ajax = function ({ url, method ,headers}) {//发ajax请求

    return new Promise(function (resolve, reject) {
        let request = new XMLHttpRequest()
        request.open(method, url) //配置request
        for(let key in headers){
            let value= headers[key]
            request.setRequestHeader(key, value)
        }
        request.onreadystatechange = () => {
            if (request.readyState === 4) {
                if (request.status >= 200 && request.status < 300) {
                    resolve.call(undefined, request.responseText)
                } else if (request.status >= 400) {
                    reject.call(undefined, request)
                }
            }
        }
        request.send(body)
    })
}


myButton.addEventListener('click', (e) => {
    let promise = window.jQuery.ajax({
        url: '/username',
        method: 'get',
        headers:{
            'Content-Type':'application/x-www-form-urlencoded',
            'mumu': 18
        }
    })
})


promise.then(
    (text) => { console.log(text) },
    (request) => { console.log(x.status) }
)












    // let url= options.url
    // let method= options.method
    // let success= options.success
    // let fail= options.fail
    // let headers= options.headers
    // //等价于   ES6解构赋值
    // let {url, method, success, fail, headers}= options
