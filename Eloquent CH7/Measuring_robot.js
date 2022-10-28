function runRobot(state, robot, memory) {
    for (let turn = 0;; turn++) {
      if (state.parcels.length == 0) {
        return turn
        break;
      }
      let action = robot(state, memory);
      state = state.move(action.direction);
      memory = action.memory;
    }
  }

function compareRobots(robot1, memory1, robot2, memory2) {
  let robot1_moves = 0
  let robot2_moves = 0
  for (let i = 0; i<100; i++) {
	let random_start = VillageState.random()
    robot1_moves += runRobot(random_start, robot1, memory1)
    robot2_moves += runRobot(random_start, robot2, memory2)
  }
  robot1_avg = (robot1_moves/100).toFixed(2)
  robot2_avg = (robot2_moves/100).toFixed(2)
  console.log(`robot1 avg: ${robot1_avg}, robot2 avg: ${robot2_avg}`)
}

compareRobots(routeRobot, [], goalOrientedRobot, []);