import "./styles/styles.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import Customize from "./components/Customize";
import Tracks from "./components/Tracks";
import Score from "./components/Score";
import Header from "./components/Header";
import Dreamy from "./components/AlbumStyles/Dreamy";
import Minimalist from "./components/AlbumStyles/Minimalist";
import Neon from "./components/AlbumStyles/Neon";
import Filmic from "./components/AlbumStyles/Filmic";

function App() {
  const CLIENT_ID = "e257d4993db149c58a1214001626e4ee";
  const REDIRECT_URI = "http://localhost:5173";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";

  const [token, setToken] = useState("");
  const [tracks, setTracks] = useState([]);
  const [displayName, setDisplayName] = useState("");
  const [profilePic, setprofilePic] = useState("");
  const [albumName, setAlbumName] = useState("");
  const [termLength, setTermLength] = useState("medium");
  const [albumCover, setAlbumCover] = useState("dreamy");

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
    <div className="bg-gradient-to-tr from-gray-700 via-gray-900 to-black">
      {!token ? (
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=user-read-private+user-read-email+user-top-read`;
          }}
        >
          Login to Spotify
        </button>
      ) : (
        <div>
          <Header logout={logout} />
          {albumCover === "dreamy" && (
            <Dreamy
              albumCover={albumCover}
              albumName={albumName}
              displayName={displayName}
              tracks={tracks}
            />
          )}
          {albumCover === "minimalist" && (
            <Minimalist
              albumCover={albumCover}
              albumName={albumName}
              displayName={displayName}
              tracks={tracks}
            />
          )}
          {albumCover === "neon" && (
            <Neon
              albumCover={albumCover}
              albumName={albumName}
              displayName={displayName}
              tracks={tracks}
            />
          )}
          {albumCover === "filmic" && (
            <Filmic
              albumCover={albumCover}
              albumName={albumName}
              displayName={displayName}
              tracks={tracks}
            />
          )}

          <div className="flex flex-col items-center pt-10">
            <div className="flex flex-col items-center">
              <Score tracks={tracks} />
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
