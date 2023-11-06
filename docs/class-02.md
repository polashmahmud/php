# পিএইচপি অপারেশন এবং এক্সপ্রেশন

**PHP** তার ইন্টার্নাল সিস্টেমে কিভাবে ডাটা স্টোর করে, কি কি ধরণের ডাটা স্টোর করে, কি জাতীয় কাজ আমরা সেই ডাটাগুলো দিয়ে করতে পারি, কিভাবে করতে পারি ইত্যাদি বিষয় নিয়ে প্রথম ক্লাসে আমরা জেনেছি।

দ্বিতীয় ক্লাসে আমরা জানব, **PHP** তে কোন কাজ (যেমন: যোগ, বিয়োগ, গুণ, ভাগ, ভাগশেষ বের করাসহ যাবতীয় ম্যাথমেটিকাল অপারেশন, এক্সপ্রেশন ইত্যাদি) করতে হলে কি কি অপারেটর ব্যবহার করার প্রয়োজন পড়ে। সেগুলো ব্যবহারের প্রক্রিয়া কি কি এবং কিভাবে।

চলুন, প্রথমেই আমরা ব্যবহার প্রক্রিয়া নিয়ে আলোচনা করি। যদিও কাজগুলো করতে কি কি অপারেটর লাগবে সে বিষয়ে আগে আলোচনা করা উচিত ছিল। তবে *practical learning* এর আসলে কোন বিকল্প নাই। এজন্য আমরা ব্যবহার প্রক্রিয়া দিয়েই আলোচনা শুরু করছি।

## ম্যাথমেটিকাল অপারেশন{#mathematical-operations}

### Addition (যোগ করা){#addition}

**PHP** তে যোগ করা খুবই সহজ। স্কুল জীবনের বেসিক *arithmetic* (পাটিগণিত) অংক করার কথা মনে আছে? PHP তে আমরা সেভাবেই পাটিগণিত অংকগুলো করব।

তাহলে আমরা যোগ অংক কিভাবে করব? আপনার জানা থাকার কথা, যোগ করতে হলে ২টি সংখ্যার মাঝে যোগচিহ্ন `(+)` বা প্লাস সাইন ব্যবহার করতে হয়। **PHP** তেও একই নিয়ম। যোগ করতে হলে প্লাস `(+)` ব্যবহার করতে হবে। এখন **PHP** তে এই যোগ অংক আপনি কয়েকভাবে করতে পারেন।

>সংখ্যার সাথে সংখ্যার যোগ। যেমন:-
>
>```php
><?php
>
>$x = 10 + 10;
>echo $x;    // outputs: 20
>```
>
> সংখ্যা বহনকারী ভ্যারিয়েবলের সাথে ভ্যারিয়েবলের যোগ। যেমন:-
>
>```php
><?php
>
>$a = 10;
>$b = 10;
>$x = $a + $b;
>
>echo $x;    // outputs: 20
>```
>
> এক্সপ্রেশনের মাধ্যমে যোগ। যেমন:-
>
>```php
><?php
>
>$a = 10;
>$b = 10;
>$x = (20 + $a) + $b;
>
>echo $x;    // outputs: 40
>```
>
ধরেন আপনার একটা ভ‍্যারিয়েবল আছে, যেটা দেখতে এমন `$number = 20;` এখন আপনি এটার সাথে 10 যোগ করে ফলাফল এই ভ্যারিয়েবলেই রাখতে চাচ্ছেন। কিভাবে করবেন? তাহলে আপনি নিচের মতো করতে পারেন। এখানে যোগ করা এবং ভ্যালু এসাইন করা একইসাথে হচ্ছে বিধায় এটিকে *addition assignment* বলে। উদাহরণ:-

```php
<?php

$number = 20;
$number = $number + 10;

echo $number;   //outputs: 30
```

আরো সহজ এবং সংক্ষেপে ঐ একই কাজ আপনি *addition assignment operator* দিয়েও করতে পারেন। যেমন:-

```php
<?php

$number = 20;
$number += 10;

echo $number;   //outputs: 30
```

তবে আপনি যদি অপারেশন চালানোর পর তার রেজাল্ট কোথাও এসাইন না করেন, আপনার কোড আউটপুটে কোন পরিবর্তন দেখতে পাবেন না।

```php
<?php

$number = 20;
$number + 10;

echo $number;   //outputs: 20
```

**কেন দেখতে পাবেন না?**

