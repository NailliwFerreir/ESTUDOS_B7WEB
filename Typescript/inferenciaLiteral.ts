function fazerRequisicoes(url:string, method:'GET'|'POST') {
    //...
}

type RequestDetails = {
    url:string,
    method:'GET'|'POST'
}

let req: RequestDetails = {
    url : "https://algumaUrl.com",
    method : "GET" 
}

fazerRequisicoes(req.url, req.method);