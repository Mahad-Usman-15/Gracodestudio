"use client";

import { useState, useEffect } from 'react';
import Main from './components/body';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // simulate 2–3 second loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2500 ms = 2.5 seconds

    return () => clearTimeout(timer); // clean up
  }, []);

  return (
    <div>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <span className="loader"></span>
        </div>
      ) : (
        <Main />
      )}
    </div>
  );
}
