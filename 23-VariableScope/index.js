/**
 * Variable Scope = Where a variable is recognized and accessible (local and global)
 */

let x = 3;

function fun1() {
  let x = 1;
  console.log(x);
};

function fun2() {
  let x = 2;
  console.log(x);
};

fun1();
fun2();