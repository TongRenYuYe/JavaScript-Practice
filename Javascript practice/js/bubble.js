/** scores数组存储泡泡配方
 * 函数 printAndGetHighScores用来得到所有的泡泡配方中的最高得分
 * 函数 getBestResults将所有最佳的泡泡配方存储到数组bestSolutons中
 * 最后用console.log输出结果
 */
var scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 51, 54, 48, 69, 34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 61, 46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44];
//定义scores数组用来存储所有的泡泡配方
function printAndGetHighScores(scores) {
    var highScore = 0;
    var output;
    for (var i = 0; i < scores.length; i++) {
        output = "Bubble solution #" + i + " score: " + scores[i];
        console.log(output);
        if (scores[i] > highScore) {
            highScore = scores[i];
        }
    }
    return highScore;
}
//得到最佳配方
function getBestResults(scores, highScore) {
    var bestSolutions = [];
    for (var i = 0; i < scores.length; i++) {
        if (scores[i] == highScore) {
            bestSolutions.push(i);
        }
    }
    return bestSolutions;
}
//将得到的结果存储到数组bestSolutions中
var highScore = printAndGetHighScores(scores);
console.log("Bubble tests: " + scores.length);
console.log("Highest bubble score: " + highScore);
var bestSolutions = getBestResults(scores, highScore);
console.log("Solutions with the highest score: " + bestSolutions);
//用console.log输出结果
