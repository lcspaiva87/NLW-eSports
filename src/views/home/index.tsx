import { memo } from "react"

function MenuView() {
  return (
    <Childre />
  )
}
const Childre = () => {
  return (
    <div>
      <h1>Hello Word</h1>
    </div>
  )
}

export default memo(MenuView)