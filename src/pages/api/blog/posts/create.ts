import { NextApiRequest, NextApiResponse } from 'next'
import '../../../../database/connection'
import Post from '../../../../database/models/Post'

export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.method == 'POST') {
            const { title, author, content, date, image } = req.body

            const response = await Post.create({
                title,
                author,
                content,
                date,
                image,
            })

            res.json({
                type: 'Response',
                message: 'Post created',
                responseData: response
            })

            return
        }
            
        throw new Error('Post not created')
    } catch (err) {
        res.json({
            type: 'Error',
            message: err.message,
        })
    }
}