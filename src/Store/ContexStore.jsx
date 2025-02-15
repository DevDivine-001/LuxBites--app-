// import { createContext } from "react";
// import { food_list } from "../assets/frontend_assets/assets";

// export const StoreContext = createContext(null);

// const StoreContextProvider = (props) => {
//     const contextValue = {
//         food_list,
//     };

//     return (
//         <StoreContext.Provider value={contextValue}>
//             {props.children}
//         </StoreContext.Provider>
//     );
// };

// export default StoreContextProvider;


import { createContext } from "react";
import { food_list } from "../assets/frontend_assets/assets";

export const suyContext = createContext(null);

const StoreContextProvider = (props) => {
    const contextValue = {
        food_list,
    };

    return (
        <suyContext.Provider value={contextValue}>
            {props.children}
        </suyContext.Provider>
    );
};

export default StoreContextProvider;
