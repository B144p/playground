import { Button } from 'antd'
import Link from 'next/link'
import React from 'react'

type Props = {}

const Directory: React.FC<Props> = (props) => {
  return (
    <>
      {/* Directory */}
      <Link href="/directory/[id]" as="/directory/123?item=20">
        <Button type='link'>
          Go to Directory Home
        </Button>
      </Link>
      {/* <Link href="/directory/[id]" as="/directory/123?item=20">
          Go to Directory Home
        </Link> */}
    </>
  )
}

export default Directory