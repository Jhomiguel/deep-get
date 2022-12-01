const deepGet = require("./algo");

const mockedObject = {
  name: "Jose",
  sons: [{ grandsons: [{ name: "Joselito" }] }],
  info: {
    addresses: [{ name: "Street Test", number: 24 }],
  },
};

test("it should return object value depending of the path", () => {
  const value = deepGet(mockedObject, "sons[0].grandsons[0].name");
  expect(value).toBe("Joselito");
});

test("it should return an address number value depending of the path", () => {
  const value = deepGet(mockedObject, "info.addresses[0].number");
  expect(value).toBe(24);
});

test("it should return null value if path is invalid", () => {
  expect(deepGet(mockedObject, "fullName")).toBe(null);
});
