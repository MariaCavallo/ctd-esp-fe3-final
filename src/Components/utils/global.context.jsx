import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { blueGrey, grey} from "@mui/material/colors";
import axios from "axios";
import { useMemo } from "react";
import { createContext, useReducer } from "react";

export const ContextGlobal = createContext(undefined);

const reducerFunction = (state, action) => {
  switch (action.type) {
    case "theme":
      return {...state, Dark: !state.Dark};
    case "data":
      return {...state, data: action.payload}
    default:
      return state;
  }
}

const ContextProvider = ({ children }) => {

  const initalState = {Dark: false, data: []}

  const [state, dispatch] = useReducer(reducerFunction, initalState);

  const theme = createTheme({
    palette: {
      mode: (state.Dark ? 'dark' : 'light'),
      primary: {
        main: (state.Dark ? grey[600] : blueGrey[200]),
        contrastText: (state.Dark ? "#fffff" : "#000000")
      }
    }
  });

  const getData = () => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        dispatch({ type: "data", payload: res.data})
      })
      .catch(err => console.log(err))
  }

  useMemo(() => getData(), [])

  const store = {
    state,
    dispatch
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ContextGlobal.Provider value={store}>
              {children}
      </ContextGlobal.Provider>
    </ThemeProvider>
  );
};

export default ContextProvider;