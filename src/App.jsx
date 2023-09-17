import "./styles/styles.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import Customize from "./components/Customize";
import Tracks from "./components/Tracks";
import Score from "./components/Score";

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
        "https://api.spotify.com/v1/me/top/tracks",
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
  }, []);

  const logout = () => {
    setToken("");
    window.localStorage.removeItem("token");
  };

  return (
    <div className="flex flex-col items-center bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r">
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
        <button className="self-end pr-8 pt-4" onClick={logout}>
          Logout
        </button>
      )}
      <div className="flex flex-col justify-center pt-8">
        {token && (
          <div className="flex flex-col">
            <motion.div
              initial={{ x: -600 }}
              transition={{ duration: 2 }}
              whileInView={{ x: 0 }}
              className="p-80 w-80 h-80 absolute flex flex-col items-end justify-center bg-gradient-to-t from-green-300 via-blue-500 to-purple-600"
            >
              <Tracks
                albumName={albumName}
                displayName={displayName}
                tracks={tracks}
              />
            </motion.div>
            <div>
              <img
                src={"/public/assets/vinyl.jpg"}
                className="rounded-full "
                width={640}
                alt={"User Image"}
                style={{ marginLeft: 230 }}
              />
            </div>
            <div className="flex flex-col items-center">
              <Score tracks={tracks} />
              <Customize albumName={albumName} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
