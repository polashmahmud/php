# পিএইচপি মৌলিক

## Types of data in PHP

**PHP**-তে _Variable_ এর ভ্যালু হিসেবে প্রায় ১০ ধরণের (type) ডাটা প্রদান করার সুযোগ আছে। এছাড়াও ২টি *psuedo type* আছে। এগুলো **PHP** এর ইন্টার্নাল ডাটা সিস্টেম। এগুলোকে মোট ৩ ভাগে ভাগ করা যায়, ১. **Scalar Types**, ২. **Compound Types** ৩. **Special Types**। যেমনঃ–

### 1. Scalar Types

- `bool`
- `int` (integer number বা পূর্ণসংখ্যা)
- `float` (floating-point number বা ভগ্নসংখ্যা) একে _Doubles_ ও বলা হয়
- `string`

### 2. Compound Types
- `array`
- `object`
- [`callable`](https://www.php.net/manual/en/language.types.callable.php)
- `iterable`

### 3. Special Types
- `resource`
- `NULL`

#### 4. Psuedo Types
- `void`
- `mixed`

**PHP-র** পরিচিতিতে আগেই জেনেছেন, এটি একটি dynamically typed language, যার অর্থ; **PHP-তে** _Variable_ এর ধরণ বা টাইপ বলে দেয়ার প্রয়োজন পড়ে না। _Variable_ এর ভ্যালু দেখে _runtime-এ_ **PHP** dynamically নিজেই ডাটা টাইপ নির্ধারণ করে নেয়। অবশ্য _[type declarations](https://www.php.net/manual/en/language.types.declarations.php)_ বা _[type casting](https://www.php.net/manual/en/language.types.type-juggling.php#language.types.typecasting)-র_ সাহায্যে আপনি চাইলে ডাটা টাইপটি সেট করে দিতে পারেন।

### Non-initialized variable concept

খেয়াল রাখবেন, _Variable_ এর মান এসাইন করা বা _initialize_ করাটা জরুরি নয়। _Variable_ এর মান সেট না করেও _Variable declare_ করা যায়। তখন সেটি হয়, _**Uninitialized variable**_। সেক্ষেত্রে আপনি _Variable_ এর টাইপ পাবেন `NULL` এবং সাথে আপনার সার্ভার সেটআপ অনুযায়ী `Warning: Undefined variable` এমন মেসেজও দেখতে পারেন।

```php
<?php
$name;

var_dump($name);  // NULL
```


তবে আপনি যদি _**type casting**-র_ সাহায্যে ডাটা টাইপ আগেই নির্ধারণ করেন সেক্ষেত্রে:–

-   `bool` ডাটা টাইপ সেট করলে আউটপুট হিসেবে `false` পাবেন।


-   `int` বা `float` ডাটা টাইপ সেট করলে আউটপুট হিসেবে `0` পাবেন।


-   `string` ডাটা টাইপ সেট করলে আউটপুট হিসেবে `empty string ""` পাবেন।


-   `array` ডাটা টাইপ সেট করলে আউটপুট হিসেবে `empty ‍array {}` পাবেন।

```php
$name;

var_dump((bool) $name);    // bool(false)
var_dump((int) $name);     // int(0)
var_dump((float) $name);   // float(0)
var_dump((string) $name);  // string(0) ""
var_dump((array) $name);   // array(0) {}
```


### Variable সম্পর্কে তথ্য কিভাবে পাবেন?

**PHP-তে** কিছু _**in-built function**_ আছে যেগুলো দিয়ে আমরা একটি _Variable_ সম্পর্কে তথ্য পেতে পারি। _Variable_ এর ধরণ/টাইপ ও ভ্যালু/মান দেখা এবং যাচাই করার জন‍্য সবচেয়ে বেশি ব‍্যবহৃত হয় [var_dump()](https://www.php.net/manual/en/function.var-dump.php) ফাংশনটি। আবার _Variable_ এর শুধুমাত্র ডাটা টাইপ জানতে [gettype()](https://www.php.net/manual/en/function.gettype.php) ফাংশনটি ব্যবহৃত হয়। _Variable_ এর ডাটা টাইপ নির্দিষ্ট কোন ধরণের কিনা তা যাচাই করার জন‍্য `is_type()` সিরিজের ফাংশনগুলো ব‍্যবহৃত হয়।

সেক্ষেত্রে `is_` এর পরে যে টাইপ সম্পর্কে জানতে চান তার keyword টা লিখুন, যেমন:– `is_string()`, `is_array()`, `is_int()` ইত্যাদি।

```php
$a_bool = true;   // a bool
$an_int = 12;     // an int
$a_float = 5.05;  // a float
$a_str  = "foo";  // a string
$a_str2 = 'foo';  // a string

echo gettype($a_bool), "\n";
echo gettype($a_str), "\n";

// If this is an integer, increment it by four
if (is_int($an_int)) {
    $an_int += 4;
}
var_dump($an_int);

// If $a_bool is a string, print it out
if (is_string($a_bool)) {
    echo "String: $a_bool";
}
```

আরো বিস্তারিত জানতে [**PHP Manual**](https://www.php.net/manual/en/language.types.intro.php) পড়ুন।

## NULL

NULL ডাটা টাইপ হলো **PHP-র** _unit data type_, অর্থাৎ এই ডাটা টাইপের একটিই ভ্যালু, সেটি [`null`](https://www.php.net/manual/en/language.types.null.php):–

```php
<?php
$var = NULL; 
echo $var;
```

ইতিপূর্বে খেয়াল করেছেন, _uninitialized variable_ বা যেই _variable_ এর ভ্যালু ডিফাইন করা হয়না – (_undefined variable_) – তার ভ্যালু হয় `null`। তেমনিভাবে কোন _variable_ এর উপর [`unset()`](https://www.php.net/manual/en/function.unset.php) ফাংশন ব্যবহার করলে তার ভ্যালু তখন `null` হিসেবে সেট হয়।

## Booleans

[`(bool)`](https://www.php.net/manual/en/language.types.boolean.php) বুলিয়ান **PHP-র** একটি ডাটা টাইপ। এর ২টি মাত্র ভ্যালু:– `true` ও `false`। কোন একটি ভ্যালুর সত্য-মিথ্যা যাচাই করার জন্য এটি ব্যবহৃত হয়। একটি _variable-কে_ **PHP** প্রোগ্রামিংয়ের ভাষায় সত্য বা মিথ্যা হিসেবে সেট করতে **PHP-র** `true` ও `false` _constants_ ২টি ব্যবহৃত হয়। ২টি _constants-ই case-insensitive_, অর্থাৎ `true`, `True`, `TRUE` ইত্যাদি আপনার ইচ্ছামত লিখতে পারবেন।

```php
<?php
$foo = True; // assign the value TRUE to $foo
```

তবে ইতিপূর্বেই বলা হয়েছে, _**consistent code writing is the part of better programming.**_

আপনি চাইলে _**type casting**-এর_ মাধ্যমে যেকোন ডাটা টাইপের ভ্যালুকে `(bool)` বুলিয়ান ডাটা টাইপে কনভার্ট করতে পারেন।

```php
<?php
var_dump((bool) "");        // bool(false)
var_dump((bool) "0");       // bool(false)
var_dump((bool) 1);         // bool(true)
var_dump((bool) -2);        // bool(true)
var_dump((bool) "foo");     // bool(true)
var_dump((bool) 2.3e5);     // bool(true)
var_dump((bool) array(12)); // bool(true)
var_dump((bool) array());   // bool(false)
var_dump((bool) "false");   // bool(true)
```
যখন অন্য কোন ডাটা টাইপকে _**type casting**_ করে `(bool)` বুলিয়ান ডাটা টাইপে কনভার্ট করেন, নিন্মোক্ত ভ্যালুগুলো **PHP** তখন `false` হিসেবে বিবেচনা করে:–

- `(bool)` বুলিয়ান ডাটা টাইপ `false`
- `(int)` ইন্টেজার ডাটা টাইপ `0` (শূণ্য)
- `(float)` ফ্লোট ডাটা টাইপ `0.0` বা `-0.0` (শূণ্য দশমিক শূণ্য বা মাইনাস শূণ্য দশমিক শূণ্য)
- `(string)` স্ট্রিং ডাটা টাইপ `""`, `''` _(empty string)_ এবং `"0"`
- `(array)` ডাটা টাইপ `array()` শূণ্য এরে
- `(NULL)` ডাটা টাইপ নিজেই


> অবশ্যই মনে রাখবেন, **PHP** `0` ছাড়া অন্য সকল নেগেটিভ বা পজেটিভ নাম্বারের মত `-1`কেও `true` ভ্যালু হিসেবে বিবেচনা করে। সাথে `(resource)` ডাটা টাইপ এবং `NAN (Not A Number)` সহ অন্য সবকিছুকেও `true` ভ্যালু হিসেবে বিবেচনা করে।


## Integers

[`(int)`](https://www.php.net/manual/en/language.types.integer.php) **PHP-র** আরো একটি ডাটা টাইপ। এর মাধ্যমে _**Integer (পূর্ণসংখ্যা)-র**_ কোন নাম্বারকে বুঝানো হয়ে থাকে।

**PHP-তে** _**Integer (পূর্ণসংখ্যা)-র**_ কোন নাম্বারকে কয়েকভাবে লেখার সুযোগ আছে:–

- _decimal (base 10)_ বা দশমিক নাম্বারের সাহায্যে, নাম্বারগুলো হল:— 0 থেকে 9 পর্যন্ত
- _hexadecimal (base 16)_ বা হেক্সাডেসিমেল (ষোড়দশ গণনাপদ্ধতি) নাম্বারের সাহায্যে, নাম্বারগুলো হল:— 0 থেকে 9 এবং A থেকে F পর্যন্ত
- _octal (base 8)_ বা অক্টাল (অষ্টক গণনাপদ্ধতি) নাম্বারের সাহায্যে, নাম্বারগুলো হল:— 0 থেকে 7 পর্যন্ত
- _binary (base 2)_ বা বাইনারি (দুই সংখ্যাবিশিষ্ট) নাম্বারের সাহায্যে, নাম্বারগুলো হল:— 0 এবং 1

এখন এই নাম্বার সিস্টেমগুলোর সাহায্যে লেখা হলে তাকে ওই নাম্বারের দিকে সম্পৃক্ত করে _notation_ নাম দেয়া হয়। যেমন: _decimal_ বা দশমিক নাম্বারের সাহায্যে লিখলে তাকে বলে _decimal notation_ ইত্যাদি।

সংখ্যাগুলোর পূর্বে [_**(-) মাইনাস বা নেগেশন অপারেটর**_](https://www.php.net/manual/en/language.operators.arithmetic.php) ব্যবহার করলে তা নেগেটিভ ***(int)-এ*** পরিণত হয়। আমরা **PHP** অপারেটর সম্পর্কে পরবর্তীতে জানব।

### কোন _notation_ কিভাবে লিখবেন?

_decimal notation_ স্বাভাবিক সংখ্যা লেখার মতই লিখবেন।

```php
<?php
$a = 1234;   // decimal number
$a = -3030; // negative decimal number
```

_octal notation_ লিখতে হলে সংখ্যাটি `0` দিয়ে শুরু করতে হবে। **PHP 8.1.0** থেকে শুরুতে `0o` বা `0O` দিয়েও লেখার সুযোগ তৈরি হয়েছে।

```php
<?php
$a = 0123; // octal number (equivalent to 83 decimal)
$a = 0o123; // octal number (as of PHP 8.1.0)
```

_hexadecimal notation_ লিখতে হলে সংখ্যাটি `0x` দিয়ে শুরু করতে হবে।

```php
<?php
$a = 0x1A; // hexadecimal number (equivalent to 26 decimal)
```

_binary notation_ লিখতে হলে সংখ্যাটি `0b` দিয়ে শুরু করতে হবে।

```php
<?php
$a = 0b11111111; // binary number (equivalent to 255 decimal)
```

**PHP 7.4.0** অনুযায়ী আপনার ***(int)*** সংখ্যাগুলোতে _ *(underscore)* থাকলে কোন সমস্যা নাই। **PHP's scanner** কোড পড়ার সময় _better readability_-র জন্য এগুলোকে রিমুভ (অপসারণ) করে দেয়।

```php
<?php
$a = 1_234_567; // decimal number (as of PHP 7.4.0)
```

### একটি ***(int)*** সংখ্যার সাইজ কত হতে পারে?

**PHP-তে** একটি ***(int)*** সংখ্যার সাইজ আসলে আপনি যে প্লাটফর্ম বা আর্কিটেকচার ব্যবহার করছেন তার উপর নির্ভর করে। এখানে খেয়াল করার একটি বিষয় হল, **PHP** `C` বা `Java`-র মত `unsigned int` টাইপ সাপোর্ট করে না। যেহেতু শুধু `signed int` সাপোর্ট করে, তাই **PHP-তে** `32-bit`-র আর্কিটেকচারে ***(int)-র*** সর্বোচ্চ সাইজ সাধারণত প্রায় ২ বিলিয়নের মত হয়। `64-bit`-র আর্কিটেকচারে যা প্রায় `9E18`-র সমান হয়। `signed int` এবং `unsigned int` সম্পর্কে বিস্তারিত জানতে গুগল করুন।

আপনার আর্কিটেকচার কতটুকু সাইজ ধারণ করতে পারে তা চেক করতে ***PHP_INT_SIZE*** _constant_ ব্যবহার করতে পারেন। যেমন:- ম্যাক্সিমাম ভ্যালু বের করতে ***PHP_INT_MAX*** এবং মিনিমাম ভ্যালু বের করতে ***PHP_INT_MIN*** ব্যবহার করুন।

### সীমার অধিক ***(int)*** (integer overflow) কি?

আপনার আর্কিটেকচার যতটুুকু ***(int)*** সাইজ ধারণ করতে পারে আপনার দেয়া সংখ্যার সাইজ তার বেশি হলে, তেমনিভাবে কোন অপারেশন বা ক্যালকুলেশন চালানোর ফলে আউটপুট সর্বোচ্চ ***(int)*** সাইজের বেশি হলে **PHP** ওই সংখ্যাকে ***(float)*** ডাটা টাইপে কনভার্ট করে দেয়। যেমন:–

#### Integer overflow on a 32-bit system {#integer-overflow-example-1}

```php
<?php
$large_number = 2147483647;
var_dump($large_number);                     // int(2147483647)

$large_number = 2147483648;
var_dump($large_number);                     // float(2147483648)

$million = 1000000;
$large_number =  50000 * $million;
var_dump($large_number);                     // float(50000000000)
```

#### Integer overflow on a 64-bit system {#integer-overflow-example-2}

```php
<?php
$large_number = 9223372036854775807;
var_dump($large_number);                     // int(9223372036854775807)

$large_number = 9223372036854775808;
var_dump($large_number);                     // float(9.2233720368548E+18)

$million = 1000000;
$large_number =  50000000000000 * $million;
var_dump($large_number);                     // float(5.0E+19)
```

> ***(int)*** বা ***(float)*** এই ২টি ডাটা টাইপকেই **PHP-তে** `/` *(division operator)* দিয়ে ভাগ করা হয়। শুধু ***(int)*** ডাটা টাইপকে ভাগ করার জন্য আলাদা কোন অপারেটর **PHP-তে** নেই। এর অর্থ:– ২টি ***(int)*** সংখ্যাকে ভাগ করে ফলাফল যদি ভগ্নসংখ্যা হয় তখন তার ডাটা টাইপও ***(int)*** থেকে কনভার্ট হয়ে ***(float)*** টাইপে পরিণত হয়। যেমন:-

```php
<?php
var_dump(25/7);         // float(3.5714285714286)
```

>তবে রেজাল্ট টাইপও ***(int)***-এ রাখতে চাইলে [`intdiv()`](https://www.php.net/manual/en/function.intdiv.php) ফাংশনের ব্যবহার বা ***type-casting*** করা যেতে পারে। তখন **PHP** ভগ্নসংখ্যার ভগ্নাংশটুকু ফেলে দিয়ে সেটাকে ***(int)*** হিসেবে আউটপুট দিবে।

```php
<?php
var_dump(intdiv(25, 7)); // int(3)
var_dump((int) (25/7)); // int(3)
```

> আপনি চাইলে [`round()`](https://www.php.net/manual/en/function.round.php) ফাংশন ব্যবহার করে একটি সুন্দর ভ্যালুতে কনভার্ট করতে পারেন।

```php
<?php
var_dump(round(25/7));  // float(4)
```

### ***type casting*** করে যেকোন ভ্যালুকে `(int)` টাইপে রূপান্তর

ইতিপূর্বে আমরা দেখেছি, যেকোন ভ্যালুকে ***type casting***-র মাধ্যমে `(bool)` টাইপে কনভার্ট করা যায়। তেমনিভাবে যেকোন ভ্যালুকে `(int)` টাইপেও কনভার্ট করা যায়। সেটা করতে `(int)`, `(integer)` অথবা [`intval()`](https://www.php.net/manual/en/function.intval.php) ফাংশন ব্যবহার করুন। যদিও বেশিরভাগ ক্ষেত্রে এগুলোর প্রয়োজন পড়ে না; আপনার স্ক্রিপ্টই অটোমেটিকভাবে টাইপ নির্ধারণ করে দিতে পারে।

তবুও আসুন দেখি, ***type casting*** করলে আমরা কি ধরণের আউটপুট পেতে পারি।

> যদি `resource` টাইপের ভ্যালুকে `int`-এ কনভার্ট করেন, **PHP** তখন রান-টাইমে একটি _unique resource number_ `resource` ডাটার সাথে এসাইন করে আউটপুট দেয়।

> `(bool)` বুলিয়ান ডাটাকে `int`-এ কনভার্ট করলে `false` ভ্যালুর আউটপুট হবে `0`, `true` হলে আউটপুট হবে `1`।

> `(float)` থেকে `(int)`-এ কনভার্ট করলে সেই সংখ্যার দশমিক অংশটুকু বাদ পড়ে যাবে। বাকিটুকু `(int)`-এ কনভার্ট হয়ে আউটপুট হবে। খেয়াল রাখবেন, **PHP 8.1.0** থেকে এমন কনভার্শন করলে আপনি একটি _deprecation notice_ পাবেন।

```php
<?php

function foo($value): int {
  return $value; 
}

var_dump(foo(8.1)); // "Deprecated: Implicit conversion from float 8.1 to int loses precision" as of PHP 8.1.0
var_dump(foo(8.1)); // 8 prior to PHP 8.1.0
var_dump(foo(8.0)); // 8 in both cases

var_dump((int)8.1); // 8 in both cases
var_dump(intval(8.1)); // 8 in both cases
```

> `(float)` সংখ্যাকে `(int)`-এ কনভার্ট করতে গিয়ে আউটপুট যদি `(int)`-এর সর্বোচ্চ সাইজকে অতিক্রম করে যায়, তখন রেজাল্ট হবে `undefined`। কারণ `(float)` ডাটা টাইপ `(int)`-এর সঠিক রেজাল্ট যথাযথভাবে প্রদান করতে পারে না। এক্ষেত্রে আপনি কোন ওয়ার্নিং বা নোটিশও পাবেন না **PHP** থেকে।

> `NaN` এবং `Infinity` কে `(int)`-এ কনভার্ট করলে আউটপুট হবে `0`।

> কোন _unknown fraction_ কে `(int)`-এ কনভার্ট করলে অপ্রত্যাশিত ফলাফল পেতে পারেন। যেমন:–

```php
<?php
echo (int) ( (0.1+0.7) * 10 ); // echoes 7!
```

> `(string)` কে `(int)`-এ কনভার্ট করার ক্ষেত্রে যদি পুরো `(string)` টি _Numeric_ (সংখ্যাভিত্তিক) হয় বা `(string)`-এর শুরুটা কোন সংখ্যা দিয়ে হয় তখন ঐ সংখ্যাটি/সংখ্যাগুলো আউটপুট হিসেবে পাওয়া যাবে। তবে পুরোটা খাঁটি `(string)` হলে আউটপুট `0` হবে।

> `(null)` কে `(int)`-এ কনভার্ট করলে আউটপুট হবে `0`। তেমনিভাবে উপরোল্লিখিত টাইপ ছাড়া অন্য কোন টাইপ থেকে `(int)`-এ কনভার্ট করলে রেজাল্ট হবে `undefined`। সাথে মনে রাখবেন, পূর্বনির্ধারিত এ-জাতীয় কোন নিয়মের উপর নির্ভর করবেন না। ভবিষ্যতে যেকোন সময় এই নিয়ম পরিবর্তন হতে পারে।

## Floating Point Numbers

[_floating point numbers_](https://www.php.net/manual/en/language.types.float.php) (ভগ্নসংখ্যা) কে `(float)`, `(doubles)` বা `(real numbers)` বলা হয়। এটি **PHP-র** আরো একটি ডাটা টাইপ।

নিম্নে দেয়া যেকোন একটি _syntax_ ব্যবহার করে `(float)` ডাটা টাইপ লেখা সম্ভব:–

```php
<?php
$a = 1.234; 
$b = 1.2e3; 
$c = 7E-10;
$d = 1_234.567; // as of PHP 7.4.0
```

`(int)`-এর মত `(float)` ডাটা টাইপেও 1টি `(float)` সংখ্যার সর্বোচ্চ সাইজ প্ল্যাটফর্ম বা আর্কিটেকচারের উপর নির্ভর করে। তবে `64-bit` আর্কিটেকচারে সাধারণ ভ্যালু মোটামুটি প্রায় `1.8e308`-র মত। যা প্রায় `14 decimal digits`-র _precision_ এর সমান। *floating point precision* সম্পর্কে বিস্তারিত জানতে গুগল করুন বা **PHP Manual** পড়ুন।

### `(float)`-এ ***type casting***

`(string)` সহ অন্যান্য সকল টাইপ থেকে `(float)`-এ কনভার্ট করার ক্ষেত্রে `(int)`-এ কনভার্ট করার নিয়মগুলোই প্রযোজ্য হয়।

### `(float)` Comparison

**PHP-তে** `(float)` ডাটা টাইপকে *internally* যেভাবে উপস্থাপন করা হয় তার ভিত্তিতে ১টি `(float)`-র সাথে অন্য আরেকটির *equality* (সমান-অসমান) চেক করা বেশ দুরূহ ১টি টাস্ক। তবুও *machine epsilon* বা *unit roundoff*-র সাহায্যে এই সীমাবদ্ধতা দূর করা সম্ভব। যেমন:–

***$a* and *$b* are equal to 5 digits of precision:**

```php
<?php
$a = 1.23456789;
$b = 1.23456780;
$epsilon = 0.00001;

if(abs($a-$b) < $epsilon) {
    echo "true";
}
```

বিস্তারিত জানতে **PHP Manual** পড়ুন।

অনেকসময় *numeric operations* (যোগ, বিয়োগ, ‍গুণ, ভাগ ইত্যাদির গণনা) চালানোর ফলে আপনি `NAN` জাতীয় রেজাল্ট বা ভ্যালু পেতে পারেন। মনে রাখবেন, `NAN` **PHP-র** একটি *constant*। *floating-point calculations-এ* এমন রেজাল্ট পাওয়ার অর্থ হল, ভ্যালুটি *undefined* অথবা উপস্থাপনযোগ্য নয়।

তাই এই `NAN` ভ্যালুকে শুধুমাত্র **`true`** ছাড়া নিজেকে নিজের সাথে বা অন্য কোন ভ্যালুর সাথে *loose comparison* (শুধুমাত্র ভ্যালুর মিল খোঁঁজা) অথবা *strict comparison* (ভ্যালুর সাথে টাইপের মিলও খোঁজা) যাই করেন না কেন, রেজাল্ট `false` হবে। *comparison* সম্পর্কে আমরা ভবিষ্যতে আরো বিস্তারিত জানতে পারব।
>এমনটা হওয়ার কারণ, `NAN` কোন একটি নির্দিষ্ট ভ্যালু ধারণ না করে বিভিন্ন রকমের ভ্যালু ধারণ করতে পারে, তাই অন্য ভ্যালুর সাথে বা নিজের সাথে তুলনা করে কখনোই প্রত্যাশিত রেজাল্ট পাওয়া যাবে না। বরং এমন ভ্যালু চেক করতে [`is_nan()`](https://www.php.net/manual/en/function.is-nan.php) ফাংশন ব্যবহার করুন।

## Strings

`(string)`ও **PHP-র** একটি ডাটা টাইপ। *Strings* হচ্ছে একসাথে এক বা একাধিক অক্ষরের সম্মেলন। এক একটি অক্ষর একটি বাইটের *(byte)* সমান। তাই **PHP** শুধুমাত্র `256-character` *character encoding* সাপোর্ট করে, অতি জনপ্রিয় `unicode` *character encoding* সাপোর্ট করে না। ডিটেইল জানতে [**Manual**](https://www.php.net/manual/en/language.types.string.php#language.types.string.details) দেখুন।

> `32-bit` আর্কিটেকচারে একটি `(string)`-র সর্বোচ্চ সাইজ 2GB *`(2147483647 bytes maximum)`* পর্যন্ত হয়।

### Strings Syntax

`(string)` ডাটা চারটি ভিন্ন উপায়ে তৈরি করা যেতে পারে। এগুলোকে `string literal` বলে। যেমন:–

1.   [single quoted](https://www.php.net/manual/en/language.types.string.hp#language.types.string.syntax.single) (সিংগেল কোটেশনের ভেতর)


2.   [double quoted](https://www.php.net/manual/en/language.types.string.php#language.types.string.syntax.double) (ডাবল কোটেশনের ভেতর)


3.   [heredoc syntax](https://www.php.net/manual/en/language.types.string.php#language.types.string.syntax.heredoc) (হিয়ার-ডক সিনট্যাক্স)


4.   [nowdoc syntax](https://www.php.net/manual/en/language.types.string.php#language.types.string.syntax.nowdoc) (নাউ-ডক সিনট্যাক্স)


#### Single quoted

একটি `(string)` ডাটা তৈরি করার সবচেয়ে সহজ পদ্ধতি হলো সিংগেল কোটেশনের `('')` ভেতর ভ্যালুগুলো লেখা।

> আপনার `(string)` ডাটার অবস্থা যদি এমন হয় যে, সিংগেল কোটেশন `('')` বা ব্যাকস্ল্যাশ `(\)` ভ্যালু হিসেবে লেখার প্রয়োজন তখন ***escape character*** `(\)` ব্যবহার করুন। নিচের কোডে ‍উদাহরণ দেখুন।
>
>খেয়াল রাখবেন, সিংগেল কোটেশনে `('')` অন্যান্য ***escape sequences*** যেমন:– `(\r)`, `(\n)` ইত্যাদি স্বাভাবিক *character* হিসেবে বিবেচিত হবে। তখন এই `(\)` *character*-টি ব্যাকস্ল্যাশ হিসেবে বিবেচিত হবে।
>
>তেমনিভাবে *variable* এর নাম লিখলে তাও স্বাভাবিক *character* হিসেবে বিবেচিত হবে। *variable* এক্সিকিউশন হয়ে তার ভ্যালু পাওয়া যাবে না। এমন কিছুর প্রয়োজন হলে আপনাকে `("")` ডাবল কোটেশন অথবা `heredoc syntax` ব্যবহার করতে হবে। এটাকে [*string parsing or parsing variable*](#variable-parsing-কি) বলে।

```php
<?php
echo 'this is a simple string';

echo 'You can also have embedded newlines in
strings this way as it is
okay to do';

// Outputs: Arnold once said: "I'll be back"
echo 'Arnold once said: "I\'ll be back"';

// Outputs: You deleted C:\*.*?
echo 'You deleted C:\\*.*?';

// Outputs: You deleted C:\*.*?
echo 'You deleted C:\*.*?';

// Outputs: This will not expand: \n a newline
echo 'This will not expand: \n a newline';

// Outputs: Variables do not $expand $either
echo 'Variables do not $expand $either';
```

## Escaped Sequence কি ও কেন?

> **PHP**-র ডাটা টাইপের সাথে এর কোন সম্পর্ক নাই। তবে `(string)` ডাটা টাইপের সাথে এর সম্পর্ক আছে।

আমাদের কম্পিউটারে যেমনি আছে, তেমনি বাস্তব জীবনে এমন অনেক *character বা entity* আছে যেগুলো কি-বোর্ড বা অন্য কোন কিছুর সাহায্যে কোন প্রোগ্রামে ইনপুট দেয়া সম্ভব হয় না। আবার প্রোগ্রামিং ল্যাংগুয়েজ কেন্দ্রিক কিছু নির্দিষ্ট *character বা symbol* থাকে যেগুলো ঐ প্রোগ্রামিং ল্যাংগুয়েজটি বিশেষভাবে তার *Syntax* হিসেবে বিবেচনা করে।

> যেমন:- **PHP-তে** `(string)` ডাটা লিখতে গিয়ে কোটেশন ক্যারেক্টারের `(''), ("")` ব্যবহার সঠিকমত না হলে আপনার প্রোগ্রাম ব্রেক হতে পারে।

এই সমস্যা সমাধানেই ***Escaped Characters বা Sequences***-র প্রয়োজন হয়। এটি কম্পিউটার সায়েন্স বা অনেক প্রোগ্রামিং ল্যাংগুয়েজের একটি *fundamental* (বুনিয়াদি) বিষয়।

### Escaped Characters-র উদাহরণ

| **Sequence** | **Meaning** | **ব্যাখ্যা** |
| ------------ | ----------- | ---- |
| `\n` | linefeed (LF or 0x0A (10) in ASCII) | **PHP integrated** সিস্টেমে আউটপুট দেখলে কন্টেন্টকে নতুন লাইনে পুশ করে (একটি নিউ লাইন প্রিন্ট করে)। তবে ব্রাউজারে আউটপুট দেখলে নতুন লাইন পাওয়া যাবে না। সেক্ষেত্রে [`nl2br()`](https://www.php.net/manual/en/function.nl2br.php) ফাংশন ব্যবহার করতে হবে।
| `\r` | carriage return (CR or 0x0D (13) in ASCII) | কম্পিউটারের `Enter key` বা টাইপ-রাইটারের `carriage return key` চাপার মত আউটপুট আসবে। |
| `\t` | horizontal tab (HT or 0x09 (9) in ASCII) | `tab key`-র কাজ করে। তবে হরিজন্টালি (বাম থেকে ডানে বা ডান থেকে বামে)। |
| `\v` | vertical tab (VT or 0x0B (11) in ASCII) | ভার্টিক্যালি (উপর থেকে নিচে) `tab key`-র কাজ করে। |
| `\e` | escape (ESC or 0x1B (27) in ASCII) | `Esc key`-র কাজ করে। |
| `\\` | backslash | `(\)` (ব্যাকস্ল্যাশ)-র কাজ করে। |
| `\$` | dollar sign | `($)` (ডলার সাইন)-র কাজ করে। যেহেতু **PHP-তে** ডলার সাইন `($)` দিয়ে ভ্যারিয়েবল ইনিশিয়েট করা হয়। |
| `(\"), \'` | double-quote or single-qoute | ডাবল কোটেশন `("")` অথবা সিংগল কোটেশন `('')` ক্যারেক্টার *escape* করার প্রয়োজনে ব্যবহৃত হয়। |

এছাড়াও আরো অনেক [***Escaped Sequences***](https://www.php.net/manual/en/language.types.string.php#language.types.string.syntax.double) আছে।

#### Double quote

`(string)` ডাটাকে ডাবল কোটেশন `("")`-র ভেতরে লিখলে তা *Double quote string syntax*।

*Double quote string syntax*-র অনেক সুবিধা আছে। যেমন:- ***Escaped Sequences***-র ব্যবহার। পাশাপাশি `("")`-র ভেতর টেক্সট ভ্যালুগুলোর সাথে কোন *variable* এর নাম লিখলে তা এক্সিকিউট হয়ে *variable* এর ভ্যালুটা পাওয়া যায়।

#### Heredoc syntax (হিয়ার-ডক সিনট্যাক্স)

`(string)` ডাটা লেখার তৃতীয় উপায় হল হিয়ার-ডক সিনট্যাক্স [(Heredoc syntax)](https://www.php.net/manual/en/language.types.string.php#language.types.string.syntax.heredoc)।

**Heredoc syntax লেখার পদ্ধতি**:

> `(<<<)` এটি ***Heredoc syntax operator***। প্রথমে এই অপারেটরটি দিতে হবে, অতঃপর একটি *identifier* দিতে হবে, তারপর `(string)` ডাটাগুলো দিতে হবে এবং সর্বশেষে ঐ একই *identifier* দিয়ে শেষ করতে হবে।
>>*closing identifier*-র আগে এক বা একাধিক `space` অথবা `tab` দেয়া যাবে। **মনে রাখবেন**, লাইনের যেখান থেকে *closing identifier*-টি শুরু হবে; সেখান থেকে নিয়ে পরবর্তীতে যতগুলো *character*, `space` অথবা `tab` দিবেন সেগুলো **PHP** `(string)` ভ্যালু হিসেবে রিজার্ভ করবে এবং সেভাবেই প্রিন্ট হবে। এর আগে যদি কোন `space` অথবা `tab` দেন, তা আউটপুটে প্রিন্ট হবে না বরং ডিলেট হয়ে যাবে। তবে *closing identifier* যেখান থেকে শুরু হয়েছে তার আগে যদি কোন *character* বা `(string)` ডাটা দেন, তাহলে **PHP Parse error** পাবেন। তাই *indentation* করার সময় খেয়াল রাখতে হবে। **PHP 7.3.0**-র আগে *closing identifier*-কে অবশ্যই নতুন লাইনের প্রথম কলামে লিখতে হতো।
>
>> **Heredoc syntax**-র *identifier* নাম আপনি আপনার পছন্দমতো দিতে পারেন। তবে **PHP**-র অন্যান্য *identifier* বা *label*-র মত এক্ষেত্রেও নামকরণের জন্য কিছু নিয়ম ***(naming conventions)*** আপনাকে ফলো করতে হবে। যেমন:–
>>
>> - শুধুমাত্র লেটার বা `(_)` আন্ডারস্কোর ছাড়া কোন সংখ্যা বা বিশেষ চিহ্ন দিয়ে *identifier*-র নাম শুরু করা যাবে না।
>> - শুধুমাত্র `(_)` আন্ডারস্কোর বা *alphanumeric: "alpha" (মানে letters), "numeric" (মানে numbers) characters* ছাড়া কোন বিশেষ চিহ্ন, `space` বা এ-জাতীয় *identifier* নামের ভেতর থাকতে পারবে না।
>>
>> - *identifier* নাম *capital letter or small letter* দুটোতেই হতে পারে। তবে **PHP** *capital letter*-এ লিখতে আপনাকে উৎসাহ দেয়।

##### Basic Heredoc example as of PHP 7.3.0:- {#Heredoc-example-1}

```php
<?php
// no indentation
echo <<<END
      a
     b
    c
\n
END;

// 4 spaces of indentation
echo <<<END
      a
     b
    c
    END;
```

উপরোক্ত উদাহরণে `END` হল ***Heredoc identifier***।

##### *Closing identifier*-র *indentation* সঠিক না হওয়ায় [**PHP Parse error**](https://www.php.net/manual/en/class.parseerror.php) example:- {#parse-error-example}

```php
<?php
echo <<<END
  a
 b
c
   END;
```

*indentation*-এর জন্য `tab key` এবং `space key` উভয়টাই ব্যবহার করা যায়। তবে `(string)` ভ্যালুর বডিতে অথবা *Closing identifier*-এ `tab` এবং `space` মিক্স করে একসাথে ব্যবহার করলে **PHP**-র অনেক ভার্সনে **Parse error** পেতে পারেন। তাই *indentation*-এর জন্য যেকোন একটি ব্যবহার করুন এবং *consistent* থাকুন।

##### Different indentation for body, closing identifier **Parse error** example:- {#parse-error-example-2}

```php
<?php
// All the following code do not work in some version of PHP.

// different indentation for body (spaces) ending marker (tabs)
{
    echo <<<END
     a
        END;
}

// mixing spaces and tabs in body
{
    echo <<<END
        a
     END;
}

// mixing spaces and tabs in ending marker
{
    echo <<<END
          a
         END;
}
```

**PHP 7.3.0**-র পর থেকে *Closing identifier*-এর শেষে সেমিকোলন `(;)` বা নিউ লাইন দেয়া জরুরী নয়। বরং *array syntax* ব্যবহার করে আপনি আরো ডাটা ইনপুট দিতে পারেন। **খেয়াল রাখবেন**,*array syntax* ব্যবহার না করলে অবশ্যই সেমিকোলন `(;)` দিবেন। অন্যথায় **Parse error** পাবেন। যেমন:-

##### Continuing an expression after a closing identifier:-

```php
<?php
$values = [<<<END
a
  b
    c
END, 'd e f'];
var_dump($values);
```

*array syntax* নিয়ে আমরা পরবর্তীতে জানব।

>> **খেয়াল রাখবেন**, *identifier*-এর নাম যেন `(string)`-র ভ্যালু না হয়। হলে **Parse error** পাবেন।
>>
>> ##### Closing identifier in body of the string tends to cause ParseError:-
>>
>>```php
>><?php
>>$values = [<<<END
>>a
>>b
>>END ING
>>END, 'd e f'];
>>```
>>
>> তাই **খেয়াল রাখবেন**, `(string)` ডাটা যেন *identifier* নাম না হয়।
>
> **বিশেষ নোট**:— **PHP 7.3.0**-র আগে *Closing identifier*-র লাইনে শুধুমাত্র সেমিকোলন `(;)` ছাড়া অন্য কিছু ব্যবহারের সুযোগ ছিল না। ফলে *Closing identifier*-র পূর্বে কোন স্পেস, ট্যাব দেয়া অথবা সেমিকোলনের পরে কোন স্পেস, ট্যাব দেয়ার সুযোগ ছিল না। সাথে *Closing identifier*-টি একটি নিউ লাইনে লিখতে হত। এমনটা না হলে **PHP** *Closing identifier*-কে খুঁজতে থাকত এবং শেষে **Parse error** দিত।
>
>
> ##### Invalid example, prior to PHP 7.3.0:-
>
>```php
><?php
>class foo {
>    public $bar = <<<EOT
>bar
>    EOT;
>}
>// Identifier must not be indented
>```
>
> ##### Valid example, even prior to PHP 7.3.0:-
>
>```php
><?php
>class foo {
>    public $bar = <<<EOT
>bar
>EOT;
>}
>```

**Heredoc** ডাটাগুলোর ব্যবহার *double-quoted string*-র (ডাবল কোটেশন) মতই হয়। পার্থক্য হল, **Heredoc**-এ *quotes* `(''), ("")` লিখতে *escape sequence*-র প্রয়োজন পড়ে না। যদিও অন্য *escape sequence*-গুলো ঠিকই কাজ করে। তেমনি [*parsing variables*](#variable-parsing-কি) এরও সুযোগ আছে।

##### Heredoc string quoting example

```php
<?php
$str = <<<EOD
Example of string
spanning multiple lines
using heredoc syntax.
EOD;

$name = 'MyName';

echo <<<EOT
My name is "$name".
This should print a capital 'A': \x41, with the value of the variable \$str: \n$str
EOT;
```

*opening Heredoc identifier*-কে ডাবল কোটেশনের ভেতর লেখার সুযোগ আছে।

##### Using double quotes in Heredoc:-

```php
<?php
echo <<<"FOOBAR"
Hello World!
FOOBAR;
```

#### Nowdoc syntax

ব্যবহারগত দিক থেকে *nowdoc syntax* (নাউ-ডক সিন্ট্যাক্স) আর সিংগল কোটেশন `('')`একইরকম, যেমন *herodoc syntax* আর ডাবল কোটেশন `("")` একইরকম। *nowdoc syntax*-য়ে সিংগল কোটেশন `('')`-র মতই [*parsing variable*](#variable-parsing-কি) এবং *escaping sequences*-র সুযোগ নাই। তবে *syntax* লেখার ধরণ *herodoc syntax*-র সাথে বেশ মিলে যায়।

**Nowdoc syntax** লেখার পদ্ধতি:–

> *herodoc syntax*-র সাথে মিল থাকলেও কিছুটা ভিন্নতা আছে। দুটির ***syntax operator*** একই, `(<<<)` এটি। তবে পার্থক্যটা হল, *opening nowdoc identifier*-কে সিংগল কোটেশন `('')`-র ভেতর লিখতে হয়।
>
> মিলগত আরো একটি দিক হল, *herodoc syntax*-র সব *rules* *nowdoc syntax*-য়েও প্রয়োগ হবে। বিশেষ করে [*closing identifier* কেন্দ্রিক যে *rules*](#parse-error-example) আছে।

*herodoc syntax* আর ডাবল কোটেশন `("")`-র [ভেতরের মিল](#heredoc-string-quoting-example) ইতিপূর্বেই আলোচনা হয়েছে।

##### Nowdoc string quoting example:-

```php
<?php
echo <<<'EOD'
Example of string spanning multiple lines
using nowdoc syntax. Backslashes are always treated literally,
e.g. \\ and \'.
EOD;
```

##### Nowdoc string quoting example with variables:-

```php
<?php
$str = <<<'NOWDOC'
Example of string
spanning multiple lines
using heredoc syntax.
NOWDOC;

$name = 'MyName';

echo <<<'ANOTHER_NOWDOC'
My name is "$name".
This should print a capital 'A': \x41, with the value of the variable \$str: \n$str
ANOTHER_NOWDOC;
```

## Variable parsing কি?

ডাবল কোটেশন `("")` এবং *heredoc syntax*-এ ভ্যারিয়েবল নাম প্রদান করলে নাম প্রিন্ট না হয়ে যখন সরাসরি তার ভ্যালু প্রিন্ট হয়, তাকে আমরা *variable parsing* বলতে পারি।

> *variable parsing* করার ২টি *syntax* আছে।
> ### Simple syntax
>
> এই *syntax*-টি বহুল ব্যবহৃত এবং সহজ। *variable, an array value, or an object property* — যাইহোক, খুব সহজেই এই *syntax* দিয়ে সেগুলো *parsing* করা সম্ভব।
>
>> **PHP** যখন `(string)` ডাটার ভেতর কোন `($)` ডলার সাইন দেখবে, – *যাকে (escape sequences)* ব্যবহার করে *(escaped)* করা হয়নি – তখনই সে তার পরবর্তী অক্ষরগুলোকে ভ্যারিয়েবল নাম মনে করে তাকে *parse* করার চেষ্টা করতে থাকবে। এজন্য উত্তম হল, ভ্যারিয়েবল নামকে `($)` ডলার সাইনসহ `{}` কার্লি ব্রেসের ভেতরে রেখে **PHP parser**-কে ভ্যারিয়েবলের শুরু এবং শেষ বোঝানো। অন্যথায় সঠিক রেজাল্ট ব্যাহত হতে পারে। যেমন:–
>>
>>```php
>><?php
>>$juice = "apple";
>>
>>echo "He drank some $juice juice.".PHP_EOL;
>>// Unintended. "s" is a valid character for a variable name, so this refers to $juices, not $juice.
>>echo "He drank some juice made of $juices.";
>>// Explicitly specify the end of the variable name by enclosing the reference in braces.
>>echo "He drank some juice made of {$juice}s.";
>>```
>>
>> একইভাবে *array index* বা *object property*-ও *parse* করা সম্ভব। যখন আমরা *array or object* সম্পর্কে জানব, তখন সেখানে ‍উদাহরণ দেখব।
>
> ### Complex (curly) syntax
>
> *Complex syntax* মানে এই নয় যে এর *syntax* কঠিন। বরং এই *syntax*-এর সাহায্যে `string` ডাটার ভেতরে *complex expressions* লেখা যায়।
>
>> এই *syntax*-এও `string` ডাটার ভেতরে *scalar variable* (শুধুমাত্র একটি ভ্যালু ধারণ করে এমন ভ্যারিয়েবল), *array element or object property* লিখে তা *parse* করা যায়। তবে এর বিশেষত্ব হল, যে *expression*-গুলো `string` ডাটার বাইরে সাধারণত লেখা হয় তা এই *syntax*-এর সাহায্যে — তথা `{}` কার্লি ব্রেসের মধ্যে দিয়ে — `string` ডাটার ভেতরেও লেখা সম্ভব।
>>
>> `{}` কার্লি ব্রেসগুলোকে *escape* করা যায় না। তাই **PHP** যখন *opening curly brace* (`{`)-র সাথে সাথেই `$` (ডলার সাইন) দেখে তখন সেটাকে সে *Complex syntax* হিসেবে বিবেচনা করে।
>>
>>তাই *opening curly brace* (`{`)-র পর যদি কোন স্পেস বা অন্য কিছু থাকে তখন সে কার্লি ব্রেসকে স্বাভাবিক অক্ষর হিসেবে গ্রহণ করে।
>>
>>
>>```php
>><?php
>>// Show all errors
>>error_reporting(E_ALL);
>>
>>$great = 'fantastic';
>>
>>// Works, outputs: This is fantastic
>>echo "This is {$great}"; // complex syntax
>>
>>// Won't work, outputs: This is { fantastic}
>>echo "This is { $great}"; // not complex
>>```
>>
>>*simple* অথবা *complex* উভয় *syntax*-এ `string` ডাটার ভেতরে যদি `$` (ডলার সাইন) লেখার প্রয়োজন দেখা দেয় তখন *escape ‍sequence* ব্যবহার করতে হবে। যেমন:– `{\$`।
>>
>> *array element or object property* কেন্দ্রিক উদাহরণ আমরা নির্দিষ্ট টপিকে দিয়ে দেখব। তবে আপনি চাইলে [ম্যানুয়াল](https://www.php.net/manual/en/language.types.string.php#language.types.string.parsing) পড়তে পারেন।
>>
>>বিশেষত্ব বোঝার উদাহরণ:–
>>
>>```php
>><?php
>>// Works, quoted keys only work using the curly brace syntax (i.e. complex syntax)
>>echo "This works: {$arr['key']}";  // try to remove the braces
>>
>> // Works only in simple syntax
>>echo "This works: $arr[key]";     // see the difference by making it like $arr['key']
>>```

### `string` ডাটা access and modification by character

`string` ডাটাকে `array`-র মত ব্যবহার করা যায়। *array element*-গুলো এক্সেস করার জন্য *array indexing* যেমন 0 (শূণ্য) সংখ্যা দিয়ে শুরু হয় যাকে *zero-based offset* বলে, তেমনি `string` ডাটাতে থাকা *character*-গুলোর প্রতিটি *character*-কে এক একটি *array element* বিবেচনা করে *zero-based offset*-র সাহায্যে এক্সেস করা যায় এবং ভ্যালু পরিবর্তন করা যায়। *array element* এক্সেস করতে `[]` (ব্রাকেট নোটেশন) ব্যবহার হয়, তেমনি *string character* এক্সেস করতেও `[]` (ব্রাকেট নোটেশন) ব্যবহার হয়। যেমন:- `$str[42]`, যা `$str` ভ্যারিয়েবলে স্টোর করা `string` ডাটার ৪৩তম ক্যারেক্টারকে এক্সেস করে।

`string` ভ্যালু এক্সেস করার বিকল্প উপায় হল [`substr()`](https://www.php.net/manual/en/function.substr.php) ফাংশন। তেমনি `string` ভ্যালু পরিবর্তন করার বিকল্প উপায় হল [`substr_replace()`](https://www.php.net/manual/en/function.substr-replace.php) ফাংশন। এই ফাংশন দুটির মাধ্যমে একের অধিক *character* এক্সেস বা পরিবর্তন করা যায়। ব্রাকেট নোটেশনে একবারে মাত্র একটি *character* এক্সেস বা পরিবর্তন করা যায়।

> **PHP 7.1.0** নেগেটিভ সংখ্যার অফসেটকেও সাপোর্ট করে। তখন `string` ভ্যালুকে তার শেষ থেকে এক্সেস করা যায়। এর আগের ভার্সনগুলোতে নেগেটিভ সংখ্যার অফসেট ব্যবহার করলে **PHP** দুই ধরণের **Error Reporting** করে। *reading*-র জন্য **E_NOTICE** আর *writing*-র জন্য **E_WARNING**। **Error Reporting** নিয়ে আমরা সামনে জানব।
>
> **PHP 8.0.0**-র আগে `string` ভ্যালু কার্লি ব্রেসের {} সাহায্যেও এক্সেস করা যেত। যেমন:- `$str{42}`। তবে **PHP 7.4.0** ভার্সন থেকে এটার ব্যবহার অনিয়মিত হয় এবং **PHP 8.0.0** ভার্সন থেকে এটা আর সাপোর্টেড নয়।
>
> ‍**কিছু গুরুত্বপূর্ণ নোট**:–
>
>> **ধরুন**, আপনার `string` ভ্যালুর মোট পরিমাণ ৫টি *character*। আপনি ভ্যালু সেট করতে গিয়ে *offset* দিলেন মোট পরিমাণ থেকে বেশি, যেমন:- `$str[9] = 'i';`। এখন কি হবে? **PHP** আপনার নির্ধারণ করে দেয়া অফসেটেই ঐ ভ্যালুটি সেট করবে। কিন্তু কিভাবে? *offset* ৫ থেকে নিয়ে ৮ পর্যন্ত সে নিজ থেকে স্পেস যোগ করে দিবে। যাতে ৫ থেকে ৮ পর্যন্ত যে গ্যাপটি তৈরি হয়েছে তা পূর্ণ হয় এবং আপনি আপনার দেয়া ইন্সট্রাকশনের আউটপুট ঠিকমত পান। **PHP** কতটা *forgiving* তাইনা বলুন!
>>
>> **আবার ধরুন**, *offset* হিসেবে আপনার একটি `int` (0-9) সংখ্যা দেয়ার কথা। আপনার মর্জি হল, `float` (1.0) সংখ্যা দেয়ার বা আপনি সংখ্যা দিলেন ঠিকই কিন্তু `string` ('1') আকারে। কি হবে? **PHP** তার সাধ্যমত চেষ্টা করবে সেটাকে `int`-এ কনভার্ট করার এবং সে অনুযায়ী আউটপুট দেয়ার। *Oh PHP! you beauty!*
>>
>> **কিন্তু আপনিও নাছোড়বান্দা**। আপনি *illegal offset type* ব্যবহার করলেন মানে *offset* হিসেবে *array or object* দিয়ে দিলেন। কি হবে? এইবার **PHP** আপনারে সহজে ছাড়বে না। সে আপনাকে **E_WARNING Error** দেবে।
>>
>> **আপনি তো একজন ক্রিয়েটিভ মানুষ**। তাই আপনি `string` ভ্যালুর একটি *character* পরিবর্তন করতে গিয়ে বিপরীতে একটিমাত্র *character* না দিয়ে একাধিক *character* দিয়ে বসলেন। কি হবে? ঐ একাধিক *character* থেকে শুধুমাত্র *first character*-টিই পরিবর্তিত জায়গায় বসবে। বাকিগুলো রিমুভ হয়ে যাবে। জানেনই তো, **PHP** কতটা *forgiving*!
>>
>> **আপনার ক্রিয়েটিভিটি এখানেই শেষ হয়নি**। ফলে `string` ভ্যালু সেট করতে গিয়ে নির্দিষ্ট *offset* দিয়ে ডাটা হিসেবে আপনি দিলেন *empty string*। যেমন:- `$str[4] = '';`। **PHP 7.1.0** এবং পরবর্তী ভার্সনগুলো আপনার এই ক্রিয়েটিভিটি মেনে নেবে না। বরং *fatal error* দিবে। আর কত বলুন? যদিও আগের ভার্সনগুলো ঐ ক্ষেত্রে ভ্যালু হিসেবে `NULL` সেট করে দিত। কিন্তু `NULL` জিনিসটা তো ভাল কিছু নয়। তাই অনেক ধরণের সমস্যা তৈরি হত তখন। এ-কারণে **PHP 7.1.0** থেকে আপনার এই ধরণের কাজকে সমর্থন করেনা।
>>
>> `array` ডাটা টাইপে একটি সুবিধা আছে, সেটা হল আপনি চাইলে *empty index operator* ব্যবহার করে `array` এর ভ্যালু সেট করতে পারবেন। যেমন:-
>>
>>> ```php
>>><?php
>>>$myArray = []; // Initialize an empty array
>>>
>>>$myArray[] = "Element 1"; // This appends "Element 1" to $myArray
>>>$myArray[] = "Element 2"; // This appends "Element 2" to $myArray
>>>
>>>print_r($myArray); // Outputs the content of the array
>>>```
>> এখন `string` ভ্যালুগুলোকে আমরা `array` এর মতই এক্সেস করতে পারি। এমতাবস্থায় আপনার যদি ইচ্ছা জাগে যে আপনি প্রথমে একটা *empty string* Initialize করবেন তারপর *empty index operator* দিয়ে ভ্যালু সেট/এক্সেস করবেন; কি হবে? **PHP 7.1.0** এবং পরবর্তী ভার্সনগুলো আপনাকে *fatal error* দিবে। আগের ভার্সনগুলো আপনার ইচ্ছার মূল্যায়ন করে `string`-কে বিহাইন্ড দা সিন `array`-তে কনভার্ট করে নিত।

##### চলুন কিছু উদাহরণ দেখি:– {#some-string-examples}

```php
<?php
// Get the first character of a string
$str = 'This is a test.';
$first = $str[0];

// Get the third character of a string
$third = $str[2];

// Get the last character of a string.
$str = 'This is still a test.';
$last = $str[strlen($str)-1];

// Modify the last character of a string
$str = 'Look at the sea';
$str[strlen($str)-1] = 'e';
```

##### *illegal offset* ব্যবহার করার উদাহরণ:– {#example-of-illegal-string-offsets}

```php
<?php
$str = 'abc';

var_dump($str['1']);
var_dump(isset($str['1']));

var_dump($str['1.0']);
var_dump(isset($str['1.0']));

var_dump($str['x']);
var_dump(isset($str['x']));

var_dump($str['1x']);
var_dump(isset($str['1x']));
```

> শুধুমাত্র `string` ডাটা টাইপই *arrays* এর মত আচরণ করতে পারে। *arrays or objects* ডাটা টাইপের ভ্যালু `([])` ব্রাকেট নোটেশন এবং `({})` অবজেক্ট নোটেশনের মাধ্যমে এক্সেস করা যায়। কিন্তু অন্য ডাটা টাইপকে `string` এর মত `([])` ব্রাকেট নোটেশন বা`({})` অবজেক্ট নোটেশনের মাধ্যমে এক্সেস করার চেষ্টা করলে রেজাল্ট `null` আসবে।

### প্রয়োজনীয় `string` *operators and functions* {#useful-functions-and-operators}

`string` ডাটা *concatenate* করতে মানে একটি `string` ভ্যালুর সাথে অন্য একটি জোড়া লাগাতে `(.)` ডট অপারেটর ব্যবহৃত হয়। `(+)` (*addition*) অপারেটর দিয়ে এই কাজ হবেনা। বিস্তারিত জানতে *[String operators](https://www.php.net/manual/en/language.operators.string.php)* নিয়ে পড়ুন।

*string manipulation* এর জন্য *[string functions section](https://www.php.net/manual/en/ref.strings.php)* পড়ুন।

*URL strings* ভিত্তিক ফাংশনগুলো জানতে চাইলে *[functions for URL strings](https://www.php.net/manual/en/ref.url.php)* নিয়ে পড়ুন। *URL encrypt/decrypt* এর জন্য পড়ুন (*[Sodium](https://www.php.net/manual/en/ref.sodium.php)*) এবং (*[Hash](https://www.php.net/manual/en/ref.hash.php)*)।

ক্যারেক্টার টাইপ নিয়ে জানতে *[character type functions](https://www.php.net/manual/en/ref.ctype.php)* দেখুন।

### *type cast* করে `string` এ রূপান্তর প্রক্রিয়া {#string-type-casting}

কোন ভ্যালুকে `string` এ রূপান্তর করতে হলে ভ্যালুর পূর্বে `(string)` লিখে *type cast* করা যেতে পারে, অথবা [`strval()`](https://www.php.net/manual/en/function.strval.php) ফাংশন ব্যবহার করা যেতে পারে।

যে *expression scope* এর ভেতর শুধুমাত্র `string` ডাটার প্রয়োজন হয়, সেখানে *String conversion* অটোমেটিক হয়। যেমন:- [`echo`](https://www.php.net/manual/en/function.echo.php) বা [`print`](https://www.php.net/manual/en/function.print.php) ফাংশন, অথবা যখন কোন *Variable*-কে `string` ডাটার সাথে তুলনা (*compare*) করা হয়। আরো ভালোভাবে বুঝতে *[Types](https://www.php.net/manual/en/language.types.php)*, *[Type Juggling](https://www.php.net/manual/en/language.types.type-juggling.php)* এবং [`settype()`](https://www.php.net/manual/en/function.settype.php) ফাংশন সম্পর্কে জানুন।

`(bool) true` `string`-এ কনভার্ট হলে তার ভ্যালু হবে `(string) "1"`। আর `false` কনভার্ট হবে *(empty string)* `("")`-এ।

`int` ও `float` ডাটা টাইপকে `string`-এ কনভার্ট করলে ভ্যালুগুলো *numeric format* থেকে *textual format*-এ রূপান্তরিত হবে। *Floating point numbers*-কে *exponential notation (4.1E+6)* ব্যবহার করেও `string`-এ কনভার্ট করা যায়।

> **PHP 8.0.0** থেকে `float` ডাটা প্রকাশ করার জন্য *period* বা (.) ডট চিহ্নই *(e.g., 3.14)* *decimal point character* হিসেবে সব জায়গায় বিবেচিত হবে। আগের ভার্সনগুলিতে *script* এর *locale setting* এর *LC_NUMERIC* ক্যাটাগরিতে যা সেট করা থাকত তাই *decimal point character* হিসেবে বিবেচিত হত। [`setlocale()`](https://www.php.net/manual/en/function.setlocale.php) এর মাধ্যমে সেটা সেট করা যেত।

`array` ডাটা টাইপকে `string`-এ কনভার্ট করলে রেজাল্ট সবসময় *textual format*-এ (`"Array"`), এটাই পাবেন। তাই `echo` বা `print` করলে এই ভ্যালুই দেখতে পাবেন। *Array* ডাটা স্ট্রাকচার দেখতে পাবেন না। *Array* এর *single element* দেখতে হলে *array key/index construction* ব্যবহার করতে হবে। যেমন:- `echo $arr['foo'];`। *Array, object or resource* নিয়ে বিস্তারিত তথ্য দেখতে হলে [`print_r()`](https://www.php.net/manual/en/function.print-r.php) বা [`var_dump()`](https://www.php.net/manual/en/function.var-dump.php) ফাংশন ব্যবহার করতে হবে।

`object`-কে `string`-এ কনভার্ট করতে অবশ্যই *magic method* [`__toString()`](https://www.php.net/manual/en/language.oop5.magic.php) ব্যবহার করতে হবে। *magic method* সহ `object` নিয়ে আমরা সামনে জানব।

`(resource)` ডাটা টাইপকে `string`-এ কনভার্ট করলে তা সবসময় একটি নির্দিষ্ট *structure*-এ কনভার্ট হবে। *structure*-টি হল:- `"Resource id #1"`, যেখানে 1 একটি *unique resource number* নির্দেশ করে। *script* টি *execution* হওয়ার পর থেকে লাইফটাইমের জন্য ঐ *unique resource number* টি **PHP** তার *runtime*-এ *Resource* ডাটার সাথে সেট করে দিবে। এই *unique number* টি অন্য কোন `Resource` ডাটার সাথে আর সেট করবে না। এত সুবিধা থাকার পরও এই ধরণের স্ট্রাকচারের উপর ভরসা করা উচিত নয়। কারণ ভবিষ্যতে এই স্ট্রাকচারে পরিবর্তন হতেই পারে।

`null`-কে `string`-এ কনভার্ট করলে রেজাল্ট হবে *(empty string)* `("")`।

অনেক **PHP values**-কে স্থায়ীভাবে স্টোর করে রাখতে কখনো কখনো `string`-এ কনভার্ট করা হয়। এই প্রক্রিয়াকে *serialization* বলে। এটি করতে [`serialize()`](https://www.php.net/manual/en/function.serialize.php) ফাংশনটি ব্যবহার করতে হয়।

`string` এর আরো ডিটেইলস জানতে পড়ুন *[Details of the String Type](https://www.php.net/manual/en/language.types.string.php#language.types.string.details)*।
