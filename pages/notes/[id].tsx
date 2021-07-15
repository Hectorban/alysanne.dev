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
      const response = await fetch(`http://localhost:3000/api/note/${id}`)
      const {data} = await response.json()
      console.log(data)
      setnote(data)
    }
    fetchApiData()
  }, [id])
  console.log(note)
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