import Link from 'next/link'
import styled from 'styled-components'

const IndexButton = styled.a`
  font-size: 14px;
  color: white;
  background-color: red;
  cursor: pointer;
`

function LinkIndex() {
  return (
    <Link href="/" passHref>
      <IndexButton>Index</IndexButton>
    </Link>
  )
}

export default LinkIndex
