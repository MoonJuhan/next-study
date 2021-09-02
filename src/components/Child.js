import { useState, useEffect } from 'react'

const Child = (props) => {
  console.log('Created and Updated')

  const [count, setCount] = useState(0)

  useEffect(() => {
    // watch & mounted
    console.log(`Count Change: ${count}`)
    return () => {
      // Before Updated
      console.log(`Clean Up ${count}`)
    }
  })

  useEffect(() => {
    // mounted
    console.log(`Mounted`)
  }, [])

  useEffect(() => {
    // watch ?
    console.log(`Watch Props Count: ${props.count}`)
  }, [props.count])

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
