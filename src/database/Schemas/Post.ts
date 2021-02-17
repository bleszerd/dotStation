import DBConnect from '../connection'
import mongoose from 'mongoose'
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
})

const PostModel = mongoose.models.Post || mongoose.model<IPostDocument>('Post', PostSchema, 'Posts')

export default PostModel