কারণ, যদিও এখানে আপনি `$number` ভ্যারিয়েবলের সাথে `10` যোগ করেছেন এবং রানটাইমে গিয়ে এটা ঠিকই যোগ হয়েছে; কিন্তু এই অপারেশনের রেজাল্ট কোথাও জমা রাখার জন্য আপনি স্বয়ং `$number` ভ্যারিয়েবল বা অন্য কোন *identifier* (variables) এসাইন করেন নাই। ফলে আপনার `$number` ভ্যারিয়েবলের ভ্যালুতে কোন পরিবর্তন ঘটেনি এবং আপনি আউটপুট `20`-ই দেখতে পাচ্ছেন।

**সমাধান কি?**

অপারেশনের রেজাল্ট কোথাও এসাইন করতে হবে। আরো ক্লিয়ার হতে নিচের কোডগুলো দেখুন।

```php
<?php

$number = 20;
$number2 = $number + 10;

echo $number, " ", $number2;    // outputs: 20 30
```

### ‍Subtraction (বিয়োগ করা){#‍subtraction}

**PHP** তে বিয়োগ করাও খুব সহজ। সবকিছু হুবহু যোগ করার মতই। তাই যোগ করার টপিকে যা যা বলা হয়েছে সবকিছুই এখানেও প্রয়োগ হবে। তবে পার্থক্য হল, বিয়োগ করতে বিয়োগচিহ্ন `(-)` বা মাইনাাস অপারেটর ব্যবহার করতে হয়। উদাহরণগুলো দেখুন:—

>```php
><?php
>
> // subtract number from number
>$x = 10 - 5;
>echo $x;    // outputs: 5
>
> // subtract number contanied variable from another
>$a = 10;
>$b = 5;
>$x = $a - $b;
>
>echo $x;    // outputs: 5
>
> // subtract with expression
>$a = 10;
>$b = 10;
>$x = (40 - $a) - $b;
>
>echo $x;    // outputs: 20

*subtraction assignment* এর উদাহরণ:-

```php
<?php

$number = 20;
$number = $number - 10;

echo $number;   //outputs: 10
```

*subtraction assignment operator* এর উদাহরণ:-

```php
<?php

$number = 20;
$number -= 10;

echo $number;   //outputs: 10
```

*not assigned subtraction* *(not getting expected output)* এর উদাহরণ:-

```php
<?php

$number = 20;
$number - 10;

echo $number;   //outputs: 20
```

*assigned subtraction* *(for getting expected output)* এর উদাহরণ:-

```php
<?php

$number = 20;
$number2 = $number - 10;

echo $number, " ", $number2;    // outputs: 20, 10
```

### Multiplication (গুন করা) {#multiplication}

স্বাধারণ অংকের মতই গুণচিহ্ন `(*)` বা *multiplication operator* দিয়ে **PHP** তে গুণ করা খুবই সহজ। বাকি যোগ-বিয়োগের টপিকে যে বিষয়গুলো আমরা আলোচনা করেছি তার সবগুলো এখানেও প্রয়োগ হবে। আমরা উদাহরণ দেখতে পারি।

```php
<?php

// multiply two numbers
$x = 10 * 5;
echo $x;    // outputs: 50

// multiply two number contanied variables
$a = 10;
$b = 5;
$x = $a * $b;

echo $x;    // outputs: 50

// multiply with expression
$a = 2;
$b = 10;
$x = (10 * $a) * $b;

echo $x;    // outputs: 200

// multiplication assignment
$number = 20;
$number = $number * 10;

echo $number;   //output: 200

// multiplication assignment operator
$number = 20;
$number *= 10;

echo $number;   //outputs: 200

// not assigned multiplication (not getting expected output)
$number = 20;
$number * 10;

echo $number;   //outputs: 20

// assigned multiplication (for getting expected output)
$number = 20;
$number2 = $number * 10;

echo $number, " ", $number2;    // outputs: 20, 200
```

### Division (ভাগ করা) {#division}

**PHP** তে ভাগ করার প্রসেসটাও খুবই সহজ। ভাগচিহ্ন `(/)` বা *division operator* ব্যবহার করতে হয়। বাকি সবকিছু আগের মতই।

```php
<?php

// divide two numbers
$x = 50 / 5;
echo $x;    // outputs: 10

// divide two number contanied variables
$a = 50;
$b = 5;
$x = $a / $b;

