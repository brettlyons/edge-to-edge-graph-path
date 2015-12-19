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


function solve(graph, startingPoint) {

  function checkAdjacents(previousCenter, currentCenter) {
    // if we're at an end point, return true.
    if(previousCenter !== currentCenter && (currentCenter[0] == graph.length - 1 || currentCenter[1] == graph.length[0] - 1)) { return true; }
    potentialMoves = generatePotentialMove(currentCenter, previousCenter);
    console.log(potentialMoves);

      console.log(potentialMoves.map(function (offsets) {
        console.log("MAP HIT");
        return checkAdjacents(currentCenter, graph[offsets[0] + currentCenter[0]][offsets[1] + currentCenter[1]]);
      }).some(function(element) {return element;}));
    };

  function generatePotentialMove(currentCenter, previousCenter) {
    // generate a single array of spots to check.  Remove the 1 that matches previousCenter.
    return [[1,0], [0,1], [-1,0], [0,-1]].filter(function (element) {
      return ((element[0] + currentCenter[0] !== previousCenter[0]
              && element[1] + currentCenter[1] !== previousCenter[1])
        && (element[0] + currentCenter[0] >= 0
            && element[1] + currentCenter[1] >= 0)
              && (graph[element[0] + currentCenter[0]][element[1] + currentCenter[1]] === 1)); 
    });
  }
  return checkAdjacents(startingPoint, [6,1]);
}

console.log(solve(solvable, [7,1])); // true
console.log(solve(unsolvable, [0,3])); // false



function generatePossiblePaths(graph, graphPosition) {
  // given a graph and a position, returns an array of possible moves from that position.
  // an empty array / null return means no possible moves aka a dead end

}









