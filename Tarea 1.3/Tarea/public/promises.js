
function promises() {
  return new Promise (function (response) {
    setTimeout(response, 1500);
  });
}
promises().then(()=>{
  console.log("Hola que tal");
  return promises();
})
promises().then(()=>{
  console.log("bla bla bla");
  return promises();
})
promises().then(()=>{
  console.log("bla bla bla");
  return promises();
})
promises().then(()=>{
  console.log("Un gusto conocerte Adios");
})
