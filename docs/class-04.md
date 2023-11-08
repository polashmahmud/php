# ফাংশনাল পিএইচপি এবং স্কোপ (Scope) পরিচিতি

## PHP Functions

**ফাংশন কাকে বলে?**

ফাংশন হচ্ছে একটি ব্লক অব কোড যা আপনি পুনরায় ব্যবহার করতে পারেন। এটি একটি সংকলন যা একটি নির্দিষ্ট কাজ করে।
পিএইচপি ব্যবহারকারীদের কাজগুলি সহজ করার জন্য একটি বিশেষ নীতি প্রয়োগ করে, এবং এই নীতির একটি মৌলিক অংশ হলো "ফাংশন"। পিএইচপি-তে একটি ফাংশনকে, আপনি পুনরায় ব্যবহার করতে এবং কোড সাধারণ ও সাফল্যমূলক করার জন্য ব্যবহার করতে পারেন।

পিএইচপি-তে 1000 টিরও বেশি বিল্ট-ইন ফাংশন রয়েছে, যা ব্যবহারকারীদের জন্য প্রয়োজনীয় কাজগুলি সহায়ক করে। এই ফাংশনগুলি একটি স্পেসিফিক কাজ সম্পাদন করে এবং নামের মাধ্যমে সূচিত হয়। পিএইচপি-তে এই বিশেষ নীতি অধিক সুবিধাজনক এবং প্রোগ্রামিং দ্বিতীয়বিজ্ঞ করার জন্য সাহায্য করে, যা প্রোগ্রামিং শিখা সহজ করে।

সংক্ষেপে বলা যায় যে, পিএইচপি একটি সার্ভার-সাইড স্ক্রিপ্টিং ভাষা যার ফাংশনের সুপারিশ ব্যবহারকারীদের জন্য কাজগুলি সহজ করে, এবং এটির বিল্ট-ইন ফাংশনগুলি প্রোগ্রামিং করাকে অনেক সহজ করে।

## ফাংশন তৈরি করা

ফাংশন তৈরি করার জন্য `function` কিওয়ার্ড ব্যবহার করতে হয়। এরপর ফাংশনের নাম এবং এর প্যারামিটার লিখতে হয়। ফাংশনের নাম
লিখার সময় নামের মাঝে কোন স্পেস ব্যবহার করা যাবে না। ফাংশনের নাম লিখার পর ১ম বন্ধনী বা ব্র্যাকেট '()' নিতে হয়, এই বন্ধনী বা ব্রাকেটের ভিতরে ফাংশনের প্যারামিটার লিখতে হয়।

ফাংশনের প্যারামিটার লিখার পর ২য় বন্ধনী বা ব্র্যাকেট '{}' নিতে হয়, এই বন্ধনী বা ব্রাকেটের ভিতরে ফাংশনের বডি লিখতে হয়। ফাংশনের বডির মধ্যে আপনি প্রয়োজনীয় যেকোনো কিছু লিখতে পারেন। বডির ভিতরে সাধারণ লেখা ছাড়াও বিভিন্ন লজিক এর মাধ্যমে যে কোন ধরণের প্রবলেম সলভিং করতে পারবেন।

**ফাংশন তৈরির সিনট্যাক্স হচ্ছে**

```php
function functionName() {
    // code to be executed
}
```

**আসুন একটি উদাহরণ দেখি**

```php
function hello() {
    echo "Hello World!";
}

hello(); // call the function
```

আউটপুট:

```php
Hello World!
```

## PHP Function Arguments

ফাংশনের মধ্যে আপনি প্যারামিটার পাঠাতে পারেন। প্যারামিটার হচ্ছে ফাংশনের মধ্যে ভ্যালু পাঠানোর একটি মাধ্যম বা বাহক। আপনি যদি ফাংশনের মধ্যে প্যারামিটার পাঠাতে চান তাহলে ফাংশনের নাম লিখার পর ১ম বন্ধনী বা ব্র্যাকেট '()' নিতে হয় যেখানে প্যারামিটার লিখতে হয়। প্যারামিটার লিখার সময় স্পেস ব্যবহার করা যাবে না। এখানে এক বা একাধিক প্যারামিটার লিখা যায়। একাধিক প্যারামিটার লিখার ক্ষেত্রে, দুটি প্যারামিটারে মাঝে কমা ',' দিতে হয়। প্যারামিটার লিখার পর অর্থাৎ ১ম বন্ধনীর পরে, ২য় বন্ধনী বা ব্র্যাকেট দিতে হয়, যার ভিতরে ফাংশনের বডি লিখতে হয়। ফাংশনের বডির মধ্যে আপনি প্রয়োজনীয় যেকোনো কিছু লিখতে পারেন। বডির ভিতরে সাধারণ লেখা ছাড়াও বিভিন্ন লজিক এর মাধ্যমে যে কোন ধরণের প্রবলেম সলভিং করতে পারবেন।

