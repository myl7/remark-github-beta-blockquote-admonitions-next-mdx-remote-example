'use client'

import { MDXRemote as MDXRemoteInner, MDXRemoteSerializeResult } from 'next-mdx-remote'

// If you want to pass `components`, pass it here

export default function MDXRemote(props: MDXRemoteSerializeResult) {
  return (
    <div>
      <MDXRemoteInner {...props} />
    </div>
  )
}
