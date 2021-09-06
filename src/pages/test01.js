import { useState } from 'react'

import Link from 'next/link'
import LinkWrapper from '@/components/LinkWrapper'
import LinkIndex from '@/components/LinkIndex'
import Parent from '@/components/Parent'

function Test01() {
  const repeatFunc = () => {
    const result = []
    for (let i = 0; i < 3; i++) {
      result.push(i != 0 ? <li key={i}>{i + 1}</li> : <li key={i}>nope</li>)
    }
    return result
  }

  const [value, setValue] = useState(0)

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <div>
      <h1>Test01</h1>
      <LinkWrapper>
        <LinkIndex />
        <Link href="/test02">Test02</Link>
      </LinkWrapper>

      <Parent></Parent>

      <h2>Next</h2>
      <div>
        <ul>{repeatFunc()}</ul>
      </div>
      <input type="text" value={value} onChange={handleChange} />
      <h3>{value}</h3>
    </div>
  )
}

export default Test01
