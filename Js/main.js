console.log("%cDeveloped & Protected by ${Eng Sayoof}",
    "color: red; font-weight: bold"
)


let loader = document.querySelector("#loader")
let containerLoder = document.querySelector("#containerLoder")
let WebPhone = document.querySelector(".WebPhone")

setTimeout(() => {
    if (containerLoder)
        containerLoder.classList.add("removecontainerLoader")
}, 2000)

const mediaQuery = window.matchMedia("(max-width:426px)")
function handleMedia(e) {
    if (e.matches) {
        if (WebPhone)
            WebPhone.classList.add("hidden")
    }
    else
        WebPhone.classList.remove("hidden")
}
handleMedia(mediaQuery)
mediaQuery.addEventListener("change", handleMedia)


// ----------------------------------WeatherApi-----------
let cityName = document.querySelector("#cityName")
let cityTemp = document.querySelectorAll("#cityTemp")
let highTemp = document.querySelector("#highTemp")
let lowTemp = document.querySelector("#lowTemp")
let humidity = document.querySelector("#humidity")
let wind = document.querySelector("#wind")
let visibility = document.querySelector("#visibility")
let pressure = document.querySelector("#pressure")
let weatherIcon = document.querySelector("#weatherIcon")
let weatherCountry = document.querySelector("#weatherCountry")
let dateTiem = document.querySelector("#dateTiem")
let errorCity = document.querySelector(".errorCity")
let windGust = document.querySelector("#windGust")
let rainChance = document.querySelector("#rainChance")
let labelDegree = document.querySelector("#labelDegree")
let uvDegree = document.querySelector("#uvDegree")
let uvRange = document.querySelector("#uvRange")
let city

function getWeather(city, callback = null) {
    let req = new XMLHttpRequest();
    req.open("GET", `https://api.weatherapi.com/v1/current.json?key=792809097f8f4006932105954261403&q=${city}&aqi=no`)
    req.send();
    req.addEventListener("load", () => {
        if (req.status == 200 && req.readyState == 4) {
            const data = JSON.parse(req.responseText)
            // console.log(req.responseText)
            // console.log(data)

            //cityName
            if (cityName)
                cityName.textContent = data.location.name

            //cityTemp
            cityTemp.forEach(temp => {
                temp.innerHTML = `${data.current.temp_c}<sup>o</sup>`
            })

            //weatherIcon
            let code = Number(data.current.condition.code);
            let isDay = Number(data.current.is_day);

            const icons = {
                day: {
                    1000: "solar:sun-bold",
                    1003: "solar:cloud-bold",
                    1180: "solar:cloud-rain-bold",
                    1183: "solar:cloud-rain-bold"
                },
                night: {
                    1000: "solar:moon-bold",
                    1003: "solar:cloud-bold",
                    1180: "solar:cloud-rain-bold",
                    1183: "solar:cloud-rain-bold"
                }
            };

            let time = isDay ? "day" : "night";

            if (weatherIcon) {
                weatherIcon.setAttribute(
                    "icon",
                    icons[time]?.[code] || (isDay ? "solar:sun-bold" : "solar:moon-bold")
                );
            }

            //weatherCountry
            if (weatherCountry)
                weatherCountry.textContent = data.location.country

            //highTemp
            if (highTemp)
                highTemp.textContent = data.current.feelslike_c

            //lowTemp
            if (lowTemp)
                lowTemp.textContent = data.current.windchill_c

            //humidity
            if (humidity)
                humidity.textContent = data.current.humidity

            //wind
            if (wind)
                wind.textContent = data.current.wind_kph

            //visibility
            if (visibility)
                visibility.textContent = data.current.vis_km

            //pressure
            if (pressure)
                pressure.textContent = data.current.pressure_mb

            //dateTiem
            if (dateTiem)
                dateTiem.textContent = data.location.localtime

            //windGust
            if (windGust)
                windGust.textContent = `${data.current.gust_kph} Kph`

            //rainChance
            if (rainChance)
                rainChance.textContent = `${data.current.wind_dir}`

            //uvDegree
            if (uvDegree)
                uvDegree.textContent = `${data.current.uv}`
            //uvInfo
            let degree = data.current.uv
            // console.log(data)
            getUvInfo(degree)

            //callback
            if (callback)
                callback(true)
        } else {
            console.log(`%cSomthing went Wrong Error at Port:- ${req.status}`,
                `
                color: red;
                font-weight: bold;
                `
            )
            if (callback)
                callback(false)
        }
    })
}

