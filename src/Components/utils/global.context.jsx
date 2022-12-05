import { createContext, useReducer } from "react";


export const DarkModeContext = createContext();

const reducerFunction = (state, { type }) => {

  switch (type) {
    case "DARK":
      return {
        bgFlag: "LIGHT",
        bgColor: "#393944",
        ftColor: "#eee"    
      }
    case "LIGHT":
      return {
        bgFlag: "DARK",
        bgColor: "#eee",
        ftColor: "#393944" 
      }
      default:
        return state;
  }
}

const DarkModeProvider = ({ children }) => {

  const initialState = { bgFlag: "DARK", ftColor: "#393944", bgColor: "#eee" }

  const [state, dispatch] = useReducer(reducerFunction, initialState);

    const store = {
    state,
    dispatch  
  }
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  return (
    <DarkModeContext.Provider value={store}>
      <div style={{ 
        backgroundColor: `${state.bgColor}`, 
        width: "100%", height: "100vh", 
        minHeight: "100%", color: `${state.ftColor}` 
        }}>
        {children}
      </div>
    </DarkModeContext.Provider>
  );
};

export default DarkModeProvider;