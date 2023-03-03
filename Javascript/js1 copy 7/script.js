function reqButton() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response)=>{
        console.log(response);
        return response.json()
    })
    .then((json)=>{
        console.log(json[1].title)
    })
}
const botao = document.querySelector('button').addEventListener('click', reqButton);