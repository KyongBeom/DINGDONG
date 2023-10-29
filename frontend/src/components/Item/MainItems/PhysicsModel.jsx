import React, { useRef, useEffect } from "react"
import * as THREE from "three"
import { FenceBoxAtom } from "../../../atom/FenceAtom"
import { useSetRecoilState } from "recoil"

const PhysicsModel = () => {
  const meshRef = useRef()
  const setFenceBox = useSetRecoilState(FenceBoxAtom)

  useEffect(() => {
    if (meshRef.current) {
      const fenceBox = new THREE.Box3().setFromObject(meshRef.current)
      setFenceBox(fenceBox)
    }
  }, [meshRef])

  return (
    <mesh ref={meshRef} position={[6, 0.005, 17]}>
      <planeGeometry args={[1, 1]} />
      <meshStandardMaterial color={"blue"} transparent opacity={0.5} />
    </mesh>
  )
}

export default PhysicsModel
