// Exercise #4
let getJohnProfile = () => {
  return new Promise(function (resolve) {
    setTimeout(
      () =>
        resolve({
          name: "John",
          age: 20,
          hobbies: ["Coding", "Football"],
        }),
      1000
    );
  });
};
// Start coding here
async function asynchronousFunction() {
  try {
    getJohnProfile = await getJohnProfile();
    console.log(getJohnProfile);
  } catch (error) {
    console.log(error);
  }
}
asynchronousFunction();
