# পিএইচপি মৌলিক

## Variables

#### Variables কাকে বলে?

Variables হচ্ছে কোন তথ‍্য (data) ধারণ করে রাখার একটি মাধ‍্যম। যেকোন application এর তথ্যভাণ্ডারে (memory) অস্থায়ীভাবে (temporarily) কোন তথ‍্য (data) সংরক্ষণ (store) করার জন্য Variables ব্যবহৃত হয়।

অস্থায়ীভাবে (temporarily) কথার অর্থ হল, আপনি চাইলে এই ডাটাটা যেকোন সময় পরিবর্তন করতে পারবেন। যেহেতু ভ্যারিয়েবলের ডাটা পরিবর্তন করা যায় তাই এর নাম Variables —অর্থাৎ যার ডাটা বা ভ্যালু ভ্যারি (vary) করে বা পরিবর্তন হয়।

যদি কখনোই ডাটা বা ভ্যালু পরিবর্তন করার প্রয়োজন দেখা না দেয়, তখন Constant ব্যবহৃত হয়। এটা নিয়ে আমরা পরবর্তীতে জানতে পারব। চিন্তা করবেন না।

## PHP তে Variables লেখার নিয়ম: {#variable-naming-rules}

**PHP-তে** ভ‍্যারিয়েবল লিখতে সবার আগে একটা $ (ডলার) সাইন দিতে হয়। একটি ভ‍্যালিড ভ‍্যারিয়েবলের নাম শুরু হয় প্রথমে ডলার সাইন ($) তারপর লেটার/অক্ষর অথবা আন্ডার-স্কোর দিয়ে। এর পর তার সাথে যে কোন অক্ষর, সংখ‍্যা বা আন্ডার-স্কোর থাকতে পারে। কিন্তু কোন সংখ্যা বা বিশেষ চিহ্ন দিয়ে ভ‍্যারিয়েবলের নাম শুরু হতে পারবে না। মনে রাখবেন ভ‍্যারিয়েবলের নাম *case-sensitive*। তাই `$var` এবং `$Var` দুটো ভিন্ন ভ্যারিয়েবল।
```php
<?php
$var = 'Bob';
$Var = 'Joe';
echo "$var, $Var";      // outputs "Bob, Joe"

$4site = 'not yet';     // invalid; starts with a number
$_4site = 'not yet';    // valid; starts with an underscore
$täyte = 'mansikka';    // valid; 'ä' is (Extended) ASCII 228.
```

## PHP Variables এর ডিফল্ট ভ্যালু কি?

ডিফল্ট ভাবে, _Variable declare_ করার সময় এর ভ্যালু হিসেবে আপনি যে মান বা ভ্যালু সেট করেন, সেটাই Variable-টির মান বা ভ্যালু হিসেবে নির্ধারিত হয়। `echo` অথবা `var_dump` করলে আপনি সেই ভ্যালুটিই দেখতে পাবেন। যদি পরবর্তীতে আপনি তার অন্য কোন মান বা ভ্যালু সেট করেন তখন আপডেটেড ভ্যালুটি দেখতে পাবেন।

```php
<?php

$name = 'Polash';

echo $name; // Output: Polash

$name = 'Mahmud';

echo $name; // Output: Mahmud

```

আপনি চাইলে একটা _Variable_ এর মান বা ভ্যালু হিসেবে পূর্বে সেট করা অন‍্যকোন _Variable_ দিতে পারেন/এসাইন করতে পারেন। সেক্ষেত্রে পূর্বে সেট করা _Variable-এ_ যদি ভ্যালু এসাইন করা থাকে তাহলে নতুন _Variable-টিও_ সেই ভ্যালু বা মান ধারণ করবে।

```php
<?php
$name = 'Polash';

$firstName = $name;

echo $firstName; // Output: Polash
```

আবার আপনি চাইলে একটা _Variable_ এর মান বা ভ্যালু হিসেবে অন‍্যকোন _Variable_ এসাইন করার পর  ২টি _Variable_ এর যেকোন একটি বা উভয়টির ভ্যালু পরিবর্তন করতে পারবেন। সেক্ষেত্রে একটির ভ্যালু পরিবর্তন করার কারণে অন্যটির ভ্যালু বা মানের কোন পরিবর্তন হবে না। একে বলে (assignment by value) ।

