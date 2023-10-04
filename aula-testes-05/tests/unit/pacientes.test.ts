import { faker } from "@faker-js/faker";
import { generateProtocolForPacient } from "../../src/protocols-generator";

jest.mock("uuid", () => {
  return {
    v4: () => {
      return "mock protocol";
    },
  };
});

describe("Protocol Generator Tests", () => {
  it("should create an protocol", async () => {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const priority = faker.datatype.boolean();

    const protocol = generateProtocolForPacient(firstName, lastName, priority);
    expect(protocol).toEqual({
      priority,
      date: expect.any(Date),
      pacient: `${firstName} ${lastName}`,
      protocol: "mock protocol",
    });
  });
});
