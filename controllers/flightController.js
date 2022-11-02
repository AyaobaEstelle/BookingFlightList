const { ok } = require("assert");

const all_flights = [
  {
    title: "flight to abuja",
    time: "1pm",
    price: "26000",
    date: "26-06-2022",
  },
  {
    title: "flight to lagos",
    time: "1pm",
    price: "26000",
    date: "26-06-2022",
  },
  {
    title: "flight to canada",
    time: "2pm",
    price: "100000",
    date: "26-06-2022",
  },
  {
    title: "trip to ekiti",
    time: "7am",
    price: "40000",
    date: "31-06-2022",
  },
  {
    title: "flight to kwara",
    time: "12pm",
    price: "24000",
    date: "26-06-2022",
  },
  {
    title: "trip to kogi",
    time: "12pm",
    price: "400000",
    date: "26-06-2022",
  },
];

// Sends all flights
exports.example = (req, res) => {
  // req

  return res.status(200).json({data:all_flights});
};



exports.getSingleRoute = (req, res) => {
  // req.body()
  const id = req.params.id
  const single_flight_found =
    // loop through all_flights array and check if id is found in each key in looped objects;
    // title: "trip to ekiti",
    // or 
    // time: "7am",
    // or
    // date: "31-06-2022",
  
    
    all_flights.find(flight => {
      
      if (flight.price === id || flight.title === id || flight.time === id || flight.date === id ) return flight; 
      else{
        return false;
      }
    });
 

  console.log(single_flight_found,'single_flight_found')
     
     /*
     single_flight_found 
      ? 
     {
    title: "flight to kwara",
    time: "12pm",
    price: "24000",
    date: "26-06-2022",
  } : false

   instructions:
   if single_flight_found is false, then return a status code (404) 
   with a message "Flight not found!!" 
   else return a status code(200) with the flight  
   object{} containing the flight found details

   Hint:
   response must be in this format
   res.status(statuscode).json({data:.....})
     */

   if(single_flight_found === false || single_flight_found ===  undefined)
 return  res.status(404).json({error: "flight not found!!!"})

   else{
   return  res.status(200).json({data:single_flight_found})
   }
  

  
};
