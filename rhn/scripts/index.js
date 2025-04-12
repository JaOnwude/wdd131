

const currentYear = document.querySelector('#currentyear');
currentYear.textContent = new Date().getFullYear();
const mainNav = document.querySelector('.navigation');
const hamburgerBtn = document.querySelector('#menu');

const priceRange = document.querySelector("#price");
const byLocation = document.querySelector("#location");
const byAmenities = document.querySelector("#amenities");
const apartmentType = document.querySelector("#apartmentType");

// byLocation.addEventListener("click", () => {
//     let preferredLocation = prompt("Enter Preferred location: ")
//     createApartmentCard(apartments.filter(apartment =>  apartment.location.toLowerCase() == preferredLocation.toLowerCase()));
// })


hamburgerBtn.addEventListener('click', () => {
    mainNav.classList.toggle('show');
    hamburgerBtn.classList.toggle('show');
});


const apartments = [
    {
        name: "1 Bedroom Mini Flat (room and parlour) for rent",
        image: "./images/aba-nigeria-temple.webp",
        description: "Serviced 1 Bedroom Furnished Flat With Swimming Pool And Gym",
        amenities: "Swimming pool, gym, pipe-borne water, steady electricity, table tennis",
        location: "Port Harcourt",
       price: 500000.00,
        displayedPrice: `₦ ${500000.00} per annum`
    },
    {
        name: "Self Contain (single rooms) for rent",
        image: "./images/belem_brazil_temple.webp",
        description: "Serviced Furnished Spaced Studio Apartment",
        amenities: "Swimming pool, gym, pipe-borne water, steady electricity",
        location: "Abuja",
        price: 800000.00,
        displayedPrice: `₦ ${800000.00} per annum`
    },
    {
        name: "3 Bedroom Apartment for rent",
        image: "./images/accra-ghana-temple.webp",
        description: "Brand New Beautifully Finished 3 Bedrooms Maisonnette With Bq",
        amenities: "Swimming pool, gym, pipe-borne water, steady electricity",
        location: "Lagos",
        price: 750000.00,
        displayedPrice: `₦ ${750000.00} per annum`
    },
    {
        name: "2 Bedroom Duplex for rent",
        image: "./images/adelaide-australia-temple.webp",
        description: "Serviced 2 Bedrooms Apartment With Bq",
        amenities: "Swimming pool, gym, pipe-borne water, steady electricity",
        location: "Enugu",
        price: 370000.00,
        displayedPrice: `₦ ${370000.00} per annum`
    },
    {
        name: "2 Bedroom Flat for rent",
        image: "./images/albuquerquen-new-mexico-temple.jpg",
        description: "A Luxury Fully Furnished And Serviced 2 Bedroom With Pool",
        amenities: "Swimming pool, gym, pipe-borne water, steady electricity",
        location: "Abuja",
        price: 500000.00,
        displayedPrice: `₦ ${500000.00} per annum`
    },
    {
        name: "4 Bedroom Flat for rent",
        image: "./images/atlanta-georgia-temple.webp",
        description: "Luxury 4 Bedroom Pent-floor Masionette With 2rooms Bq,elevator,swimmingpool",
        amenities: "Swimming pool, gym, pipe-borne water, steady electricity",
        location: "Abuja",
        price: 5000000.00,
        displayedPrice:`₦ ${500000.00} per annum`
    }
]

const testimonials = [
    {
        comment: "My stay at WhiteCloud Apartment was an absolute delight. The staff's attentive service went above and beyond, ensuring every need was met seamlessly. The rooms were impeccably neat, offering a cozy retreat.",
        image: "./images/profile.webp",
        name: "Emeka Chukwuebuka",
        location: "⚲ Oweeri, Imo State"
    },
     {
        comment: "The property was well furnished and decorated. Kitchen was well kitted out. Neat communal laundry area. Good Wi-Fi",
        image: "./images/emmanuel-oko.webp",
        name: "Abubakar Bello Nasir",
        location: "⚲ Kano, Kano State"
    },
     {
        comment: "This 2 Bedrooms Apartment is suitable for tourists and travelers. It has several amenities that would guarantee your comfort. These amenities include: Wellness Facilities, Guest Services, Child Friendly, and several others.",
        image: "./images/gladys.webp",
        name: "⚲ Nathan Akambi Oluwatosin",
        location: "Ado-Ekiti, Ekiti State"
    },
]

function createProductOptions(products) {
    products.forEach(product => {
        let option = document.createElement("option");

        option.textContent = product.name;
        option.setAttribute("value", `${product.name}`);
        document.querySelector("#productsOption").appendChild(option);
    });
}


createApartmentCard(apartments);
createReviewerCard(testimonials);
createProductOptions(apartments);

