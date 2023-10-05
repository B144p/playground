import { data } from './mockData.json';

type dataTypes = {
    id: string
    title: string
    child?: dataTypes[]
}

const getAllId = (values: dataTypes[]) => {
    let idArr: string[] = []
    values.forEach((item: dataTypes) => {
        if (item.id) {
            idArr.push(item?.id)
            if (item?.child) {
                idArr = [...idArr, ...getAllId(item.child)]
            } else return
        }
    })
    return idArr
}

let allId = getAllId(data)

console.log(allId, allId.length)