এবং, আপনি ইনপুট ডেটা বা মান প্রদানের জন্য ফাংশনের মধ্যে আর্গুমেন্ট পাঠাতে পারেন। আর্গুমেন্ট হল মান বা ভেরিয়েবল যা একটি ফাংশনে পাস করা হয় যখন এটি কল করা হয় এবং সেগুলি নির্দিষ্ট কাজ সম্পাদন করতে ফাংশনের মধ্যে ব্যবহার করা যেতে পারে।

**ফাংশনের প্যারামিটার লিখার সিনট্যাক্স হচ্ছে**

```php
function functionName($parameter1, $parameter2, $parameter3) {
    // code to be executed
}
```

**আসুন একটি উদাহরণ দেখি**

```php
function sum($num1, $num2) { // two parameters
    $total = $num1 + $num2;
    echo "Sum of the two numbers $num1 and $num2 is : $total";
}

sum(10, 20); // argument values passed
```

আউটপুট:

```php
Sum of the two numbers 10 and 20 is : 30
```

**আরেকটি উদাহরণ**

```php
function familyName($fname) {
  echo "$fname Refsnes.<br>";
}

familyName("Jani");
familyName("Hege");
familyName("Stale");
familyName("Kai Jim");
familyName("Borge");
```

আউটপুট:

```php
Jani Refsnes.
Hege Refsnes.
Stale Refsnes.
Kai Jim Refsnes.
Borge Refsnes.
```

আরেকটি উদাহরণ দেখিঃ

```php
function familyName($fname, $year) {
  echo "$fname Refsnes. Born in $year <br>";
}

familyName("Hege", "1975");
familyName("Stale", "1978");
familyName("Kai Jim", "1983");
```

আউটপুট:

```php
Hege Refsnes. Born in 1975
Stale Refsnes. Born in 1978
Kai Jim Refsnes. Born in 1983
```

## Default Argument Value

আপনি চাইলে ফাংশনের প‍্যারামিটারের ডিফল্ট ভ‍্যালু সেট করে রাখতে পারবেন। 

```php
function makecoffee($type = "cappuccino")
{
    return "Making a cup of $type.\n";
}
echo makecoffee();
echo makecoffee(null);
echo makecoffee("espresso");
```

আউটপুট:

```php
Making a cup of cappuccino.
Making a cup of .
Making a cup of espresso.
```

## Argument type

আমরা যদি চাই তাহলে আমাদের যে Argument গুলো ফাংশনে ব‍্যবহার করি সেগুলোর টাইপ আমরা সেট করে দিতে পারি

```php
function addNumbers(int $a, int $b) {
  return $a + $b;
}
echo addNumbers(5, "5 days");
// since strict is NOT enabled "5 days" is changed to int(5), and it will return 10
```

আউটপুট:

```php
10
```

```php
function makecoffee($types = array("cappuccino"), $coffeeMaker = NULL)
{
    $device = is_null($coffeeMaker) ? "hands" : $coffeeMaker;
    return "Making a cup of ".join(", ", $types)." with $device.\n";
}
echo makecoffee();
echo makecoffee(array("cappuccino", "lavazza"), "teapot");
```

আউটপুট:

```php
Making a cup of cappuccino with hands.
Making a cup of cappuccino, lavazza with teapot.
```
এখানে join একটি অ্যারের উপাদান থেকে একটি স্ট্রিং প্রদান করে।

```php
$a = [ 'a', 'b','c'];

echo join("=", $a);
```

আউটপুট:

```php
a=b=c
```

## PHP Functions - Returning values

একটি ফাংশনের মান ফেরত দিতে রিটার্ন কিওয়ার্ড ব‍্যবহার করা হয়। 

```php
function sum(int $x, int $y) {
  $z = $x + $y;
  return $z;
}

echo "5 + 10 = " . sum(5, 10) . "<br>";
echo "7 + 13 = " . sum(7, 13) . "<br>";
echo "2 + 4 = " . sum(2, 4);
```

আউটপুট:

```php
5 + 10 = 15
7 + 13 = 20
2 + 4 = 6
```

## PHP Return Type Declarations

```php
function addNumbers(float $a, float $b) : float 
{
  return $a + $b;
}
echo addNumbers(1.2, 5.2);
```

আউটপুট:

```php
6.4
```

**আরেকটি উদাহরণ**

```php
function addNumbers(float $a, float $b) : int {
  return (int)($a + $b);
}
echo addNumbers(1.2, 5.2);
```

আউটপুট:

```php
6
```

## Passing Arguments by Reference

```php
function add_five(&$value) {
  $value += 5;
}

$num = 2;
add_five($num);
echo $num;
```

আউটপুট:


```php
7
```

## আলাদা ফাইল তৈরি করা

