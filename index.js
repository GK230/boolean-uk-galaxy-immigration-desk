const infoSection = document.querySelector(".info-section");
const listSection = document.querySelector(".list-section");
const actionSection = document.querySelector(".action-section");


const state = {
    applicants: [
        {
            "name": "Luke Skywalker",
            "height": "172",
            "mass": "77",
            "hair_color": "blond",
            "skin_color": "fair",
            "eye_color": "blue",
            "birth_year": "19BBY",
            "gender": "male",
            "homeworld": "http://swapi.dev/api/planets/1/",
            "films": [
                "http://swapi.dev/api/films/1/",
                "http://swapi.dev/api/films/2/",
                "http://swapi.dev/api/films/3/",
                "http://swapi.dev/api/films/6/"
            ],
            "species": [],
            "vehicles": [
                "http://swapi.dev/api/vehicles/14/",
                "http://swapi.dev/api/vehicles/30/"
            ],
            "starships": [
                "http://swapi.dev/api/starships/12/",
                "http://swapi.dev/api/starships/22/"
            ],
            "created": "2014-12-09T13:50:51.644000Z",
            "edited": "2014-12-20T21:17:56.891000Z",
            "url": "http://swapi.dev/api/people/1/"
        },
        {
            "name": "C-3PO",
            "height": "167",
            "mass": "75",
            "hair_color": "n/a",
            "skin_color": "gold",
            "eye_color": "yellow",
            "birth_year": "112BBY",
            "gender": "n/a",
            "homeworld": "http://swapi.dev/api/planets/1/",
            "films": [
                "http://swapi.dev/api/films/1/",
                "http://swapi.dev/api/films/2/",
                "http://swapi.dev/api/films/3/",
                "http://swapi.dev/api/films/4/",
                "http://swapi.dev/api/films/5/",
                "http://swapi.dev/api/films/6/"
            ],
            "species": [
                "http://swapi.dev/api/species/2/"
            ],
            "vehicles": [],
            "starships": [],
            "created": "2014-12-10T15:10:51.357000Z",
            "edited": "2014-12-20T21:17:50.309000Z",
            "url": "http://swapi.dev/api/people/2/"
        },
        {
            "name": "R2-D2",
            "height": "96",
            "mass": "32",
            "hair_color": "n/a",
            "skin_color": "white, blue",
            "eye_color": "red",
            "birth_year": "33BBY",
            "gender": "n/a",
            "homeworld": "http://swapi.dev/api/planets/8/",
            "films": [
                "http://swapi.dev/api/films/1/",
                "http://swapi.dev/api/films/2/",
                "http://swapi.dev/api/films/3/",
                "http://swapi.dev/api/films/4/",
                "http://swapi.dev/api/films/5/",
                "http://swapi.dev/api/films/6/"
            ],
            "species": [
                "http://swapi.dev/api/species/2/"
            ],
            "vehicles": [],
            "starships": [],
            "created": "2014-12-10T15:11:50.376000Z",
            "edited": "2014-12-20T21:17:50.311000Z",
            "url": "http://swapi.dev/api/people/3/"
        },
        {
            "name": "Darth Vader",
            "height": "202",
            "mass": "136",
            "hair_color": "none",
            "skin_color": "white",
            "eye_color": "yellow",
            "birth_year": "41.9BBY",
            "gender": "male",
            "homeworld": "http://swapi.dev/api/planets/1/",
            "films": [
                "http://swapi.dev/api/films/1/",
                "http://swapi.dev/api/films/2/",
                "http://swapi.dev/api/films/3/",
                "http://swapi.dev/api/films/6/"
            ],
            "species": [],
            "vehicles": [],
            "starships": [
                "http://swapi.dev/api/starships/13/"
            ],
            "created": "2014-12-10T15:18:20.704000Z",
            "edited": "2014-12-20T21:17:50.313000Z",
            "url": "http://swapi.dev/api/people/4/"
        },
        {
            "name": "Leia Organa",
            "height": "150",
            "mass": "49",
            "hair_color": "brown",
            "skin_color": "light",
            "eye_color": "brown",
            "birth_year": "19BBY",
            "gender": "female",
            "homeworld": "http://swapi.dev/api/planets/2/",
            "films": [
                "http://swapi.dev/api/films/1/",
                "http://swapi.dev/api/films/2/",
                "http://swapi.dev/api/films/3/",
                "http://swapi.dev/api/films/6/"
            ],
            "species": [],
            "vehicles": [
                "http://swapi.dev/api/vehicles/30/"
            ],
            "starships": [],
            "created": "2014-12-10T15:20:09.791000Z",
            "edited": "2014-12-20T21:17:50.315000Z",
            "url": "http://swapi.dev/api/people/5/"
        },
        {
            "name": "Owen Lars",
            "height": "178",
            "mass": "120",
            "hair_color": "brown, grey",
            "skin_color": "light",
            "eye_color": "blue",
            "birth_year": "52BBY",
            "gender": "male",
            "homeworld": "http://swapi.dev/api/planets/1/",
            "films": [
                "http://swapi.dev/api/films/1/",
                "http://swapi.dev/api/films/5/",
                "http://swapi.dev/api/films/6/"
            ],
            "species": [],
            "vehicles": [],
            "starships": [],
            "created": "2014-12-10T15:52:14.024000Z",
            "edited": "2014-12-20T21:17:50.317000Z",
            "url": "http://swapi.dev/api/people/6/"
        },
        {
            "name": "Beru Whitesun lars",
            "height": "165",
            "mass": "75",
            "hair_color": "brown",
            "skin_color": "light",
            "eye_color": "blue",
            "birth_year": "47BBY",
            "gender": "female",
            "homeworld": "http://swapi.dev/api/planets/1/",
            "films": [
                "http://swapi.dev/api/films/1/",
                "http://swapi.dev/api/films/5/",
                "http://swapi.dev/api/films/6/"
            ],
            "species": [],
            "vehicles": [],
            "starships": [],
            "created": "2014-12-10T15:53:41.121000Z",
            "edited": "2014-12-20T21:17:50.319000Z",
            "url": "http://swapi.dev/api/people/7/"
        },
        {
            "name": "R5-D4",
            "height": "97",
            "mass": "32",
            "hair_color": "n/a",
            "skin_color": "white, red",
            "eye_color": "red",
            "birth_year": "unknown",
            "gender": "n/a",
            "homeworld": "http://swapi.dev/api/planets/1/",
            "films": [
                "http://swapi.dev/api/films/1/"
            ],
            "species": [
                "http://swapi.dev/api/species/2/"
            ],
            "vehicles": [],
            "starships": [],
            "created": "2014-12-10T15:57:50.959000Z",
            "edited": "2014-12-20T21:17:50.321000Z",
            "url": "http://swapi.dev/api/people/8/"
        },
        {
            "name": "Biggs Darklighter",
            "height": "183",
            "mass": "84",
            "hair_color": "black",
            "skin_color": "light",
            "eye_color": "brown",
            "birth_year": "24BBY",
            "gender": "male",
            "homeworld": "http://swapi.dev/api/planets/1/",
            "films": [
                "http://swapi.dev/api/films/1/"
            ],
            "species": [],
            "vehicles": [],
            "starships": [
                "http://swapi.dev/api/starships/12/"
            ],
            "created": "2014-12-10T15:59:50.509000Z",
            "edited": "2014-12-20T21:17:50.323000Z",
            "url": "http://swapi.dev/api/people/9/"
        },
        {
            "name": "Obi-Wan Kenobi",
            "height": "182",
            "mass": "77",
            "hair_color": "auburn, white",
            "skin_color": "fair",
            "eye_color": "blue-gray",
            "birth_year": "57BBY",
            "gender": "male",
            "homeworld": "http://swapi.dev/api/planets/20/",
            "films": [
                "http://swapi.dev/api/films/1/",
                "http://swapi.dev/api/films/2/",
                "http://swapi.dev/api/films/3/",
                "http://swapi.dev/api/films/4/",
                "http://swapi.dev/api/films/5/",
                "http://swapi.dev/api/films/6/"
            ],
            "species": [],
            "vehicles": [
                "http://swapi.dev/api/vehicles/38/"
            ],
            "starships": [
                "http://swapi.dev/api/starships/48/",
                "http://swapi.dev/api/starships/59/",
                "http://swapi.dev/api/starships/64/",
                "http://swapi.dev/api/starships/65/",
                "http://swapi.dev/api/starships/74/"
            ],
            "created": "2014-12-10T16:16:29.192000Z",
            "edited": "2014-12-20T21:17:50.325000Z",
            "url": "http://swapi.dev/api/people/10/"
        }
    ],
    acceptedImmigrants: [
        {name: "Luke Skywalker", destination: "Naboo", purpose: "vacation", isTerrorist: "no"}
    ],
}





