import { useEffect, useState } from 'react';
import './App.css';
import { Dna } from 'react-loader-spinner';

function App() {

  const [anime, setAnime] = useState([])
  const [loading, setLoading] = useState(true)

  // useEffect(() => {
  //   fetch("https://api.jikan.moe/v4/top/anime")
  //   .then((response) => response.json())
  //   .then((response) => setAnime(response.data))
  //   .catch((error) => console.log(error))
  //   setLoading(false)
  // }, [])

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://api.jikan.moe/v4/top/anime");
        const data = await response.json();
        setAnime(data.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return (
      <div style={{ display: "flex", justifyContent: 'center', alignItems: "center", height: "100dvh", width: "100dvw" }}>
        <Dna
          visible={true}
          height="150"
          width="150"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
      </div>
    )
  } else {
    return (
      <div className="App">
        <div className='allcontent'>
          <div className='leftfilter'>

          </div>
          {/* /////////////////// */}
          <div className='rightside'>
            <div className='topsearch'>

            </div>
            {/* //////////////// */}
            <div className='allAnime'>
              {anime.map((data, index) => (
                <div key={index} className='card'>
                  <img src={data.images.jpg.image_url} alt="" />
                  <div className='pop-up'>
                    <p>{data.titles[0].title}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default App;
