const combinations = (elements) => {
     if (elements.length === 0) return [[]];

     let firstEl = elements[0];
     let rest = elements.slice(1);
     let combinationsWithoutFirst = combinations(rest);
     let combinationsWithFirst = [];

     combinationsWithoutFirst.forEach(comb => {
          let combinationWithFirst = [...comb, firstEl];
          combinationsWithFirst.push(combinationWithFirst);
     })

     return [...combinationsWithoutFirst, ...combinationsWithFirst];

}

console.log(combinations(["a", "b", "c"]));