```php
<?php
$name = 'Polash';

$firstName = $name;

$name = 'Mahmud';

echo $firstName; // Output: Polash
// try to change the value of $firstName variable and see the output

echo $name; // Output: Mahmud
```

### Assigned by reference variable টা কি?{#assigned-by-reference-variable}

অবশ্য, যদি ১টি _Variable_ এর ভ্যালু পরিবর্তন করলে অন্যটির  ভ্যালুও আপনাআপনি পরিবর্তন হবে এমন সুবিধা আপনি চান, তখন _Variable_ এসাইন করার সময় পূর্বের _Variable_ নামের আগে একটি `&` (_ampersand_) চিহ্ন ব‍্যবহার করুন। এই প্রক্রিয়াকে [_assigned by reference_](https://www.php.net/manual/en/language.references.whatdo.php#language.references.whatdo.assign) বলে। যেমন নিচের $bar ভ্যারিয়েবলে $foo ভ্যারিয়েবলের অ্যাড্রেস অ্যাসাইন করা হয়েছে & চিহ্নের মাধ্যমে। ফলে এরা র‍্যামের একই জায়গাকে নির্দেশ করছে। তাই এদের মধ্যে ১টি ভ্যারিয়েবলের ভ্যালু পরিবর্তন করলে অন্যটির ভ্যালুও আপনাআপনি পরিবর্তিত হয়ে যাবে।

```php
<?php
$foo = 'Bob';              // Assign the value 'Bob' to $foo
$bar = &$foo;              // Reference $foo via $bar.
$bar = "My name is $bar";  // Alter $bar...
echo $bar;                 // Output: My name is Bob
echo $foo;                 // $foo is altered too. Meaning it's output also: My name is Bob
```

এখানে একটা গুরুত্বপূর্ণ বিষয় হল, শুধুমাত্র ইতিপূর্বে এসাইন করা _Variable_ এর ক্ষেত্রেই assigned by reference-এই অপারেশন ভ্যালিড। অন‍্যথায় এটা কাজ করবে না।

```php
<?php
$foo = 25;
$bar = &$foo;      // This is a valid assignment.
$bar = &(24 * 7);  // Invalid; references an unnamed expression.

function test()
{
   return 25;
}

$bar = &test();    // Invalid.
```

## _Variable_-এর নাম কিভাবে লিখলে ভালো হবে?

_Variable-_ এর নাম অনেক ভাবেই লেখা যায়, এবং সবগুলোই ভ্যালিড। তবে একটা প্রজেক্ট বা এপ্লিকেশনে যে কোন একটা স্টাইল ফলো করা উচিত।

```php
$myname    // literal words
$my_name   // Snakecase: Words are delimited by an underscore.
$myNameIs  // Camelcase: Words are delimited by capital letters, except the initial word.
$MyNameIs  // Pascalcase: Words are delimited by capital letters.

// Hungarian Notation with Camelcase notation
$arrDistributeGroup  // Array called “Distribute Group”
$sUserName           // String called “User Name”
$iRandomSeed         // Integer called “Random Seed”
```

অবশ্য যখন কোন পাবলিক প্রজেক্ট বা ওপেন সোর্স প্রোগ্রামে কাজ করবেন তখন কিছু _recommended standards_ এবং _conventions_ আপনাকে ফলো করতে হবে, _for better code, for better product_। সেসকল _recommended conventions_ জানতে [**PHP-FIG এর ওয়েবসাইট**](https://www.php-fig.org/psr/) অনুসরণ করুন।

**PHP-তে** dynamically variable নাম সেট করা যায়। আবার dynamically variable এর ভ্যালুকে এক্সেসও করা যায়। **PHP-র** ভাষায় এটাকে **_variable variable_** বলে। Dynamically variable নাম সেট করা:–

```php
$greet = 'hello';

$$greet = 'world';        // sets $hello as the variable name

echo "$greet $hello";     // output: hello world
echo "$greet {$$greet}";  // output: same as above
```

Dynamically variable এর ভ্যালু এক্সেস করা:–

```php
$fname = 'Polash';
$name = 'fname';

echo $$name;              // print: Polash

echo 'Hello '.$name;      // output: Hello fname
echo "\n";                // new line
echo "Hello $$name";      // output: Hello $fname
echo "Hello {$$name}";    // output: Hello Polash
```
