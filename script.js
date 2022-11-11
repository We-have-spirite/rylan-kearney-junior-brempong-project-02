// Code for pop-up to display!


document.querySelector("#find").addEventListener("click", function(){
    document.querySelector(".menu").classList.add("active");
});

document.querySelector(".menu .close-button").addEventListener("click", function(){
    document.querySelector(".menu").classList.remove("active");
});


// Phase 1: General Set Up:

// a: Name Space
// b: Init function (what we want to run on page load)


// Phase 2: Function for calling the API:

// a: Store the key (if needed)
// b: Store url = new URL(Endpoint)
// c: Store url.search = new URLsearchparams({Key:Pairings})
// d: Fetch(url) --> Can try the new shorthand 
// e: .then() x 2 --> Can try the new shorthand


// Phase 3: Getting the input

// a: Create a variable to store our form in --> query selector?
// b: Create a listner so we know when the user has submitted their choices
// c: prevent default()
// d: Store users choices in a variable
// e: Now that we've got our users selection in the form of a string, lets use it to target the appropriate array with the drinks objects
// f: Create a randomizer function for our drinks array --> this will produce one drink option in the form of a string 

// Phase 4: Displaying the art to the page:

// a: Start function
// b: Make a .foreach loop
// c: Create dynamic elements to the page
//      1. Must change innertext to match API Params
//      2. li > h2 > p > img(must add alt & src to img)
//      3. Add class on the li
// d: Append Children
// e: Append the now populate li to the ul

// Phase 5: Make a call to the cocktail API (this will happen in the event listener function once the user submits)

// a: based off of the users drink option we have saved in the form of a string call the api to get back the image & title/header based on the users choice
// b: display those results to the page
//      1. add all the content we have dynamicallly created to the ul through its id name which already exists in the html