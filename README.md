# React Mock Code Challenge: gregslist

## Demo

Use this gif as an example of how the app should work.

![Demo GIF](https://curriculum-content.s3.amazonaws.com/phase-2/react-hooks-mock-challenge-gregslist/demo.gif)

## Instructions

Welcome to gregslist, a community site for finding free items near you.

The designers have put together the components and CSS. Now it's up to you to
bring the features to life by adding stateful logic as well as persisting data
to the backend via our API.

Your job will be to make our app work according to the user stories you will
find in the [Core Deliverables](#Core-Deliverables) section.

## Setup

1. Run `npm install` in your terminal.
2. Run `npm run server`. This will run your backend on port `6001`.
3. In a new terminal, run `npm start`.

Make sure to open [http://localhost:6001/listings](http://localhost:6001/listings)
in the browser to verify that your backend is working before you proceed!

## Core Deliverables

As a user:

1. When the app starts, I can see all listings.
  1. UseEffect -> fetch (within parent comp => <App />)
  2. UseState to create listings variable and setlistings function
  3. Retrieve Array of data place data inside setlistings function the send of props to child comp by using 
      'listings' variable remember to use key when passing props down
  4. Recieve Array data in child comp <ListingsContainer /> then map through Array data to transform into JXS components 
  5. create components varaiable put new array data comps inside and send props over to the child comp <ListingCards />
  6. destucture props create variable for destructure and place props into correct areas

2. I can "favorite" and "unfavorite" a listing on the frontend by clicking the
   star icon. This feature doesn't need backend persistence.
   1. This is happening on the comp that has fav button <ListingCard />
   2. first import UseState from React into file
   3. Create a UseState variable and function --> [isLiked,setIsLiked] = UseState(true)  <-- (for now)
   4. create a 'togglelike' function set the value to be setIsLiked(!isLiked) 
   5. plug in onClick = {tooglelike} on correct buttons
   6. change the UseState(false) make sure first terinary variable is the variable in UseState which is 'isLiked'

3. I can remove a listing from the page by clicking the trash can icon. This
   change should be persisted in the backend.
   1. bring over id from parent comp pass as prop 
   2. create a function called 'handledelete' in the child level <listingCard />
   3. go to <App /> where state is for rendering the array data and create a function that will filter and delete items then pass this function down as props to children  
   4. once pass 'removeListing' function down as props in <listingCard /> comp inside 'handleDelete' create a fetch DELETE method to persiist in backend and on DOM (no refresh)
   5. plug in onClick={handleDelete} on correct button

4. I can search for listings by their name.
  1. state and function will be on shared parent component so not directly in <search/> but in <App/>
    2. first import UseState from React into file
    3. Create a UseState variable and function --> [searchTerm,setSearchTerm] = UseState('') 
    4. create a 'onSearch' function set the value to be setSearchTerm(searchTerm) pass 'onSearch' as a prop down to search component
    5. to filter through the text go back to the shared parent <App/> and create a function to handle the filters call it 'FilteredText' make sure to make everything lowercase then pass props down to the component with the original list are

### Endpoints for Core Deliverables

The base URL for your backend is: `http://localhost:6001`.

#### GET /listings

Example Response:

```json
[
  {
    "id": 1,
    "description": "heater",
    "image": "./images/heater.jpg",
    "location": "BROOKLYN"
  },
  {
    "id": 2,
    "description": "2019 Toyota Tacoma grill",
    "image": "./images/toyota-grill.jpg",
    "location": "Williamsburg"
  }
]
```

#### DELETE `/listings/:id`

Example Response:

```json
{}
```

## Advanced Deliverables

These deliverables are not required to pass the code challenge, but if you have
the extra time, or even after the code challenge, they are a great way to
stretch your skills.

You'll have to add additional elements for these features. Feel free to style
them however you see fit!

> Note: If you are going to attempt these advanced deliverables, please be sure
> to have a working commit with all the Core Deliverables first!

As a user:

1. I can sort the listings alphabetically by location.
2. I can create a new listing by submitting a form, and persist the changes to
   the backend.

### Endpoints for Advanced Deliverables

#### POST /listings

Required Headers:

```js
{
  "Content-Type": "application/json"
}
```

Request Object:

```json
{
  "description": "heater",
  "image": "./images/heater.jpg",
  "location": "BROOKLYN"
}
```

Example response:

```json
{
  "id": 1,
  "description": "heater",
  "image": "./images/heater.jpg",
  "location": "BROOKLYN"
}
```
