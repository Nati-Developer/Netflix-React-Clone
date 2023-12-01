
import './App.css';
import Nav from './Nav';
import Banner from './Banner';
import React from 'react'
import requests from './request';
import Row from './Row';
import Footer from './Footer';





function App() {
  return (
    <div className='App'>
    <Nav />
    <Banner />
      <Row title="NETFLIX ORIGINALS"  fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true}/>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
      <Row title="Ethiopian Movies" fetchUrl={requests.fetchEthiopianMovies}/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Animation Movies" fetchUrl={requests.fetchAnimationMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    <Footer />
    </div>
  )
}

export default App
