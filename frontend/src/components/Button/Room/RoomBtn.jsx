import styles from "./RoomBtn.module.css"

const imagePath = `/assets/icons/`

const RoomBtn = ({ img, onClick }) => {
  return (
    <div className={styles.circle} onClick={onClick}>
      {/* img버튼 상세 표기 */}
      {/* addUser / heart / post / postBox / roomEdit / share / worldMap / neighborList */}
      <img src={`${imagePath}${img}.png`} className={styles.iconImage} />
    </div>
  )
}

export default RoomBtn