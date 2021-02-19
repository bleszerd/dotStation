/* Components */
interface IProjectCardProps {
    image: string
    title: string
    description: string
    url: string
}

interface IPostCardProps {
    title: string
    id: string
    image: string
    metadata: IMetadata
}

/* Styled */
interface IStyledNavbarContainer {
    opened: boolean
}

interface IStyledMenuContainer {
    active: boolean
}

interface IStyledPostCardImage {
    image: string
}

interface IStyledPostHeaderImage {
    image: string
}