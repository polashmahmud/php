# পিএইচপি অপারেশন এবং এক্সপ্রেশন

PHP তার ইন্টার্নাল সিস্টেমে কিভাবে ডাটা স্টোর করে, কি কি ধরণের ডাটা স্টোর করে, কি জাতীয় কাজ আমরা সেই ডাটাগুলো দিয়ে করতে পারি, কিভাবে করতে পারি ইত্যাদি বিষয় নিয়ে প্রথম ক্লাসে আমরা জেনেছি।

দ্বিতীয় ক্লাসে আমরা জানব, PHP তে কোন কাজ (যেমন: যোগ, বিয়োগ, গুণ, ভাগ, ভাগশেষ বের করাসহ যাবতীয় ম্যাথমেটিকাল অপারেশন, এক্সপ্রেশন ইত্যাদি) করতে হলে কি কি অপারেটর ব্যবহার করার প্রয়োজন পড়ে। সেগুলো ব্যবহারের প্রক্রিয়া কি কি এবং কিভাবে।

চলুন, প্রথমেই আমরা ব্যবহার প্রক্রিয়া নিয়ে আলোচনা করি। যদিও কাজগুলো করতে কি কি অপারেটর লাগবে সে বিষয়ে আগে আলোচনা করা উচিত ছিল। তবে *practical learning* এর আসলে কোন বিকল্প নাই। এজন্য আমরা ব্যবহার প্রক্রিয়া দিয়েই আলোচনা শুরু করছি।

## ম্যাথমেটিকাল অপারেশন{#mathematical-operations}

### Addition (যোগ করা)

PHP তে আমরা খুব সহজেই যোগ করতে পারি। ধরেন আপনার একটা ভ‍্যারিয়েবল আছে $number = 13; এখন আপনি এর সাথে 12 যোগ করতে
চাচ্ছেন। তাহলে আপনি নিচের মতো করে করতে পারেন।

```php
<?php

$number = 20;
$number = $number + 10;

echo $number; //output: 30
```

এছাড়াও আপনি আরেক ভাবে করতে পারেন

```php
<?php

$number = 20;
$number += 10;

echo $number; //output: 25
```

আপনি যদি একটা বিষয় একটু খেয়াল করেন, নিচের কোডটি দেখেন

```php
<?php

$number = 20;
$number + 10;

echo $number; //output: 20
```

এখানে আমরা ২ নম্বর লাইনে $number এর সাথে ১০ যোগ করেছি। এটা কিন্তু ঠিকই যোগ হয়েছে। কিন্তু আমরা এটাকে কোথাও এসাইন করি
নাই। তাই যেহেতু এসাইন করি নাই তাই এর আউটপুট দেখাচ্ছে 20। নিচের কোডটি দেখলে বিষয়টি আরো ক্লিয়ার হবে আশা করছি

```php
<?php

$number = 20;
$number2 = $number + 10;

echo $number, "\n", $number2; // output: 20, 30
```

## PHP Math (বিয়োগ করা)

PHP তে আমরা খুব সহজেই বিয়োগ করতে পারি। ধরেন আপনার একটা ভ‍্যারিয়েবল আছে $number = 20; এখন আপনি এর সাথে 10 বিয়োগ করতে
চাচ্ছেন। তাহলে আপনি নিচের মতো করে করতে পারেন।

```php
<?php

$number = 20;
$number = $number - 10;

echo $number; //output: 10
```

এছাড়াও আপনি আরেক ভাবে করতে পারেন

```php
<?php

$number = 20;
$number -= 10;

echo $number; //output: 10
```

আপনি যদি একটা বিষয় একটু খেয়াল করেন, নিচের কোডটি দেখেন

```php
<?php

$number = 20;
$number - 10;

echo $number; //output: 20
```

এখানে আমরা ২ নম্বর লাইনে $number এর সাথে ১০ বিয়োগ করেছি। এটা কিন্তু ঠিকই বিয়োগ হয়েছে। কিন্তু আমরা এটাকে কোথাও এসাইন
করি নাই। তাই যেহেতু এসাইন করি নাই তাই এর আউটপুট দেখাচ্ছে 20। নিচের কোডটি দেখলে বিষয়টি আরো ক্লিয়ার হবে আশা করছি

```php
<?php

$number = 20;
$number2 = $number - 10;

echo $number, "\n", $number2; // output: 20, 10
```

## PHP Math (গুন করা)

PHP তে আমরা খুব সহজেই গুন করতে পারি। ধরেন আপনার একটা ভ‍্যারিয়েবল আছে $number = 20; এখন আপনি এর সাথে 10 গুন করতে চাচ্ছেন।
তাহলে আপনি নিচের মতো করে করতে পারেন।

```php
<?php

$number = 20;
$number = $number * 10;

echo $number; //output: 200
```

এছাড়াও আপনি আরেক ভাবে করতে পারেন

```php
<?php

$number = 20;
$number *= 10;

echo $number; //output: 200
```

