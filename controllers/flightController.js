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
    price: "4010000",
    date: "26-06-2022",
  },
];

// Sends all flights
exports.example = (req, res) => {
  // req

  return res.status(200).json({data:all_flights});
};

exports.route = (req, res) => {
  console.log("example");
  res.send("i am having a class");
};
