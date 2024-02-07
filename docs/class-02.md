# পিএইচপি অপারেশন এবং এক্সপ্রেশন

**PHP** তার ইন্টার্নাল সিস্টেমে কিভাবে ডাটা স্টোর করে, কি কি ধরণের ডাটা স্টোর করে, কি জাতীয় কাজ আমরা সেই ডাটাগুলো দিয়ে করতে পারি, কিভাবে করতে পারি ইত্যাদি বিষয় নিয়ে প্রথম ক্লাসে আমরা জেনেছি।

দ্বিতীয় ক্লাসে আমরা জানব, **PHP** তে কোন কাজ (যেমন: যোগ, বিয়োগ, গুণ, ভাগ, ভাগশেষ বের করাসহ যাবতীয় ম্যাথমেটিকাল অপারেশন, এক্সপ্রেশন ইত্যাদি) করতে হলে কি কি অপারেটর ব্যবহার করার প্রয়োজন পড়ে। সেগুলো ব্যবহারের প্রক্রিয়া কি কি এবং কিভাবে।

চলুন, প্রথমেই আমরা ব্যবহার প্রক্রিয়া নিয়ে আলোচনা করি। যদিও কাজগুলো করতে কি কি অপারেটর লাগবে সে বিষয়ে আগে আলোচনা করা উচিত ছিল। তবে *practical learning* এর আসলে কোন বিকল্প নাই। এজন্য আমরা ব্যবহার প্রক্রিয়া দিয়েই আলোচনা শুরু করছি।

## ম্যাথমেটিকাল অপারেশন{#mathematical-operations}

### Addition (যোগ করা){#addition}

**PHP** তে যোগ করা খুবই সহজ। স্কুল জীবনের বেসিক *arithmetic* (পাটিগণিত) অংক করার কথা মনে আছে? **PHP** তে আমরা সেভাবেই পাটিগণিত অংকগুলো করব।

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

সাধারণ অংকের মতই গুণচিহ্ন `(*)` বা *multiplication operator* দিয়ে **PHP** তে গুণ করা খুবই সহজ। বাকি যোগ-বিয়োগের টপিকে যে বিষয়গুলো আমরা আলোচনা করেছি তার সবগুলো এখানেও প্রয়োগ হবে। আমরা উদাহরণ দেখতে পারি।

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
> *modulo operation* এর রেজাল্ট তথা ভাগশেষ সবসময় ভাজ্যের *(dividend)* সাইন গ্রহণ করবে; অর্থাৎ `$a % $b` এর ভেতরকার অপারেশনের ফলাফল-মান সবসময় `$a` ভ্যারিয়েবলের মান ধারণ করবে। সুতরাং `$a` তথা ভাজ্য পজিটিভ সংখ্যা হলে ভাগশেষ তথা ফলাফল পজিটিভ হবে, নেগেটিভ হলে নেগেটিভ। যেমন:-
>
> ```php
><?php
>
>echo (5 % 3)."\n";           // prints 2
>echo (5 % -3)."\n";          // prints 2
>echo (-5 % 3)."\n";          // prints -2
>echo (-5 % -3)."\n";         // prints -2
>```

## Operators

*practical learning* কে গুরুত্ব দিয়ে প্রথমেই আমরা ম্যাথমেটিকাল অপারেশনের বেশকিছু ব্যবহার দেখে ফেলেছি। যার ফলে অনেকগুলো **PHP Operator** সম্পর্কেও আমাদের ধারণা হয়ে গেছে।

এখন প্রশ্ন হল, **PHP** তে কত ধরণের *Operator* আছে এবং কি কি?

### List of PHP Operators{#php-operator-list}

**PHP** তে অনেক ধরণের অপারেটর আছে। যেগুলো বিভিন্ন সময় বিভিন্ন কাজে ব্যবহার হয়ে থাকে। আমরা এখানে কিছু কমন অপারেটরের লিস্ট তৈরি করার চেষ্টা করব। চলুন শুরু করি।

