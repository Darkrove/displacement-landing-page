import { useThree } from "@react-three/fiber";
import { RenderTexture, Text } from "@react-three/drei";

interface TypographyProps {
  LINE: string;
  SIZE: number;
}

export const Typography = ({ LINE, SIZE }: TypographyProps) => {
  const { width, height } = useThree((state) => state.viewport);
  const vw = (size: number) => (width * size) / 100;
  const vh = (size: number) => (height * size) / 100;

  return (
    <mesh>
      <planeBufferGeometry args={[width, height, 1]} />
      <meshBasicMaterial toneMapped={false}>
        <RenderTexture attach="map" sourceFile={undefined}>
          <color attach="background" args={["hsl(0,0%,03%)"]} />
          <Text fontSize={vw(SIZE)} position={[0, 0, 0]}>
            {LINE}
          </Text>
        </RenderTexture>
      </meshBasicMaterial>
    </mesh>
  );
};
