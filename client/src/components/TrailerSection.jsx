import React, { useState } from "react";
import { dummyTrailers } from "../assets/assets";
import BlurCircle from "./BlurCircle";
import { PlayCircleIcon } from "lucide-react";

const TrailerSection = () => {
  const [currentTrailer, setCurrentTrailer] = useState(dummyTrailers[0]);

  const openTrailer = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-44 py-20 overflow-hidden">
      <p className="text-gray-300 font-medium text-lg max-w-[960px] mx-auto">
        Trailers
      </p>

      {/* Main Trailer Preview */}
      <div className="relative mt-6 max-w-[960px] mx-auto h-[540px] bg-black rounded-xl overflow-hidden">
        <BlurCircle top="-100px" right="-100px" />

        <div
          className="relative w-full h-full cursor-pointer group"
          role="button"
          aria-label="Play trailer"
          tabIndex={0}
          onClick={() => openTrailer(currentTrailer.videoUrl)}
        >
          <img
            src={currentTrailer.image}
            alt="Trailer thumbnail"
            className="w-full h-full object-cover brightness-75 group-hover:brightness-90 transition"
          />

          <div className="absolute inset-0 flex items-center justify-center">
            <PlayCircleIcon className="w-20 h-20 text-white opacity-80 group-hover:scale-110 transition-transform" />
          </div>
        </div>
      </div>

      {/* Trailer Thumbnails */}
      <div className="group grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10 max-w-3xl mx-auto">
        {dummyTrailers.map((trailer) => (
          <div
            key={trailer.image}
            className="relative cursor-pointer rounded-lg overflow-hidden
                       transition duration-300 hover:-translate-y-1
                       group-hover:not-hover:opacity-50"
            onClick={() => setCurrentTrailer(trailer)}
          >
            <img
              src={trailer.image}
              alt="Trailer preview"
              className="w-full h-40 object-cover brightness-75"
            />

            <PlayCircleIcon
              strokeWidth={1.6}
              className="absolute top-1/2 left-1/2 w-8 h-8 text-white
                         transform -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrailerSection;
