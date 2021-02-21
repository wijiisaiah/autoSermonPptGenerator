
export interface ItemDTO {
    attrs?: any,
    items?: ItemDTO[]
    name?: string,
    type?: string,
    text?: string,
}

export interface PassageDTO {
    bibleId: string,
    bookId: string,
    chapterIds: string[],
    content: ItemDTO[],
    copyright:string,
    id: string,
    orgId:string,
    reference: string,
    verseCount: number
}