function createApartmentCard(filteredApartments) {
    // document.querySelector("#apartment-wrapper").innerHTML = "";
    filteredApartments.forEach(apartment => {
        let apartmentContainer = document.createElement("div");
        apartmentContainer.setAttribute("class", "apartment-container")
        let img = document.createElement("img");
        let locationEmoji = document.createElement("img");
        let descriptionContainer = document.createElement("p");
        let priceContainer = document.createElement("p");
        let priceHeading = document.createElement("span");
        let priceText = document.createElement("span")
        let descriptionHeading = document.createElement("span")
        let descriptionText = document.createElement("span");
        let amenitiesContainer = document.createElement("p");
        let amenitiesHeading = document.createElement("span");
        let amenitiesText = document.createElement("span");

        let locationContainer = document.createElement("p");
        let locationHeading = document.createElement("span")
        let locationText = document.createElement("span")

        let featuredApartmentBtnContainer = document.createElement("p");
        let featuredApartmentBtn = document.createElement("button")
        let featuredApartmentBtnAnchor = document.createElement("a")

        img.setAttribute("src", apartment.image);
        img.setAttribute("alt", `${apartment.name} Apartment`);
        img.setAttribute("loading", "lazy");
        img.setAttribute("width", 100);
        img.setAttribute("height", 50);
        locationEmoji.setAttribute("src", "./images/location-emoji.png");
        locationEmoji.setAttribute("loading", "lazy");
        locationEmoji.setAttribute("width", 20);
        locationEmoji.setAttribute("height", 20);
        locationEmoji.setAttribute("class", "location-emoji");
        descriptionHeading.textContent = "Description:";
        descriptionText.textContent= apartment.description
        descriptionContainer.appendChild(descriptionHeading);
        descriptionContainer.appendChild(descriptionText);
        amenitiesHeading.textContent = "Amenities:";
        amenitiesText.textContent = apartment.amenities;
        amenitiesContainer.appendChild(amenitiesHeading);
        amenitiesContainer.appendChild(amenitiesText);
        locationHeading.textContent = "Location:";
        locationText.innerHTML = apartment.location;
        locationContainer.appendChild(locationHeading);
        locationContainer.appendChild(locationEmoji)
        locationContainer.appendChild(locationText)
        priceHeading.textContent = "Price:";
        priceText.textContent = apartment.displayedPrice;
        priceContainer.appendChild(priceHeading);
        priceContainer.appendChild(priceText)

        featuredApartmentBtnContainer.setAttribute("class", "featured-btn");
        featuredApartmentBtnAnchor.setAttribute("href", apartment.url);
        featuredApartmentBtnAnchor.textContent = "Learn More...";
        featuredApartmentBtn.appendChild(featuredApartmentBtnAnchor)
        featuredApartmentBtnContainer.appendChild(featuredApartmentBtn)

        apartmentContainer.appendChild(img);
        apartmentContainer.appendChild(descriptionContainer);
        apartmentContainer.appendChild(amenitiesContainer);
        apartmentContainer.appendChild(locationContainer);
        apartmentContainer.appendChild(priceContainer)
        apartmentContainer.appendChild(featuredApartmentBtnContainer)

        document.querySelector("#apartment-wrapper").appendChild(apartmentContainer);
        
    });
        
}

function createReviewerCard(reviewers) {
    reviewers.forEach(reviewer => {
        let testimonialsContainer = document.createElement("div");
        testimonialsContainer.setAttribute("class", "testimonials-container")
        let reviewContainer = document.createElement("p");
        let imgContainer = document.createElement("p");
        let img = document.createElement("img");
        let figure = document.createElement("figure");
        let nameContainer = document.createElement("p");
        let nameHeading = document.createElement("span")
        let nameText = document.createElement("span");
        let locationContainer = document.createElement("p");
        let locationHeading = document.createElement("span");
        let locationText = document.createElement("span");

        img.setAttribute("src", reviewer.image);
        img.setAttribute("alt", "reviewer's photo");
        img.setAttribute("loading", "lazy");
        img.setAttribute("width", 100);
        img.setAttribute("height", 120);

        reviewContainer.textContent = reviewer.comment;
        nameHeading.textContent ="Name:";
        nameText.textContent = reviewer.name;
        locationHeading.textContent = "Location:";
        locationText.textContent = reviewer.location;

        figure.appendChild(img);
        imgContainer.appendChild(figure);
        nameContainer.appendChild(nameHeading);
        nameContainer.appendChild(nameText);        
        locationContainer.appendChild(locationHeading);
        locationContainer.appendChild(locationText);


        testimonialsContainer.appendChild(reviewContainer);
        testimonialsContainer.appendChild(imgContainer);
        testimonialsContainer.appendChild(nameContainer);
        testimonialsContainer.appendChild(locationContainer);
        
        document.querySelector("#testimonials-wrapper").appendChild(testimonialsContainer);
    });
        
}


priceRange.addEventListener("click", () => {
    let lowestPrice = Number(prompt("Please enter the lowest price: "));
    let highestPrice = Number(prompt("Please enter the highest price: "));
    createApartmentCard(apartments.filter(apartment =>  apartment.price >= lowestPrice && apartment.price <= highestPrice))
});



