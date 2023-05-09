import { useRef } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import { LayerMaterial, Displace } from "lamina";
import { Displace as DisplaceType } from "lamina/vanilla";
import { Vector3 } from "three";

interface BubbleProps {}

export const Bubble = (props: BubbleProps) => {
  const ref = useRef<THREE.Mesh>(null);
  const displaceRef = useRef<
    DisplaceType & { strength: number; offset: Vector3 }
  >(null);

  const { width } = useThree((state) => state.viewport);

  useFrame(({ clock }, dt) => {
    if (displaceRef.current) {
      displaceRef.current.offset.x += 4 * dt;
    }
  });

  return (
    <mesh ref={ref}>
      <sphereBufferGeometry args={[width / 8, 128, 128]} />
      <LayerMaterial
        color={"white"}
        lighting={"physical"}
        transmission={1}
        roughness={0}
        thickness={2}
        toneMapped={false}
      >
        <Displace ref={displaceRef} strength={3} scale={0.25} />
      </LayerMaterial>
    </mesh>
  );
};
