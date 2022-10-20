let getResBtn = document.querySelector('.resident')

let clickBtn = () => {
    console.log('button clicked')
    axios.get('https://swapi.dev/api/planets/?search=alderaan')
    .then((response) => {
        console.log("response.data", response.data)
        const {residents} = response.data.results[0]
        console.log("response.data.results[0]", residents)
        residents.forEach(residentUrl => {
            axios.get(residentUrl).then((response) => {
                console.log(response.data)
                    let newElement = document.createElement('h2')
                    newElement.textContent=response.data.name
                    const section = document.querySelector('section')
                    section.appendChild(newElement)
            })
        });

    })
   
}


getResBtn.addEventListener('click', clickBtn)



let getFilmBtn = document.querySelector('.films')

let clickFilmBtn = () => {
    // console.log("height button clicked")
    axios.get('https://swapi.dev/api/planets/?search=alderaan')
    .then((response) => {
        console.log("response data", response.data)
        const {films} = response.data.results[0]
        console.log("response.data.results[0]", films)
       films.forEach(filmsUrl => {
        axios.get(filmsUrl)
        .then((response) => {
            console.log("films URL", response.data)
            let newTitles = document.createElement('li')
            newTitles.textContent=response.data.title
            const movie = document.querySelector('.movie')
            movie.appendChild(newTitles)
        })
       })
    })
}

getFilmBtn.addEventListener('click', clickFilmBtn)