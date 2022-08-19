/*- Mentsd el külön `l`, `f` és `j` változókba a fenti objektum lastName, firstName és job property-jeit! 
- Ha valamelyik nincs megadva, akkor az érték legyen az "unknown" string! */

const user = {
  firstName: "John",
  lastName: "Doe",
};

const {
  firstName: f = "unknown",
  lastName: l = "unknown",
  job: j = "unknown",
} = user;

export { f, l, j };
