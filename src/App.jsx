import "./styles/styles.css";
import axios from "axios";
import html2canvas from "html2canvas";
import { useEffect, useRef, useState } from "react";
import { SocialIcon } from "react-social-icons";

import Customize from "./components/Customize";
import Header from "./components/Header";
import Album from "./components/Album";

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
  const [albumCover, setAlbumCover] = useState("Fire");
  const [isHovered, setIsHovered] = useState(false);
  const printRef = useRef();

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
    };

    fetchTopTracks();
    fetchUserName();
  }, [termLength]);

  const logout = () => {
    setToken("");
    window.localStorage.removeItem("token");
  };

  const handleDownloadImage = async () => {
    const element = printRef.current;
    const canvas = await html2canvas(element);

    const data = canvas.toDataURL("debutAlbum/jpg");
    const link = document.createElement("a");

    if (typeof link.download === "string") {
      link.href = data;
      link.download = "debutAlbum.jpg";

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      window.open(data);
    }
  };

  return (
    <div className="bg-gradient-to-tr from-gray-700 via-gray-900 to-black overflow-y-scroll overflow-x-hidden no-scrollbar">
      {!token ? (
        <div className="flex flex-col items-center justify-center h-screen">
          <h1
            data-text="Debutify"
            class="text-6xl relative overflow-hidden pb-8 before:content-[attr(data-text)attr(data-text)] before:underline before:underline-offset-8 before:decoration-wavy before:decoration-[#1DB954] before:absolute before:whitespace-nowrap before:text-transparent hover:before:animate-wave"
          >
            Debutify
          </h1>
          <p className="text-lg p-2 pb-4 font-semibold">
            Create your debut album!
          </p>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=user-read-private+user-read-email+user-top-read`;
            }}
            className="text-center inline-flex items-center bg-transparent hover:bg-white text-[#1DB954] font-semibold  py-3 px-6 border border-[#1DB954] hover:border-transparent rounded"
          >
            <span className="animate-bounce"> Login to Spotify</span>
            <img
              className="ml-4 h-10 w-10 animate-bounce"
              src="/public/assets/arrow.png"
            ></img>
          </button>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <Header logout={logout} />
          <div className="pt-5 md:pt-10">
            <Album
              albumCover={albumCover}
              albumName={albumName}
              displayName={displayName}
              tracks={tracks}
              printRef={printRef}
            />
          </div>
          <div className="flex flex-col items-center pl-4 pr-4 pt-4 md:pt-0">
            <div className="flex flex-col items-center">
              <Customize
                albumName={albumName}
                albumNameChanger={setAlbumName}
                albumStyleChanger={setAlbumCover}
                timeLengthChanger={setTermLength}
              />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <button
              onClick={handleDownloadImage}
              className="bg-black hover:bg-white text-white hover:text-black py-2 px-4 rounded-lg font-bold w-[300px] md:w-[550px] md:text-xl mb-10"
            >
              Save and Share
            </button>
          </div>
          <div className="text-[12px] md:text-sm">Made by Vince Salapuddin</div>
          <SocialIcon
            url="https://vincesalapuddin.com/"
            target="_blank"
            fgColor={isHovered ? "#b69eff" : "gray"}
            bgColor="transparent"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="transition-colors duration-200 ease-in-out"
          ></SocialIcon>
        </div>
      )}
    </div>
  );
}

export default App;
