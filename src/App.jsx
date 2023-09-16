import "./styles/styles.css";
import axios from "axios";
import { useEffect, useState } from "react";

import Tracks from "./components/Tracks";

function App() {
  const CLIENT_ID = "e257d4993db149c58a1214001626e4ee";
  const REDIRECT_URI = "http://localhost:5173";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";

  const [token, setToken] = useState("");
  const [tracks, setTracks] = useState([]);
  const [displayName, setDisplayName] = useState("");
  const [profilePic, setprofilePic] = useState("");

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
    <div className="h-screen flex flex-col items-center bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r">
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
        <button onClick={logout}>Logout</button>
      )}
      <div className="h-screen flex flex-col justify-center">
        {token && (
          <div className="flex ">
            <div className="p-80 w-80 h-80 absolute flex flex-col items-end justify-center bg-gradient-to-r rounded-sm bg-gradient-to-r from-rose-500 via-red-400 to-red-500">
              <Tracks displayName={displayName} tracks={tracks} />
            </div>

            <img
              src={profilePic}
              className="rounded-full "
              width={640}
              alt={"User Image"}
              style={{ marginLeft: 230 }}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
