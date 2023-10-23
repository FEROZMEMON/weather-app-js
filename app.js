const form = document.querySelector("#form")
const input = document.querySelector("#input")
const submit = document.querySelector("#submit")
const loading = document.querySelector("#loading")
const weather = document.querySelector("#weather")

form.addEventListener('submit', async (event) => {
    event.preventDefault()
    loading.style.display = "block";
    try {
        const res = await axios.get(`https://api.weatherapi.com/v1/current.json?key=78e90afb15354557a5d71530231710&q=${input.value}`)
        console.log(res.data);

        weather.innerHTML = `
      <div class="main">
        <div class="names">
            <p>City : ${res.data.location.name}</p> 
            <p>Region : ${res.data.location.region}</p>
            <p>Country : ${res.data.location.country}</p>
        </div>
        <hr>
        <div class="temp">
            <div>
                <p>Your time : ${res.data.location.localtime}</p>
                <p>Last-updated : ${res.data.current.last_updated}</p>
                <p>Wind : ${res.data.current.wind_kph} kph</p>
            </div>
            <div>
                <p>Cloud : ${res.data.current.condition.text}</p>
                <p>Temprature : ${res.data.current.temp_c} °C/${res.data.current.temp_f} °F</p>
                <p>Humidity : ${res.data.current.humidity} %</p>
            </div>
        </div>
        <div>
            <img src="${res.data.current.condition.icon}" alt="icon" width="200px" height="200px"></img>
        </div>

       </div>
        
        `
    }
    catch (error) {
        weather.innerHTML = `<h2>Data Not Found!</h2>`

    }
    finally {
        input.value = ""
        loading.style.display = "none";

    }




})















