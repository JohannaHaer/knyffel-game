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
    threeOfAKind: (arr) => {
        let win = false
        arr.forEach(element => {
            let counter = 0
            arr.forEach(element2 => {
                if (element == element2) {
                    counter += 1
                }
            });
            if (counter >= 3) {
                win = true
            }
        });
        if (win) {
            return arr[0] + arr[1] + arr[2] + arr[3] + arr[4]
        } else {
            return 0
        }
    },
    fourOfAKind: (arr) => {
        let win = false
        arr.forEach(element => {
            let counter = 0
            arr.forEach(element2 => {
                if (element == element2) {
                    counter += 1
                }
            });
            if (counter >= 4) {
                win = true
            }
        });
        if (win) {
            return arr[0] + arr[1] + arr[2] + arr[3] + arr[4]
        } else {
            return 0
        }
    },
    fullHouse: (arr) => {
        let pash = false
        let tripple = false
        arr.forEach(element => {
            let counter = 0
            arr.forEach(element2 => {
                if (element == element2) {
                    counter += 1
                }
            });
            if (counter === 2) {
                pash = true
            }
            if (counter === 3) {
                tripple = true
            }
        });
        if (pash && tripple) {
            return 25
        } else {
            return 0
        }
    },
    knyffel: (arr) => {
        let knyffel = false
        arr.forEach(element => {
            let counter = 0
            arr.forEach(element2 => {
                if (element == element2) {
                    counter += 1
                }
            });
            if (counter === 5) {
                knyffel = true
            }
        });
        if (knyffel) {
            return 50
        } else {
            return 0
        }
    },
    chance: (arr) => {
        return arr[0] + arr[1] + arr[2] + arr[3] + arr[4]
    },
    smallStraight: (arr) => {
        if ((arr.includes(1) && arr.includes(2) && arr.includes(3) && arr.includes(4)) || (arr.includes(2) && arr.includes(3) && arr.includes(4) && arr.includes(5)) || (arr.includes(3) && arr.includes(4) && arr.includes(5) && arr.includes(6))) {
            return 30
        } else {
            return 0
        }
    },
    largeStraight: (arr) => {
        if ((arr.includes(1) && arr.includes(2) && arr.includes(3) && arr.includes(4)  && arr.includes(5)) || (arr.includes(2) && arr.includes(3) && arr.includes(4) && arr.includes(5)  && arr.includes(6))) {
            return 40
        } else {
            return 0
        }
    },
}

export default winCard