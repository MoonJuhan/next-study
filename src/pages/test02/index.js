import Link from 'next/link'
import LinkWrapper from '@/components/LinkWrapper'
import LinkIndex from '@/components/LinkIndex'

function Test02() {
  return (
    <div>
      <h1>Test02</h1>
      <LinkWrapper>
        <LinkIndex />
        <Link href="/test01">Test01</Link>
      </LinkWrapper>
    </div>
  )
}

export default Test02
