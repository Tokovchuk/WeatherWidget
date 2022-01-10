import React, {useEffect, useState} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import CurrentDate from "./Date";
import Location from "./Location";
import TypeAndTemperature from "./TypeAndTemperature";
import HumidityAndWind from "./HumidityAndWind";
import '@blueprintjs/core/lib/css/blueprint.css'
import {Intent, Spinner, SpinnerSize} from '@blueprintjs/core';
import {Secret} from "../../secret";

const Weather = () => {

  const [loading, setLoading] = useState(true);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [data, setData] = useState({
    location: {
      country: null,
      city: null,
    },
    isDay: 1,
    weather: {
      type: null,
      currentTemperature: null,
      wind: {
        speed: null,
        direction: null,
      },
      humidity: null,
      icon: null
    },
    date: null,
  });

  const Wrapper = styled.div`
    margin: 20px auto;
    padding: 20px;
    width: 300px;
    height: 300px;
    border: 2px solid gray;
    border-radius: 10px;
    background: ${data.isDay === 0
            ? 'linear-gradient(to bottom, #003366 0%, #666699 100%)'
            : 'linear-gradient(to bottom, #0099ff 0%, #33cccc 100%)'
    };
    color: whitesmoke;
    font-family: 'Bakbak One', cursive;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    box-shadow: 4px 4px 8px 0 rgba(34, 60, 80, 0.2);
  `


  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    })
  });
  useEffect(() => {
    const API_KEY = Secret.API_KEY;
    if (latitude && longitude) {
      const URL = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${latitude},${longitude}`
      axios.get(URL)
        .then(response => response.data)
        .then(newData => {
          setData(prevData => {
            return {
              ...prevData,
              ...prevData.location.country = newData.location.country,
              ...prevData.location.city = newData.location.name,
              ...prevData.date = new Date().toLocaleDateString(),
              ...prevData.isDay = newData.current.is_day,
              ...prevData.weather.currentTemperature = newData.current.temp_c,
              ...prevData.weather.minTemperature = newData.current.temp_c,
              ...prevData.weather.maxTemperature = newData.current.temp_c,
              ...prevData.weather.type = newData.current.condition.text,
              ...prevData.weather.humidity = newData.current.humidity,
              ...prevData.weather.icon = newData.current.condition.icon,
              ...prevData.weather.wind.speed = newData.current.wind_kph,
              ...prevData.weather.wind.direction = newData.current.wind_dir,
            }
          })
        })
      setLoading(false);
    }
  }, [latitude, longitude]);
  return (
    <Wrapper>
      {loading ? <Spinner size={SpinnerSize.LARGE} intent={Intent.PRIMARY}/> : (<>
          <TypeAndTemperature icon={data.weather.icon}
                              currentTemperature={data.weather.currentTemperature}
                              type={data.weather.type}/>
          <CurrentDate date={data.date}/>
          <Location city={data.location.city} country={data.location.country}/>
          <HumidityAndWind humidity={data.weather.humidity}
                           windDirection={data.weather.wind.direction}
                           windSpeed={data.weather.wind.speed}/>
        </>
      )}
    </Wrapper>
  );
}

export default Weather;