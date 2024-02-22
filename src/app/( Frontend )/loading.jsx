"use client";
import { Player } from "@lottiefiles/react-lottie-player";
const loading = () => {
    const style = {height: "100vh", width: "100vw", display: 'flex', justifyContent: 'center', alignItems: 'center'}
  return (
    <div style={style}>
      <Player
        autoplay
        loop
        src="/loading.json"
        style={{ height: "300px", width: "300px" }}
      ></Player>
    </div>
  );
};

export default loading;