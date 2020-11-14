var myFunc = () => {
  return 3;
};

test('expects return to be 3', () => {
  expect(myFunc()).toBe(3);
});
