import {
	VuexModule,
	Module,
	Mutation,
	Action,
	getModule
} from "vuex-module-decorators";
import store from "../index";

// 定义设备枚举类型
export enum DeviceType { 
  Mobile,
  Desktop
}

export interface IAppState {
  device: DeviceType;
}

@Module({ dynamic: true, store, name: "app" })
class App extends VuexModule implements IAppState {
	public device = DeviceType.Desktop;
	
	@Mutation
	private TOGGLE_DEVICE(device: DeviceType) {
		this.device = device;
	}
	@Action
  public ToggleDevice(device: DeviceType) {
    this.TOGGLE_DEVICE(device);
  }
}

export const AppModule = getModule(App);