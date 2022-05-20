const { notFoundError } = require("./errors");

describe("Given a notFoundError function", () => {
  describe("When its invoked with a response", () => {
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    test("Then it should call the reponse's method status with a 404", () => {
      const expectedStatusCode = 404;

      notFoundError(null, res);

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });
  });
});
