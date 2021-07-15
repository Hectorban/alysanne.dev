import {NextApiRequest, NextApiResponse} from 'next'
import nc from 'next-connect'
import notes from '../../../src/data/data'

const handler = nc<NextApiRequest, NextApiResponse>()
	.post((req, res) => {
		const note = {
			...req.body,
			id: Date.now()
		}
		notes.push(note)
		res.json({data: note})
	})
	.get((req, res) => {
		res.json({data: notes})
	})

export default handler