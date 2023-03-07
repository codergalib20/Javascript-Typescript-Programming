type User = {
  readonly id: number;
  username: string;
};

const user: User = {
  id: 2323,
  username: "codergalib20",
};

console.log(user.id);
// user.id = 3434; // This code give me error cause i can't edit readonly id
user.username = "codergalib";
