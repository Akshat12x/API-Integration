function fetchCountryData() {
      const selectedCountry = document.getElementById('countrySelect').value;

      if (selectedCountry === '') {
        // Clear the table if no country is selected
        document.getElementById('casesTable').innerHTML = `
          <tr>
            <th>Country</th>
            <th>Cases</th>
            <th>Deaths</th>
            <th>Recovered</th>
          </tr>`;
        return;
      }

      fetch(`https://disease.sh/v3/covid-19/countries/${selectedCountry}`)
        .then(response => response.json())
        .then(data => {
          const casesTable = document.getElementById('casesTable');
          casesTable.innerHTML = `
            <tr>
              <th>Country</th>
              <th>Cases</th>
              <th>Deaths</th>
              <th>Recovered</th>
            </tr>
            <tr>
              <td>${data.country}</td>
              <td>${data.cases}</td>
              <td>${data.deaths}</td>
              <td>${data.recovered}</td>
            </tr>`;
        })
        .catch(error => {
          console.log('An error occurred while fetching COVID-19 data:', error);
        });
    }