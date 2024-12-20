"use client";

import { Button } from "@/components/ui/button";
import { Heart, PlayCircle } from "lucide-react";
import PlayVideoModal from "./PlayVideoModel";
import { useState } from "react";

interface iAppProps {
  title: string;
  overview: string;
  movieId: number;
  watchList: boolean;
  wachtListId: string;
  youtubeUrl: string;
  year: number;
  age: number;
  time: number;
}

export default function MovieCard({
  title,
  overview,
  movieId,
  watchList,
  wachtListId,
  youtubeUrl,
  year,
  age,
  time,
}: iAppProps) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button className="-mt-4" onClick={()=>{setOpen(true)}}>
        <PlayCircle className="h-20 w-20"></PlayCircle>
      </button>{" "}
      <div className="top-5 right-5 absolute ">
        {watchList ? (
          <form>
            <Button variant="outline" size="icon" >
              <Heart className="text-red-500 w-4 h-4" />{" "}
            </Button>
          </form>
        ) : (
          <form>
            <Button variant="outline" size="icon">
              <Heart className=" w-4 h-4" />{" "}
            </Button>
          </form>
        )}
      </div>
      <div className="p-5 absolute bottom-0 left-0">
        <h1 className="font-bold text-lg line-clamp-1">{title}</h1>
        <div className="flex gap-x-2 items-center">
          <p className="font-normal text-sm">{year}</p>
          <p className="font-normal border py-0.5 px-1 border-gray-200 rounded text-sm">
            {age}+
          </p>
          <p className="font-normal text-sm">{time}h</p>
        </div>
        <p className="line-clamp-1 text-sm text-gray-200 font-light">
          {overview}
        </p>
      </div>
      <PlayVideoModal
        changeState={setOpen}
        overview={overview}
        state={open}
        title={title}
        youtubeUrl={youtubeUrl}
        age={age}
        release={year}
        duration={time}
      />
    </>
  );
}
