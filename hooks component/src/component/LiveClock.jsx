import { useState, useEffect } from "react";

function LiveClock() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer); // Cleanup
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-4">Live Clock</h1>
      <p className="text-2xl">{currentTime.toLocaleTimeString()}</p>
    </div>
  );
}

export default LiveClock;
