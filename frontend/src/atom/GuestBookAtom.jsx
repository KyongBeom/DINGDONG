import { atom } from "recoil"

export const isGuestBookVisibleAtom = atom({
  key: "isGuestBookAtom",
  default: false,
})

export const isWriteGuestBookVisibleAtom = atom({
  key: "isWriteGuestBookAtom",
  default: false,
})

export const isFinishGuestBookVisibleAtom = atom({
  key: "isFinishGuestBookAtom",
  default: false,
})

export const isFinishWriteGuestBookVisibleAtom = atom({
  key: "isFinishWriteGuestBookAtom",
  default: false,
})

export const isDetailGuestBookVisibleAtom = atom({
  key: "isDetailGuestBookAtom",
  default: false,
})

export const isFinishDetailGuestBookVisibleAtom = atom({
  key: "isFinishDetailGuestBookAtom",
  default: false,
})

export const guestBookDetailContentAtom = atom({
  key: "guestBookDetailContent",
  default: [],
})