// Code for pop-up to display!


document.querySelector("#find").addEventListener("click", function(){
    document.querySelector(".menu").classList.add("active");
});

document.querySelector(".menu .close-button").addEventListener("click", function(){
    document.querySelector(".menu").classList.remove("active");
});


// Phase 1: General Set Up:

// a: Make Name Space

const drinksApp = {};

// 2(a): Store the key (if needed)
drinksApp.key = `1`;


// Phase 2: Function for calling the API:

drinksApp.getDrink = (query) => {
    
    
    // b: Store url = new URL(Endpoint)
    const url = new URL(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin`);

    // c: Fetch(url) 

    fetch(url)

    // d: .then() x 2 

    .then((res) => res.json())
    .then((data) => console.log(data.drinks))
        // document.querySelector(`spirit`).innerHTML = ""        
        // drinksApp.displayDrinks
    }

// Phase 3: Displaying the art to the page:


// a: Start function

    drinksApp.displayDrinks = function(cocktails) {
        
        cocktails.forEach( function(drinkObject) {
            
            const name = document.createElement(`h2`);
            name.innerText = drinkObject.strDrink;


            const drinkImage = document.createElement(`img`);
            drinkImage.src = drinkObject.strDrinkThumb;
            drinkImage.alt = drinkObject.strDrink;


            const drinkContainer = document.createElement(`li`);
            drinkContainer.classList.add(`cocktails`);

            drinkContainer.append(name, drinkImage);


            document.querySelector(`drinkDisplay`).append(drinkContainer);

        })
            
    }


// Phase 4: Getting the input


    drinksApp.getUserInput = () => {

        document.querySelector(`#spirit`).addEventListener("change", function() {
            const selection = this.value
            console.log(selection);
            return selection
                    
        });
    }


// Phase 1(b):

// Make init method that will store our code/functions that need to run on page load

drinksApp.init = () => {
    // console.log("ready to go!");
    drinksApp.getDrink();
    // drinksApp.displayDrinks();
    drinksApp.getUserInput()
};

// Call init method

drinksApp.init()