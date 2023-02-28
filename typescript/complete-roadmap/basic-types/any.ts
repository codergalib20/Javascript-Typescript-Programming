// Learn "any" Type in Javascript

let MyCpmlicatedData: any = {
  name: "Galib",
  classLavel: 11,
  age: 17.5,
  school: "Kajirhat/Nilphamari",
  friends: ["Rifat", "Forhad", "Mazidul"],
  regular: function (isTrue) {
    return isTrue;
  },
};
MyCpmlicatedData(true);
MyCpmlicatedData = "Asadullah";
MyCpmlicatedData = 17;
MyCpmlicatedData = { name: "Galib", age: 17 };
MyCpmlicatedData = ["Rifat", "Forhad", "Mazidul"];
