// let zero : 0 = 0;

// zero = 3;

// let hi: "hi" = "Hi!";

// hi = "Hello";

// A function with a literal+union type parameter
const giveAnswer = (answer: "yes" | "no" | "maybe") => {
  return `The answer is ${answer}.`;
};

// CAN provide one of the literals in the union
giveAnswer("no"); // ✔️ The answer is no.

// CAN't provide anything else
giveAnswer("oh boy I'm not sure"); // ❌ It will show error

let mood: "Happy" | "Sad" = "Happy";

mood = "ok"; // It will show error

mood = "Sad"; // Acceptable
mood = "sad"; // Not Acceptable

type DayOfWeek =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";

let today: DayOfWeek = "Friday";
today = "Monday";
today = "Sunday";
