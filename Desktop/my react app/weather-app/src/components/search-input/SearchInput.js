import { Fragment, useRef, useState } from "react";
import Results from "../Results/Result";

const SearchInput = (props) => {
  const searchInputRef = useRef();
  const [isdata, setIsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const submitHandler = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const searchValue = searchInputRef.current.value;

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=6b8a951bcf3d101f613a9285478949c5`
    );

    const data = await response.json();
    const loadedWeather = [data];

    setIsData(loadedWeather);
    console.log(loadedWeather);
  };

  const weatherData = isdata.map((data) => {
    return (
      <Results
        key={data.name}
        name={data.name}
        description={data.weather[0].description}
        icon={data.weather[0].icon}
        temp={data.main.temp}
        humidity={data.main.humidity}
        speed={data.wind.speed}
      />
    );
  });

  return (
    <Fragment>
      <form onSubmit={submitHandler}>
        <label htmlFor="search">Seach</label>
        <input id="search" type="search" ref={searchInputRef} />
        <button>submit</button>
      </form>
      {isLoading && isdata && weatherData}
      {!isLoading && <p>Please search for a city to get weatherData.....</p>}
    </Fragment>
  );
};

export default SearchInput;
