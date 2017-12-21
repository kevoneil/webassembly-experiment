import add from "./add.wasm";
let addOne;

async function addModule() {
  const addOne = await add().then(res => res.instance.exports.add_one);
  console.log(addOne(4));
}

addModule();
