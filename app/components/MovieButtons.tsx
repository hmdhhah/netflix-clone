"use client"

import { Button } from "@/components/ui/button";
import { InfoIcon, PlayCircle } from "lucide-react";
import { useState } from "react";
import PlayVideoModal from "./PlayVideoModel";

interface iAppProps{
   overview:string;
   youtubeUrl:string;
   id:number;
   age:number;
   title:string;
   releaseDate:number;
   duration:number;
}

export default function MovieButton({overview,title,id,youtubeUrl,age,releaseDate,duration}:iAppProps) {
  const[open,setOpen] = useState(false);
  return (
    <>
      <Button onClick={()=>(setOpen(true))} className="text-lg font-medium  " >
        <PlayCircle className="mr-2 w-6 h-6"/>Play
      </Button>
      <Button onClick={()=>setOpen(true)} className="text-lg font-medium m-2 bg-white/40 hover:bg-white/30 text-white">
        <InfoIcon className="mr-2 h-6 w-6"/> Learn More 
      </Button>
      <PlayVideoModal title={title} overview={overview} youtubeUrl={youtubeUrl} state={open} changeState={setOpen} release={releaseDate} age={age} duration={duration} />
    </>
  );
}
