import React from 'react'
import Card from './components/Card'

const App = () => {

  const strawHatCrew = [
    {
      name: "Monkey D. Luffy",
      firstAppearanceEpisode: 1,
      beforeCrew: "Pirate rookie / Captain of his own small pirate group",
      nowInCrew: "Captain",
      bounty: "3 Billion Berries",
      nicknames: ["Straw Hat", "Straw Hat Luffy"]
    },
    {
      name: "Roronoa Zoro",
      firstAppearanceEpisode: 2,
      beforeCrew: "Bounty Hunter",
      nowInCrew: "Combatant / Swordsman",
      bounty: "1.111 Billion Berries",
      nicknames: ["Pirate Hunter", "King of Hell"]
    },
    {
      name: "Nami",
      firstAppearanceEpisode: 1,
      beforeCrew: "Thief / Navigator working with the Arlong Pirates",
      nowInCrew: "Navigator",
      bounty: "366 Million Berries",
      nicknames: ["Cat Burglar"]
    },
    {
      name: "Usopp",
      firstAppearanceEpisode: 8,
      beforeCrew: "Village storyteller / Sniper",
      nowInCrew: "Sniper",
      bounty: "500 Million Berries",
      nicknames: ["Sogeking", "God Usopp", "Long Nose"]
    },
    {
      name: "Sanji",
      firstAppearanceEpisode: 20,
      beforeCrew: "Cook at the Baratie",
      nowInCrew: "Cook",
      bounty: "1.032 Billion Berries",
      nicknames: ["Black Leg", "Black Leg Sanji"]
    },
    {
      name: "Tony Tony Chopper",
      firstAppearanceEpisode: 81,
      beforeCrew: "Doctor's apprentice / Doctor of Drum Island",
      nowInCrew: "Doctor",
      bounty: "1 Thousand Berries",
      nicknames: ["Cotton Candy Lover", "Tony Tony Chopper"]
    },
    {
      name: "Nico Robin",
      firstAppearanceEpisode: 67,
      beforeCrew: "Archaeologist / Vice President of Baroque Works",
      nowInCrew: "Archaeologist",
      bounty: "930 Million Berries",
      nicknames: ["Devil Child", "Miss All Sunday"]
    },
    {
      name: "Franky",
      firstAppearanceEpisode: 233,
      beforeCrew: "Ship dismantler / Leader of the Franky Family",
      nowInCrew: "Shipwright",
      bounty: "394 Million Berries",
      nicknames: ["Iron Man", "Cyborg Franky"]
    },
    {
      name: "Brook",
      firstAppearanceEpisode: 337,
      beforeCrew: "Pirate / Musician of the Rumbar Pirates",
      nowInCrew: "Musician / Swordsman",
      bounty: "383 Million Berries",
      nicknames: ["Soul King", "Humming Brook"]
    },
    {
      name: "Jinbe",
      firstAppearanceEpisode: 430,
      beforeCrew: "Captain of the Sun Pirates / Warlord of the Sea",
      nowInCrew: "Helmsman",
      bounty: "1.1 Billion Berries",
      nicknames: ["Knight of the Sea", "First Son of the Sea"]
    }
  ];

  return (
    <div className='parent'>
      
      {strawHatCrew.map(function(elem,idx){

        return <div key={idx}>
          <Card 
        member = {elem.name} 
        firstAppearanceEpisode = {elem.firstAppearanceEpisode}
        beforeCrew = {elem.beforeCrew}
        nowInCrew = {elem.nowInCrew}
        bounty = {elem.bounty}
        nicknames = {elem.nicknames}
        />
        </div>
      })}
      
    </div>
  )
}

export default App
