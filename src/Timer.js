import { useEffect, useRef, useState } from "react";

export default function Timer() {

  const ref = useRef(null)

  useEffect(() => {
    setInterval(() => {
      const e = Number(ref.current.innerHTML)
      ref.current.innerHTML = e + 1
    }, 1000);
    // using useRef to prevent re-rendering
    //it calls twice because of strict mode
  }, []);

  return (
    <h1 ref={ref} className="text-2xl font-bold">0</h1>
  )
}