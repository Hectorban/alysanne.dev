/** @jsxImportSource theme-ui */
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
      const response = await fetch(`${process.env.ROOT_URL}/api/note/${id}`)
      const {data} = await response.json()
      setnote(data)
    }
    fetchApiData()
  }, [id])
  if (!note) {
    return (
      <div>Loading</div>
    )
  }
	return (
	  <div sx={{variant: 'containers.page'}}>
		  <h1>Note: {note.title} </h1>
	  </div>
  )
}

export default Page