আপনি যদি একটা বিষয় একটু খেয়াল করেন, নিচের কোডটি দেখেন

```php
<?php

$number = 20;
$number * 10;

echo $number; //output: 20
```

এখানে আমরা ২ নম্বর লাইনে $number এর সাথে ১০ গুন করেছি। এটা কিন্তু ঠিকই গুন হয়েছে। কিন্তু আমরা এটাকে কোথাও এসাইন করি
নাই। তাই যেহেতু এসাইন করি নাই তাই এর আউটপুট দেখাচ্ছে 20। নিচের কোডটি দেখলে বিষয়টি আরো ক্লিয়ার হবে আশা করছি

```php
<?php

$number = 20;
$number2 = $number * 10;

echo $number, "\n", $number2; // output: 20, 200
```

## PHP Math (ভাগ করা)

PHP তে আমরা খুব সহজেই ভাগ করতে পারি। ধরেন আপনার একটা ভ‍্যারিয়েবল আছে $number = 20; এখন আপনি এর সাথে 10 ভাগ করতে চাচ্ছেন।
তাহলে আপনি নিচের মতো করে করতে পারেন।

```php
<?php

$number = 20;
$number = $number / 10;

echo $number; //output: 2
```

এছাড়াও আপনি আরেক ভাবে করতে পারেন

```php
<?php

$number = 20;
$number /= 10;

echo $number; //output: 2
```

আপনি যদি একটা বিষয় একটু খেয়াল করেন, নিচের কোডটি দেখেন

```php
<?php

$number = 20;
$number / 10;

echo $number; //output: 20
```

এখানে আমরা ২ নম্বর লাইনে $number এর সাথে ১০ ভাগ করেছি। এটা কিন্তু ঠিকই ভাগ হয়েছে। কিন্তু আমরা এটাকে কোথাও এসাইন করি
নাই। তাই যেহেতু এসাইন করি নাই তাই এর আউটপুট দেখাচ্ছে 20। নিচের কোডটি দেখলে বিষয়টি আরো ক্লিয়ার হবে আশা করছি

```php
<?php

$number = 20;
$number2 = $number / 10;

echo $number, "\n", $number2; // output: 20, 2
```

## PHP Math (ভাগশেষ বাহির করা)

পিএইচপিতে ভাগশেষ বাহির করবার জন‍্য % (মডুলাস) ব‍্যবহার করা হয়

PHP তে খুব সহজেই ভাগশেষ বাহির করা যায়। ধরেন আপনার একটা ভ‍্যারিয়েবল আছে $number = 20; এখন আপনি একে 3 দিয়ে ভাগ করতে
চাচ্ছেন, এবং ভাগ দেবার পর যে ভাগশেষ থাকবে তা বাহির করতে চাচ্ছেন। তাহলে % এটা ব‍্যবহার করা হয়।

```php
<?php

$number = 20;
$number = $number % 3;

echo $number; //output: 2
```

এছাড়াও আপনি আরেক ভাবে করতে পারেন

```php
<?php

$number = 20;
$number /= 3;

echo $number; //output: 2
```

আপনি যদি একটা বিষয় একটু খেয়াল করেন, নিচের কোডটি দেখেন

```php
<?php

$number = 20;
$number % 10;

echo $number; //output: 20
```

এখানে আমরা ২ নম্বর লাইনে $number এর সাথে ১০ ভাগশেষ বাহির করবার জন‍্য ব‍্যবহার করেছি। এটা কিন্তু ঠিকই ভাগশেষ বাহির করেছে।
কিন্তু আমরা এটাকে কোথাও এসাইন করি নাই। তাই যেহেতু এসাইন করি নাই তাই এর আউটপুট দেখাচ্ছে 20। নিচের কোডটি দেখলে বিষয়টি
আরো ক্লিয়ার হবে আশা করছি

```php
<?php

$number = 20;
$number2 = $number % 10;

echo $number, "\n", $number2; // output: 20, 0
```

## Arithmetic Operators

এতক্ষণ পর্যন্ত আমরা যা যা করলাম এগুলো সবগুলোকে বলে Arithmetic operators (এরিথমেটিক অপারেটর- গানিতিক অপারেটর). এগুলো
দিয়ে আমরা যা যা করতে পারি তা যদি এক নজরে দেখি তাহলে হচ্ছে-

| Example  | Name           | Result                                           |
|----------|----------------|--------------------------------------------------|
| +$a      | Identity       | Conversion of $a to int or float as appropriate. |
| -$a      | Negation       | Opposite of $a.                                  |
| $a + $b  | Addition       | Sum of $a and $b.                                |
| $a - $b  | Subtraction    | Difference of $a and $b.                         |
| $a * $b  | Multiplication | Product of $a and $b.                            |
| $a / $b  | Division       | Quotient of $a and $b.                           |
| $a % $b  | Modulo         | Remainder of $a divided by $b.                   |
| $a ** $b | Exponentiation | Result of raising $a to the $b'th power.         |

## Increment/decrement Operators

