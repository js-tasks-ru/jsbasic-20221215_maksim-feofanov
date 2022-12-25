function sumSalary(salaries) {
  let summa = 0;
  for (let key in salaries) {
    if (typeof salaries[key] === "number" && !isNaN(salaries[key]) && salaries[key] !== Infinity && salaries[key] !== -Infinity) {
      summa += salaries[key];
    }
  }
  return summa;
}
