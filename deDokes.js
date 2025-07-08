const jokeBtn = document.getElementById("jokeBtn")
const joke = document.getElementById("joke")
jokeBtn.addEventListener("click",async ()=>{
    try {
        const chiste = await fetch("https://icanhazdadjoke.com/",{
            headers:{
                "Accept":"application/json"
            }
        })
        const data = await chiste.json()
        console.log(data)
        joke.innerHTML = data.joke
    } catch (error) {
        aler("error al conectar con la Api")
    }
})

//fetch consulta a la base de datos
