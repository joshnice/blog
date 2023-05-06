export function getBlogPreviewColumnPositionStart(index: number): 1 | 2  {
    if (index === 0) {
        return 1;
    }
    return index % 2 === 0 ? 2 : 1;
}

export function getBlogPreviewColumnPositionEnd(index: number): 2 | 3  {
    if (index === 0) {
        return 3;
    }
    return index % 2 === 0 ? 3: 2;
}