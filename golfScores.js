var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go home!"];
function golfScore(par, strokes) {
    if (strokes == 1) {
        return names[0]
    } else if (strokes <= par - 2) {
        return names[1];
    } else if (strokes == par - 1) {
        return names[2];
    } else if (strokes == par) {
        return names[3];
    } else if (strokes == par + 1) {
        return names[4];
    } else if (strokes == par + 2) {
        return names[5];
    } else {
        return names[6];
    } 
}

console.log(golfScore(10, 1));
console.log(golfScore(10, 2));
console.log(golfScore(10, 3));
console.log(golfScore(10, 4));
console.log(golfScore(10, 9));
console.log(golfScore(10, 10));
console.log(golfScore(10, 11));
console.log(golfScore(10, 12));
console.log(golfScore(10, 13));
console.log(golfScore(10, 14));

function switchTesting(a) {
    switch(a) {
        case 0:
            return "Zero!";
            break;
        case 1:
            return "One!";
            break;
        case 2:
            return "Two!";
            break;
        default:
            return "Other!";
            break;
    }
}

console.log(switchTesting(0));
console.log(switchTesting(1));
console.log(switchTesting(2));
console.log(switchTesting(3));