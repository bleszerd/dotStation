import DBConnect from '../connection'
import mongoose, { Model } from 'mongoose'
import {mongoosePagination, Pagination} from 'mongoose-paginate-ts'
import { IPostDocument } from '../../Typescript/database'

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please, provide a title"],
    },
    image: {
        type: String,
        required: false
    },
    author: {
        type: String,
        required: [true, "Annon"]
    },
    date: {
        type: String,
        required: [true, "01/01/2077"]
    },
    content: {
        type: String,
        required: [true, "unset"]
    }
}, { timestamps: true })

PostSchema.plugin(mongoosePagination)

const Post: any | Pagination<IPostDocument> = mongoose.models.Post || mongoose.model<IPostDocument, Pagination<IPostDocument>>('Post', PostSchema, 'Posts')

/*
mongoose.models.Post || mongoose.model<IPostDocument | any>('Post', PostSchema, 'Posts')
*/
export default Post