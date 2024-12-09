import { LinkModel } from "./LinkModel";
import { PhotoModel } from "./PhotoModel";
import { VideoModel } from "./VideoModel";

export class FolderModel {
    public title: string; 
    public links: LinkModel[]; 
    public photos: PhotoModel[]; 
    public videos: VideoModel[];
}