আমরা চাইলে ফাংশনগুলো রি-ইউজ করবার জন‍্য আলাদা একটা ফাইল তৈরি করে ব‍্যবহার করতে পারি। আসলে ফাংশনের জন্য আলাদা পেজ ব্যবহার করার যুক্তিযুক্ত কিছু কারন রয়েছে। ফাংশনগুলো বিক্ষিপ্তভাবে থাকলে, বারবার ব্যবহার করতে গেলে বিভিন্ন সোর্স পাথ দিয়ে কল করাটা জটিল পর্যায়ে থাকে। ফাংশনগুলো পরবর্তীতে আরও ডাইনামিক করার জন্য আলাদাভাবে একটি পেজে বা একই অবস্থানে রাখলে সহজেই খুজে পাওয়া যায়।

`functions.php`
```php
<?php

// sum

function sum($a, $b) {
  return $a + $b;
}
```

`index.php`

```php
<?php

require_once 'functions.php';

echo sum(1, 2); // 3
```

## আনলিমিটেড আর্গুমেন্ট পাস করা

আপনি চাইলে ফাংশনে আনলিমিটেড আর্গুমেন্ট পাস করতে পারেন। 

```php
function sum(...$numbers) {
  $total = 0;
  foreach ($numbers as $n) {
    $total += $n;
  }
  return $total;
}

echo sum(1, 2, 3, 4, 5); // 15
```

## একটা বড় ফাংশনকে ছোট ছোট ফাংশনে ভাগ করা

আপনি চাইলে একটা বড় ফাংশনকে ছোট ছোট ফাংশনে ভাগ করতে পারেন। 

```php
function sum(...$numbers) {
  $total = 0;
  foreach ($numbers as $n) {
    $total += $n;
  }
  return $total;
}

function avg(...$numbers) {
  $total = sum(...$numbers);
  return $total / count($numbers);
}

echo avg(1, 2, 3, 4, 5); // 3
```

## ফাংশনের মধ্যে ফাংশন ব্যবহার করা

আপনি চাইলে ফাংশনের মধ্যে ফাংশন ব্যবহার করতে পারেন। 

```php

function sum(...$numbers) {
  $total = 0;
  foreach ($numbers as $n) {
    $total += $n;
  }
  return $total;
}

function avg(...$numbers) {
  $total = sum(...$numbers);
  return $total / count($numbers);
}

function avg_sum(...$numbers) {
  $average = avg(...$numbers);
  $total = sum(...$numbers);
  return "Average: $average, Sum: $total";
}

echo avg_sum(1, 2, 3, 4, 5); // Average: 3, Sum: 15
```

## Recursive Function

কোন ফাংশন যদি নিজে নিজে কল করে তাকে রিকার্সিভ ফাংশন বলে।

```php
function number($n)
{
    echo $n ."\n";
    
    $n++;
    
    number($n);
}

number(1);
```

```php
function factorial($n) {
  if($n <= 1) {
    return 1;
  }
  else {
    return $n * factorial($n - 1);
  }
}

echo factorial(5); // 120
```

## Scope and Global Variables

প্রোগ্রামিং-এ ভ্যারিয়েবলগুলোর অবস্থান কোথায় হবে তা নির্ধারণের জন্য "স্কোপ" ব্যবহৃত হয়। ফাংশনের মধ্যে ডিক্লেয়ার করা ভ্যারিয়েবলগুলো ফাংশনের বাইরে ব্যবহার করা যায় না। এই ধরনের ভ্যারিয়েবলগুলোকে লোকাল স্কোপ বা লোকাল ভ্যারিয়েবল বলে। আর ফাংশনের বাইরে ডিক্লেয়ার করা ভ্যারিয়েবলগুলোকে গ্লোবাল স্কোপ বা গ্লোবাল ভ্যারিয়েবল বলে।

```php
$x = 5; // global scope

function myTest() {
  // using x inside this function will generate an error
  echo "<p>Variable x inside function is: $x</p>";
}

myTest();

echo "<p>Variable x outside function is: $x</p>";
```

আউটপুট:

```php
Variable x inside function is:
Variable x outside function is: 5
```

## The global Keyword

আপনি চাইলে ফাংশনের মধ্যে গ্লোবাল ভ্যারিয়েবল ব্যবহার করতে পারেন। এটি করার জন‍্য `global` কিওয়ার্ড ব্যবহার করতে হয়।

```php
$x = 5;
$y = 10;

function myTest() {
  global $x, $y;
  $y = $x + $y;
}

myTest();

echo $y; // outputs 15
```

## The static Keyword

আপনি চাইলে ফাংশনের মধ্যে স্ট্যাটিক ভ্যারিয়েবল ব্যবহার করতে পারেন। এটি করার জন‍্য `static` কিওয়ার্ড ব্যবহার করতে হয়।

```php
function myTest() {
  static $x = 0;
  echo $x;
  $x++;
}

myTest();

myTest();

myTest();
```

আউটপুট:

```php
0
1
2
```
