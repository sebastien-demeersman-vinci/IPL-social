import { EmailChecker } from "./emailChecker";

describe("Email Checker", () => {
  it("should return false when given an email without @", () => {
    const emailChecker = new EmailChecker();

    const actual = emailChecker.check("vinci.be");

    expect(actual).toBe(false);
  });

  it("should return false when given an email with @ in first char", () => {
    const emailChecker = new EmailChecker();

    const actual = emailChecker.check("@vinci.be");

    expect(actual).toBe(false);
  });
});
