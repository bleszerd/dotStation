import { Document } from 'mongoose'

interface IPostDocument extends Document {
    title: string
    image: string
    author: string
    date: string
    content: string
}

