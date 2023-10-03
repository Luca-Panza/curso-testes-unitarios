import { generateProtocolForPacient } from "../../src/protocols-generator";

jest.mock("uuid", () => {
  return {
    v4: () => {
      return "mock value";
    },
  };
});

describe("pacients tests", () => {
  it("Should generate a protocol", () => {
    const value = generateProtocolForPacient("Luca", "Panza", true);
    expect(value.protocol).toBe("mock value");
  });
});
