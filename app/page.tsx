'use client'
import Image from "next/image";
import { Application } from '@splinetool/runtime';
import { useRef,useEffect } from "react";


export default function Home() {
  const canvasRef = useRef(null!);
  useEffect(() => {
    const app = new Application(canvasRef.current);
    app.load('https://prod.spline.design/foR8bUZ49KEOJ2KO/scene.splinecode');
  },[canvasRef.current])
  return (
    <>
    <div className="h-screen relative">
      <canvas className="absolute z-0" ref={canvasRef}></canvas>
      <div className=" absolute items-center p-32 top-0 h-full w-full flex z-10">
        <h1 className="text-6xl font-bold">Front End is Awesome</h1>
      </div>
    </div>
    </>
  );
}
