import { useEffect, useRef } from "react";

export default function Timer() {
  const time = useRef(null)
  useEffect(() => {
    function startTimer(duration) {
      let timer = duration, minutes, seconds;
      setInterval(function () {
          minutes = parseInt(timer / 60, 10)
          seconds = parseInt(timer % 60, 10);
  
          minutes = minutes < 10 ? "0" + minutes : minutes;
          seconds = seconds < 10 ? "0" + seconds : seconds;
          if (time.current) { time.current.innerHTML = minutes + ":" + seconds }
  
          if (--timer < 0) {
              timer = 0;
          }
      }, 1000);
    }
    
    startTimer(200)

  }, [])

  return (
    <div className="h-8 mt-2 text-sm text-gray-600">Code Expires in: <span ref={time}></span></div>
  )
}