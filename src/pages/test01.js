import Link from 'next/link'
import LinkWrapper from '/components/LinkWrapper'
import LinkIndex from '/components/LinkIndex'

function Test01() {
  return (
    <div>
      <h1>Test01</h1>
      <LinkWrapper>
        <LinkIndex />
        <Link href="/test02">Test02</Link>
      </LinkWrapper>
    </div>
  )
}

export default Test01
