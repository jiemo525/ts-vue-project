/**
 * @description 统一状态管理
 */
import Vue from "vue";
import Vuex from "vuex";
import { IAppState } from "./modules/app";

Vue.use(Vuex);

export interface IRootState {
	app: IAppState;
}

export default new Vuex.Store<IRootState>({});