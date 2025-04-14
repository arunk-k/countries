async function getData() {
    response = await fetch('https://restcountries.com/v3.1/all')
    data = await response.json()
    rows = ""
    console.log(data[0])
    data.forEach(item => {
      rows += `
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
          <div class="card h-100 shadow-sm">
            <img src="${item.flags.png}" style="height: 200px; object-fit: cover;" class="card-img-top" alt="">
            <div class="card-body">
              <h5 class="card-title">${item.name.common}</h5>
              <p class="card-text">
                <b>Capital:</b> ${item.capital}<br>
                <b>Region:</b> ${item.region}<br>
              </p>
            </div>
          </div>
        </div>
      `
    })
    contnr.innerHTML=rows
}
getData()
