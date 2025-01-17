import { createContext, useEffect, useReducer } from "react";

// Create the AppContext
export const AppContext = createContext();

// Initial State
const initialState = {
  user: null,
  blog: null,
};

// Reducer function
const appReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

// AppProvider Component
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  // Effect to load user data from localStorage
  useEffect(() => {
    try {
      const user = localStorage.getItem("pantone");
      if (user) {
        const parsedUser = JSON.parse(user);
        if (parsedUser) {
          dispatch({ type: "LOGIN", payload: parsedUser });
        }
      }
    } catch (error) {
      console.error("Error parsing user data from localStorage:", error);
    }
  }, []);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