PHP তে কোন ভ‍্যালুর মান বৃদ্ধি করবার জন‍্য ++ চিহ্ন ব‍্যবহার করা হয় আবার কমানোর জন‍্য -- চিহ্ন ব‍্যবহার করা হয়।
এগুলোকেই Increment/decrement operators বলে

| Example | Name           | Effect                                 |
|---------|----------------|----------------------------------------|
| ++$a    | Pre-increment  | Increments $a by one, then returns $a. |
| $a++    | Post-increment | Returns $a, then increments $a by one. |
| --$a    | Pre-decrement  | Decrements $a by one, then returns $a. |
| $a--    | Post-decrement | Returns $a, then decrements $a by one. |

কিছু উদাহরনঃ

```php
<?php
echo 'Post-increment:', PHP_EOL;
$a = 5;
var_dump($a++);
var_dump($a);

echo 'Pre-increment:', PHP_EOL;
$a = 5;
var_dump(++$a);
var_dump($a);

echo 'Post-decrement:', PHP_EOL;
$a = 5;
var_dump($a--);
var_dump($a);

echo 'Pre-decrement:', PHP_EOL;
$a = 5;
var_dump(--$a);
var_dump($a);
```

PERL string increment example

```php
<?php
echo '== Alphabetic strings ==' . PHP_EOL;
$s = 'W';
for ($n=0; $n<6; $n++) {
    echo ++$s . PHP_EOL;
}
// Alphanumeric strings behave differently
echo '== Alphanumeric strings ==' . PHP_EOL;
$d = 'A8';
for ($n=0; $n<6; $n++) {
    echo ++$d . PHP_EOL;
}
$d = 'A08';
for ($n=0; $n<6; $n++) {
    echo ++$d . PHP_EOL;
}
```

The above example will output:

```bash
== Alphabetic strings ==
X
Y
Z
AA
AB
AC
== Alphanumeric strings ==
A9
B0
B1
B2
B3
B4
A09
A10
A11
A12
A13
A14
```

## PHP Math

পিএইচপিতে বিল্টইন কিছু ফাংশন আছে গানিতিক সমস‍্যা সমাধান করবার জন‍্য। আসুন তাদের সাথে পরিচিত হই।

### PHP pi() Function

এটা দিয়ে আপনি পাই এর মান বাহির করতে পারেন

```php
<?php
    echo(pi()); // returns 3.1415926535898
```

### PHP pow() Function

এটা দিয়ে পাওয়ারের মান বাহির করতে পারবেন

```php
<?php
    echo(pow(4,2)); // returns 16
```

### PHP is_finite() Function

এটা দিয়ে আপনি কোনো সংখ্যা ফাইনাইট/সসীম কিনা চেক করতে পারবেন

```php
<?php
    echo(is_finite(2)); // returns 1
    echo(is_finite(log(0))) // returns nothing
```

### PHP is_infinite() Function

এটা দিয়ে আপনি কোনো সংখ্যা ইনফিনিটি/অসীম কিনা চেক করতে পারবেন

```php
<?php
    echo(is_infinite(20)); // returns nothing
    echo(is_infinite(log(0))) // returns 1
```

### PHP is_nan() Function

এটা দিয়ে আপনি কোনো সংখ্যা নট-এ-নাম্বার কিনা চেক করতে পারবেন

```php
<?php
    echo(is_nan(20)); // returns nothing
    echo(is_nan(acos(6))) // returns 1
```

### PHP min() and max() Functions

এটা দিয়ে আপনি অনেকগুলো ভ‍্যালুর মাঝে কোনটা ছোট ভ‍্যালু এবং কোনটা বড় ভ‍্যালু তা বাহির করতে পারবেন

```php
<?php
    echo(min(0, 150, 30, 20, -8, -200));  // returns -200
    echo(max(0, 150, 30, 20, -8, -200));  // returns 150
```

### PHP abs() Function

এই ফাংশনটা দিয়ে আপনি কোন নেগেটিভ ভ‍্যালুকে পজিটিভ ভ‍্যালুতে রূপান্তর করতে পারবেন

```php
<?php
echo(abs(-6.7));  // returns 6.7
```

### PHP sqrt() Function

এই ফাংশন দিয়ে আপনি একটি সংখ‍্যার বর্গমূল বাহির করতে পারবেন।

```php
<?php
echo(sqrt(64));  // returns 8
```

### PHP round() Function

কোন সংখ‍্যাকে রাউন্ড ফিগারে রূপান্তর করতে ব‍্যবহার করা হয়। যেমনঃ ১০.৫ কে ১১ এ রাউন্ড করবে। আবার ১০.৪ কে ১০ এ রাউন্ড করবে।

```php
<?php
echo(round(0.60));  // returns 1
echo(round(0.49));  // returns 0
```

### Random Numbers

এই ফাংশন দিয়ে আমরা রেন্ডম নাম্বার পেয়ে থাকি

```php
<?php
echo(rand());
echo rand(1, 100);
```

## PHP Operator
