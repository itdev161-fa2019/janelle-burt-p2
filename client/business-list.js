const loadBusinesses = () => {
    const xhttp = new XMLHttpRequest();

    xhttp.open("GET", "http://localhost:3000/business", false);
    xhttp.send();

    const businesses = JSON.parse(xhttp.responseText);

    for (let business of businesses) {
        const x = `
        <table class="table">
        <thead class="thead-dark">
          <tr>
            <th style="width: 20%" scope="col">Name</th>
            <th style="width: 20%" scope="col">Phone</th>
            <th style="width: 20%" scope="col">Address</th>
            <th style="width: 20%" scope="col">Member Since</th>
            <th style="width: 20%" scope="col">County</th>
            <th style="width: 20%" scope="col">Business Type</th>
            <th style="width: 20%" scope="col">Description</th>
                </tr>
        </thead>
        <tbody>
          <tr>
              <td>${business.name}</td>
          <td>${business.phone}</td>
          <td>${business.address}</td>
              <td>${business.member_since}</td>
          <td>${business.county}</td>
            <td> ${business.business_type}</td>
            <td>${business.description}</td>
          </tr>
          
        
      </table>
      
        `

       
        document.getElementById('businesses').innerHTML = document.getElementById('businesses').innerHTML + x;
    }
}

loadBusinesses();