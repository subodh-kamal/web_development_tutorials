const countries = ["Nepal", "India", "China", "Japan"];

countries.forEach((country) => {
  console.log(country); // Nepal India China Japan
});

fetch("https://restcountries.com/v3.1/independent?status=true")
  .then((res) => res.json())
  .then((country) => console.log(country));
