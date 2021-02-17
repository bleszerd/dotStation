interface INavbarState{
    opened: boolean
}

interface INavController {
    handleStatus: () => void
}

interface IContextNavbar{
    navbar: INavbarState
    navController: INavController
}