import { ContextModule } from "./index";

const SET_PROGRESS = "progress/SET_PROGRESS";

const progress: ContextModule = {
  actionTypes: [SET_PROGRESS],
  actions: {
    [SET_PROGRESS]: state => ({
      ...state
    })
  },
  initialState: {
    progress: 0
  }
};

export default progress;
