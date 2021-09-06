import Link from 'next/link'
import LinkWrapper from '@/components/LinkWrapper'
import LinkIndex from '@/components/LinkIndex'
import Parent from '@/components/Parent'

function Test01() {
  const repeatFunc = () => {
    const result = []
    for (let i = 0; i < 3; i++) {
      result.push(<li key={i}>{i + 1}</li>)
    }
    return result
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
    </div>
  )
}

export default Test01
