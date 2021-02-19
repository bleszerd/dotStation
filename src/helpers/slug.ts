export const Slug = {
    generate(title, id){
        let slug = title.replace(/\ /g, '-')
        slug = `${slug}@${id}`
        return slug   
    },

    getId(slug){
        const splitedSlug = slug.split('@')
        return splitedSlug[1]
    }
}