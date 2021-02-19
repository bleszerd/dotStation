export const Slug = {
    generate(title, id){
        let slug = title.replace(/\ /g, '_')
        slug = slug.replace(/\#/g, '%23') //for a url valid link
        slug = `${slug}@${id}`
        return slug   
    },

    getId(slug){
        const splitedSlug = slug.split('@')
        let strSlug = splitedSlug[1].replace(/%23/g, '#') //for a url valid link
        return strSlug
    }
}