function getUvInfo(degree) {
    if (uvRange)
        uvRange.value = Math.min((degree / 11) * 100, 100);
    function removeAllSta() {
        let status = ["Low", "Moderate", "Extreme", "VeryHigh", "High"]
        status.forEach(sta => {
            labelDegree.classList.remove(sta)
        })
    }
    if (labelDegree) {
        if (degree <= 2) {
            labelDegree.textContent = "Low"
            removeAllSta()
            labelDegree.classList.add("Low")
            uvRange.style.setProperty("--thumb-color", "#ccd5d0")
        } else if (degree <= 5) {
            labelDegree.textContent = "Moderate"
            removeAllSta()
            labelDegree.classList.add("Moderate")
            uvRange.style.setProperty("--thumb-color", "#f7e49cd9")
        } else if (degree <= 7) {
            labelDegree.textContent = "High"
            removeAllSta()
            labelDegree.classList.add("High")
            uvRange.style.setProperty("--thumb-color", "#f9954e")
        } else if (degree <= 10) {
            labelDegree.textContent = "Very High"
            removeAllSta()
            labelDegree.classList.add("VeryHigh")
            uvRange.style.setProperty("--thumb-color", "#ec7a7ab5")
        } else {
            labelDegree.textContent = "Extreme"
            removeAllSta()
            labelDegree.classList.add("Extreme")
            uvRange.style.setProperty("--thumb-color", "#ba81f0c4")
        }
    }
}

// --------------------------tempCardsSearch---------------------
let tempCards = [
    tempCard1 = document.querySelector("#tempCard1"),
    tempCard2 = document.querySelector("#tempCard2"),
    tempCard3 = document.querySelector("#tempCard3"),
    tempCard4 = document.querySelector("#tempCard4")
]

let tempCities = [
    "Alexandria",
    "Giza",
    "Tanta",
    "Sharm El Sheikh"
]

function eachCity(tempCities) {
    tempCities.forEach((city, index) => {
        let tempReq = new XMLHttpRequest();
        tempReq.open("GET", `https://api.weatherapi.com/v1/current.json?key=792809097f8f4006932105954261403&q=${city}&aqi=no`)
        tempReq.send();

        tempReq.addEventListener("load", () => {
            if (tempReq.status == 200 && tempReq.readyState == 4) {
                const tempReqData = JSON.parse(tempReq.responseText)
                if (tempCards[index])
                    tempCards[index].textContent = tempReqData.current.temp_c
            }
        })
    })
}

eachCity(tempCities)

let searchSign = document.querySelector("#searchSign")
let inputSearchField = document.querySelector("#inputSearchField")

if (inputSearchField) {
    inputSearchField.addEventListener("input", (e) => {
        if (e.target.value.trim() !== "")
            searchSign.classList.add("activeSearch")
        else
            searchSign.classList.remove("activeSearch")
    })
}

if (searchSign) {
    searchSign.addEventListener("click", (e) => {
        e.preventDefault()
        if (inputSearchField.value !== "") {
            city = inputSearchField.value
            window.localStorage.setItem("selectedCity", city.trim())
            console.log("Done Search")
            getWeather(city, (success => {
                if (success)
                    window.location.href = "weather.html"
                else {
                    errorCity.classList.add("activeErrorCity")
                    setTimeout(() => {
                        errorCity.classList.remove("activeErrorCity")
                    }, 2500)
                }
            }))
        }
    })
}

let savedCity = localStorage.getItem("selectedCity")
if (savedCity) {
    city = savedCity
    getWeather(city)
    localStorage.removeItem("selectedCity")
}
else {
    city = "Shebin Al-Kom"
    getWeather(city)
}


