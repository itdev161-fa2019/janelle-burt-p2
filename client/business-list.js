const setEditModal = (phone) => {
    const xhttp = new XMLHttpRequest();

    xhttp.open("GET", `http://localhost:3000/business/${phone}`, false);
    xhttp.send();

    const business = JSON.parse(xhttp.responseText);

   /* "phone": "4144254069",
    "address": "229 E Wisconsin Avenue",
    "name": "Brilliance Business Solutions",
    "member_since": "2014",
    "county": "Milwaukee",
    "business_type": "Agency",*/

    const {
        address, 
        name, 
        member_since, 
        county,
        business_type
    } = business;

    document.getElementById('phone').value = phone;
    document.getElementById('address').value = address;
    document.getElementById('name').value = name;
    document.getElementById('member_since').value = member_since;
    document.getElementById('county').value = county;
    document.getElementById('business_type').value = business_type;

    // setting up the action url 
    document.getElementById('editForm').action = `http://localhost:3000/business/${phone}`;
}

const deletebusiness = (phone) => {
    const xhttp = new XMLHttpRequest();

    xhttp.open("DELETE", `http://localhost:3000/business/${phone}`, false);
    xhttp.send();

    location.reload();
}

const loadbusinesses = () => {
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
                        <div>Member Since: ${business.member_since}</div>
                        <div>County: ${business.address}</div>

                        <div>County: ${business.county}</div>
                        <div>Business Type: ${business.business_type}</div>
                        <hr>
                        <button type="button" class="btn btn-danger">Delete</button>
                        <button types="button" class="btn btn-primary" data-toggle="modal" 
                            data-target="#editbusinessModal" onClick="setEditModal(${business.phone})">
                            Edit
                        </button>
                    </div>
                </div>
            </div>
        `

        document.getElementById('businesses').innerHTML = document.getElementById('businesses').innerHTML + x;
    }
}

loadbusinesses();