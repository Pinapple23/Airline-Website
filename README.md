# BrainOverflow
* This project is an Airline reservation system. Airline reservation systems allow an airline to sell their goods (seats). It contains information on schedules and fares and contains a database of reservations and of tickets issued. 
 ## Team Members

* Salma Khalid Shreef

* Alia Saddik

* Veronika Fayez 

* Haidy Ayman Abdelkhalek Abdelrazek Tohfa

* Abdullah Husam Khalil

## Motivation
* This project aims to make it easier for travellers to reserve an airline ticket and view all flights schedule in addition to changing  their reseved flight or seat by only few simple steps.


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Installing

run the commands bellow in a new terminal to install the required packages

```
npm install
```
```
npm install express
```

```
npm install mongoose
```

### Running

A step by step series of examples that tell you have to get a development enviroment running

Navigate to the backend directory
```
cd backend
```

Then run:

```
node app.js
```
Open a new terminal and navigate to the frontend directory
```
cd frontend
```

Then run:

```
npm start
```

Within few seconds the project should be running


## Routes

### 1. Administrator Functionalities :

* ####  Create Flight.

	* Functionality : create a new flight
	* Route : /createFlight
	* Request type : POST
	
***



* #### View all existing flights.
	* Functionality : view a list of all available  flights
	* Route : /viewFlights
	* Request type : GET
***




* #### Update a flight.
	* Functionality : update (edit) any selected flight and its details including flight number, departure and arrival times, number of available Economy seats, number of Business Class seats, dates and airports.
	* Route : /updateFlight
	* Request type : GET
	* Response : 
***

* #### Delete a flight.
	* Functionality : delete any selected flights and all their details upon confirmation
	* Route : /delete
	* Request type : DELETE
	* Response : A prompt popup to confirm deletion.  
***

### 2. Guest User Functionalities :

* #### Search for a flight.
	* Functionality : search for available flights based on number of passengers (children and adults), departure airport and arrival airport terminals, departure and arrival dates and cabin class
	* Route : /searchFlights
	* Request type : POST	
***

* #### View flight details.
	* Functionality : see all details of a selected flight
	* Route : /viewFlight/:id
	* Request type : GET
***


* #### View flight details.
	* Functionality : see all details of a selected flight
	* Route : /viewFlight/:id
	* Request type : GET
***


* #### Signup.
	* Functionality : Signup by entering their details in a form including first name, last name, home address, country code, telephone number(s), email and passport number and creating a username and password
	* Route : /viewFlight/:id
	* Request type : GET
***


### 3. Existing User Functionalities :

* #### Search for a flight.
	* Functionality : search for available flights based on number of passengers (children and adults), departure airport and arrival airport terminals, departure and arrival dates and cabin class
	* Route : /searchFlights
	* Request type : POST	
***

* #### View flight details.
	* Functionality : see all details of a selected flight
	* Route : /viewFlight/:id
	* Request type : GET
***


* #### Confirm Reserving.
	* Functionality : confirm reserving the chosen flight
	* Route : /confirmReserve
	* Request type : POST
***

* #### Select Seat.
	* Functionality : select one or more of the available seats in the chosen cabin of the chosen departure flight
	* Route : /viewSeats/:id/:FlightId/:Cabin/:TicketId
	* Request type : GET
***

* #### View Reserved Flights.
	* Functionality : view all their current reserved flights
	* Route : /viewReserved
	* Request type : GET
***

* #### Update Their Profile.
	* Functionality : edit their information including first name, last name, passport number and email
	* Route : /updateProfile
	* Request type : PUT
***


* #### Signin.
	* Functionality : signin using username and password
	* Route : 
	* Request type : 
***

* #### Change Seat.
	* Functionality : Change reserved seat or seats for a selected flight
	* Route : /changeSeats
	* Request type : GET
***


* #### Change Flight.
	* Functionality : edit a selected reserved flight
	* Route : /changeFlight
	* Request type : GET
***



## Screenshots
* #### Homepage
![WhatsApp Image 2023-07-31 at 8 41 04 PM](https://github.com/Pinapple23/Airline-Website/assets/92719911/f059de01-3300-4e66-98f3-a964616548b9)
![WhatsApp Image 2023-07-31 at 8 41 03 PM](https://github.com/Pinapple23/Airline-Website/assets/92719911/bfcd2e5d-cb92-4ca6-ade0-4e6f2b74071a)
![WhatsApp Image 2023-07-31 at 8 41 02 PM](https://github.com/Pinapple23/Airline-Website/assets/92719911/3eb5f4c8-75b6-433e-94ca-8e2cdebe1e16)

* #### User profile screen shots
![userprofile](https://user-images.githubusercontent.com/57347562/147394223-c2cda0c8-05af-4612-8d2c-a29312061392.png)

***

![userprofile2](https://user-images.githubusercontent.com/57347562/147394228-611f7ce5-da5e-4300-a97d-283cbfab0835.png)



* #### Update user profile screenshots
![updateprofile1](https://user-images.githubusercontent.com/57347562/147394150-a876ed4b-457b-4dee-a5c8-6914a1133255.png)

***


![updateprofile](https://user-images.githubusercontent.com/57347562/147394213-65e9dd34-d9ee-47d1-a404-b924f38b7435.png)


