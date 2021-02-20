import { Container, NavigatorWrapper } from './styles'
import {HiArrowNarrowRight, HiArrowNarrowLeft} from 'react-icons/hi'

export default function PageNavigator({ pagination }) {
    function calcPages(totalPages) {
        let pagesArray = []

        for (let i = 1; i <= totalPages; i++) {
            pagesArray.push(i)
        }

        return pagesArray
    }

    const navigatePostArray = calcPages(pagination.totalPages)
    const pageNavigator = {
        next: Number(pagination.page) + 1,
        previous: Number(pagination.page) - 1
    }

    return (
        <Container>
            <NavigatorWrapper>
                {
                    pagination.page > 1
                    &&
                    <li>
                        <a href={`/blog/?page=${pageNavigator.previous}`}>
                            <HiArrowNarrowLeft />
                        </a>
                    </li>
                }
                {
                    navigatePostArray.map(page => (
                        <li key={page}>
                            <a href={`/blog/?page=${page}`}>{page}</a>
                        </li>
                    ))
                }
                {
                    pagination.page != pagination.totalPages
                    &&
                    <li >
                        <a href={`/blog/?page=${pageNavigator.next}`}>
                            <HiArrowNarrowRight />
                        </a>
                    </li>
                }
            </NavigatorWrapper>
        </Container>
    )
}

//{totalDocs: 2, totalPages: 1, page: 1, pagingCounter: 1}