const http = require("http")
const server = http.createServer((request, response)=>{
    console.log(request.url)
    if(request.url==="/perro"){
        response.write("sacalas papuu")
        response.end()
    }
    response.write("saca las chelas y las alitas")
    response.end()
})
server.listen(3000)