import "./styles/styles.css";
import axios from "axios";
import { useEffect, useState } from "react";

import Customize from "./components/Customize";
import Header from "./components/Header";
import NeonCity from "./components/AlbumStyles/NeonCity";
import Beach from "./components/AlbumStyles/Beach";
import Fantasy from "./components/AlbumStyles/Fantasy";
import Whimsical from "./components/AlbumStyles/Whimsical";

function App() {
  const CLIENT_ID = "e257d4993db149c58a1214001626e4ee";
  const REDIRECT_URI = "http://localhost:5173";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";

  const [token, setToken] = useState("");
  const [tracks, setTracks] = useState([]);
  const [displayName, setDisplayName] = useState("");
  const [albumName, setAlbumName] = useState("");
  const [termLength, setTermLength] = useState("medium");
  const [albumCover, setAlbumCover] = useState("NeonCity");

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];

      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }

    setToken(token);

    const fetchTopTracks = async () => {
      const { data } = await axios.get(
        `https://api.spotify.com/v1/me/top/tracks?time_range=${termLength}_term`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {},
        }
      );

      setTracks(data.items);
    };

    const fetchUserName = async () => {
      const { data } = await axios.get("https://api.spotify.com/v1/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {},
      });

      setDisplayName(data.display_name);
      setAlbumName(`${data.display_name.split(" ")[0]}'s Debut Album`);
      setprofilePic(data.images[0].url);
    };

    fetchTopTracks();
    fetchUserName();
  }, [termLength]);

  const logout = () => {
    setToken("");
    window.localStorage.removeItem("token");
  };

  return (
    <div className="bg-gradient-to-tr from-gray-700 via-gray-900 to-black h-screen">
      {!token ? (
        <div className="flex flex-col h-screen items-center justify-center">
          <h1 class="text-6xl font-extrabold p-6">Debutify</h1>
          <p class="text-lg p-2">Create your debut album!</p>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=user-read-private+user-read-email+user-top-read`;
            }}
            className=" text-center inline-flex items-center bg-transparent hover:bg-white text-[#1DB954] font-semibold  py-2 px-4 border border-[#1DB954] hover:border-transparent rounded"
          >
            <span> Login to Spotify</span>
            <img
              className="ml-4 h-10 w-10"
              src="/public/assets/arrow.png"
            ></img>
          </button>
        </div>
      ) : (
        <div>
          <Header logout={logout} />
          {albumCover === "NeonCity" && (
            <NeonCity
              albumCover={albumCover}
              albumName={albumName}
              displayName={displayName}
              tracks={tracks}
            />
          )}
          {albumCover === "Beach" && (
            <Beach
              albumCover={albumCover}
              albumName={albumName}
              displayName={displayName}
              tracks={tracks}
            />
          )}
          {albumCover === "Fantasy" && (
            <Fantasy
              albumCover={albumCover}
              albumName={albumName}
              displayName={displayName}
              tracks={tracks}
            />
          )}
          {albumCover === "Whimsical" && (
            <Whimsical
              albumCover={albumCover}
              albumName={albumName}
              displayName={displayName}
              tracks={tracks}
            />
          )}

          <div className="flex flex-col items-center md:pt-10 pt-20">
            <div className="flex flex-col items-center">
              <Customize
                albumName={albumName}
                albumNameChanger={setAlbumName}
                albumStyleChanger={setAlbumCover}
                timeLengthChanger={setTermLength}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
