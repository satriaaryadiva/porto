// ModelLoader.tsx
"use client";
import { Html, useProgress } from "@react-three/drei";

const ModelLoader = () => {
  const { progress } = useProgress();

  return (
    <Html center>
      <div className="flex flex-col items-center justify-center text-white">
         
        <p className="text-lg font-semibold mb-2"> click to move ...</p>
        <div className="w-40 h-2 bg-pink-700 rounded-full overflow-hidden mb-2">
          <div
            className="h-full bg-blue-500 transition-all duration-200"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-sm font-medium">{Math.floor(progress)}%</p>
      </div>
    </Html>
  );
};

export default ModelLoader;
