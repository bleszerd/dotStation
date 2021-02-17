import {createContext, useContext, useState} from 'react'

const NavbarContext = createContext<IContextNavbar>(null)

export default function NavbarProvider({children}){
    const [navbar, setNavbar] = useState<INavbarState>({
        opened: false
    })

    const navController: INavController = {
        handleStatus(){
            document.body.style.overflow = navbar.opened ? 'auto' : 'hidden'
            setNavbar({...navbar, opened: !navbar.opened})
        }
    }

    return (
        <NavbarContext.Provider
            value={{
                navbar,
                navController
            }}
        >
            {children}
        </NavbarContext.Provider>
    )
}

export function useNavbar(){
    const context = useContext(NavbarContext)
    const {navbar, navController} = context
    return {navbar, navController}
}

/*
document.body.style.overflow = opened ? 'auto' : 'hidden'
*/