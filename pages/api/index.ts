import {NextApiRequest, NextApiResponse} from 'next'
import nc from 'next-connect'

const handler = nc<NextApiRequest, NextApiResponse>()
  .get((req, res) => {
    res.status(200).json({message: 'ok'})
  })
  .post((req, res) => {
    res.status(200).json({message: 'ok'})
  })
  
export default handler