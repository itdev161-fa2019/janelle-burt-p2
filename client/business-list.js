const loadBusinesses = () => {
    const xhttp = new XMLHttpRequest();

    xhttp.open("GET", "http://localhost:3000/business", false);
    xhttp.send();

    const businesses = JSON.parse(xhttp.responseText);

    for (let business of businesses) {
        const x = `
            <div class="col-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-name">${business.name}</h5>
                        <h6 class="card-subname mb-2 text-muted">${business.phone}</h6>
                        <div>Address: ${business.address}</div>
                        <hr>
                        <div>Member Since: ${business.member_since}</div>
                        <div>County: ${business.county}</div>
                        <div>Business Type: ${business.business_type}</div>
                        <hr>
                        <div>Description: ${business.description}</div>

                        <hr>
                        
                    </div>
                </div>
            </div>
        `

        document.getElementById('businesses').innerHTML = document.getElementById('businesses').innerHTML + x;
    }
}

loadBusinesses();