/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 scene.gltf 
Author: Juliestrator (https://sketchfab.com/JulianneS)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/wall-e-1095bf6b98514b368cf7f450297f6e54
Title: Wall-E
*/

import { useGLTF } from "@react-three/drei";

export default function Scene(props) {
  const { nodes, materials } = useGLTF("/scene.gltf");
  return (
    <group {...props} dispose={null}>
      <group position={[0, 1.56, -0.019]} scale={0.533}>
        <mesh
          geometry={nodes.Object_4.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          geometry={nodes.Object_6.geometry}
          material={materials["Material.001"]}
          position={[0.669, 1.716, -0.143]}
          rotation={[-0.175, 0, 0]}
        />
        <mesh
          geometry={nodes.Object_8.geometry}
          material={materials["Material.001"]}
          position={[0.669, 1.716, 0.144]}
          rotation={[0.175, 0, 0]}
        />
        <mesh
          geometry={nodes.Object_10.geometry}
          material={materials["Material.001"]}
          position={[0.739, 1.528, -1.422]}
          rotation={[-2.036, -0.994, -0.399]}
        />
        <mesh
          geometry={nodes.Object_12.geometry}
          material={materials["Material.001"]}
          position={[1.149, -0.981, 1.422]}
          rotation={[1.692, -0.606, 0.069]}
        />
        <mesh
          geometry={nodes.Object_14.geometry}
          material={materials["Material.001"]}
          position={[-0.137, 0.016, -1.01]}
          rotation={[0, 0, 1.044]}
        />
        <mesh
          geometry={nodes.Object_16.geometry}
          material={materials["Material.001"]}
          position={[-0.285, 0.016, 1.01]}
          rotation={[0, 0, -0.609]}
        />
        <mesh
          geometry={nodes.Object_18.geometry}
          material={materials["Material.001"]}
          position={[1.231, -1.038, 1.422]}
          rotation={[1.692, -0.606, -0.45]}
        />
        <mesh
          geometry={nodes.Object_20.geometry}
          material={materials["Material.001"]}
          position={[1.231, -1.038, 1.422]}
          rotation={[1.692, -0.606, -0.526]}
        />
        <mesh
          geometry={nodes.Object_22.geometry}
          material={materials["Material.001"]}
          position={[0.789, 1.614, -1.422]}
          rotation={[-2.016, -0.963, -0.845]}
        />
        <mesh
          geometry={nodes.Object_24.geometry}
          material={materials["Material.001"]}
          position={[0.789, 1.614, -1.422]}
          rotation={[-2.06, -1.02, -0.757]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/scene.gltf");
