/** @jsxImportSource theme-ui */
import Link from 'next/link'
import Image from 'next/image'
import { FC } from 'react'

const Nav:FC = () => (
  <header sx={{height: '60px', width: '100vw', bg: 'highlight', borderBottom: '1px solid', borderColor: 'highlight'}}>
    <nav sx={{display: 'flex', alignItems: 'center',  justifyContent: 'space-between', variant: 'containers.page', height: '100%'}}>
      <Link href="/">
        <a sx={{fontWeight: 'bold', fontSize: 4, cursor: 'pointer'}}>Note App</a>
      </Link>

      <Link href="/notes">
        <a sx={{color: 'text', fontSize: 3, cursor: 'pointer'}}>notes</a>
      </Link>
      <a sx={{color: 'text',fontSize: 3,cursor: 'pointer'}}
        href='https://github.com/Hectorban'
      >
        <Image 
          src='https://i.imgur.com/EWm6VSu.png'
          alt='github'
          width={32}
          height={32}
        />
      </a>
    </nav>
  </header>
)

export default Nav