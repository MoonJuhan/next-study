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
        <Link href="/test02/1">Test02_Query_1</Link>
        <Link href="/test02/2">Test02_Query_2</Link>
      </LinkWrapper>
    </div>
  )
}

export default Test02
