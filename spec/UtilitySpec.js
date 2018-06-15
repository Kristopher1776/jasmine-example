describe("general purpose utility functions", function(){
  describe("fullName()", function() {
    it ("concatenates two name parts, separated by a space", function(){
      expect(fullName("Kris", "LeCorgne")).toEqual("Kris LeCorgne");
    });
  });

  describe("ageInYears()", function(){
    it("returns age for a birthday string", function(){
      spyOn(Date, "now").and.returnValue(new Date("2018-06-14"));
      expect(ageInYears("1980-06-01")).toEqual(38);
    });
  });

  describe("isOver21()", () => {
    beforeEach(() => {
      spyOn(Date, "now").and.returnValue(new Date("2018-06-14"));
    });

    it("returns true when age is 21", () => {
      expect(isOver21("1997-06-14")).toBe(true);
    });

    it("returns true when age is over 21", () => {
      expect(isOver21("1990-06-14")).toBe(true);
    });

    it("returns false when age is under 21", () => {
      expect(isOver21("2000-06-13")).toBe(false);
    });
  });

  describe("isLeapYear()", () => {
    //when the year is evenly divisible by 4, it returns true. 
    // expect(isLeapYear("")).toBe(true);
  });
});