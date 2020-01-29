import {
  createContext,
  useReducer,
  useContext,
  FunctionComponent,
  Reducer,
  Dispatch
} from "react";
import * as modules from "./modules";

/* Parse Modules */
const objModules: { [key: string]: modules.ContextModule } = { ...modules };
const moduleNames = Object.keys(modules);
const { initialState, actions }: modules.ContextModule = moduleNames.reduce(
  (acc, cur) => {
    const module = objModules[cur];
    return {
      initialState: {
        ...acc.initialState,
        ...module.initialState
      },
      actions: {
        ...acc.actions,
        ...module.actions
      },
      actionTypes: []
    };
  },
  {
    initialState: {},
    actions: {},
    actionTypes: []
  }
);

/* Define a context and a reducer for updating the context */
const initailContext: [object, Dispatch<modules.action>] = [{}, () => {}];
const GlobalStateContext = createContext(initailContext);

const globalStateReducer: Reducer<object, modules.action> = (
  state: object,
  action: { type: string; payload: any }
) => {
  if (actions[action.type]) return actions[action.type](state, action);

  return state;
};

/* Export a component to provide the context to its children. This is used in our _app.js file */

export const GlobalStateProvider: FunctionComponent = ({ children }) => {
  const [state, dispatch] = useReducer(globalStateReducer, initialState);

  return (
    <GlobalStateContext.Provider value={[state, dispatch]}>
      {children}
    </GlobalStateContext.Provider>
  );
};

/* 
Default export is a hook that provides a simple API for updating the global state. 
This also allows us to keep all of this state logic in this one file
*/

export const useGlobalState = () => {
  const [state, dispatch] = useContext(GlobalStateContext);

  const setDoggie = ({ name, breed, isGoodBoy }) => {
    dispatch({
      type: SET_DOGGIE,
      payload: {
        name,
        breed,
        isGoodBoy
      }
    });
  };

  return {
    setDoggie,
    doggie: { ...state.doggie }
  };
};
