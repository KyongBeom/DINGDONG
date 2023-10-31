import React, { useEffect, useRef } from "react"
import { extend, useThree, useLoader } from "@react-three/fiber"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
extend({ GLTFLoader })

const Map = () => {
  const { scene } = useThree()
  const map = useLoader(
    GLTFLoader,
    "assets/models/defaultSettings/Map3.glb"
    // "assets/models/defaultSettings/DefaultMap.glb"
  )
  const mapRef = useRef(null)
  console.log(map)

  useEffect(() => {
    // 그림자 세팅
    if (map && map.scene) {
      map.scene.traverse((child) => {
        if (child.isMesh) {
          child.receiveShadow = true
        }
      })
      map.scene.name = "floor"
      scene.add(map.scene)
      mapRef.current = map.scene
    }

    return () => {
      if (map && map.scene) {
        scene.remove(map.scene)
      }
    }
  }, [map, scene])

  return null
}

export default Map
