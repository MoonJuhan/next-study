import Link from 'next/link'
import LinkWrapper from '@/components/LinkWrapper'
import LinkIndex from '@/components/LinkIndex'
import Parent from '@/components/Parent'

function Test01() {
  return (
    <div>
      <h1>Test01</h1>
      <LinkWrapper>
        <LinkIndex />
        <Link href="/test02">Test02</Link>
      </LinkWrapper>

      <Parent></Parent>
    </div>
  )
}

export default Test01
