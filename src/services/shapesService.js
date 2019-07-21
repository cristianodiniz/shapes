const url_shapes = "https://www.mocky.io/v2/5a0081a83000008c08fabcda"

export class Shape{
    constructor(id,coordinates){
        this.id = id;
        this.name = `Zone  ${id+1}`
        this.coordinates = coordinates
    }
}

export const getShapes = async () => {
    const array = await fetch(url_shapes).then(rep=> rep.json())
    return convertFromArrayToShapes(array)   
}

export const convertFromArrayToShapes = (array)=>{
    return array.map((it,idx) => new Shape(idx,it))
}
