function pickFiveNumbers() {
    var numbers = [];
    for (var i = 0; i < 5; i++) {
        var number = Math.floor(Math.random() * 50) + 1;
        numbers.push(number);
    }
    //check if the numbers are the same and not in within +1 or -1 of each other
    for (var i = 0; i < numbers.length; i++) {
        for (var j = 0; j < numbers.length; j++) {
            if (i != j) {
                if (numbers[i] == numbers[j]) {
                    numbers[i] = Math.floor(Math.random() * 50) + 1;
                    i = 0;
                    j = 0;
                }
                if (numbers[i] == numbers[j] + 1) {
                    numbers[i] = Math.floor(Math.random() * 50) + 1;
                    i = 0;
                    j = 0;
                }
                if (numbers[i] == numbers[j] - 1) {
                    numbers[i] = Math.floor(Math.random() * 50) + 1;
                    i = 0;
                    j = 0;
                }
            }
        }
    }
    
    //order numbers in the array
    numbers.sort(function(a, b) {
        return a - b;
    });

    return numbers;

}

function pickTwoLuckyNumbers() {
    var numbers = [];
    for (var i = 0; i < 2; i++) {
        var number = Math.floor(Math.random() * 12) + 1;
        numbers.push(number);
    }
    //check if the numbers are the same
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] === numbers[i + 1]) {
            numbers[i] = Math.floor(Math.random() * 12) + 1;
        }
    }
    //order numbers in the array
    numbers.sort(function(a, b) {
        return a - b;
    });

    return numbers;
}

function displayNumbers() {
    var fiveNumbers = pickFiveNumbers();
    var twoLuckyNumbers = pickTwoLuckyNumbers();
    //display five numbers
    document.getElementById("fiveNumbers").innerHTML = fiveNumbers;
    //display two lucky numbers
    document.getElementById("luckyStars").innerHTML = twoLuckyNumbers;
}
