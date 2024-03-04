# পিএইচপি মৌলিক

## Constant

[*constant*](https://www.php.net/manual/en/language.constants.php) হল একটি *identifier* বা নাম, যার অধীনে কোন একটি ভ্যালু স্টোর করা যায়। *Variables* এর মতই। পার্থক্য হল, *constant* ভ্যালু কখনো পরিবর্তন করা যায় না। *Variables* এর মতই *constant* এর নামও *case-sensitive*। নামকরণের *convention* অনুযায়ী *constant* এর নাম সবসময় *uppercase* লেটারে হবে।
>
> PHP 8.0.0-র আগে [define()](https://www.php.net/manual/en/function.define.php) ফাংশন ব্যবহার করে কোন *constant* ডিফাইন করা হলে তার *case-sensitive* হওয়ার প্রয়োজন ছিলনা।

*constant*-এর নাম নির্ধারণে ঐ [সমস্ত রুল](#variable-naming-rules) ফলো করতে হবে যা *Variables* বা **PHP** এর অন্যান্য *label* এর ক্ষেত্রে অনুসরণ করতে হয়।

##### Valid and invalid constant names এর উদাহরণ:– {#valid-invalid-constant-names}

```php
<?php

// Valid constant names
define("FOO",     "something");
define("FOO2",    "something else");
define("FOO_BAR", "something more");

// Invalid constant names
define("2FOO",    "something");

// This is valid, but should be avoided:
// PHP may one day provide a magical constant
// that will break your script
define("__FOO__", "something");
```

> *constant* এর *scope* হল *global*। তাই স্ক্রিপ্টের যেকোন জায়গা থেকে তাকে এক্সেস করা যাবে, *scope* যাইহোক না কেন। *scope* সম্পর্কে আরো জানতে দেখুন [*variable scope*](https://www.php.net/manual/en/language.variables.scope.php)

### Constant Syntax

*constant* লেখার ২টি *Syntax* আছে।

1. `define()` ফাংশন ব্যবহার করে

> ##### Defining Constants Example:-
> ```php
><?php
>define("CONSTANT", "Hello world.");
>echo CONSTANT; // outputs "Hello world."
>
>// Constant arrays
>define('ANIMALS', array(
>    'dog',
>    'cat',
>    'bird'
>));
>echo ANIMALS[1]; // outputs "cat"
>```

2. `const` *keyword* ব্যবহার করে

> ```php
> <?php
> const DB_HOST = 'localhost';
> ```

এই ২টি *Syntax* এর ভেতর ব্যবহারগত পার্থক্যও আছে।

- `define()` ফাংশন ব্যবহার করে *constant* ডিফাইন করলে ভ্যালু হিসেবে আপনি যেকোন ধরণের ডাটা সেট করতে পারেন। *scalar expressions* (bool, int, float and string) ডাটা থেকে নিয়ে শুরু করে ***variable, constants, mathematical operations, function call, result of an expression*** যা বলুন না কেন কোন সীমাবদ্ধতা ছাড়াই আপনি ব্যবহার করতে পারবেন। যেমন:-
>
> ```php
> <?php
> define('PI', 3.14);
> define('TODAY', date('Y-m-d'));
> ```

- `const` *keyword* ব্যবহার করে *constant* ডিফাইন করলে শুধুমাত্র *scalar expressions* এবং *scalar expressions* বহন করে এমন *array*-কে ভ্যালু হিসেবে সেট করতে পারবেন। অন্যকিছু নয়। *resource* ডাটা টাইপও সেট করতে পারবেন, তবে সমস্যা হওয়ার সম্ভাবনা থাকায় তা এড়িয়ে চলুন। উদাহরণ:-

>##### Defining Constants using the `const` keyword Example:-
>```php
><?php
>// Simple scalar value
>const CONSTANT = 'Hello World';
>
>echo CONSTANT;
>
>// Scalar expression
>const ANOTHER_CONST = CONSTANT.'; Goodbye World';
>echo ANOTHER_CONST;
>
>const ANIMALS = array('dog', 'cat', 'bird');
>echo ANIMALS[1]; // outputs "cat"
>```

### Constant ভ্যালু এক্সেস করবেন কিভাবে? {#constant-accessing}

*constant* ভ্যালু এক্সেস করতে *constant* নাম বা *identifier* ব্যবহার করুন। *Variables* এর মত *constant* এক্সেস করতে নামের পূর্বে `($)` ডলার সাইন দেয়ার প্রয়োজন নাই।

[`constant()`](https://www.php.net/manual/en/function.constant.php) ফাংশন দিয়েও *constant* ভ্যালু এক্সেস করতে পারেন যদি *constant* এর নাম *dynamically* নির্ধারণ করা সম্ভব হয়। যেমন:-
>
> ```php
> <?php
> define('MY_CONSTANT', 'Hello, World!');
>
>// Get the constant's name dynamically, stored in a variable
>$constantName = 'MY_CONSTANT';
>
>// Retrieve the value of the constant using constant()
>$constantValue = constant($constantName);
>
>echo $constantValue;  // Output: Hello, World!
> ```

আর [`get_defined_constants()`](https://www.php.net/manual/en/function.get-defined-constants.php) দিয়ে ডিফাইন করা সকল *constant* এর লিস্ট পাবেন।

> **নোট:**- *constant* আর গ্লোবাল স্কোপের *Variables* একই *namespace* এর ভেতরে থাকেনা। তাই `true` আর `$TRUE` কখনোই এক নয়।
>
> **PHP 7.2.0** এর আগের কথা। তখন যদি কেই *constant* ডিফাইন না করেই কোডবেসের কোথাও ঐ *constant* কে রেফার করে তার ভ্যালু এক্সেস করার চেষ্টা করত **PHP** তার জন্য ঐ ডাটাকে *(as fallback)* `string`-এ কনভার্ট করে `string` ভ্যালু হিসেবে বিবেচনা করত এবং *E_NOTICE* দিত।
>
>>```php
>> <?php
>>// Assuming CONSTANT is not defined
>>$value = CONSTANT;
>>```
>
>**PHP 7.2.0** ও তার পরবর্তী ভার্সনগুলোতে (**PHP 8.0.0 পর্যন্ত**) এই *(fallback)* সিস্টেমটা জনপ্রিয়তা হারায়, ঐ ভার্সনগুলো তখন *E_WARNING* দিত। অবশেষে **PHP 8.0.0** এই সিস্টেমকে একেবারে রহিত করে দেয়। ফলে এখন ফ্যাটাল এরর পাবেন।
>
>>```php
>> <?php
>>$value = UNDEFINED_CONSTANT; // PHP 8.0.0 onwards: Throws an Error
>>```
>
> **নোট:**- *constant* এর ভ্যালু সেট করা হয়েছে নাকি *undefined* আছে বুঝতে [`defined()`](https://www.php.net/manual/en/function.defined.php) ফাংশন ব্যবহার করুন।
>
>>```php
>><?php
>>if (!defined('MY_CONSTANT')) {
>>    define('MY_CONSTANT', 'Some value');
>>}
>>
>>// Check if the constant is defined
>>if (defined('MY_CONSTANT')) {
>>    $value = MY_CONSTANT;
>>} else {
>>    // Constant is not defined, handle accordingly
>>}
>>```

### *constant* এবং *Variables* এর ভেতর কি পার্থক্য? {#differences-between-constants-variables}

- *constant* এর নামের পূর্বে `($)` ডলার সাইন লাগে না। *Variables* এর পূর্বে লাগে।
- *constant* যেমনি যেকোন জায়গা বা স্কোপে ডিফাইন করা যায়, তেমনি যেকোন জায়গা বা স্কোপ থেকে এক্সেসও করা যায়। *Variables* এর বেলায় স্কোপ মেইনটেইন করতে হয়।
- *Variables* এর ভ্যালু বারবার পরিবর্তন করা যায়, *constant* এর ভ্যালু একবার সেট করার পর তা আর পরিবর্তন করা যায় না।
- *Variables* এর ভ্যালু *undefined* হতে পারে, *constant* এর ভ্যালু কখনোই *undefined* হতে পারেনা।
- *constant* শুধুমাত্র *scalar values* বা *scalar value বহনকারী arrays* এর ক্ষেত্রে কাজ করে, *Variables* এর এমন সীমাবদ্ধতা নাই।

> **নোট:-** `const` *keyword* ব্যবহার করে *constant* ডিফাইন করতে হবে স্ক্রিপ্টের *top-level scope*-এ। কারণ এসকল *constant* ডিফাইন হয় *compile-time*-এ। তাই ***functions, loops, if statements or try/catch blocks*** এর ভেতরে `const` *keyword* দিয়ে *constant* ডিফাইন করা যাবেনা। `define()` ফাংশনের বেলায় এই সীমাবদ্ধতা নাই।