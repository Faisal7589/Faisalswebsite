/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: SebastianSosnowski (https://sketchfab.com/SebastianSosnowski)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/asteroids-pack-metallic-version-eff495d9315c47dbb2777ec80bef40d8
title: Asteroids Pack (metallic version)
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/scenee.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[13.07, 0, 13.62]} rotation={[-Math.PI / 2, 0, 0]}>
            <group position={[-13.07, 13.62, 0]}>
              <mesh
                geometry={nodes['Asteroid_no_1_Material_#3_0'].geometry}
                material={nodes['Asteroid_no_1_Material_#3_0'].material}
              />
            </group>
          </group>
          <group position={[-0.24, -0.03, -28.59]} rotation={[-Math.PI / 2, 0, 0]}>
            <group position={[0.24, -28.59, 0.03]}>
              <mesh
                geometry={nodes['Asteroid_no_10_Material_#3_0'].geometry}
                material={nodes['Asteroid_no_10_Material_#3_0'].material}
              />
            </group>
          </group>
          <group position={[-13.87, -0.01, -14.46]} rotation={[-Math.PI / 2, 0, 0]}>
            <group position={[13.87, -14.46, 0.01]}>
              <mesh
                geometry={nodes['Asteroid_no_9_Material_#3_0'].geometry}
                material={nodes['Asteroid_no_9_Material_#3_0'].material}
              />
            </group>
          </group>
          <group position={[-0.81, 0.01, -14.44]} rotation={[-Math.PI / 2, 0, 0]}>
            <group position={[0.81, -14.44, -0.01]}>
              <mesh
                geometry={nodes['Asteroid_no_8_Material_#3_0'].geometry}
                material={nodes['Asteroid_no_8_Material_#3_0'].material}
              />
            </group>
          </group>
          <group position={[12.43, 0, -14.44]} rotation={[-Math.PI / 2, 0, 0]}>
            <group position={[-12.43, -14.44, 0]}>
              <mesh
                geometry={nodes['Asteroid_no_7_Material_#3_0'].geometry}
                material={nodes['Asteroid_no_7_Material_#3_0'].material}
              />
            </group>
          </group>
          <group position={[-13.33, -0.05, 0.13]} rotation={[-Math.PI / 2, 0, 0]}>
            <group position={[13.33, 0.13, 0.05]}>
              <mesh
                geometry={nodes['Asteroid_no_6_Material_#3_0'].geometry}
                material={nodes['Asteroid_no_6_Material_#3_0'].material}
              />
            </group>
          </group>
          <group position={[-0.29, -0.02, 0.14]} rotation={[-Math.PI / 2, 0, 0]}>
            <group position={[0.29, 0.14, 0.02]}>
              <mesh
                geometry={nodes['Asteroid_no_5_Material_#3_0'].geometry}
                material={nodes['Asteroid_no_5_Material_#3_0'].material}
              />
            </group>
          </group>
          <group position={[12.95, 0.01, 0.1]} rotation={[-Math.PI / 2, 0, 0]}>
            <group position={[-12.95, 0.1, -0.01]}>
              <mesh
                geometry={nodes['Asteroid_no_4_Material_#3_0'].geometry}
                material={nodes['Asteroid_no_4_Material_#3_0'].material}
              />
            </group>
          </group>
          <group position={[-13.2, 0.03, 13.62]} rotation={[-Math.PI / 2, 0, 0]}>
            <group position={[13.2, 13.62, -0.03]}>
              <mesh
                geometry={nodes['Asteroid_no_3_Material_#3_0'].geometry}
                material={nodes['Asteroid_no_3_Material_#3_0'].material}
              />
            </group>
          </group>
          <group position={[-0.13, 0, 13.66]} rotation={[-Math.PI / 2, 0, 0]}>
            <group position={[0.13, 13.66, 0]}>
              <mesh
                geometry={nodes['Asteroid_no_2_Material_#3_0'].geometry}
                material={nodes['Asteroid_no_2_Material_#3_0'].material}
              />
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/scenee.glb')
