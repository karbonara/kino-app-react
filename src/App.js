import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  const API_KEY = '9f0dbb07-0a38-44df-ad56-488fa085c240';
  const API_URL_POPULAR = 'https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1';
  const [dataFilm, setDataFilm] = useState([]);

  useEffect(() => {
    axios.get(API_URL_POPULAR, {
      method: 'GET',
      headers: {
        'X-API-KEY': API_KEY,
        'Content-Type': 'application/json',
      },
    })
      .then(({ data }) => setDataFilm(data.films))
  }, [])
  return (
    <div className="App">
      {dataFilm.map((item) => (
        <div>{item.nameRu}</div>
      ))}
    </div>
  );
}

export default App;
