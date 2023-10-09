<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>A: `{}`</b></summary>
<p>

#### Answer:

<i>A let variable is a block scope variable. Again let variables can be reassigned. Here first variable is declared without value then An object has been reassigned.So, the variable value is {}</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>A: `NaN`</b></summary>
<p>

#### Answer:

<i> In the function sum, the parameters a and b are not explicitly converted to numbers before the addition operation. When i try to add a number (1) to a string ("2"), JavaScript attempts to perform type coercion and convert the string to a number. However, if the string cannot be converted to a valid number, such as in this case where the string is "2", it results in NaN. So, the expression 1 + "2" equals NaN, which is the returned value when you call sum(1, "2").</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>A: `['🍕', '🍫', '🥑', '🍔']`</b></summary>
<p>

#### Answer:

<i> Initially, the info object's favoriteFood property is set to the first element of the food array, which is "🍕". Then, the value of info.favoriteFood is changed to "🍝". However, this change does not affect the food array itself. So, when i log the food array, it remains unchanged and prints ['🍕', '🍫', '🥑', '🍔'].</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>B: `Hi there, undefined`</b></summary>
<p>

#### Answer:

<i>The sayHi function expects a parameter name, but when it's called with sayHi(), no argument is provided. In JavaScript, when a function is called with missing arguments, those arguments are automatically assigned the value undefined. Therefore, the function returns "Hi there, undefined" because name inside the function has an undefined value.</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>C: 3</b></summary>
<p>

#### Answer:

<i>The forEach method iterates through the nums array and executes the provided callback function for each element. In the callback function, the condition if (num) checks if the current element num is truthy. All numbers in the nums array except for the first one (0) are truthy values. Therefore, the callback function is executed for three truthy values (1, 2, and 3), and each time it increments the count variable by 1. Thus, count becomes 3, and that's what gets logged to the console.</i>

</p>
</details>
