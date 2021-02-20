import { NextApiRequest, NextApiResponse } from 'next'
import '../../../../../database/connection'
import Post from '../../../../../database/models/Post'

export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.method == 'GET') {
            const id = req.query.id

            const response = await Post.findById(id)

            res.json({
                type: 'Response',
                message: 'Post recovered',
                responseData: response
            })

            return
        }

        throw new Error('Post not found')
    } catch (err) {
        res.json({
            type: 'Response',
            message: err.message
        })
    }

}