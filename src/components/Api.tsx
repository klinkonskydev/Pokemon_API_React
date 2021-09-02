import { Card } from './Card'

import lupaIMG from '../assets/lupa.svg'
import logoIMG from '../assets/logo.png'
import { useState } from 'react';

interface Props{
  id: number
  name: string
  sprites: {
    front_shiny: string
  }
};

export function Api(){
  const [ api, setApi ] = useState<Props>();

  function searchPokemon(e: any){
    let value = e.target.value;

    if( e.charCode !== 13 ){ return }

    else if( e.charCode === 13){
      getApi(value)
      e.target.value = ''
    };
  };

  async function getApi(poke: string){
    console.table(poke)
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${poke.toLowerCase().trim()}/`);
    const data = await response.json();

    setApi(data);
  };

 return (
    <>
      <header>
        <img src={logoIMG} alt="logo" className="logo-image" />

        <div className="search-container">
          <input type="text" autoComplete="off" placeholder="Alcremie" tabIndex={1} id="searchPoke" onKeyPress={searchPokemon}/>
          {/* <img src={lupaIMG} alt="search Image" className="search-image" onClick={searchPoke}/> */}
        </div>
      </header>

      <main id="main">
        <Card data={api} />
      </main>
    </>
  );
}