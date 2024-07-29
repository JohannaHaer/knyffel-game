const winCard = {
    ones: (arr) => {
        let points = 0
       arr.forEach(element => {
           if (element === 1) {
            points += 1
           } 
       }); 
       return points
    },
    twos: (arr) => {
        let points = 0
       arr.forEach(element => {
           if (element === 2) {
            points += 2
           } 
       }); 
       return points
    },
    threes: (arr) => {
        let points = 0
       arr.forEach(element => {
           if (element === 3) {
            points += 3
           } 
       }); 
       return points
    },
    fours: (arr) => {
        let points = 0
       arr.forEach(element => {
           if (element === 4) {
            points += 4
           } 
       }); 
       return points
    },
    fives: (arr) => {
        let points = 0
       arr.forEach(element => {
           if (element === 5) {
            points += 5
           } 
       }); 
       return points
    },
    sixs: (arr) => {
        let points = 0
       arr.forEach(element => {
           if (element === 6) {
            points += 6
           } 
       }); 
       return points
    },
}

export default winCard