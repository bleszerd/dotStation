import remark from 'remark'
import remarkHTML from 'remark-html'

export const Markdown = {
    parseToHTML(rawMarkdown){
        const htmlContent = remark()
            .use(remarkHTML)
            .processSync(rawMarkdown)
            .toString()

        return htmlContent
    }
}