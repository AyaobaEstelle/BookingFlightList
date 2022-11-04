const { ok } = require("assert");

let all_flights = [
  {
    title: "flight to abuja",
    time: "1pm",
    price: "26000",
    date: "26-06-2022",
    id: 1,
  },
  {
    title: "flight to lagos",
    time: "1pm",
    price: "26000",
    date: "26-06-2022",
    id: 2,
  },
  {
    title: "flight to canada",
    time: "2pm",
    price: "100000",
    date: "26-06-2022",
    id: 3,
  },
  {
    title: "flight to ekiti",
    time: "7am",
    price: "40000",
    date: "31-06-2022",
    id: 4,
  },
  {
    title: "flight to kwara",
    time: "12pm",
    price: "24000",
    date: "26-06-2022",
    id: 5,
  },
  {
    title: "flight to kogi",
    time: "12pm",
    price: "400000",
    date: "26-06-2022",
    id: 6,
  },
];

exports.example = (req, res) => {
  return res.status(200).json({ data: all_flights });
};

exports.getSingleRoute = (req, res) => {
  const id = req.params.id;

  const single_flight_found = all_flights.find((flight) => {
    if (
      flight.price === id ||
      flight.title === id ||
      flight.time === id ||
      flight.date === id
    )
      return flight;
    else {
      return false;
    }
  });

  if (single_flight_found === false || single_flight_found === undefined)
    return res.status(404).json({ error: "flight not found!!!" });
  else {
    return res.status(200).json({ data: single_flight_found });
  }
};

exports.updateSingleRoute = (req, res) => {
  console.log(req.body, "req.body");
  const price = req.body.price;
  const id = req.body.id;

  if (!id || id <= 0)
    return res.status(400).json({ error: "Please provide a valid id" });

  const is_id_user_provided_in_array = all_flights.find(
    (flight) => flight.id === id
  );

  if (is_id_user_provided_in_array === undefined)
    return res.status(404).json({ error: "flight details not found" });

  const updated_flight = all_flights.map((flight) => {
    if (flight.id === id) {
      return {
        ...flight,
        ...req.body,
      };
    } else {
      return flight;
    }
  });

  all_flights = updated_flight;
};

exports.deleteSingleRoute = (req, res) => {
  const id = req.params?.id;

  const is_id_user_provided_in_array = all_flights.find(
    (flight) => flight.id === id
  );

  if (is_id_user_provided_in_array === undefined)
    return res
      .status(404)
      .json({ error: "Invalid id provided or flight details not found" });

  const updated_list = all_flights.filter((flight) => flight.id !== Number(id));
  all_flights = updated_list;
  return res.status(200).json({ all_flights });
};



exports.createNewFlight = (req, res) => { 
  const new_flight_details =req?.body
  if (new_flight_details?.price ==undefined || new_flight_details?.price?.length <= 0)return res.status(401).json({error:"'price' field is required"})
  if (new_flight_details?.title ===undefined || new_flight_details?.title?.length <= 0)return res.status(401).json({error:"'title' field is required"})
  if (new_flight_details?.time ===undefined || new_flight_details?.time?.length <= 0)return res.status(401).json({error:"'time' field is required"})
  if (new_flight_details?.date ===undefined || new_flight_details?.date?.length <= 0)return res.status(401).json({error:"'date' field is required"})
 
  all_flights?.push({...new_flight_details,id:all_flights?.length+1});
  return res.status(201).json({ message: 'New flight details created successfully', data:all_flights});
}
