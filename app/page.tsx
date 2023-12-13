import { serialize } from 'next-mdx-remote/serialize'
import plugin from 'remark-github-beta-blockquote-admonitions'

import MDXRemote from './mdxRemote'

const src = `\
> [!NOTE]
> test
>
> > [!NOTE]
> > test
> >
> > > [!WARNING]
> > > test
`

export default async function Home() {
  const remarkPlugins = [plugin]
  const mdxSrc = await serialize(src, { mdxOptions: { remarkPlugins } })

  return (
    <main>
      <h1>Hello, world!</h1>
      <MDXRemote {...mdxSrc} />
    </main>
  )
}
