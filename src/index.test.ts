import {add} from './';

it("should add 5 and 6 together", () => {
    expect(add(5,6)).toEqual(11);
});
it("should add 1 and 2 together", () => {
    expect(add(1,2)).toEqual(3);
});
it("should add -5 and -6 together", () => {
    expect(add(-5,-6)).toEqual(-11);
});
it("should add 1 and 0 together", () => {
    expect(add(1,0)).toEqual(1);
});
it("should add 1 and null together", () => {
    expect(add(1,null)).toEqual(1);
});
it("should add null and null together", () => {
    expect(add(null,null)).toEqual(0);
});
