//GOAL: The goal for our app is to collect a list of cocktails containing the user's choice of spirit, and provide them with a list of cocktails containing that spirit from the Cocktail Database API


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
        //console.log(first10);
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
    console.log("jkdshfkjds") 
    const findButton = document.querySelector("#find");
    findButton.addEventListener("click", function(){
        //console.log("hello")
        document.querySelector(".menu").classList.add("active");
    });
    
    document.querySelector(".menu .close-button").addEventListener("click", function(){
        document.querySelector(".menu").classList.remove("active");
    });
    
}

//Step 5: Make init method that will store our code/functions that need to run on page load

drinksApp.init = () => {
    //console.log("ready to go!");
    drinksApp.setUpEventListener();
    drinksApp.getUserInput();
}

//Step 6: Call init method

drinksApp.init()



