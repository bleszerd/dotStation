/* Components */
interface IProjectCardProps {
    image: string
    title: string
    description: string
    url: string
}

interface IPostCardProps {
    title: string
    href: string
    metadata: IMetadata
}

/* Styled */
interface IStyledNavbarContainer {
    opened: boolean
}

interface IStyledMenuContainer {
    active: boolean
}