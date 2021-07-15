import nc from 'next-connect'

const handler = nc()
  .get((req, res) => {
    res.json({message: 'ok'})
  })
  .post((req, res) => {
    res.json({message: 'ok'})
  })
  
export default handler