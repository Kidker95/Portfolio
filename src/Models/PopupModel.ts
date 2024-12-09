import { PhotoModel } from "./PhotoModel";

export class PopupModel {
    title: string;
    contentKey: string;
    isErrorPopUp?: boolean;
    src?: string;
    content?: any; 
    photo?: PhotoModel;
}
