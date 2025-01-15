import { createContext, ReactNode, useContext } from "react";
import { useAppwrite } from "./useAppwrite";
import { getCurrentUser } from "./apprwite"

interface User {
    $id: string;
    name: string;
    email: string;
    avatar: string;
}



interface  GlobalContextType {
    isLoggedIn: boolean;
    user: User | null;
    loading: boolean;
    refetch: (newParams? : Record<string, string | number>) => Promise<void>;
}


const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

interface GlobalProviderProps {
    children: ReactNode;
  }

export const GlobalProvider  = ({ children } :  {children: ReactNode} ) => {

    const {
        data: user,
        loading,
        refetch,
      } = useAppwrite({
        fn: getCurrentUser,
      });
    const isLoggedIn = !!user;
    //double !! because: !{ name: 'someName' } = false cause object its 
    //true by default, so if is there something there, will get a true value

    return (
        <GlobalContext.Provider value={{
            isLoggedIn,
            user,
            loading,
            refetch
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () : GlobalContextType => {
    const context = useContext(GlobalContext);

    if(!context) {
        throw new Error("UseGlobalContext must be used within a GlobalProvider");

    }
    return context;
}

export default GlobalProvider;