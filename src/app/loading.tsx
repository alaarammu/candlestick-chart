"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Correct import for App Router

export default function Loading() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/'); // Redirect to Trireme Trading page after 3 seconds
    }, 6000);

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, [router]);

  return (
    <div className="flex items-center justify-center  bg-black text-white">
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-t-4 border-white border-opacity-20 border-t-white rounded-full animate-spin mx-auto mb-4"></div>
        <h1 className="text-2xl">Loading...</h1>
      </div>
    </div>
  );
}