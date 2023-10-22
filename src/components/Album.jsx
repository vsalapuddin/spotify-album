import Tracks from "./Tracks";
import Score from "./Score";
import styled from "styled-components";

import NeonCityLg from "../../src/assets/NeonCityLg.jpg";
import NeonCitySm from "../../src/assets/NeonCitySm.jpg";
import BeachLg from "../../src/assets/BeachLg.jpg";
import BeachSm from "../../src/assets/BeachSm.jpg";
import FantasyLg from "../../src/assets/FantasyLg.jpg";
import FantasySm from "../../src/assets/FantasySm.jpg";
import FireLg from "../../src/assets/FireLg.jpg";
import FireSm from "../../src/assets/FireSm.jpg";

import BeachVinyl from "../../src/assets/BeachVinyl.png";
import FantasyVinyl from "../../src/assets/FantasyVinyl.png";
import NeonCityVinyl from "../../src/assets/NeonCityVinyl.png";
import FireVinyl from "../../src/assets/FireVinyl.png";

import Presented from "../../src/assets/presented.png";
import Spotify from "../../src/assets/Spotify.png";

export default function Album({
  albumCover,
  albumName,
  displayName,
  tracks,
  printRef,
}) {
  let albumStyle;
  let containerColor;
  let vinyl;

  if (albumCover === "NeonCity") {
    albumStyle = `
      background-image: url('${NeonCityLg}');
      
      @media (max-width: 767px) {
        background-image: url('${NeonCitySm}');
      }
    `;
    containerColor = `
      background-color: #0D1333;
    `;
    vinyl = NeonCityVinyl;
  } else if (albumCover === "Beach") {
    albumStyle = `
      background-image: url('${BeachLg}');
      
      @media (max-width: 767px) {
        background-image: url('${BeachSm}');
      }
    `;
    containerColor = `
      background-color: #7EDAF1;
    `;
    vinyl = BeachVinyl;
  } else if (albumCover === "Fantasy") {
    albumStyle = `
      background-image: url('${FantasyLg}');
      
      @media (max-width: 767px) {
        background-image: url('${FantasySm}');
      }
    `;
    containerColor = `
      background-color: #FCC872;
    `;
    vinyl = FantasyVinyl;
  } else if (albumCover === "Fire") {
    albumStyle = `
      background-image: url('${FireLg}');
      
      @media (max-width: 767px) {
        background-image: url('${FireSm}');
      }
    `;
    containerColor = `
      background-color: #383C45;
    `;
    vinyl = FireVinyl;
  }

  const AlbumContainer = styled.div`
    ${containerColor}
  `;

  const AlbumComponent = styled.div`
    ${albumStyle}
  `;

  return (
    <AlbumContainer
      ref={printRef}
      className={`flex flex-col items-start justify-center w-[350px] h-[400px] md:w-[795px] md:h-[800px] pl-4 rounded-lg border-2`}
    >
      <AlbumComponent
        className={`border-4 overflow-hidden flex flex-col rounded-sm absolute h-[240px] w-[240px] md:h-[563px] md:w-[563px]`}
      >
        <h1
          className="whitespace-nowrap self-center text-[10px] md:text-sm md:text-xl font-bold uppercase pt-3 md:pt-6"
          style={{ color: "white" }}
        >
          {albumName}
        </h1>
        <h2
          className="whitespace-nowrap self-center text-[6px] md:text-[10px] font-bold uppercase pt-1 "
          style={{ color: "white" }}
        >
          {displayName}
        </h2>
        <div className="pt-2 md:pt-12">
          <Tracks tracks={tracks} textColor={"white"} />
        </div>
        <div className="flex self-end pr-0.5 mt-12 md:pr-2 md:mt-40">
          <img src={Presented} className="w-[45px] md:w-[120px]" />
        </div>
      </AlbumComponent>
      <img
        src={vinyl}
        className="rounded-full ml-[100px] w-[240px] md:w-[625px] flex md:ml-[180px]"
        alt={"Vinyl"}
      />
      <div className="flex mb-[-50px]">
        <Score tracks={tracks} />
      </div>
      <img
        src={Spotify}
        className="absolute md:relative md:mt-[0px] mt-[350px] rounded-full ml-[225px] md:ml-[600px] w-[100px] md:w-[150px] flex md:mb-[-55px]"
      />
    </AlbumContainer>
  );
}
