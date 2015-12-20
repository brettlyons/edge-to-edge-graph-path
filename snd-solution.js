var solvable = [
  [0, 0, 0, 0, 0, 0, 0, 1],
  [0, 1, 0, 0, 0, 0, 0, 1],
  [0, 1, 1, 1, 0, 0, 1, 1],
  [0, 0, 0, 1, 0, 0, 1, 0],
  [0, 0, 0, 1, 1, 1, 1, 0],
  [0, 1, 1, 1, 0, 0, 0, 0],
  [0, 1, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 0, 0, 0, 0],
];
// you are given [7,1]

var unsolvable = [
  [0, 0, 0, 1, 0, 0, 0, 0],
  [0, 0, 1, 1, 1, 0, 0, 0],
  [0, 1, 1, 0, 1, 1, 1, 0],
  [0, 1, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 1, 1, 1, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
];
// given [0,3]


function walkPath(graph, startingPoint) {
  function moveOne(startingPoint, nextPoint) {
    if(nextPoint[0] === graph[0].length && nextPoint[1] === graph.length) return true;
    if(graph[nextPoint[0]][nextPoint[1]] === 1) {
      return moveOne(nextPoint, [nextPoint[0] + 1, nextPoint[1] + 0]) && moveOne(nextPoint, [nextPoint[0] + 0, nextPoint[1] + 1]) && moveOne(nextPoint, [nextPoint[0] - 1, nextPoint[1] + 0]) && moveOne(nextPoint, [nextPoint[0] + 0, nextPoint[1] - 1]);
    }
    return false;
  }
  
  return moveOne(startingPoint, [6,1]);
}

