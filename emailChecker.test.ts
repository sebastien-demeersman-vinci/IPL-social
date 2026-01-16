import { EmailChecker } from "./emailChecker";

describe("Email Checker", () => {
    const emailChecker = new EmailChecker();

  it("should return false when given an email without @", () => {
    const actual = emailChecker.check("vinci.be");

    expect(actual).toBe(false);
  });

  it("should return false when given an email with @ in first char", () => {
    const actual = emailChecker.check("@vinci.be");

    expect(actual).toBe(false);
  });

  it("should return false when given an email with @ in last char", () => {
    const actual = emailChecker.check("vinci.be@");

    expect(actual).toBe(false);
  });

  it("should return false when given an email with a space", () => {
    const actual = emailChecker.check("sebastien @vinci.be");

    expect(actual).toBe(false);
  });

  it("should return false when given an email without a . after @", () => {
    const actual = emailChecker.check("sebastien@vinci");

    expect(actual).toBe(false);
  });
});
