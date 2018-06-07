let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

function containsDakota(states) {
  return states.filter(state => state.includes("Dakota"));
}
console.log(containsDakota(states));

function twoWordStates(states) {
  return states.filter(state => state.split(/\s+/).length === 2);
}
console.log(twoWordStates(states));
