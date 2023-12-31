# পিএইচপি বেসিক কোর্স

## printf() ফাংশন

পিএইচপিতে আমরা যদি কোন ভ‍্যালু প্রিন্ট করতে চাই তাহলে আমরা একটা ফাংশন ব্যবহার করি। এই ফাংশনের নাম printf()। এই ফাংশনের
কাজ হচ্ছে আমরা যে ভ‍্যালু প্রিন্ট করতে চাই তাকে প্রিন্ট করে দেবে। এই ফাংশনের কাজ করার জন‍্য আমাদের কিছু কিছু কমান্ড
ব্যবহার করতে হবে। এই কমান্ডগুলো হচ্ছে-

- %s - String
- %d - Integer
- %f - Float (decimal numbers)
- %b - Binary
- %o - Octal

আরো বিস্তারিত জানতে [php.net](https://www.php.net/manual/en/function.printf) এ গিয়ে সার্চ করে দেখতে পারেন।

**Example #1 printf(): various examples**

```php
<?php
$number = 9;
$str = "Beijing";
$format = 'There are %d million bicycles in %s.';
printf($format, $number, $str);
```

আউটপুট:

```
There are 9 million bicycles in Beijing.
```

Example #2 printf(): various examples

```php
<?php
$n =  43951789;
$u = -43951789;
$c = 65; // ASCII 65 is 'A'

// notice the double %%, this prints a literal '%' character
printf("%%b = '%b'\n", $n); // binary representation
printf("%%c = '%c'\n", $c); // print the ascii character, same as chr() function
printf("%%d = '%d'\n", $n); // standard integer representation
printf("%%e = '%e'\n", $n); // scientific notation
printf("%%u = '%u'\n", $n); // unsigned integer representation of a positive integer
printf("%%u = '%u'\n", $u); // unsigned integer representation of a negative integer
printf("%%f = '%f'\n", $n); // floating point representation
printf("%%o = '%o'\n", $n); // octal representation
printf("%%s = '%s'\n", $n); // string representation
printf("%%x = '%x'\n", $n); // hexadecimal representation (lower-case)
printf("%%X = '%X'\n", $n); // hexadecimal representation (upper-case)

printf("%%+d = '%+d'\n", $n); // sign specifier on a positive integer
printf("%%+d = '%+d'\n", $u); // sign specifier on a negative integer
```

আউটপুট:

```
%b = '10100111101010011010101101'
%c = 'A'
%d = '43951789'
%e = '4.39518e+7'
%u = '43951789'
%u = '4251015507'
%f = '43951789.000000'
%o = '247523255'
%s = '43951789'
%x = '29ea6ad'
%X = '29EA6AD'
%+d = '+43951789'
%+d = '-43951789'
```

এখানে আমরা দেখতে পাচ্ছি যে আমরা যদি কোন ভ‍্যালু প্রিন্ট করতে চাই তাহলে আমাদের কিছু কিছু কমান্ড ব্যবহার করতে হবে।
এই কমান্ডগুলো হচ্ছে-

- %d - এই কমান্ডটি দিয়ে আমরা ইন্টিজার ভ‍্যালু প্রিন্ট করতে পারি।
- %s - এই কমান্ডটি দিয়ে আমরা স্ট্রিং ভ‍্যালু প্রিন্ট করতে পারি।
- %f - এই কমান্ডটি দিয়ে আমরা ডেসিমাল নাম্বার প্রিন্ট করতে পারি।
- %b - এই কমান্ডটি দিয়ে আমরা বাইনারি ভ‍্যালু প্রিন্ট করতে পারি।
- %o - এই কমান্ডটি দিয়ে আমরা অক্টাল ভ‍্যালু প্রিন্ট করতে পারি।

আরো বিস্তারিত জানতে [php.net](https://www.php.net/manual/en/function.printf) এ গিয়ে সার্চ করে দেখতে পারেন।

আমরা যদি আরেকটা উদাহরণ দেখিঃ

```php
<?php
$firstName = "Polash";
$lastName = "Mahmud";

printf('My name is %2$s %1$s', $firstName, $lastName);
```

আউটপুট:

```
My name is Mahmud Polash
```

তাহলে আপনি বুঝতে পারছেন আপনি চাইলে ভ‍্যারিয়েবল কোনটা আগে প্রিন্ট করবেন কোনটা পরে প্রিন্ট করবেন তা নির্ধারণ করে দিতে
পারবেন।

## sprintf() ফাংশন

sprintf ফরমেটিং স্ট্রিং কে রিটার্ন করে। এটি printf() ফাংশনের মত কাজ করে তবে এটি প্রিন্ট করে না।

**Example #1 sprintf():**

```php
<?php
$number = 9;
$str = "Beijing";
$format = 'There are %2$d million bicycles in %1$s.';
echo sprintf($format, $str, $number);
```

আউটপুট:

```
There are 9 million bicycles in Beijing.
```

## PHP if...else...elseif Statements

পিএইচপিতে আমরা যদি কোন কিছু চেক করতে চাই তাহলে আমরা কন্ডিশনাল স্টেটমেন্ট (লজিক) ব্যবহার করি।

**PHP - The if Statement**

পিএইচপিতে আমরা যদি কোন কিছু চেক করতে চাই তাহলে আমরা if স্টেটমেন্ট ব্যবহার করি। এই স্টেটমেন্ট এর কাজ হচ্ছে যদি কোন কিছু
সত্য হয় তাহলে এর ভিতরের কোডগুলো রান করবে। আর যদি সত্য না হয় তাহলে এর ভিতরের কোডগুলো রান করবে না।

সিনট্যাক্সঃ

```php
if (condition) {
  code to be executed if condition is true;
}
```

উদাহরণঃ

```php
<?php
$a = 30;
$b = 20;

if ($a > $b) {
  echo "a is greater than b";
}
```

আউটপুট:

```
a is greater than b
```

**PHP - The if...else Statement**

পিএইচপিতে আমরা যদি কোন কিছু চেক করতে চাই তাহলে আমরা if...else স্টেটমেন্ট ব্যবহার করি। এই স্টেটমেন্ট এর কাজ হচ্ছে যদি
কোন কিছু সত্য হয় তাহলে এর ভিতরের কোডগুলো রান করবে। আর যদি সত্য না হয় তাহলে else এর ভিতরের কোডগুলো রান করবে।

সিনট্যাক্সঃ

```php
if (condition) {
  code to be executed if condition is true;
} else {
  code to be executed if condition is false;
}
```

উদাহরণঃ

```php
<?php
$a = 10;
$b = 20;

if ($a > $b) {
  echo "a is greater than b";
} else {
  echo "a is NOT greater than b";
}
```

আউটপুট:

```
a is NOT greater than b
```

**PHP - The if...elseif...else Statement**

পিএইচপিতে আমরা যদি কোন কিছু চেক করতে চাই তাহলে আমরা if...elseif...else স্টেটমেন্ট ব্যবহার করি। এই স্টেটমেন্ট এর কাজ
হচ্ছে যদি কোন কিছু সত্য হয় তাহলে এর ভিতরের কোডগুলো রান করবে। আর যদি সত্য না হয় তাহলে elseif এর ভিতরের কোডগুলো রান
করবে। আর যদি সত্য না হয় তাহলে else এর ভিতরের কোডগুলো রান করবে।

সিনট্যাক্সঃ

```php
if (condition) {
  code to be executed if condition is true;
} elseif (condition) {
  code to be executed if condition is false and elseif condition is true;
} else {
  code to be executed if and elseif both condition is false;
}
```

উদাহরণঃ

```php
<?php
$a = 10;
$b = 20;

if ($a > $b) {
  echo "a is greater than b";
} elseif ($a == $b) {
  echo "a is equal to b";
} else {
  echo "a is NOT greater than b and a is NOT equal to b";
}
```

Alternative syntax for control structures এর ব্যবহার করে আমরা এই কোডটি লিখতে পারি এভাবেঃ

```php
<?php
$a = 10;
$b = 20;

if ($a > $b):
  echo "a is greater than b";
elseif ($a == $b):
    echo "a is equal to b";
else:
    echo "a is NOT greater than b and a is NOT equal to b";
endif;
```

আউটপুট:

```
a is NOT greater than b and a is NOT equal to b
```

আরো কিছু উদাহরণঃ

```php
<?php $a = 5; ?>
<?php if ($a == 5): ?>
A is equal to 5
<?php endif; ?>
```

আউটপুট:

```
A is equal to 5
```

```php
<?php
$a = 10;
if ($a == 5):
    echo "a equals 5";
    echo "...";
elseif ($a == 6):
    echo "a equals 6";
    echo "!!!";
else:
    echo "a is neither 5 nor 6";
endif;
```

আউটপুট:

```
a is neither 5 nor 6
```

**PHP - ternary Operator**

পিএইচপিতে আমরা যদি কোন কিছু চেক করতে চাই তাহলে আমরা ternary অপারেটর ব‍্যবহার করতে পারি। এটা দিয়ে অনেক শর্টকার্টে
কন্ডিশন এপ্লাই করা যায়।

সিনট্যাক্সঃ

```php
(condition) ? code to be executed if condition is true : code to be executed if condition is false;
```

উদাহরণঃ

```php
<?php
$a = 10;
$b = 20;

echo ($a > $b) ? "a is greater than b" : "a is NOT greater than b";
```

আউটপুট:

```
a is NOT greater than b
```

## PHP switch Statement

সুইচ স্টেটমেন্ট বিভিন্ন অবস্থার উপর ভিত্তি করে বিভিন্ন কাজকর্ম করতে ব্যবহৃত হয়।

সিনট্যাক্সঃ

```php
switch (n) {
  case label1:
    code to be executed if n=label1;
    break;
  case label2:
    code to be executed if n=label2;
    break;
  case label3:
    code to be executed if n=label3;
    break;
    ...
  default:
    code to be executed if n is different from all labels;
}
```

উদাহরণঃ

```php
<?php
$favcolor = "red";

switch ($favcolor) {
  case "red":
    echo "Your favorite color is red!";
    break;
  case "blue":
    echo "Your favorite color is blue!";
    break;
  case "green":
    echo "Your favorite color is green!";
    break;
  default:
    echo "Your favorite color is neither red, blue, nor green!";
}
```

আউটপুট:

```
Your favorite color is red!
```

## PHP Loops

পিএইচপিতে লুপ ব্যবহার করে আমরা একই কাজকে বারবার করতে পারি। পিএইচপিতে লুপ ব্যবহার করার জন‍্য আমাদের কিছু লুপ স্টেটমেন্ট
ব্যবহার করতে হবে। এই স্টেটমেন্টগুলো হচ্ছেঃ

- while - এই স্টেটমেন্টটি দিয়ে আমরা একটি কন্ডিশন চেক করতে পারি। যতক্ষণ কন্ডিশনটি সত্য ততক্ষণ লুপ চলবে।
- do...while - এই স্টেটমেন্টটি দিয়ে আমরা একটি কন্ডিশন চেক করতে পারি। যতক্ষণ কন্ডিশনটি সত্য ততক্ষণ লুপ চলবে।
- for - এই স্টেটমেন্টটি দিয়ে আমরা একটি কন্ডিশন চেক করতে পারি। যতক্ষণ কন্ডিশনটি সত্য ততক্ষণ লুপ চলবে।
- foreach - এই স্টেটমেন্টটি দিয়ে আমরা একটি কন্ডিশন চেক করতে পারি। যতক্ষণ কন্ডিশনটি সত্য ততক্ষণ লুপ চলবে।

আরো বিস্তারিত জানতে [php.net](https://www.php.net/manual/en/language.control-structures.php) এ গিয়ে সার্চ করে দেখতে
পারেন।

## PHP - The while Loop

পিএইচপিতে আমরা যদি কোন কিছু বারবার করতে চাই তাহলে আমরা while লুপ ব্যবহার করি। এই লুপ এর কাজ হচ্ছে যতক্ষণ কন্ডিশনটি সত্য
ততক্ষণ লুপ চলবে।

সিনট্যাক্সঃ

```php
while (condition is true) {
  code to be executed;
}
```

```php
<?php
while (condition is true):
  code to be executed;
endwhile;
```

উদাহরণঃ

```php
<?php
$x = 1;

while($x <= 5) {
  echo "The number is: $x" . PHP_EOL;
  $x++;
}
```

```php
<?php
$x = 1;

while($x <= 5):
  echo "The number is: $x" . PHP_EOL;
  $x++;
endwhile;
```

আউটপুট:

```
The number is: 1
The number is: 2
The number is: 3
The number is: 4
The number is: 5
```

## PHP - The do...while Loop

পিএইচপিতে আমরা যদি কোন কিছু বারবার করতে চাই তাহলে আমরা do...while লুপ ব্যবহার করি। এই লুপ এর কাজ হচ্ছে যতক্ষণ কন্ডিশনটি
সত্য ততক্ষণ লুপ চলবে।

সিনট্যাক্সঃ

```php
do {
  code to be executed;
} while (condition is true);
```

উদাহরণঃ

```php
<?php
$x = 1;

do {
  echo "The number is: $x" . PHP_EOL;
  $x++;
} while ($x <= 5);
```

আউটপুট:

```
The number is: 1
The number is: 2
The number is: 3
The number is: 4
The number is: 5
```

উদাহরণঃ

```php
<?php
$i = 0;
do {
    echo $i;
} while ($i > 0);
```

আউটপুট:

```
0
```

উদাহরণঃ

```php
<?php
$i = 3;
do {
    if ($i < 5) {
        echo "i is not big enough";
        break;
    }
    $i *= $factor;
    if ($i < $minimum_limit) {
        break;
    }
   echo "i is ok";

    /* process i */

} while ($i > 0);
```

আউটপুট:

```
i is not big enough
```

## PHP - The for Loop

পিএইচপিতে আমরা যদি কোন কিছু বারবার করতে চাই তাহলে আমরা for লুপ ব্যবহার করি। এই লুপ এর কাজ হচ্ছে যতক্ষণ কন্ডিশনটি সত্য
ততক্ষণ লুপ চলবে।

সিনট্যাক্সঃ

```php
for (init counter; test counter; increment counter) {
  code to be executed for each iteration;
}
```

উদাহরণঃ

```php
<?php
for ($x = 0; $x <= 5; $x++) {
  echo "The number is: $x" . PHP_EOL;
}
```

আউটপুট:

```
The number is: 0
The number is: 1
The number is: 2
The number is: 3
The number is: 4
The number is: 5
```

## PHP - The foreach Loop

পিএইচপিতে আমরা যদি কোন কিছু বারবার করতে চাই তাহলে আমরা foreach লুপ ব্যবহার করি। এই লুপ এর কাজ হচ্ছে যতক্ষণ কন্ডিশনটি
সত্য ততক্ষণ লুপ চলবে।

সিনট্যাক্সঃ

```php
foreach ($array as $value) {
  code to be executed;
}
```
foreach এ array সাধারনত দুই ভাবে লেখা যায়
```php
$colors = array("red", "green", "blue", "yellow");
$colors = ["red", "green", "blue", "yellow"];
```

উদাহরণঃ

```php
<?php
$colors = array("red", "green", "blue", "yellow");  

foreach ($colors as $value) {
  echo "$value" . PHP_EOL;
}
```

আউটপুট:

```
red
green
blue
yellow
```

উদাহরণঃ

```php
<?php
$arr = array("one", "two", "three");
foreach ($arr as $key => $value) {
    echo "Key: $key; Value: $value\n";
}
```

আউটপুট:

```
Key: 0; Value: one
Key: 1; Value: two
Key: 2; Value: three
```

## break and continue

পিএইচপিতে আমরা যদি কোন লুপ থেকে বের হতে চাই তাহলে আমরা break ব্যবহার করি। আর যদি কোন লুপ এর কিছু কোড স্কিপ করতে চাই
তাহলে আমরা continue ব্যবহার করি।

উদাহরণঃ

```php
<?php
for ($i = 0; $i < 5; $i++) {
    if ($i == 3) {
        break; /* Loop is end */
    }
    echo $i . PHP_EOL;
}
```

আউটপুট:

```
0
1
2
```

উদাহরণঃ

```php
<?php
for ($i = 0; $i < 5; $i++) {
    if ($i == 3) {
        continue; /* Loop is continue */
    }
    echo $i . PHP_EOL;
}
```

আউটপুট:

```
0
1
2
4
```

## return

পিএইচপিতে আমরা যদি কোন ফাংশন থেকে কোন ভ‍্যালু রিটার্ন করতে চাই তাহলে আমরা return ব্যবহার করি।

উদাহরণঃ

```php
<?php
function sum($x, $y) {
    $z = $x + $y;
    return $z;
}

echo "5 + 10 = " . sum(5, 10) . PHP_EOL;
echo "7 + 13 = " . sum(7, 13) . PHP_EOL;
echo "2 + 4 = " . sum(2, 4);
```

আউটপুট:

```
5 + 10 = 15
7 + 13 = 20
2 + 4 = 6
```

## require and include

পিএইচপিতে আমরা যদি কোন ফাইল থেকে কোন কিছু অন্তর্ভুক্ত করতে চাই তাহলে আমরা require ব্যবহার করি, require ব‍্যবহার করলে সেই
ফাইলটা যদি মিসিং থাকে তাহলে error দিবে পরবর্তি কোন রান হবে না। আর যদি কোন ফাইল থেকে কোন কিছু অন্তর্ভুক্ত করতে চাই তাহলে
আমরা include ব্যবহার করি। এটা ব‍্যবহার করার পর যদি ফাইল মিসিং থাকে তাহলে error দিবে কিন্তু পরবর্তি কোড রান হবে।

উদাহরণঃ

```php
<?php
require 'header.php';
echo "Some text";
require 'footer.php';
```

উদাহরণঃ

```php
<?php
include 'header.php';
echo "Some text";
include 'footer.php';
```

## require_once and include_once

পিএইচপিতে আমরা যদি কোন ফাইল থেকে কোন কিছু অন্তর্ভুক্ত করতে চাই তাহলে আমরা require_once ব্যবহার করি, require_once ব‍্যবহার
করলে সেই ফাইলটা যদি মিসিং থাকে তাহলে error দিবে পরবর্তি কোন রান হবে না। আর যদি কোন ফাইল থেকে কোন কিছু অন্তর্ভুক্ত করতে চাই
তাহলে আমরা include_once ব্যবহার করি। এটা ব‍্যবহার করার পর যদি ফাইল মিসিং থাকে তাহলে error দিবে কিন্তু পরবর্তি কোড রান
হবে।

উদাহরণঃ

```php
<?php
require_once 'header.php';
echo "Some text";
require_once 'footer.php';
```

উদাহরণঃ

```php
<?php
include_once 'header.php';
echo "Some text";
include_once 'footer.php';
```







[Edit This Page](https://github.com/polashmahmud/php/edit/main/docs/class-03.md)