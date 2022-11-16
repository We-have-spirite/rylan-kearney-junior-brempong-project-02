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
        const drinkShuffle = array.sort(() => 0.5 - Math.random());
        const first10 = drinkShuffle.slice(0, 10);
        // empty out what is currently in the ul
        document.querySelector(`#drinkDisplay`).innerHTML = ``;
        // display the content to the page
        drinksApp.displayDrinks(first10);
        console.log(first10)
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

            // Create p element for Drink ID
            const drinkID = document.createElement(`p`);
            drinkID.innerText = drinks.idDrink;

            // Create Img
            const drinkImage = document.createElement(`img`);
            drinkImage.src = drinks.strDrinkThumb;
            drinkImage.alt = drinks.strDrink;

            // create li & append
            const drinkContainer = document.createElement(`div`);
            drinkContainer.classList.add(`cocktails`);

            drinkContainer.appendChild(name);
            drinkContainer.appendChild(drinkID);
            drinkContainer.appendChild(drinkImage);

            // Adding all the content we created to the ul
            document.querySelector(`#drinkDisplay`).appendChild(drinkContainer);

        })
            
    }

// Step 4: Getting the input


    drinksApp.getUserInput = () => {
        const choice = document.querySelector(`#spirit`);
        choice.addEventListener(`change`, function() {
            const selection = this.value;
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

// STRETCH GOAL

// To create Search function for the ingredient section, where when a user inputs, they are able to surface the ingredients required to make the cocktail of their choice.


// Step 1: Calling the API
// 1(a) Create a function and store our new endpoint
// 1(b) Fetch url
// 1(c) .Then, where we will recieve our JSON object and parse through to recieve our array of objects which we can parse through to grab the ingredient key

// Step 2: Get the user input
// 2(a) Add an event listener to our input form and pass through the submit action where we will gather the value of the users submission. We can then take this value and call our display drinks function and pass through the users submission value.


// Step 3: Displaying our drinks to the page
// 3(a) Start a function & create a .forEach method where we can create a new element for every time the user clicks submit
// 3(b) Create elements for li>h2>img elements
// 3(c) Append elements h2 & img (with src & alt) to our li
// 3(d) Append the dynamic li to our UL element which currently exists in our HTML


// Call the API with out new endpoint:

drinksApp.searchDrink = (drinkSearchQuery) => {
    
    
    // 2a: Store url = new URL(Endpoint)
    const url = new URL(`www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkSearchQuery}`);
    
    
    // 2b: Fetch(url) 
    
    fetch(url)
    
    // 2c: .then() x 2 
    
    .then(res => {
        return res.json()
    })
    .then(data => {
        const array = data.drinks;
        console.log(array);
        // empty out what is currently in the ul
        document.querySelector('#ingredientDisplay').innerHTML = ``;
        // // display the content to the page
        // drinksApp.displayDrinks(array);
    })
    
}


// Getting the user input

drinksApp.getIngredients = (item) => {

    const choice = document.querySelector('.drinkChoice');
    choice.addEventListener(`submit`, function(event) {
        event.preventDefault();
        console.log('form is submitted!');
        const selection = this.target;
        drinksApp.searchDrink(selection);
    });
}


// Displaying to the page

//Step 3: Displaying the drinks to the page:
drinksApp.displayRecipes = (recipe) => {
        
    cocktails.forEach(drinkRecipe => {
        console.log(drinkRecipe);
        // Create p element for ingredients
        const ingredients = document.createElement(`p`);
        ingredients.innerText = drinks.strIngredient;

        // Create p element for measurements
        const measurements = document.createElement(`p`);
        measurements.innerText = drinks.strMeasure;

        // Create p element for instructions
        const instructions = document.createElement(`p`);
        instructions.innerText = drinks.strInstructions;

        // create div container & append
        const recipeContainer = document.createElement(`div`);
        recipeContainer.classList.add(`recipe`);

        recipeContainer.appendChild(ingredients);
        recipeContainer.appendChild(measurements);
        recipeContainer.appendChild(instructions);

        // Adding all the content we created to the ul
        document.querySelector(`#ingredientDisplay`).appendChild(recipeContainer);

    })
        
}

// 3a: Start function to display to the page



//Step 5: Make init method that will store our code/functions that need to run on page load

drinksApp.init = () => {
    drinksApp.setUpEventListener();
    drinksApp.getUserInput();
    drinksApp.getIngredients();
}


//Step 1(b): Call init method

drinksApp.init()