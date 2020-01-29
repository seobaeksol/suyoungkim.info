export { default as progress } from "./progress";

export type action = { type: string; payload: any };

export interface ContextModule {
  actionTypes: string[];
  actions: {
    [actionType: string]: (state: object, action?: action) => object;
  };
  initialState: {};
}
