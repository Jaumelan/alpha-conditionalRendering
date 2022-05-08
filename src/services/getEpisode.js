async function getEpisode(number) {
  const urlEpisode = "https://rickandmortyapi.com/api/episode/";
  const charactersData = [];

  if (number) {
    try {
      const ans = await fetch(urlEpisode + number);
      const { characters } = await ans.json();
      for(let i=0; i<characters.length; i++) {
        const response = await fetch(characters[i]);
        const { id, image, status, name } = await response.json();
        const data = { id, image, status, name };
        charactersData.push(data);
      }
      
    } catch (error) {
      console.log(error);
    }
  }
  
  return charactersData;
}

export default getEpisode;
