import { useState } from 'react'
import Child from './Child'

const Parent = () => {
  const [count, setCount] = useState(0)

  const onClickButton = () => {
    setCount(count + 1)
  }

  return (
    <div>
      <h2>Parent</h2>
      <Child name="son" count={count}></Child>
      <button onClick={onClickButton}>Parent Button</button>
    </div>
  )
}

export default Parent
