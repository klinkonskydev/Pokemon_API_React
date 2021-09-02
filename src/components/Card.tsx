export function Card(props: any){
  return (
    <>
      <div className="card">
        <h1>#{props?.data?.id || '26'} - {props?.data?.name || 'Raichu'}</h1>
        <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${
          props?.data?.id < 10 && '00' + props?.data?.id ||
          props?.data?.id < 100 && '0' +  props?.data?.id ||
          props?.data?.id || '026'
        }.png`} alt="poke img" />
        <div>
         {
          props?.data?.abilities.map( (el: { ability: { name: any; }; }) => {return (<p key={Math.random()}>{el.ability.name}</p>)}) || 
          <>
            <p>STATIC</p>
            <p>LIGHTNING-ROD</p>
          </>
         }
        </div>
      </div>
    </>
  );
}