import { Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import type { GLTF } from "three-stdlib";
import type * as THREE from "three";

export const CubeSpinner = () => {
  return (
    <div className="absolute -right-[0rem] h-[64rem] w-[64rem]">
      <Suspense fallback={null}>
        <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 0.6], fov: 90 }}>
          <Model />
          <ambientLight intensity={0.2} />
          <OrbitControls />
        </Canvas>
      </Suspense>
    </div>
  );
};

type GLTFResult = GLTF & {
  nodes: {
    Curve013: THREE.Mesh;
    Curve013_1: THREE.Mesh;
    Curve013_2: THREE.Mesh;
    Curve013_3: THREE.Mesh;
    Curve013_4: THREE.Mesh;
    Curve013_5: THREE.Mesh;
    Curve013_6: THREE.Mesh;
    Curve013_7: THREE.Mesh;
    Curve013_8: THREE.Mesh;
    Curve013_9: THREE.Mesh;
    Curve013_10: THREE.Mesh;
    Curve013_11: THREE.Mesh;
    Curve013_12: THREE.Mesh;
    Curve013_13: THREE.Mesh;
    Curve013_14: THREE.Mesh;
    Curve013_15: THREE.Mesh;
    Curve013_16: THREE.Mesh;
    Curve013_17: THREE.Mesh;
    Curve013_18: THREE.Mesh;
    Curve013_19: THREE.Mesh;
    Curve013_20: THREE.Mesh;
    Curve013_21: THREE.Mesh;
  };
  materials: {
    ["SVGMat.001"]: THREE.MeshStandardMaterial;
    Material: THREE.MeshStandardMaterial;
    ["Material.001"]: THREE.MeshStandardMaterial;
    SVGMat: THREE.MeshStandardMaterial;
    ["SVGMat.011"]: THREE.MeshStandardMaterial;
    ["SVGMat.012"]: THREE.MeshStandardMaterial;
    ["SVGMat.013"]: THREE.MeshStandardMaterial;
    ["SVGMat.015"]: THREE.MeshStandardMaterial;
    ["SVGMat.014"]: THREE.MeshStandardMaterial;
    ["SVGMat.016"]: THREE.MeshStandardMaterial;
    ["SVGMat.017"]: THREE.MeshStandardMaterial;
    ["SVGMat.027"]: THREE.MeshStandardMaterial;
    ["SVGMat.032"]: THREE.MeshStandardMaterial;
    ["SVGMat.029"]: THREE.MeshStandardMaterial;
    ["SVGMat.030"]: THREE.MeshStandardMaterial;
    ["SVGMat.031"]: THREE.MeshStandardMaterial;
    ["SVGMat.028"]: THREE.MeshStandardMaterial;
    ["SVGMat.040"]: THREE.MeshStandardMaterial;
    ["SVGMat.039"]: THREE.MeshStandardMaterial;
    ["SVGMat.042"]: THREE.MeshStandardMaterial;
    ["SVGMat.041"]: THREE.MeshStandardMaterial;
    ["SVGMat.044"]: THREE.MeshStandardMaterial;
  };
};

function Model() {
  const { nodes, materials } = useGLTF("/cube.glb") as GLTFResult;
  const meshref = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (meshref.current) {
      meshref.current.rotation.x += 0.1 * delta;
      meshref.current.rotation.y += 0.1 * delta;
    }
  });
  return (
    <group ref={meshref} dispose={null}>
      {" "}
      <group scale={1.3}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve013.geometry}
          material={materials["SVGMat.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve013_1.geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve013_2.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve013_3.geometry}
          material={materials.SVGMat}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve013_4.geometry}
          material={materials["SVGMat.011"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve013_5.geometry}
          material={materials["SVGMat.012"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve013_6.geometry}
          material={materials["SVGMat.013"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve013_7.geometry}
          material={materials["SVGMat.015"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve013_8.geometry}
          material={materials["SVGMat.014"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve013_9.geometry}
          material={materials["SVGMat.016"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve013_10.geometry}
          material={materials["SVGMat.017"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve013_11.geometry}
          material={materials["SVGMat.027"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve013_12.geometry}
          material={materials["SVGMat.032"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve013_13.geometry}
          material={materials["SVGMat.029"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve013_14.geometry}
          material={materials["SVGMat.030"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve013_15.geometry}
          material={materials["SVGMat.031"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve013_16.geometry}
          material={materials["SVGMat.028"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve013_17.geometry}
          material={materials["SVGMat.040"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve013_18.geometry}
          material={materials["SVGMat.039"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve013_19.geometry}
          material={materials["SVGMat.042"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve013_20.geometry}
          material={materials["SVGMat.041"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve013_21.geometry}
          material={materials["SVGMat.044"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/cube.glb");
