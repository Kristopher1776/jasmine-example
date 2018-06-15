describe("general purpose utility functions", function(){
  describe("fullName()", function() {
    it ("concatenates two name parts, separated by a space", function(){
      expect(fullName("Kris", "LeCorgne")).toEqual("Kris LeCorgne");
    });
  });
  describe("ageInYears()", function(){
    it("returns age for a birthday string", function(){
      expect(ageInYears("1980-06-01")).toEqual(38);
    })
  });
  describe("isOver21()", () => {
    it("returns true when age is 21", () => {
      expect(isOver21("1997-06-14")).toBe(true);
    });

    it("returns true when age is over 21", () => {
      expect(isOver21("1997-06-14")).toBe(true);
    });

    it("returns false when age is under 21", () => {
      expect(isOver21("1997-06-15")).toBe(false);
    });
  })
});