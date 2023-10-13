import readline from 'readline';

// const readInterface = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

let keyVar: string[] = ['startFirst', 'rangeFirst', 'startSecond', 'rangeSecond']
// let inputData: Record<string, number> = {}

// const getInput = readInterface.question('Input: ', (input: string) => {
//     const data = input.split(' ');
//     keyVar.forEach((item: string, index) => {
//         inputData[item] = Number(data[index])
//     })
//     readInterface.close();
// });

let inputData: Record<string, number> = {
    startFirst: 0,
    rangeFirst: 4,
    startSecond: 5,
    rangeSecond: 3,
}


const calDistant = () => {
    let n = 1
    while (true) {
        let distantFirst = inputData.startFirst + (inputData.rangeFirst * n)
        let distantSecond = inputData.startSecond + (inputData.rangeSecond * n)
        let moreThanRange = inputData.rangeFirst > inputData.rangeSecond
        let equalRange = inputData.rangeFirst === inputData.rangeSecond
        let equalDistant = distantFirst === distantSecond
        if (moreThanRange) {
            if(equalDistant) return { status: 'YES', distant: distantFirst }
            if(distantFirst > distantSecond) return 'NO'
        } else {
            if (equalRange) return 'NO'
            if(equalDistant) return { status: 'YES', distant: distantFirst }
            if(distantFirst < distantSecond) return 'NO'
        }
        n++
    }
}

const processCal = async () => {
    // await getInput
    await console.log(calDistant())
}

processCal()