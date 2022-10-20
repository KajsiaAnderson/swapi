let getResBtn = document.querySelector('.resident')

let clickBtn = () => {
    console.log('button clicked')
    axios.get('https://swapi.dev/api/planets/?search=alderaan')
    .then((response) => {
        console.log("response.data", response.data)
        const {residents} = response.data.results[0]
        // const resys = response.data.results[0].residents
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
        // deconstructuring films. Getting the response data and key object results. At index 0.
        console.log("response.data.results[0]", films)
       films.forEach(filmsUrl => {
        // filmsUrl is the element of the array. So each url of the film since films is an array.
        axios.get(filmsUrl)
        // getting the films URL through axios
        .then((response) => {
            // .then function after axios
            console.log("films URL", response.data)
            // shows data from films URL
            let newTitles = document.createElement('li')
            // create new list
            newTitles.textContent=response.data.title
            // adding text of title for films in new list.
            const movie = document.querySelector('.movie')
            // variable movie is now the movie class
            movie.appendChild(newTitles)
            // the movie class has titles added
        })
       })
    })
}

getFilmBtn.addEventListener('click', clickFilmBtn)