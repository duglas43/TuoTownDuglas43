export default function LocationSearchInput() {
  var url =
    "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";
  var token = "be7cbe3282e283e25593c66e8ebb9d6bdf664eea";
  var query = "москва хабар";

  var options = {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Token " + token,
    },
    body: JSON.stringify({ query: query }),
  };

  fetch(url, options)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
  return (
    <div>
      </div>
  )
}
