import { useState } from 'react'

const Child = (props) => {
  console.log('Created and Updated')

  const [count, setCount] = useState(0)

  const onClickButton = () => {
    console.log('Click')
    setCount(count + 1)
  }

  return (
    <div>
      <h2>Child : {props.name}</h2>
      <h3>Count : {count}</h3>
      <button onClick={onClickButton}>Button</button>
    </div>
  )
}

export default Child
