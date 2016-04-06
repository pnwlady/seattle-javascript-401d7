process.nextTick(() => {
  console.log('inside nextTick');
  process.nextTick(() => {
    console.log('second layer of nextTick');
  });
});

process.nextTick(() => {
  console.log('another next tick');
  process.nextTick(()=> {
    console.log('once more with feeling');
  });
});

console.log('first');
