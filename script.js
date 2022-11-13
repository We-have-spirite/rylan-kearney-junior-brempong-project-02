// Code for pop-up to display!


// Phase 1: General Set Up:

// a: Make Name Space

const drinksApp = {};

// // 2(a): Store the key (if needed)
// drinksApp.key = `1`;

// Store the users selection in a global variable to access




// Phase 2: Function for calling the API:

drinksApp.getDrink = (query) => {
    
    
    // b: Store url = new URL(Endpoint)
    const url = new URL(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${query}`);


    // c: Fetch(url) 

    fetch(url)

    // d: .then() x 2 

    .then(res => {
        return res.json()
    })
    .then(data => {
        const array = data.drinks;
        const first10 = array.slice(0, 10);
        console.log(first10);
        // empty out what is currently in the ul
        document.querySelector(`#drinkDisplay`).innerHTML = ``;
        // display the content
        drinksApp.displayDrinks(first10);
    })

}

// Phase 3: Displaying the art to the page:

// a: Start function

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


// Phase 4: Getting the input


    drinksApp.getUserInput = () => {
        //console.log("hi")
        const choice = document.querySelector(`#spirit`);
        choice.addEventListener(`change`, function() {
            const selection = this.value
            console.log(selection);
            drinksApp.getDrink(selection);
            //location.reload();

                    
        });
    }



// Phase 1(b):
drinksApp.setUpEventListener = () => {
    console.log("jkdshfkjds") 
    const findButton = document.querySelector("#find");
    findButton.addEventListener("click", function(){
        console.log("hello")
        document.querySelector(".menu").classList.add("active");
    });
    
    document.querySelector(".menu .close-button").addEventListener("click", function(){
        document.querySelector(".menu").classList.remove("active");
    });
    
}

// Make init method that will store our code/functions that need to run on page load

drinksApp.init = () => {
    console.log("ready to go!");
    drinksApp.setUpEventListener();

    drinksApp.getUserInput();
    //drinksApp.getDrink();
    
    //drinksApp.displayDrinks();
}



// Call init method

drinksApp.init()