function getApplicants() {

    // fetch("https://swapi.dev/api/people/")
    // .then(function (response) {
    //     return response.json()
    //   })
    //   .then(function (applicants) {
    //       state.applicants = applicants.results
    //       console.log(applicants)
    //       renderApplicantsList()
    // })

    renderApplicantsList()
     
}

function renderApplicant(applicant) {

    liEl = document.createElement('li')

    h2El = document.createElement('h2')
    h2El.innerText = applicant.name

    viewbtn = document.createElement('button')
    viewbtn.innerText = "View"
    viewbtn.addEventListener('click', function() {
        renderApplicantInfo(applicant)
    })

    liEl.append(h2El, viewbtn)

    return liEl

}


function renderApplicantsList() {

    ulEl = document.createElement('ul')

    for (const applicant of state.applicants) {

        const liEl = renderApplicant(applicant)
        ulEl.append(liEl)

    }

    listSection.append(ulEl)  
}

function getPlanetData() {

    for (const applicant of state.applicants)

    fetch(applicant.homeworld)
    .then(function (response) {
        return response.json()
      })
      .then(function (homeworld) {

          const homeworldName = homeworld.name 
          applicant.homeworld = homeworldName
          return homeworldName
    })
}


function renderApplicantInfo(applicant) {

    infoSection.innerHTML = ""

    infoSecEl = document.createElement('section')

    pNameEl = document.createElement('p')
    pNameEl.innerText = `Name: ${applicant.name}`

    pGenderEl = document.createElement('p')
    pGenderEl.innerText = `Gender: ${applicant.gender}` 

    pDobEl = document.createElement('p')
    pDobEl.innerText = `DOB: ${applicant.birth_year}`

    pHeightEl = document.createElement('p')
    pHeightEl.innerText = `Height: ${applicant.height}`

    pMassEl = document.createElement('p')
    pMassEl.innerText = `Mass: ${applicant.mass}`

    pHomeworldEl = document.createElement('p')
    pHomeworldEl.innerText = `Homeworld: ${applicant.homeworld}`
    
    selectBtn = document.createElement('button')
    selectBtn.innerText = "View"
    selectBtn.addEventListener('click', function() {
        isAccepted(applicant)
    })

    infoSecEl.append(pNameEl, pGenderEl, pDobEl, pHeightEl, pMassEl, pHomeworldEl, selectBtn)

    infoSection.append(infoSecEl)
}

