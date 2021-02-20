import { NextApiRequest, NextApiResponse } from 'next'
import '../../../../database/connection'
import Post from '../../../../database/Schemas/Post'

export default async (req: NextApiRequest, res: NextApiResponse) => {
    function calcPagination(numOfPosts: number) {
        let pageOffset = 0;

        while (numOfPosts > 10) {
            pageOffset++;
            numOfPosts -= 10;
        }

        return pageOffset
    }

    try {
        if (req.method == 'GET') {
            const response = await Post.find().limit(100).sort([['createdAt', 'descending']])

            res.json({
                pageCount: calcPagination(response.length),
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