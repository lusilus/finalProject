import { createContext, useReducer } from "react";

export const AppContext = createContext()

export default function ContextProvider({children}){

    const reducer = (state, action) => {

        switch (action.type){

            case('login'):
                return {
                  ...state,
                  user: action.payload
                }
            case('getArtCard'):

              return {
                ...state,
                artCards: [...state.artCards, ...action.payload],
              }

            case('addArtCard'):
            
              return {
                ...state,
                artCards: [...state.artCards, action.payload]
              }
            
            case('logout'):
              return {
                user: {},
                artCards: []
              } 

              case('deleteCard'):
                  const oldCard = [...state.artCards]
                  console.log('delete card action', action)
                  const idxCard = oldCard.findIndex(item => item._id === action.payload._id)
                  console.log('idxcard is', idxCard)
                
                  oldCard.splice(idxCard, 1)
                 
                return {
                  
                     ...state,
                      artCards: oldCard
                 }

              case('editCard'):
                console.log("🚀 ~ editCard HERE")

                const editArtCard = [...state.artCards]

                const idx = editArtCard.findIndex(item => item._id === action.payload._id)
                console.log("🚀 ~ idx", idx)

                 editArtCard[idx] = {...action.payload}
                 console.log("🚀 ~ editArtCard", editArtCard)

                 return{
                  ...state,
                  artCards: [...editArtCard]
                 }

            default:
                return state
        }

    }
    const [state, dispatch] = useReducer(reducer, {
        user: {},
        artCards: []
    })

    return <AppContext.Provider value={{state, dispatch}}>
        {children}
    </AppContext.Provider>
}