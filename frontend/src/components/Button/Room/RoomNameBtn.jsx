import React from "react"
import styles from "./RoomNameBtn.module.css"

const RoomNameBtn = (props) => {
  return (
    <button className={styles.RoomNameBtn} role="button" {...props}>
      {props.children}의 방
    </button>
  )
}

export default RoomNameBtn
