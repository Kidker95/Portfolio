import { LinkModel } from "./LinkModel";
import { PhotoModel } from "./PhotoModel";

export class FolderModel {
    title: string; 
    links: LinkModel[]; 
    photos: PhotoModel[]; 
}