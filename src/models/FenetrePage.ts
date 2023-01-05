import type TextSectionModel from "./TextSectionModel";

export default interface FenetrePage {
    pageName: string,
    pageTitle: string,
    pageDescription: string,
    bannerPicture: string,
    sections: Array<TextSectionModel>
}