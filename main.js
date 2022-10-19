let getResBtn = document.querySelector('button')
let baseURL = 'https://swapi.dev/api/'

let clickBtn = () => {
    console.log('button clicked')
    axios.get('https://swapi.dev/api/planets/?search=alderaan')
    .then((response) => {
        const {residents} = response.data.results[0]
        // console.log(residents)
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