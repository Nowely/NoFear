import {makeAutoObservable} from "mobx";
import {AffairStore} from "./AffairStore";
import {CabinetType} from "../utils/consts";

export class Store {
    //region Singleton
    private static _instance: Store;

    private constructor() {
        makeAutoObservable(this)
    }

    static get instance(): Store {
        return this._instance || (this._instance = new this());
    }

    //endregion

    currentView :CabinetType = +(window.localStorage.getItem("CabinetType") ?? "0");

    //affair: AffairStore = AffairStore.instance;
}