function renderImmigrationForm(applicant) {

    actionSection.innerHTML = ""

    const formEl = document.createElement('form')

    const secNameEl = document.createElement('section')
    secNameEl.innerText = applicant.name

    const destLabelEl = document.createElement('label')
    destLabelEl.setAttribute('for', 'destination')
    destLabelEl.innerText = "Destination:"

    const destInputEl = document.createElement('input')
    destInputEl.setAttribute('class', "destination")
    destInputEl.setAttribute('type', "text")

    const purposeEl = document.createElement('select')
    purposeEl.setAttribute("class", 'purpose')

    const option = document.createElement("option");
    option.value = "vacation";
    option.text = "vacation"
    purposeEl.append(option);

    const option2 = document.createElement("option");
    option2.value = "business";
    option2.text = "business"
    purposeEl.append(option, option2);

    h2xEl = document.createElement('h2')
    h2xEl.innerText = "Terrorist Activity:"


    const x = document.createElement("INPUT");
    x.setAttribute("class", "yes");
    x.setAttribute("type", "radio");
    x.setAttribute("name", "terrorist");
    x.setAttribute("value", "yes");


    const x2 = document.createElement("INPUT");
    x2.setAttribute("class", "no");
    x2.setAttribute("type", "radio");
    x2.setAttribute("name", "terrorist");
    x2.setAttribute("value", "no");
 
    const labelxEl = document.createElement('label')
    labelxEl.setAttribute("for", 'yes')
    labelxEl.innerText = "Yes"

    const newline = document.createElement('br');

    const labelx2El = document.createElement('label')
    labelx2El.setAttribute("for", 'yes')
    labelx2El.innerText = "No"

    acceptBtn = document.createElement('button')
    acceptBtn.innerText = "Accept"
    acceptBtn.addEventListener('click', function(event) {
        event.preventDefault();
        getImmigrationFormData(applicant)
        formEl.reset()
    })
 
    
    formEl.append(secNameEl, destLabelEl, destInputEl, purposeEl, h2xEl, labelxEl, x, newline, labelx2El, x2, acceptBtn)

    actionSection.append(formEl)
 
}

function getImmigrationFormData(applicant) {

    const name = applicant.name
    const destination = document.querySelector('.destination').value
    const purpose = document.querySelector(".purpose").value
    const terrorist = document.getElementsByName('terrorist')
    let isTerrorist = ""
    for(i = 0; i < terrorist.length; i++) {
        if(terrorist[i].checked) {
        isTerrorist = terrorist[i].value;
        }
    }  
    
    const immigrationFormData = {

        name: name,
        destination: destination,
        purpose: purpose,
        isTerrorist: isTerrorist

    }

    state.acceptedImmigrants.push(immigrationFormData)
    console.log(immigrationFormData)

}

function renderAcceptanceNotice(applicant) {

    infoSection.innerHTML = ""

    const secAcceptanceNotice = document.createElement('section')

    const divAcceptedNameEl = document.createElement('div')
    divAcceptedNameEl.innerText = applicant.name

    const acceptedBtnEl = document.createElement('button')
    acceptedBtnEl.innerText = "Accepted"
    acceptedBtnEl.setAttribute('disabled', 'true')

    secAcceptanceNotice.append(divAcceptedNameEl, acceptedBtnEl)

    actionSection.append(secAcceptanceNotice)

}

function isAccepted(applicant) {

    let obj = {}
    if (obj = state.acceptedImmigrants.find(o => o.name === applicant.name)) {
        renderAcceptanceNotice(applicant)
    } else {
        renderImmigrationForm(applicant)
    }

}


getApplicants()
getPlanetData()


