import React from 'react'
import { Player } from "@lottiefiles/react-lottie-player";

const Loader = () => {
  return (
    <div >
    <Player
      autoplay
      loop
      src="/loading.json"
      style={{ height: "300px", width: "300px" }}
    ></Player>
  </div>
  )
}

export default Loader