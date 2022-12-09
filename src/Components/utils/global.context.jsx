import { createContext, useReducer, useMemo } from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import axios from "axios";
import { grey, lightBlue, red } from "@mui/material/colors";
import CssBaseline from '@mui/material/CssBaseline';


export const ContextGlobal = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "theme":
      return {...state, Dark: !state.Dark};
    case "data":
      return {...state, data: action.payload};
    default:
      return state;
  }
}

export const ContextProvider = ({ children }) => {

  const initialState = {Dark: false, data: []}

  const [state, dispatch] = useReducer(reducer, initialState);


  const theme = createTheme({
    palette:{
      mode: (state.Dark ? 'dark' : 'light'),
      primary: {
        main: (state.Dark ? grey[600]: lightBlue[100]),
        contrastText: (state.Dark ? "#ffffff": "#202425")
      },
      secondary:{
        main: (state.Dark ? grey[700] : red[100]),
        contrastText: (state.Dark ? "#ffffff": "#232627")
      },
    }
  });

  const getData = () => {
    axios.get('https://jsonplaceholder.typicode.com/users').then(
      res => {
        dispatch({type: "data" , payload: res.data})
      }
    )
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