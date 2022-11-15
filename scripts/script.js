//GOAL: The goal for our app is to collect a list of cocktails containing the user's choice of spirit, and provide them with a list of cocktails containing that spirit from the Cocktail Database API

// Here are the following steps we set out to achieve this:

// Step 1: Set-Up
// 1(a). Making a namespace object where we can scope our app to avoid potential conflicts
// 1(b). Create our init function and move it to the end of the page for what functions we want to be called on page load

// Step 2: Calling the API
// 2(a) Create a function and store our endpoint
// 2(b) Fetch url
// 2(c) .Then, where we will recieve our JSON object and parse through to recieve 10 items from our drinks array & clear the value of the innerhtml once recieved

// Step 3: Displaying our drinks to the page
// 3(a) Start a function & create a .forEach method where we can create a new element for every object in our array
// 3(b) Create elements for li>h2>img elements
// 3(c) Append elements h2 & img (with src & alt) to our li
// 3(d) Append the dynamic li to our UL element which currently exists in our HTML

// Step 4: Get the user input
// Add an event listener to our form and pass through the submit action where we will gather the value of the users submission. We can then take this value and call our display drinks function and pass through the users submission value.

// Step 5: Clickable Form Pop-up
// Add JS code for making our form pop-up by adding an event listender where we will make our form active once the user has clicked. This is where the user will input their choice to display the images to the page. We initially had this at the top of our code, but opted to move this down for cleaner, more legible code.




//Step 1: Making a namespace:

const drinksApp = {};


//Step 2: Function for calling the API:

drinksApp.getDrink = (query) => {
    
    
    // 2a: Store url = new URL(Endpoint)
    const url = new URL(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${query}`);


    // 2b: Fetch(url) 

    fetch(url)

    // 2c: .then() x 2 

    .then(res => {
        return res.json()
    })
    .then(data => {
        const array = data.drinks;
        const first10 = array.slice(0, 10);
        // empty out what is currently in the ul
        document.querySelector(`#drinkDisplay`).innerHTML = ``;
        // display the content to the page
        drinksApp.displayDrinks(first10);
    })

}

//Step 3: Displaying the drinks to the page:

// 3a: Start function

    drinksApp.displayDrinks = (cocktails) => {
        
        cocktails.forEach(drinks => {
            console.log(drinks);
            // Create h2
            const name = document.createElement(`h2`);
            name.innerText = drinks.strDrink;

            // Create Img
            const drinkImage = document.createElement(`img`);
            drinkImage.src = drinks.strDrinkThumb;
            drinkImage.alt = drinks.strDrink;

            // create li & append
            const drinkContainer = document.createElement(`div`);
            drinkContainer.classList.add(`cocktails`);

            drinkContainer.appendChild(name);
            drinkContainer.appendChild(drinkImage);

            // Adding all the content we created to the ul
            document.querySelector(`#drinkDisplay`).appendChild(drinkContainer);

        })
            
    }


// Step 4: Getting the input


    drinksApp.getUserInput = () => {
        const choice = document.querySelector(`#spirit`);
        choice.addEventListener(`change`, function() {
            const selection = this.value
            //console.log(selection);
            drinksApp.getDrink(selection);
        });
    }



// Clickable pop up form to retrieve user's selection:
drinksApp.setUpEventListener = () => {
    const findButton = document.querySelector("#find");
    findButton.addEventListener("click", function(){
        document.querySelector(".menu").classList.add("active");
    });
    
    document.querySelector(".menu .closeButton").addEventListener("click", function(){
        document.querySelector(".menu").classList.remove("active");
    });
    
}

//Step 5: Make init method that will store our code/functions that need to run on page load

drinksApp.init = () => {
    drinksApp.setUpEventListener();
    drinksApp.getUserInput();
}

//Step 1(b): Call init method

drinksApp.init()

// Search function for the ingredient section

// Step 1: Creating modules

// 1(a)Setup Import/Export modules with script.js and index.html

// Step 2: Calling the API
// 2(a) Create a function and store our endpoint
// 2(b) Fetch url
// 2(c) .Then, where we will recieve our JSON object and parse through to recieve our array of objects which we can parse through to grab the ingredient key

// Step 3: Get the user input
// 3(a) Add an event listener to our input form and pass through the submit action where we will gather the value of the users submission. We can then take this value and call our display drinks function and pass through the users submission value.


// Step 4: Displaying our drinks to the page
// 4(a) Start a function & create a .forEach method where we can create a new element for every time the user clicks submit
// 4(b) Create elements for li>h2>img elements
// 4(c) Append elements h2 & img (with src & alt) to our li
// 4(d) Append the dynamic li to our UL element which currently exists in our HTML