- [***Arithmetic Operators***](#arithmetic)
- [***Assignment Operators***](https://www.php.net/manual/en/language.operators.arithmetic.php)
- [***Comparison Operators***](https://www.php.net/manual/en/language.operators.comparison.php)
- [***Increment/Decrement Operators***](#increment-decrement-operators)
- [***Logical Operators***](https://www.php.net/manual/en/language.operators.logical.php)
- [***String Operators***](https://www.php.net/manual/en/language.operators.string.php)
- [***Array Operators***](https://www.php.net/manual/en/language.operators.array.php)
- [***Type Operators***](https://www.php.net/manual/en/language.operators.type.php)
- [***Bitwise Operators***](https://www.php.net/manual/en/language.operators.bitwise.php)
- [***Execution Operators***](https://www.php.net/manual/en/language.operators.execution.php)
- [***Error Control Operators***](https://www.php.net/manual/en/language.operators.errorcontrol.php)
- [***Conditional Assignment Operators***](https://www.php.net/manual/en/language.operators.comparison.php#language.operators.comparison.ternary)

সবগুলো অপারেটরের বিস্তারিত বিবরণ এখনই জানার সুযোগ নাই। কারণ অপারেটরগুলো নির্দিষ্ট অপারেশনের সাথে জড়িত। তাই যখন আমরা কোন অপারেশন সম্পর্কে জানব তখন তার অপারেটরগুলোও জানব।

ইতিমধ্যে আমরা *Arithmetic Operation* বা পাটিগণিত অংক কষার পদ্ধতি সম্পর্কে জেনেছি। চলুন একবার *Arithmetic Operators* এর তালিকা দেখে নিই।

## Arithmetic Operators{#arithmetic-operators}

যোগ, বিয়োগ, গুণ, ভাগসহ এতক্ষণ আমরা যা যা করলাম এগুলোকে বলে *Arithmetic Operation*। আর তার অপারেটরগুলোকে বলে *Arithmetic Operators* (এরিথমেটিক অপারেটর- গানিতিক অপারেটর)।

এক নজরে অপারেটরগুলোর নাম, উদাহরণ এবং আমরা কখন কোন কাজে এগুলো ব্যবহার করতে পারি তার তালিকা:-

#### List of Arithmetic Operators{#arithmetic-operator-list}

| Example  | Name           | Result                                           |
|----------|----------------|--------------------------------------------------|
| `+$a`    | Identity       | Conversion of $a to int or float as appropriate. |
| `-$a`    | Negation       | Opposite of $a.                                  |
|`$a + $b` | Addition       | Sum of $a and $b.                                |
|`$a - $b` | Subtraction    | Difference of $a and $b.                         |
|`$a * $b` | Multiplication | Product of $a and $b.                            |
|`$a / $b` | Division       | Quotient of $a and $b.                           |
|`$a % $b` | Modulo         | Remainder of $a divided by $b.                   |
|`$a ** $b`| Exponentiation | Result of raising $a to the $b'th power.         |

## Increment/Decrement Operators{#increment-decrement-operators}

**PHP** তে কোন ভ‍্যালুর মান ১ করে বৃদ্ধি করার জন‍্য `++` এই চিহ্ন ব‍্যবহার করা হয়। (`++`) এটি *increment operator* এবং এই অপারেশনকে *Increment Operation* বলে।

আবার ভ‍্যালুর মান ১ করে কমানোর জন‍্য `--` এই চিহ্ন ব‍্যবহার করা হয়। তখন (`--`) এটি হয় *decrement operator* এবং এই কাজটি *Decrement Operation*।

**PHP** তে আমরা কোন ভ‍্যালুর মান দুইভাবে *increment* করতে পারি। ঠিক তেমনি দুইভাবে *decrement*-ও করতে পারি। টেবিলে নাম, উদাহরণ এবং কোনটির কি কাজ তার তালিকা টা দেখি:-

#### List of Increment/Decrement Operators{#increment-decrement-operator-list}

| Example | Name           | Effect                                 |
|---------|----------------|----------------------------------------|
| `++$a`  | Pre-increment  | Increments $a by one, then returns $a. |
| `$a++`  | Post-increment | Returns $a, then increments $a by one. |
| `--$a`  | Pre-decrement  | Decrements $a by one, then returns $a. |
| `$a--`  | Post-decrement | Returns $a, then decrements $a by one. |

কিছু উদাহরন দেখি:-

```php
<?php
echo 'Post-increment:', PHP_EOL;
$a = 5;
var_dump($a++);     // prints 5
var_dump($a);       // prints 6

echo 'Pre-increment:', PHP_EOL;
$a = 5;
var_dump(++$a);      // prints 6
var_dump($a);       // prints 6

echo 'Post-decrement:', PHP_EOL;
$a = 5;
var_dump($a--);     // prints 5
var_dump($a);       // prints 4

echo 'Pre-decrement:', PHP_EOL;
$a = 5;
var_dump(--$a);     // prints 4
var_dump($a);       // prints 4
```

**সতর্কবার্তা:—**
>
> বুলিয়ান টাইপের ভ্যালুতে *Increment/Decrement Operation* এর ফলে কোন প্রভাব পড়েনা। তেমনিভাবে *null* টাইপের ভ্যালুতেও *Decrement Operation* এর ফলে কোন প্রভাব পড়েনা।
>
>তবে **PHP 8.3.0** ভার্সন থেকে এমন ক্ষেত্রগুলোতে ***E_WARNING*** রিপোর্ট করবে। কারণ ভবিষ্যতে এই ২টি ডাটা টাইপে এজাতীয় *Operation* কে বৈধতা দিতে নির্দিষ্ট ভ্যালুকে টাইপ কাস্ট করে ইন্টিজারে কনভার্ট করার পরিকল্পনা চলছে।
>
> *non- numeric string* এর উপরও *Decrement Operation* এর কোন প্রভাব পড়েনা। **PHP 8.3.0** থেকে এই ক্ষেত্রে ***E_WARNING*** রিপোর্ট করবে। ভবিষ্যতে এমন কর্মকাণ্ড ***TypeError*** থ্রো করবে।

### String Increment Feature{#string-increment-feature}

১৯৮০ সালের দিকে [**Larry Wall**](https://en.wikipedia.org/wiki/Larry_Wall) নামে একজন প্রোগ্রামার [**PERL**](https://www.perl.org/) নামক একটি প্রোগ্রামিং ল্যাংগুয়েজ তৈরি করেন। এই ভাষাটির বৈশিষ্ট্যগুলোর মধ্যে ১টি গুরুত্বপূর্ণ বৈশিষ্ট্য হল টেক্সট ম্যানিপুলেশন (মানে টেক্সট জাতীয় ডাটা নিয়ে যা ইচ্ছা করার স্বাধীনতা আরকি)। ফলে *"string increment"* জাতীয় একটি সুবিধা এই ভাষায় বেশ পরিচিতি পায়। এই সুবিধা ব্যবহার করে অটোমেটিকভাবে স্ট্রিং ডাটার ভ্যালু ১-ঘর করে বাড়ানো যেত। যেমন ধরুন, আপনার একটা স্ট্রিং ডাটা আছে এমন:- `"abc12"`। আপনি এই ভ্যালুকে `++` (*increment*) অপারেটর দিয়ে ১ করে বাড়ালেন। তখন আপনি রেজাল্ট পাবেন `"abc13"`। তবে আপনার স্ট্রিংয়ের শেষে যদি কোন সংখ্যা না থাকে, মানে এমন `"abc"` হয়; তখন আর এই সুবিধা টা কাজ করবে না।

এই সুবিধাটা আমরা **PHP** তেও পাই কিছুটা উন্নত পন্থায়। অর্থাৎ, স্ট্রিংয়ের শেষে কোন সংখ্যা থাকতেই হবে **PHP** তে এমন সীমাবদ্ধতা নাই। সীমাবদ্ধতা যা আছে তা হল, স্ট্রিং ডাটা *alphanumerical* হতে হবে। ফলে আপনার স্ট্রিং ডাটায় **(a-z, A-Z, 0-9)** এর বাইরে আর কিছু থাকলে তখন এই সুবিধা কাজ করবেনা।

**সতর্কবার্তা:-** **PHP 8.3.0** থেকে এই সুবিধা ব্যবহার করতে অনুৎসাহিত করা হয়েছে। বিপরীতে, [`str_increment()`](https://www.php.net/manual/en/function.str-increment.php) ফাংশন ব্যবহারে উৎসাহিত করা হয়েছে।

তাহলে এই সুবিধা ব্যবহার করলে আমরা কি পাব?

যেমন ধরুন, `$a = 'Z';`। এরপর আপনি লিখলেন, `$a++;`। তখন আপনার আউটপুট হবে `'AA'`।

##### PERL string increment example

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

> **সতর্কবার্তা:-** কখনো কখনো *Alphanumeric strings*-গুলো *numeric string* এ কনভার্ট হয়ে যাওয়ার ক্ষেত্র তৈরি হয়। এমন একটি ক্ষেত্র হল, যখন *exponential notation*-এ লেখা কোন ফ্লোটিং নাম্বার স্ট্রিংয়ের ভেতর লেখা হয়, যেমন:- `"5d9"`। এখন এই ডাটার উপর যদি আপনি *Increment/Decrement Operation* চালান, তাহলে রেজাল্ট যা হবে তা `string` ডাটা টাইপ থেকে কনভার্ট হয়ে `float` বা `int` ডাটা টাইপে পরিণত হবে। উদাহরণ দেখুন:-
>```php
><?php
>$s = "5d9";
>var_dump(++$s);
>var_dump(++$s);
>```
>
>The above example will output:
>
>```bash
>string(3) "5e0"
>float(6)
>```
>
> এমনটা হওয়ার কারণ হল, **PHP** `"5e0"` ভ্যালুকে ফ্লোট ডাটা হিসেবে বিবেচনা করে তার ভ্যালু বানিয়েছে `5.0`, অতঃপর তার ভ্যালু ১ বৃদ্ধি করেছে। 
>
>এই ধরণের অসুবিধায় পড়তে না চাইলে `str_increment()` ফাংশন ব্যবহার করুন।

## ম্যাথমেটিকাল ফাংশন{#mathematical-functions}

এতক্ষণ আমরা বিভিন্ন অপারেটরের সাহায্যে ম্যাথমেটিকাল অপারেশন কিভাবে পরিচালনা করতে হয় তা শিখেছি। আশা করছি আপনি এগুলো অনুশীলন করবেন। শুধু পড়ে গেলে কোন উপকার হবেনা।

এবার আসুন নতুন কিছু জানার চেষ্টা করি। ম্যাথমেটিকাল অপারেশন পরিচালনার জন্য পিএইচপিতে কিছু বিল্ট-ইন ফাংশন আছে, মানে আপনার কাজ সহজ করে দেয়ার জন্য **PHP** এর ইন্টার্নাল সিস্টেমে এগুলো আগে থেকেই জমা করা আছে।

এখন আপনার জিজ্ঞাসা যদি হয়, ফাংশন কি? ফাংশন সম্পর্কে জানতে আমাদের [চতুর্থ ক্লাসটি](https://php.polashmahmud.com/class-04.html) দেখুন। আপাতত ধরে নিন, ফাংশন এমন একটি টুল যা আপনার বিরক্তিকর কাজগুলো সহজ করে দেয়।

এই ফাংশনগুলোর মাধ্যমে আমরা যাবতীয় গানিতিক সমস‍্যার সমাধান করতে পারি এবং তা খুব সহজেই। আসুন তাদের সাথে পরিচিত হই।

### pi() Function

প্রথমেই আমরা যে ফাংশনটি দেখব সেটি হল [`pi()`](https://www.php.net/manual/en/function.pi.php)। এটা দিয়ে আপনি পাই এর মান বের করতে পারবেন।

পাই সম্পর্কে জানতে *scientific american* এর পাই সংক্রান্ত এই [আর্টিকেলটি](https://www.scientificamerican.com/article/what-is-pi-and-how-did-it-originate/) পড়ুন অথবা গুগল করুন।

আরো একভাবে আপনি পাই এর মান পেতে পারেন। সেজন্য আপনাকে `M_PI` কন্সট্যান্টটি ব্যবহার করতে হবে।

পাই ফাংশন কোন *parameter* ব্যবহার করেনা এবং যে ভ্যালু রিটার্ন করে তার টাইপ হয় ফ্লোট, `(float)`। উদাহরণ:-

```php
<?php
echo pi(); // 3.1415926535898
echo M_PI; // 3.1415926535898
```

### pow() Function

দ্বিতীয় যে ফাংশনটি নিয়ে আমরা জানব সেটি হল, [`pow()`](https://www.php.net/manual/en/function.pow.php)। এটা দিয়ে আমরা একটি সংখ্যার *power* মান বের করতে পারি। আপনি চাইলে এই একই কাজ `**` *(Exponential operator)* ব্যবহার করেও করতে পারেন। ম্যাথমেটিকসের ভাষায় *power* কি জিনিস যদি আপনার জানা না থাকে তাহলে এই [আর্টিকেলটি](https://www.geeksforgeeks.org/power-in-mathematics/) পড়ুন।

ফাংশনটি ২টি প্যারামিটার প্রত্যাশা করে। ১. ১টি *base* সংখ্যা, অর্থাৎ যার *power* মান বের করতে চাই সেই সংখ্যাটি দিতে হবে। ২. ১টি *exponent* সংখ্যা, যাকে দিয়ে *power* করতে চাই সেই সংখ্যাটি দিতে হবে।

ফাংশনটির রিটার্ন ভ্যালু হবে ***base num raised to the power of exponent num***, অর্থাৎ বেজ সংখ্যাটিকে *exponent* সংখ্যা দিয়ে *power* করার পর যে রেজাল্ট আসবে সেটিই এই ফাংশনের রিটার্ন ভ্যালু হবে।

এখন *base* সংখ্যা এবং *exponent* সংখ্যা দুটোই যদি ইন্টিজার সংখ্যা হয় এবং এর রিটার্ন ভ্যালুও ইন্টিজার সংখ্যার মত হয়, সেক্ষেত্রে ফাংশনের রিটার্ন করা ভ্যালুর টাইপ হবে `(int)`, অন্যথায় `(float)` হবে।

```php
<?php
echo(pow(4,2)); // returns 16

var_dump(pow(2, 8)); // int(256)
echo pow(-1, 20); // 1
echo pow(0, 0); // 1
echo pow(10, -1); // 0.1

echo pow(-1, 5.5); // NAN
```
>
> **নোট:-** এই ফাংশনে আপনি ইনপুট হিসেবে যাই দিবেন তাকেই নাম্বারে কনভার্ট করে ফেলবে। চাই আপনি এরে, অবজেক্ট বা অন্যকিছু দেন। এজন্য ইনপুট দেয়ার সময় খেয়াল করে সঠিক ইনপুট দিবেন, নাহলে প্রত্যাশিত রেজাল্ট পাবেন না।

### is_finite() Function

এবার আসুন একটি সংখ্যা ফাইনাইট/সসীম নাকি ইনফিনিট/অসীম এ সম্পর্কে ২টি ফাংশন দেখি। ফাইনাইট সংখ্যা কি সেটা যদি জানা না থাকে তাহলে এই [আর্টিকেলটি](https://www.mathsisfun.com/definitions/finite-number.html) পড়ুন বা গুগল করুন।

যদি জানতে চাই একটা সংখ্যা ফাইনাইট/সসীম কিনা তাহলে আমরা [`is_finite()`](https://www.php.net/manual/en/function.is-finite.php) ব্যবহার করতে পারি। এই ফাংশনটি চেক করে দেখে তাকে ইনপুট দেয়া ফ্লোট নাম্বারটি ফাইনাইট বা সসীম কিনা। মনে রাখবেন, একটি ফাইনাইট ফ্লোট নাম্বার যেমনিভাবে ইনফিনিট বা অসীম নয়, তেমনি সেটি `NAN` টাইপেরও নয়। অর্থাৎ সেটা একটা সসীম ফ্লোট সংখ্যাই হবে। অন্যকিছু নয়। আর হলে সেটা সসীম ফ্লোট সংখ্যাই নয়।

প্যারামিটার হিসেবে ফাংশনটি ১টি ফ্লোট নাম্বার প্রত্যাশা করে।

ফাংশন থেকে প্রাপ্ত রেজাল্ট যদি `NAN, INF, -INF` না হয়, তাহলে *true* রিটার্ন করে। অন্যথায় *false* রিটার্ন করে।

```php
<?php

var_dump(is_finite(2));
var_dump(is_finite(log(0)));

$float = 1.2345;
var_dump($float, is_finite($float));

$nan = sqrt(-1);
var_dump($nan, is_finite($nan));

$inf = 1e308 * 2;
var_dump($inf, is_finite($inf));
```

The above example will output:

```bash
bool(true)
bool(false)
float(1.2345)
bool(true)
float(NAN)
bool(false)
float(INF)
bool(false)
```

### is_infinite() Function

এবার জানব [`is_infinite()`](https://www.php.net/manual/en/function.is-infinite.php) ফাংশন নিয়ে। এটা দিয়ে আমরা কোনো ফ্লোট সংখ্যা ইনফিনিট/অসীম কিনা তা চেক করতে পারব। ইনফিনিট কি তা জানতে [আর্টিকেলটি](https://www.mathnasium.com/sherwood/news/what-infinity-sher) পড়ুন, গুগলে খোজ করুন।

ফাংশনটি ফ্লোট নাম্বার প্রত্যাশা করে। প্রাপ্ত রেজাল্ট `INF, -INF` মানে ইনফিনিটি বা অসীম হলে *true* রিটার্ন করে। অন্যথায় *false* রিটার্ন করে।

```php
<?php

var_dump(is_infinite(20));
var_dump(is_infinite(log(0)));

$inf = 1e308 * 2;
var_dump($inf, is_infinite($inf));

$negative_inf = -$inf;
var_dump($negative_inf, is_infinite($negative_inf));
```

The above example will output:

```bash
bool(false)
bool(true)
float(INF)
bool(true)
float(-INF)
bool(true)
```

### is_nan() Function

এবার আসুন আমরা এমন একটা ফাংশন সম্পর্কে জানি যে আপনাকে বলে দেবে আপনার ইনপুট দেয়া ডাটা কি একটা *NAN (Not A Number)* টাইপের ডাটা নাকি না। সেই ফাংশনটি হল, [`is_nan()`](https://www.php.net/manual/en/function.is-nan.php)। যাকে আপনি একটা ফ্লোট নাম্বার প্যারামিটার হিসেবে দেবেন এবং সে চেক করবে নাম্বারটি কি আসলেই *NAN (Not A Number)* টাইপ ডাটা নাকি না। যদি ইনপুট দেয়া নাম্বারটির টাইপ *NAN (Not A Number)* হয় তাহলে ফাংশনটি থেকে আপনি *true* রিটার্ন পাবেন। অন্যথায় *false* রিটার্ন পাবেন।

`NAN` জাতীয় ভ্যালুর দেখা মেলে যখন আপনি এমন কোন ডাটার ভেতর ম্যাথমেটিকাল অপারেশন পরিচালনা করেন যাদের ভ্যালু/টাইপ সাধারণত `undefined` বা অগ্রহণযোগ্য হয়। যেমন ধরুন কোন ফাংশনে আপনি এমন একটি প্যারামিটার প্রদান করলেন যা ঐ ফাংশনটি সাপোর্ট করেনা। ফাংশন চাইল ইন্টিজার ডাটা, আপনি দিলেন ফ্লোট ডাটা, ফলে প্রকৃতপক্ষে ফাংশনটিতে আপনি একটা `undefined` ভ্যালু পাস করেছেন।

এখন ঐ ফাংশন তার ক্যালকুলেশন শেষে কি রিটার্ন দেবে? সে রিটার্ন দেবে `NAN`। সে তার সাধ্যমত চেষ্টা করেও আপনার দেয়া ভুল ইনফরমেশনের কারণে নিজ দায়িত্ব সম্পূর্ণ করতে পারেনি। ফলে সে ঐ ডাটাকে নাম্বার বিবর্জিত ডাটা বা ক্যালকুলেশন অযোগ্য ডাটা মনে করে তার টাইপ সেট করে দেবে `NAN`।

একটা বাস্তব উদাহরণ দেখা যাক। *square root* [`(sqrt())`](https://www.php.net/manual/en/function.sqrt.php) ফাংশনটি সেট করা হয়েছে পজিটিভ নাম্বার নিয়ে কাজ করার জন্য। এখন আপনি যদি নেগেটিভ নাম্বার এই ফাংশনে পাস করেন, তখন রেজাল্ট হবে `NAN`। তেমনি একটা ইনফিনিট ভ্যালুকে ইনফিনিট দিয়ে ভাগ করলেন বা নাম্বার নয় এমন কোন ভ্যালুর সাথে ম্যাথমেটিকাল অপারেশন চালালেন তখনও রেজাল্ট হবে `NAN`।

>**নোট:-** নাম শুনে মনে হচ্ছে নাম্বার যেহেতু নয় তাহলে তার ডাটা টাইপ তো ইন্টিজার বা ফ্লোট হবে না। বাস্তবতা তা নয়। এর ভ্যালিড ভ্যালু টাইপ হচ্ছে ফ্লোট!
>
> **সতর্কতা:-** `NAN` ভ্যালুকে অন্য কোন `NAN` ভ্যালুর সাথে *compare* করলে ফলাফল হবে: **not equal**। আবার, `$float === NAN` এভাবে তুলনা করলেও ফলাফল **not equal** হবে, এখানে `$float` ভ্যারিয়েবলটি কোন ফ্লোট ডাটা ধারণ করছে আরকি। এসব ক্ষেত্রে `is_nan()` ব্যবহার করে চেক করতে হবে।

```php
<?php
var_dump(is_nan(20));
var_dump(is_nan(acos(6)));

$nan = sqrt(-1);
var_dump($nan, is_nan($nan));
```

The above example will output:

```bash
bool(false)
bool(true)
float(NAN)
bool(true)
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

এই ফাংশন দিয়ে আমরা রেন্ডম নাম্বার পেয়ে থাকি।

```php
<?php
echo(rand());
echo rand(1, 100);
```

## PHP Operator

[Edit This Page](https://github.com/polashmahmud/php/edit/main/docs/class-02.md)