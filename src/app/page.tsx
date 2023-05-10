"use client";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, PerspectiveCamera, useProgress } from "@react-three/drei";

import { Bubble } from "@/components/bubble";
import { Typography } from "@/components/typography";
import { Overlay } from "@/components/overlay";
import { Html } from "@react-three/drei";

const LINE = "Hello There";
const SIZE = 14;

function Loader() {
  const { progress } = useProgress();
  return (
    <Html prepend center>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 text-center text-stone-900 bg-white border rounded-full">
        {Math.round(progress)}% loaded
      </div>
    </Html>
  );
}

export default function Page() {
  return (
    <>
      <Canvas>
        <PerspectiveCamera position={[0, 0, 50]} makeDefault />
        <Suspense fallback={<Loader />}>
          <Bubble />
          <Typography LINE={LINE} SIZE={SIZE} />
          <Environment preset="warehouse" />
        </Suspense>
      </Canvas>
      {/* Smoke and mirrors – render invisible DOM above canvas*/}
      <Overlay LINE={LINE} SIZE={SIZE} />
    </>
  );
}
