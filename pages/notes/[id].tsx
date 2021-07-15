/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from 'theme-ui'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

interface notetype {
  title: string
}

const Page = () => {
  const router = useRouter()
  const {id} = router.query
  const [note, setnote] = useState<notetype>()
  useEffect(() => {
    const fetchApiData = async () => {
      const response = await fetch(`http://localhost:3000/api/note/${id}`)
      const {data} = await response.json()
      setnote(data)
    }
    fetchApiData()
  }, [id])
	  return (
	  <div sx={{variant: 'containers.page'}}>
		  <h1>Note: {note.title} </h1>
	  </div>
  )
}

export default Page