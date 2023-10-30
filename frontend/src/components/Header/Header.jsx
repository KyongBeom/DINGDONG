// 라이브러리
import { useState } from "react"
import { useRecoilValue } from "recoil"

// 스타일
import styles from "./Header.module.css"

// 이미지
import hamburger from "/assets/icons/hamburgerbar.svg"
import bell from "/assets/icons/bell.svg"

// 컴포넌트
import { successMsg } from "@/utils/customToast"
import NeighborAcceptModal from "../Modal/Neighbor/NeighborAcceptModal"

// Atom
import { userAtom } from "../../atom/UserAtom"

const Header = ({ checkMyRoom }) => {
  // 햄버거메뉴바 상태관리
  const [isHamburger, setIsHamburger] = useState(false)
  // 알림 상태관리
  const [isAlarm, setIsAlarm] = useState(false)
  // 알림 리스트 상태관리
  const [alarms, setAlarms] = useState([
    { id: 1, content: "둥이맘", active: true },
    { id: 2, content: "토리맘", active: true },
    { id: 3, content: "바보맘", active: true },
    { id: 4, content: "동동맘", active: true },
  ])

  // 유저정보
  const userInfo = useRecoilValue(userAtom)

  // 알림 함수
  const alarmHandler = () => {
    if (alarms.length === 0) {
      successMsg("❌ 알림이 없습니다!")
    } else {
      setIsAlarm(true)
    }
  }

  // 이웃요청 수락함수
  const acceptNeighborHandler = (id) => {
    setAlarms((prev) =>
      prev.map((alarm) =>
        alarm.id === id ? { ...alarm, active: false } : alarm
      )
    )
    console.log("이웃요청 수락")
  }

  // 이웃요청 거절함수
  const refuseNeighborHandler = (id) => {
    setAlarms((prev) =>
      prev.map((alarm) =>
        alarm.id === id ? { ...alarm, active: false } : alarm
      )
    )
    console.log("이웃요청 거절")
  }

  // 문의하기 함수
  const inquiryHandler = () => {
    console.log("문의하기")
  }

  // 로그아웃 함수
  const logoutHandler = () => {
    console.log("로그아웃")
  }

  // 회원탈퇴 함수
  const withdrawalHandler = () => {
    console.log("회원탈퇴")
  }

  return (
    <>
      <div className={styles.wrap}>
        <div className={styles.header}>
          <img
            src={hamburger}
            onClick={() => setIsHamburger(true)}
            className={styles.HamburgerButton}
          />
          {checkMyRoom === "my" ? (
            <div className={styles.userName}>{userInfo.nickname}</div>
          ) : (
            <div className={styles.userName}>userName</div>
          )}
          <img src={bell} onClick={alarmHandler} />
        </div>
      </div>
      {/* 햄버거 바 */}
      {isHamburger && (
        <>
          <div
            className={styles.Overlay}
            onClick={() => setIsHamburger(false)}
          />
          <div className={styles.HamburgerModal}>
            <div className={styles.ContentContainer}>
              <div className={styles.MenuButton} onClick={inquiryHandler}>
                문의하기
              </div>
              <div className={styles.MenuButton} onClick={logoutHandler}>
                로그아웃
              </div>
              <div className={styles.MenuButton} onClick={withdrawalHandler}>
                회원탈퇴
              </div>
            </div>
          </div>
        </>
      )}
      {/* 알림 */}
      {isAlarm && (
        <>
          <div className={styles.Overlay} onClick={() => setIsAlarm(false)} />
          <div className={styles.AlarmContainer}>
            <div className={styles.xButtonContainer}>
              <img
                src={"/assets/icons/x.svg"}
                className={styles.AlarmX}
                onClick={() => setAlarms(false)}
              />
            </div>
            <div className={styles.AlarmModal}>
              {alarms.map((alarm) =>
                alarm.active ? (
                  <NeighborAcceptModal
                    key={alarm.id}
                    content={alarm.content}
                    okClick={() => acceptNeighborHandler(alarm.id)}
                    cancelClick={() => refuseNeighborHandler(alarm.id)}
                  />
                ) : null
              )}
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default Header
