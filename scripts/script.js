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
    const url = new URL(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkSearchQuery}`);
    
    
    // 2b: Fetch(url) 
    
    fetch(url)
    
    // 2c: .then() x 2 
    
    .then(res => {
        return res.json()
    })
    .then(data => {
        const array = data.drinks;
        // console.log(data.drinks);
        // empty out what is currently in the ul
        document.querySelector('#recipeDisplay').innerHTML = ``;
        // // display the content to the page
        drinksApp.displayRecipes(array);
        console.log(array);
    })
    
}





// Getting the user input

drinksApp.getIngredients = () => {

    const choice = document.querySelector('.drinkChoice');

    choice.addEventListener(`submit`, function(event) {

        event.preventDefault();
        // const selection = this.target;
        const userInput = document.querySelector('input');
        const drinkIDInput = userInput.value;
        userInput.value = '';
        console.log(drinkIDInput)
        drinksApp.searchDrink(drinkIDInput);


        if (drinkIDInput) {           
            // console.log("Test");
            drinksApp.searchDrink();  
            console.log("User has submitted something");          
        } else {
            console.log("Empty String");
        }

    });
}

// Displaying to the page

//Step 3: Displaying the drinks to the page:
drinksApp.displayRecipes = (recipe) => {
        
    recipe.forEach(function(drinkRecipe) {
        // console.log(drinkRecipe);

        // Create li elements for measurements
        const measurementsOne = document.createElement(`li`);
        measurementsOne.innerText = drinkRecipe.strMeasure1;
        
        const measurementsTwo = document.createElement(`li`);
        measurementsTwo.innerText = drinkRecipe.strMeasure2;
        
        const measurementsThree = document.createElement(`li`);
        measurementsThree.innerText = drinkRecipe.strMeasure3;
        
        const measurementsFour = document.createElement(`li`);
        measurementsFour.innerText = drinkRecipe.strMeasure4;
        
        const measurementsFive = document.createElement(`li`);
        measurementsFive.innerText = drinkRecipe.strMeasure5;
        
        const measurementsSix = document.createElement(`li`);
        measurementsSix.innerText = drinkRecipe.strMeasure6;
        
        const measurementsSeven = document.createElement(`li`);
        measurementsSeven.innerText = drinkRecipe.strMeasure7;
        
        const measurementsEight = document.createElement(`li`);
        measurementsEight.innerText = drinkRecipe.strMeasure8;
        
        //Create ul element for measurements
        const measurementList = document.createElement(`ul`);
        measurementList.classList.add(`measurements`);



        // Create li elements for ingredients
        const ingredientsOne = document.createElement(`li`);
        ingredientsOne.innerText = drinkRecipe.strIngredient1;

        const ingredientsTwo = document.createElement(`li`);
        ingredientsTwo.innerText = drinkRecipe.strIngredient2;

        const ingredientsThree = document.createElement(`li`);
        ingredientsThree.innerText = drinkRecipe.strIngredient3;

        const ingredientsFour = document.createElement(`li`);
        ingredientsFour.innerText = drinkRecipe.strIngredient4;

        const ingredientsFive = document.createElement(`li`);
        ingredientsFive.innerText = drinkRecipe.strIngredient5;

        const ingredientsSix = document.createElement(`li`);
        ingredientsSix.innerText = drinkRecipe.strIngredient6;

        const ingredientsSeven = document.createElement(`li`);
        ingredientsSeven.innerText = drinkRecipe.strIngredient7;

        const ingredientsEight = document.createElement(`li`);
        ingredientsEight.innerText = drinkRecipe.strIngredient8;

        //Create ul element for ingredients
        const ingredientList = document.createElement(`ul`);
        ingredientList.classList.add(`ingredients`);


   
        // Create p element for instructions
        const instructions = document.createElement(`p`);
        instructions.innerText = drinkRecipe.strInstructions;

        // create div container & append
        const recipeContainer = document.createElement(`div`);
        recipeContainer.classList.add(`recipe`);

        //Appending recipe elements to the page
        recipeContainer.appendChild(measurementList);
        measurementList.appendChild(measurementsOne);
        measurementList.appendChild(measurementsTwo);
        measurementList.appendChild(measurementsThree);
        measurementList.appendChild(measurementsFour);
        measurementList.appendChild(measurementsFive);
        measurementList.appendChild(measurementsSix);
        measurementList.appendChild(measurementsSeven);
        measurementList.appendChild(measurementsEight);
        recipeContainer.appendChild(ingredientList);
        ingredientList.appendChild(ingredientsOne);
        ingredientList.appendChild(ingredientsTwo);
        ingredientList.appendChild(ingredientsThree);
        ingredientList.appendChild(ingredientsFour);
        ingredientList.appendChild(ingredientsFive);
        ingredientList.appendChild(ingredientsSix);
        ingredientList.appendChild(ingredientsSeven);
        ingredientList.appendChild(ingredientsEight);
        recipeContainer.appendChild(instructions);

        //Creating img element for recipe img
        const recipeImage = document.createElement(`img`);
        recipeImage.src = drinkRecipe.strDrinkThumb;
        recipeImage.alt = drinkRecipe.strDrink;

        //Creating img container div
        const recipeImgContainer = document.createElement(`div`);
        recipeImgContainer.classList.add(`recipeImgContainer`);

        //Appending the img
        recipeImgContainer.appendChild(recipeImage)



        // Adding all the content we created to the ul
        document.querySelector(`#recipeDisplay`).appendChild(recipeContainer);
        document.querySelector(`#recipeDisplay`).appendChild(recipeImgContainer);

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