export const useDomainGallery = (gallery) => {
    let newGallery = [];
    for(let slide of gallery){
        newGallery.push({
            ...slide,
            markup: useDomain(slide.markup),
            raw: useDomain(slide.markup),
        })
    }
    return newGallery;
}