echo $x;    // outputs: 10

// divide with expression
$a = 2;
$b = 10;
$x = (200 / $a) / $b;

echo $x;    // outputs: 10

// division assignment
$number = 20;
$number = $number / 10;

echo $number;   //outputs: 2

// division assignment operator
$number = 20;
$number /= 10;

echo $number;   //outputs: 2

// not assigned division (not getting expected output)
$number = 20;
$number / 10;

echo $number;   //outputs: 20

// assigned division (for getting expected output)
$number = 20;
$number2 = $number / 10;

echo $number, " ", $number2; // outputs: 20, 2
```

> **PHP** তে *division operator* `(/)` দিয়ে ভাগ করার পর ভাগফলটির ডাটা টাইপ সাধারণত `(float)` হয়।
>
> ```php
> <?php
>
> $result = 10 / 3; // This results in 3.33... (a float)
>echo $result; // This would output 3.3333333333333
> ```
>
>তবে যদি *two operands* (ভাজ্য ও ভাজক) উভয়টিই *integer* হয় এবং ভাগফলও পূর্ণসংখা তথা (*integer*) হয়, তখন তার ডাটা টাইপ ইন্টিজারই হবে।
>
> ```php
> <?php
>
> $result = 10 / 2;  // This results in 5 (an integer)
>echo $result; // This would output 5
> ```
>
> অবশ্য [`intdiv()`](https://www.php.net/manual/en/function.intdiv.php) ফাংশনের সাহায্যে সকল ফ্লোট ডাটাকে ইন্টিজারে কনভার্ট করা যায়।

### Remainder (ভাগশেষ বাহির করা){#remainder}

**PHP** তে খুব সহজেই ভাগশেষ বের করা যায়। ভাগশেষ বের করার জন‍্য ভাগশেষ চিহ্ন `(%)` বা (*modulus operator*) ব‍্যবহার করা হয়। বাকি সকল প্রসেস আমরা আগেই দেখে এসেছি। আসুন উদাহরণ দেখি:—

```php
<?php

// modulo operation between two numbers
$x = 50 % 4;
echo $x;    // outputs: 2

// modulo operation between two number contanied variables
$a = 50;
$b = 4;
$x = $a % $b;

echo $x;    // outputs: 10

// modulo operation with expression
$a = 7;
$b = 3;
$x = (200 % $a) % $b;   // results (200 % 7) = (4) % 3 = 1

echo $x;    // outputs: 1

// modulus assignment
$number = 20;
$number = $number % 3;

echo $number;   //outputs: 2

// modulus assignment operator
$number = 20;
$number %= 3;

echo $number;   //outputs: 2

// not assigned modulo operation (not getting expected output)
$number = 20;
$number % 10;

echo $number;   //outputs: 20

// assigned modulo operation (for getting expected output)
$number = 20;
$number2 = $number % 3;

echo $number, " ", $number2; // outputs: 20, 2
```

> *modulo operation* চলার পূর্বে **PHP** ভাজ্য এবং ভাজককে ইন্টিজার ডাটা টাইপে কনভার্ট করে নেয়; অর্থাৎ ভাজ্য বা ভাজকের কোন একটা যদি ফ্লোট ভ্যালু হয় **PHP** তাকে প্রথমে ইন্টিজার ভ্যালুতে কনভার্ট করে অতঃপর অপারেশন চালায়। আপনি যদি ফ্লোট ভ্যালুকে ফ্লোটই রাখতে চান, [`fmod()`](https://www.php.net/manual/en/function.fmod.php) ফাংশনের ব্যবহার দেখুন।
>
> *modulo operation* এর রেজাল্ট তথা ভাগশেষ সবসময় ভাজ্যের *(dividend)* সাইন গ্রহণ করবে; অর্থাৎ `$a % $b` এর ভেতরকার অপারেশনের ফলাফল-মান `$a` ভ্যারিয়েবলের মান ধারণ করবে। সুতরাং `$a` ভাজ্য পজিটিভ সংখ্যা হলে ভাগশেষ তথা ফলাফল পজিটিভ হবে, নেগেটিভ হলে নেগেটিভ। যেমন:-
>
> ```php
><?php
>
>echo (5 % 3)."\n";           // prints 2
>echo (5 % -3)."\n";          // prints 2
>echo (-5 % 3)."\n";          // prints -2
>echo (-5 % -3)."\n";         // prints -2
>```

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
