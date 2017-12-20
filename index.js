import add from "./add.wasm";

add().then(res => {
  console.log(res.instance.exports.add_one());
});
