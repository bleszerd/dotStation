import { NextApiRequest, NextApiResponse } from 'next'
import '../../../../database/connection'
import Post from '../../../../database/Schemas/Post'

export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.method == 'GET') {
            const response = await Post.find()

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