import { createContext, useReducer } from "react";

export const initalStates = {theme: "", data: []};

export const ContextGlobal = createContext(undefined);

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
      ftColor: "#393944",
      bgColor: "#eee"
      }
    default:
      return state;
  }
}

const ContextProvider = ({ children }) => {

  const initalState = { bgFlag: "DARK", ftColor: "#393944", bgColor: "#eee" }

  const [state, dispatch] = useReducer(reducerFunction, initalState);

  const store = {
    state, 
    dispatch
  }

  return (
    <ContextGlobal.Provider value={store}>
        <div style={{ backgroundColor: `${state.bgColor}`, width: "100%", height: "100vh", minHeight: "100%", color: `${state.ftColor}` }}>
          {children}
        </div>
    </ContextGlobal.Provider>
  );
};

export default ContextProvider;