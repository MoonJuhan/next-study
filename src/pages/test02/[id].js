import { useRouter } from 'next/router'
import Link from 'next/link'
import LinkWrapper from '@/components/LinkWrapper'
import LinkIndex from '@/components/LinkIndex'

function Test02Query() {
  const router = useRouter()
  const { id } = router.query

  return (
    <div>
      <h1>Test02Query : {id}</h1>
      <LinkWrapper>
        <LinkIndex />
        <Link href="/test01">Test01</Link>
        <Link href="/test02">Test02</Link>
      </LinkWrapper>
    </div>
  )
}

export default Test02Query
