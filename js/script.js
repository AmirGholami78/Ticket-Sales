

let citiesNameObj = {
    Iran: ['Tehran', 'Tabriz', 'Arak', 'Qom' , 'Esfahan' , 'Mashhad' , 'Ardebil' , 'Ahvaz'],
    Canada: ['vankover', 'torento' , 'Winnipeg' , 'Calgary' , 'Ottawa' , 'Edmonton'],
    US: ['LA', 'chicago', 'Texas' , 'New York' , 'San Diego' , 'Charlotte' , 'Las Vegas'],
}



let userNameInput = document.querySelector('.fnameInput')
let userFamilyInput = document.querySelector('.lnameInput')
let userPhoneNumInput = document.querySelector('.phoneInput')
let userEmailInput = document.querySelector('.emailInput')
let submitBtn = document.querySelector('.btn')
let countrySelectBox = document.querySelector('.countrySelect')
let citySelect = document.querySelector('.citySelect')

countrySelectBox.addEventListener('change', function () {
    if (countrySelectBox.value == "Please Select") {
        citySelect.innerHTML = ''
        citySelect.innerHTML = '<option>Select Country First...</option>'
    }
    else {
        let mainCountryName = countrySelectBox.value
        let mainCountryCities = citiesNameObj[mainCountryName]

        citySelect.innerHTML = ''
        mainCountryCities.forEach(function (city) {
            citySelect.innerHTML += '<option>' + city + '</option>'
        })
    }
})


submitBtn.addEventListener('click' , function () {
    userNameInput.value = ''
    userFamilyInput.value = ''
    userPhoneNumInput.value = ''
    userEmailInput.value = ''
})
