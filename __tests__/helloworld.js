function sayHelloWorld() {
  // return `Hello World`;
  return;
}

function expectArgs(args) {
  return `expect ${args}`
}

it('should say hello world', () => {
  expect(sayHelloWorld()).toBe('Hello World');
})

it('should be able pass a argument for function', () => {
 expect(expectArgs(args)).toBe(`${args}`);
})