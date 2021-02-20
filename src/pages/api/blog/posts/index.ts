import { NextApiRequest, NextApiResponse } from 'next'
import '../../../../database/connection'
import Post from '../../../../database/models/Post'

export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.method == 'GET') {
            const page = String(req.query.page || 1)
            const limit = String(req.query.limit || 10)

            const response = await Post.paginate({
                query: {},
                limit,
                page
            })

            res.json({
                type: 'Response',
                message: 'Post recovered',
                responseData: response,
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