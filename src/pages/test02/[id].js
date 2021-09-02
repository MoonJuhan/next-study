import { useRouter } from 'next/router'

function Test02Query() {
  const router = useRouter()
  const { id } = router.query

  return <div>Test02Query : {id}</div>
}

export default Test02Query
