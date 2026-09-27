const aboutMe = {
  name: "Winston O. Gultiano",
  age: 20,
  course: "BSIS",
  introduce: function () {
    console.log(`Hi, I'm ${this.name}, ${this.age} years old, and I am currently taking Bachelor of Science in Information Systems or ${this.course}. One of my hobbies is ${this.hobby}.`);
  }
};
 
aboutMe.hobby = "watching movies";
aboutMe.introduce()
