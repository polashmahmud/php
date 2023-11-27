# পিএইচপি Array ভিত্তিক প্রয়োজনীয় কিছু ফাংশন

**পড়া এবং বোঝার সুবিধার্থে ফাংশনগুলো _A to Z_ বা _Ascending Order_ এ দেয়া হল। যদিও ক্লাস ভিডিওতে _Most Used_ অর্ডারে দেখানো হয়েছে। নির্দিষ্টভাবে বললে আমরা পিএইচপি ম্যানুয়ালের [Array Functions](https://www.php.net/manual/en/ref.array.php) এই লিস্টটা ফলো করেছি।**

## array_chunk()

তালিকায় প্রথমেই আসে [`array_chunk()`](https://www.php.net/manual/en/function.array-chunk.php) ফাংশন।

একটি অ্যারেকে নির্দিষ্ট একটি দৈর্ঘ্য _(given length)_ অনুযায়ী খণ্ডে খণ্ডে ভাগ করার প্রয়োজন হলে আমরা `array_chunk()` এই ফাংশনটি ব্যবহার করতে পারি। **দ্রষ্টব্যঃ** শেষ খণ্ডটির দৈর্ঘ্য গিভেন লেংথের থেকে কম হতে পারে।

### ফাংশন প্যারামিটার

এই ফাংশনে ৩টি প্যারামিটার সেট করা আছে। ফলে আমরা ৩টিই আর্গুমেন্ট পাঠাতে পারব।

1. প্রথম আর্গুমেন্টে ভাগ করতে চাওয়া অ্যারে দিতে হবে
2. দ্বিতীয় আর্গুমেন্টে কাঙ্খিত দৈর্ঘ্য বা লেংথটি দিতে হবে, যার উপর ভিত্তি করে অ্যারেটির বিভাজন ঘটবে।
3. এই প্যারামিটারটি ঐচ্ছিক। ২টি আর্গুমেন্ট পাঠাতে পারব, `true` এবং `false`। ডিফল্টভাবে `false` সেট করা থাকে। যার দরুণ, প্রতিটা _chunk_ বা খণ্ডের ইনডেক্স 0 থেকে শুরু হয়। যদি `true` সেট করা হয় তাহলে **Associative Array** হিসেবে _key_ গুলো সংরক্ষণ করে। ফলে ইনডেক্স 0 থেকে শুরু না হয়ে যেখান থেকে অ্যারেটা বিভক্ত হয়েছে সেই ইনডেক্স ভ্যালু বা _key_ টা বিভাজিত নতুন অ্যারেতে বিদ্যমান থাকে।

#### ফাংশন কি রিটার্ন করে?

এই ফাংশনটি মাল্টিডাইমেনশনাল অ্যারে রিটার্ন করে, যার ইনডেক্সিং গণনা শূণ্য থেকে শুরু হয়। যেখানে প্রতিটা ডাইমেনশন (খণ্ডিত অ্যারে) লেংথে দেয়া সংখ্যার ভ্যালু ধারণ করে।

উদাহরণঃ

```php
<?php
$fruits = array('banana', 'apple', 'orange', 'plum', 'dates');

$someFruits = array_chunk($fruits, 2);
$fruitsKeyPreserved = array_chunk($fruits, 2, true);

print_r($someFruits);

print_r($fruitsKeyPreserved);
```

আউটপুটঃ

```
Array
(
    [0] => Array
        (
            [0] => banana
            [1] => apple
        )

    [1] => Array
        (
            [0] => orange
            [1] => plum
        )

    [2] => Array
        (
            [0] => dates
        )
)

Array
(
    [0] => Array
        (
            [0] => banana
            [1] => apple
        )

    [1] => Array
        (
            [2] => orange
            [3] => plum
        )

    [2] => Array
        (
            [4] => dates
        )
)
```

**Note:** ২য় আর্গুমেন্ট তথা লেংথ যদি 1 এর কম হয় তাহলে **পিএইচপি 8.0.0** থেকে [**ValueError**](https://www.php.net/manual/en/class.valueerror.php) জাতীয় _Error_ থ্রো করে থাকে।

## array_filter()

এই ফাংশনের মাধ্যমে আমরা কোন একটি অ্যারের সব এলিমেন্ট গুলোকে একটি ফাংশনের মধ্যে পাঠাতে পারি, যাকে প্রোগ্রামিংয়ের ভাষায় _callback function_ বলে। এই কলব্যাক ফাংশনে আমরা যে কন্ডিশন প্রোভাইড করব ফাংশনটি অ্যারের প্রতিটি এলিমেন্টের উপর সেটা এপ্লাই করবে। যদি কন্ডিশন ম্যাচ করে তথা `true` রিটার্ন হয়, ম্যাচ করা এলিমেন্টগুলো আমরা নতুন একটি অ্যারেতে স্টোর করতে পারব।

ফলে কার্যত ফাংশনটি প্রথমে আমাদের যোগান দেয়া কন্ডিশন অনুযায়ী অ্যারে এলিমেন্টগুলো ফিল্টার করে, অতঃপর ফিল্টারড ভ্যালু রিটার্ন দেয়, যা আমরা একটি ভ্যারিয়েবলে স্টোর করে পরবর্তীতে ব্যবহার করতে পারি।

খেয়াল রাখবেন, কন্ডিশন পাস করা এলিমেন্টগুলোর _key_ ফিল্টার হয়ে আসা অ্যারেতে সংরক্ষিত থাকে। ফলে _indexed array_ এর ইনডেক্সিং অর্ডারে অনিয়ম দৃশ্যমান হতে পারে। এটা ঠিক করতে [`array_values()`](https://www.php.net/manual/en/function.array-values.php) ফাংশনটি ব্যবহার করতে পারেন।

### ফাংশন প্যারামিটার

এই ফাংশনেও ৩টি প্যারামিটার সেট করা আছে। ফলে আমরা ৩টিই আর্গুমেন্ট পাঠাতে পারব।

1. প্রথম আর্গুমেন্ট হবে ফিল্টার করতে চাওয়া অ্যারে।
2. দ্বিতীয় আর্গুমেন্ট হবে একটি কলব্যাক ফাংশন। এই ফাংশনটিই অ্যারের প্রতিটি এলিমেন্টের উপর একবার করে কন্ডিশন রান করবে। ম্যাচ করলে `true` রিটার্ন দেবে, নাহয় `false`। অবশেষে ফলাফল অনুযায়ী পুরো অ্যারেটাকে ফিল্টার করে রিটার্ন দেবে।

আপনি যদি কলব্যাক ফাংশন না দেন, তখন [`array_filter()`](https://www.php.net/manual/en/function.array-filter.php) ফাংশনটি অ্যারের সকল _empty entries_ গুলো (সহজ ভাষায় _falsey_ ভ্যালুগুলো) রিমুভ করে দেবে। পিএইচপি _empty_ কিভাবে ডিফাইন করে জানতে পড়ুন [`empty()`](https://www.php.net/manual/en/function.empty.php)।

3. এটি ঐচ্ছিক। এই আর্গুমেন্টে আপনি ফিল্টার করার _mode_ পাস করতে পারবেন।

এই মোডের মাধ্যমে আমরা মূলত কলব্যাক ফাংশনে এক ধরণের _Flag_ পাঠাতে পারি। যে ফ্ল্যাগগুলোর সাহায্যে আমরা ফাংশনটির ফিল্টার করার ধরণ বদলাতে পারি। এর ডিফল্ট ভ্যালু থাকে 0, যার অর্থ ফাংশনটি অ্যারে এলিমেন্টগুলোর শুধুমাত্র ভ্যালুর উপর কন্ডিশন চালিয়ে সে অনুযায়ী ফিল্টার করবে।

তবে আপনি যদি ফ্ল্যাগ **ARRAY_FILTER_USE_KEY** প্রোভাইড করেন, তখন ফাংশনটি অ্যারে এলিমেন্টগুলোর শুধুমাত্র _key_ এর উপর কন্ডিশন চালিয়ে সে অনুযায়ী ফিল্টার করবে। **ARRAY_FILTER_USE_BOTH** ফ্ল্যাগ দিলে _key_ ও ভ্যালু উভয়টার উপর কন্ডিশন চালিয়ে সে অনুযায়ী ফিল্টার করবে।

#### ফাংশন কি রিটার্ন করে?

ফাংশনটি ফিল্টারড অ্যারে রিটার্ন করে।

উদাহরণঃ

```php
<?php
$numbers = array(1, 2, 3, 4, 5);

$evenNumbers = array_filter($numbers, function ($number) {
    return $number % 2 == 0;
});

print_r($evenNumbers);
```

আউটপুটঃ

```
Array
(
    [1] => 2
    [3] => 4
)
```

আরেকটি উদাহরণঃ

```php
<?php

$users = [
    ['username' => 'john', 'score' => 0],
    ['username' => 'jane', 'score' => 1],
    ['username' => 'doe', 'score' => 2],
];

$activeUsers = array_filter($users, function ($user) {
    return $user['score'] > 0;
});

print_r($activeUsers);
```

আউটপুটঃ

```
Array
(
    [1] => Array
        (
            [username] => jane
            [score] => 1
        )

    [2] => Array
        (
            [username] => doe
            [score] => 2
        )

)
```

কলব্যাক ফাংশন প্রোভাইড না করে একটি উদাহরণ দেখিঃ

```php
<?php

$entry = [
    0 => 'foo',
    1 => false,
    2 => -1,
    3 => null,
    4 => '',
    5 => '0',
    6 => 0,
];

print_r(array_filter($entry));
```

আউটপুটঃ

```
Array
(
    [0] => foo
    [2] => -1
)
```

মোড ব্যবহার করে একটি উদাহরণ দেখিঃ

```php
<?php

$arr = ['a' => 1, 'b' => 2, 'c' => 3, 'd' => 4];

var_dump(array_filter($arr, function($k) {
    return $k == 'b';
}, ARRAY_FILTER_USE_KEY));

var_dump(array_filter($arr, function($v, $k) {
    return $k == 'b' || $v == 4;
}, ARRAY_FILTER_USE_BOTH));
```

আউটপুটঃ

```
array(1) {
  ["b"]=>
  int(2)
}
array(2) {
  ["b"]=>
  int(2)
  ["d"]=>
  int(4)
}
```

## array_flip()

এবার আসুন [`array_flip()`](https://www.php.net/manual/en/function.array-flip.php) ফাংশন সম্পর্কে জানি। এই ফাংশনের মাধ্যমে আমরা কোন অ্যাসোসিয়েটিভ অ্যারের _key_ ও ভ্যালুর ভেতর এক্সচেঞ্জ ঘটাতে পারি অর্থাৎ ভ্যালুকে _key_ এবং _key_ কে ভ্যালুতে পরিনত করতে পারি। ফলে একটি স্বাভাবিক অ্যারেকে তার _key_ ও ভ্যালুর অর্ডার বিপরীত করে দিয়ে আউটপুট হিসেবে ঐ বিপরীতমূখী অ্যারেটা আমরা রিটার্ন পেয়ে থাকি। পিএইচপি যেহেতু সকল অ্যারেকে ইন্টার্নালি অ্যাসোসিয়েটিভ অ্যারের মত বিবেচনা করে ফলে সকল অ্যারেতেই আমরা এই এক্সচেঞ্জ ঘটাতে পারব।

মনে রাখতে হবে, অ্যারের ভ্যালুগুলো ভ্যালিড _keys_ হতে হবে। ফলে _keys_ গুলো `int` অথবা `string` টাইপ ছাড়া অন্য কোন টাইপের হলে রেজাল্ট অ্যারেতে সেগুলো অন্তর্ভুক্ত হবেনা এবং এর ফলে একটি ওয়ার্নিং শো করবে। সাথে এটাও মনে রাখতে হবে, এক্সচেঞ্জ করতে চাওয়া অ্যারেতে যদি একই ধরণের একাধিক ভ্যালু থাকে, তাহলে সর্বশেষ ভ্যালুটিই _key_ তে রূপান্তরিত বা এক্সচেঞ্জ হয়ে রিটার্ন হবে। অন্য ভ্যালুগুলো _key_ তে অন্তর্ভুক্ত হবেনা, বরং হারিয়ে যাবে।

### ফাংশন প্যারামিটার

এই ফাংশনে 1টি মাত্র প্যারামিটার সেট করা আছে। ফলে এই 1টি আর্গুমেন্ট পাঠানো বাধ্যতামূলক।

1. এই আর্গুমেন্টে যেই অ্যারেকে আমরা এক্সচেঞ্জ করতে চাই সেটা পাঠাব।

#### ফাংশন কি রিটার্ন করে?

ফাংশনটি _key_ ও ভ্যালুর ভেতর এক্সচেঞ্জ ঘটানোর পর পরিবর্তিত ভ্যালু/ভ্যালুগুলো অ্যারে আকারে রিটার্ন করে।

উদাহরণঃ

```php
<?php
$fruits = array(
    'a' => 'banana',
    'b' => 'apple',
    'c' => 'orange'
);

$flippedFruits = array_flip($fruits);

print_r($flippedFruits);
```

আউটপুটঃ

```
Array
(
    [banana] => a
    [apple] => b
    [orange] => c
)
```

অ্যারের যদি একই ধরণের একাধিক ভ্যালু থাকে, তাহলে কি রিটার্ন হবে? উদাহরণ দেখিঃ

```php
<?php
$input = array("a" => 1, "b" => 1, "c" => 2);
$flipped = array_flip($input);

print_r($flipped);
```

আউটপুটঃ

```
Array
(
    [1] => b
    [2] => c
)
```

## array_key_exists()

অ্যারে ফাংশনগুলোর মধ্যে আরো একটি গুরুত্বপূর্ণ ফাংশন হল, [`array_key_exists()`](https://www.php.net/manual/en/function.array-key-exists.php)। এই ফাংশনের মাধ্যমে আমাদের কাঙ্খিত অ্যাসোসিয়েটিভ অ্যারেতে প্রদত্ত key বা ইনডেক্সড অ্যারেতে প্রদত্ত index টি আছে কিনা তা চেক করতে পারি।

### ফাংশন প্যারামিটার

এই ফাংশনেও ২টি প্যারামিটার সেট করা আছে। ফলে আমাদেরকে ২টি আর্গুমেন্টই পাঠাতে হবে।

1. এই ফাংশনের প্রথম আর্গুমেন্টে অ্যারেতে যে keyটি আছে কি নেই চেক করতে চাই সেটা দিতে হবে।
2. দ্বিতীয় আর্গুমেন্টে যে অ্যারের অভ্যন্তরে আমরা চেকটা পরিচালনা করতে চাই সেটা দিতে হবে।

#### ফাংশন কি রিটার্ন করে?

ফাংশনটি `true` রিটার্ন করবে যদি অ্যারেতে আমাদের কাঙ্খিত keyটি বিদ্যমান থাকে, অন্যথায় `false` রিটার্ন করবে।

মনে রাখতে হবে, এই ফাংশনটি মাল্টিডাইমেনশনাল অ্যারের নেস্টেড key গুলোর ক্ষেত্রে কাজ করবেনা। শুধুমাত্র প্রথম ডাইমেনশনের অ্যারে key গুলোর ক্ষেত্রে কাজ করবে।

উদাহরণঃ

```php
<?php
$fruits = array(
    'a' => 'banana',
    'b' => 'apple',
    'c' => 'orange'
);

if (array_key_exists('a', $fruits)) {
    echo 'Key exists';
} else {
    echo 'Key does not exist';
}
```

আউটপুটঃ

```
Key exists
```

### Diffrence between array_key_exists() and isset()

`array_key_exists()` এই অ্যারে ফাংশনটি এবং ভ্যারিয়েবল হ্যান্ডলার ফাংশন [`isset()`](https://www.php.net/manual/en/function.isset.php) এর ভেতর একটি গুরুত্বপূর্ণ পার্থক্য রয়েছে। এখানে সেটা উল্লেখ করা বাঞ্ছনীয়।

অ্যারে এলিমেন্টগুলোর কোন key এর ভ্যালু যদি `null` সেট করা থাকে এবং ভ্যালু সেট করা আছে কিনা চেক করতে যদি `isset()` ফাংশন ব্যবহার করা হয়, তখন রিটার্ন পাওয়া যাবে `false`। কিন্তু ঐ একই চেক যদি `array_key_exists()` ফাংশন দিয়ে করা হয়, তখন রিটার্ন পাওয়া যাবে `true`। কারণটাও সহজেই অনুমেয়।

isset() ফাংশন ভ্যালু সেট করা আছে কিনা তা চেক করতে ব্যবহৃত হয়। array_key_exists() ফাংশন keyটা বিদ্যমান কিনা তা চেক করতে ব্যবহৃত হয়। সুতরাং পার্থক্যটা স্পষ্ট।

উদাহরণঃ

```php
<?php
$search_array = array('first' => null, 'second' => 4);

// returns false
var_dump(isset($search_array['first']));

// returns true
var_dump(array_key_exists('first', $search_array));
```

আউটপুটঃ

```
bool(false)
bool(true)
```

## array_key_first()

এবার আমরা আলোচনা করব [`array_key_first()`](https://www.php.net/manual/en/function.array-key-first.php) এই ফাংশনটি নিয়ে। এর মাধ্যমে আমরা কোন অ্যারের প্রথম key টা বের করে আনতে পারি। এতে মূল অ্যারে ইনডেক্সিংয়ে কোন ধরণের পরিবর্তন ঘটেনা।

### ফাংশন প্যারামিটার

1. 1টি মাত্র প্যারামিটার সেট করা আছে। ফলে আর্গুমেন্টে যে অ্যারের প্রথম key টা আমরা বের করতে চাই সেটা পাস করতে হবে।

#### ফাংশন কি রিটার্ন করে?

অ্যারেটি যদি empty না হয়, তাহলে অ্যারের প্রথম key টা স্ট্রিং বা ইন্টিজার তথা key টা যে ডাটা টাইপের হবে সেই আকারে রিটার্ন করবে। অ্যারে যদি empty হয়, null রিটার্ন করবে।

উদাহরণঃ

```php
<?php
$fruits = array(
    'a' => 'banana',
    'b' => 'apple',
    'c' => 'orange'
);

$firstKey = array_key_first($fruits);

var_dump($fruits);
var_dump($firstKey);
```

আউটপুট:

```
array(3) {
  ["a"]=>
  string(6) "banana"
  ["b"]=>
  string(5) "apple"
  ["c"]=>
  string(6) "orange"
}
string(1) "a"
```

## array_key_last()

`array_key_first()` ফাংশনটি একটি অ্যারের প্রথম key বের করে আনতে ব্যবহৃত হলে অ্যারের সর্বশেষ key বের করে আনতে কোন ফাংশনটি ব্যবহৃত হবে? হ্যাঁ, [`array_key_last()`](https://www.php.net/manual/en/function.array-key-last.php) ফাংশনটি ব্যবহৃত হবে।

এর মাধ্যমেও আমরা কোন অ্যারের সর্বশেষ key টা বের করে আনতে পারি। এতেও মূল অ্যারে ইনডেক্সিংয়ে কোন ধরণের পরিবর্তন ঘটেনা।

### ফাংশন প্যারামিটার

1. এখানেও 1টি মাত্র প্যারামিটার সেট করা আছে। ফলে আর্গুমেন্টে যে অ্যারের সর্বশেষ key টা আমাদের দরকার সেটা পাস করতে হবে।

#### ফাংশন কি রিটার্ন করে?

অ্যারেটি empty না হলে অ্যারের সর্বশেষ key টা ডাটা টাইপ অনুযায়ী রিটার্ন হবে। empty হলে null রিটার্ন হবে।

উদাহরণঃ

```php
<?php
$fruits = array(
    '0' => 'apple',
    'a' => 'banana',
    'c' => 'orange'
);

$lastKey = array_key_last($fruits);

var_dump($fruits);
var_dump($lastKey);
```

আউটপুট:

```
array(3) {
  [0]=>
  string(5) "apple"
  ["a"]=>
  string(6) "banana"
  ["c"]=>
  string(6) "orange"
}
string(1) "c"
```

## array_keys()

[`array_keys()`](https://www.php.net/manual/en/function.array-keys.php) এই ফাংশনের মাধ্যমে আমরা কোন একটি স্বাভাবিক অ্যারের সকল key এবং মাল্টিডাইমেনশনাল অ্যারের সাবসেট key গুলো পেতে পারি। প্রতিটি key নিজস্ব ডাটা টাইপ অনুযায়ী টেক্সট বা সংখ্যা জাতীয় ভ্যালু হয়ে থাকে।

### ফাংশন প্যারামিটার

এই ফাংশনেও ৩টি প্যারামিটার সেট করা আছে। তাই আর্গুমেন্টও আমরা ৩টিই পাঠাতে পারব।

1. এই ফাংশনের প্রথম আর্গুমেন্ট হচ্ছে একটি অ্যারে, যার key গুলো আমরা পেতে চাই।
2. এই আর্গুমেন্টটি অপশনাল। এখানে আমরা অ্যারেতে থাকা কোন ভ্যালু পাস করতে পারি। ফাংশনটি তখন এই ভ্যালুকে কেন্দ্র করে গিভেন অ্যারেতে সার্চ চালিয়ে দেখবে যে ভ্যালুটির বিপরীতে কয়টি key এভেলেবল এবং সে অনুযায়ী ফিল্টার চালিয়ে শুধুমাত্র ভ্যালুটির key গুলোই রিটার্ন করবে।

এ কারণে প্রদত্ত ভ্যালুটি **filter_value** হিসেবে বিবেচিত হয় এবং এই প্যারামিটারের সাহায্যে আমরা একটি নির্দিষ্ট ভ্যালু প্রোভাইড করে শুধুমাত্র সেই ভ্যালুর key গুলো রিটার্ন পেতে পারি।

3. এই আর্গুমেন্টটিও ঐচ্ছিক। এটি ২য় আর্গুমেন্টের সাথে মিলে কাজ করে। এখানে আমরা 1টি বুলিয়ান ভ্যালু পাস করতে পারি। `true` বা
   `false`। ডিফল্ট ভ্যালু `false` থাকে, যার অর্থ হল, অ্যারের ভ্যালু অনুযায়ী key সার্চ করার যে প্রসেস ফাংশনটি রান করে সেখানে **strict comparison (===)** করা হবেনা। `true` পাস করার অর্থ, সার্চ করার প্রসেসে strict comparison করা হবে।

#### ফাংশন কি রিটার্ন করে?

ফাংশনটি গিভেন অ্যারের সকল key গুলো নতুন একটি অ্যারে আকারে রিটার্ন করে। যদি দ্বিতীয় এবং তৃতীয় আর্গুমেন্টও পাস করা হয়, তখন সার্চ শেষে প্রাপ্ত ফলাফল অ্যারে আকারে রিটার্ন করে।

উদাহরণঃ

```php
<?php
$fruits = array('apple', 'banana', 'orange');

$keys = array_keys($fruits);

print_r($keys);
```

আউটপুটঃ

```
Array
(
    [0] => 0
    [1] => 1
    [2] => 2
)
```

মাল্টিডাইমেনশনাল অ্যারের বেলায় সাবসেট অ্যারে রিটার্ন হওয়ার উদাহরণঃ

```php
<?php
$array = array(
    "color" => array("blue", "red", "green"),
    "size"  => array("small", "medium", "large")
);

print_r(array_keys($array));
```

আউটপুটঃ

```
Array
(
    [0] => color
    [1] => size
)
```

দ্বিতীয় আর্গুমেন্ট পাস করার একটি উদাহরণঃ

```php
<?php
$array = array("blue", "red", "green", "blue", "blue");

print_r(array_keys($array, "blue"));
```

আউটপুটঃ

```
Array
(
    [0] => 0
    [1] => 3
    [2] => 4
)
```

দ্বিতীয় ও তৃতীয় আর্গুমেন্ট পাস করার একটি উদাহরণঃ

```php
<?php
$a = array(10, 20, 30, "10");

print_r(array_keys($a, "10", false));

// and
$b = array(10, 20, 30, "10");

print_r(array_keys($b, "10", true));
```

আউটপুটঃ

```
Array
(
    [0] => 0
    [1] => 3
)
Array
(
    [0] => 3
)
```

**ডেভলপমেন্ট প্রক্রিয়াধীন...............**

## array_map()

এই ফাংশনের মাধ্যমে আমরা কোন একটি অ্যারের সব এলিমেন্ট গুলোকে একটি ফাংশনের মধ্যে পাঠাতে পারি। এই ফাংশনের প্রথম প্যারামিটার হচ্ছে একটি ফাংশন এবং দ্বিতীয় প্যারামিটার হচ্ছে অ্যারে। এই ফাংশন সব এলিমেন্ট গুলোকে সেই ফাংশনের মধ্যে পাঠায়।

```php
<?php
$fruits = array('apple', 'banana', 'orange');

$upperCaseFruits = array_map('strtoupper', $fruits);

print_r($upperCaseFruits);
```

আউটপুট:

```php
Array
(
    [0] => APPLE
    [1] => BANANA
    [2] => ORANGE
)
```

আরেকটা উদাহরণ

```php
<?php

$persons = [
    [
        'name' => 'John Doe',
        'age' => 32,
    ],
    [
        'name' => 'Jane Doe',
        'age' => 28,
    ],
    [
        'name' => 'James Doe',
        'age' => 30,
    ],
];

$names = array_map(function ($person) {
    return $person['name'];
}, $persons);

print_r($names);
```

আউটপুট:

```php
Array
(
    [0] => John Doe
    [1] => Jane Doe
    [2] => James Doe
)
```

## array_merge_recursive()

এই ফাংশনের মাধ্যমে আমরা একাধিক অ্যারেকে একটি অ্যারেতে মার্জ করতে পারি। এই ফাংশনের প্রথম প্যারামিটার হচ্ছে মার্জ করতে চাওয়া অ্যারে এবং দ্বিতীয় প্যারামিটার হচ্ছে মার্জ করার অ্যারে।

```php
<?php
$fruits = array('banana', 'apple', 'orange');
$vegetables = array('carrot', 'collard', 'pea');

$foods = array_merge_recursive($fruits, $vegetables);

print_r($foods);
```

আউটপুট:

```php
Array
(
    [0] => banana
    [1] => apple
    [2] => orange
    [3] => carrot
    [4] => collard
    [5] => pea
)
```

## array_merge()

এই ফাংশনের মাধ্যমে আমরা একাধিক অ্যারেকে একটি অ্যারেতে মার্জ করতে পারি। এই ফাংশনের প্রথম প্যারামিটার হচ্ছে মার্জ করতে চাওয়া অ্যারে এবং দ্বিতীয় প্যারামিটার হচ্ছে মার্জ করার অ্যারে।

```php
<?php
$fruits = array('banana', 'apple', 'orange');
$vegetables = array('carrot', 'collard', 'pea');

$foods = array_merge($fruits, $vegetables);

print_r($foods);
```

আউটপুট:

```php
Array
(
    [0] => banana
    [1] => apple
    [2] => orange
    [3] => carrot
    [4] => collard
    [5] => pea
)
```

## array_multisort()

এই ফাংশনের মাধ্যমে আমরা একাধিক অ্যারেকে sort করতে পারি। এই ফাংশনের প্রথম প্যারামিটার হচ্ছে sort করতে চাওয়া অ্যারে এবং দ্বিতীয় প্যারামিটার হচ্ছে sort করার ধরন।

```php
<?php
$fruits = array('banana', 'apple', 'orange');
$numbers = array(2, 1, 3);

array_multisort($fruits, $numbers);

print_r($fruits);
print_r($numbers);
```

আউটপুট:

```php
Array
(
    [0] => apple
    [1] => banana
    [2] => orange
)
Array
(
    [0] => 1
    [1] => 2
    [2] => 3
)
```

## array_pop()

এই ফাংশনের মাধ্যমে আমরা কোন একটি অ্যারের শেষ এলিমেন্ট কে রিমুভ করতে পারি। এই ফাংশনের প্রথম প্যারামিটার হচ্ছে অ্যারে।

```php
<?php
$fruits = array('banana', 'apple', 'orange');

$lastElement = array_pop($fruits);

print_r($fruits);
echo $lastElement;
```

আউটপুট:

```php
Array
(
    [0] => banana
    [1] => apple
)
orange
```

## array_push()

এই ফাংশনের মাধ্যমে আমরা কোন একটি অ্যারের শেষে একটি এলিমেন্ট যোগ করতে পারি। এই ফাংশনের প্রথম প্যারামিটার হচ্ছে অ্যারে এবং দ্বিতীয় প্যারামিটার হচ্ছে যে এলিমেন্টটি যোগ করতে চাই।

```php
<?php
$fruits = array('banana', 'apple', 'orange');

array_push($fruits, 'plum');

print_r($fruits);
```

আউটপুট:

```php
Array
(
    [0] => banana
    [1] => apple
    [2] => orange
    [3] => plum
)
```

## array_reduce

```php
<?php
$numbers = array(1, 2, 3, 4, 5);

$total = array_reduce($numbers, function ($carry, $number) {
    $carry += $number;
    return $carry;
});

echo $total;
```

আউটপুট:

```php
15
```

## array_reverse()

এই ফাংশনের মাধ্যমে আমরা কোন একটি অ্যারেকে reverse করতে পারি। এই ফাংশনের প্রথম প্যারামিটার হচ্ছে reverse করতে চাওয়া অ্যারে।

```php
<?php
$fruits = array('banana', 'apple', 'orange', 'plum', 'dates');

$reversedFruits = array_reverse($fruits);

print_r($reversedFruits);
```

আউটপুট:

```php
Array
(
    [0] => dates
    [1] => plum
    [2] => orange
    [3] => apple
    [4] => banana
)
```

## array_search()

এই ফাংশনের মাধ্যমে আমরা কোন একটি এলিমেন্ট এর index খুঁজে বের করতে পারি। এই ফাংশনের প্রথম প্যারামিটার হচ্ছে খুঁজে বের করতে চাওয়া এলিমেন্ট এবং দ্বিতীয় প্যারামিটার হচ্ছে অ্যারে।

```php
<?php
$fruits = array('banana', 'apple', 'orange', 'plum', 'dates');

$index = array_search('orange', $fruits);

echo $index;
```

আউটপুট:

```php
2
```

## array_slice()

এই ফাংশনের মাধ্যমে আমরা কোন একটি অ্যারের একটি range কে return করতে পারি। এই ফাংশনের প্রথম প্যারামিটার হচ্ছে অ্যারে এবং দ্বিতীয় প্যারামিটার হচ্ছে range এর শুরুর index এবং তৃতীয় প্যারামিটার হচ্ছে range এর শেষের index।

```php
<?php
$fruits = array('banana', 'apple', 'orange', 'plum', 'dates');

$someFruits = array_slice($fruits, 1, 3);

print_r($someFruits);
```

আউটপুট:

```php
Array
(
    [0] => apple
    [1] => orange
    [2] => plum
)
```

## array_splice()

এই ফাংশনের মাধ্যমে আমরা কোন একটি অ্যারের একটি range কে রিমুভ করতে পারি এবং সেই রিমুভ করা এলিমেন্ট গুলোকে আমরা অন্য কোন অ্যারেতে রাখতে পারি। এই ফাংশনের প্রথম প্যারামিটার হচ্ছে অ্যারে এবং দ্বিতীয় প্যারামিটার হচ্ছে range এর শুরুর index এবং তৃতীয় প্যারামিটার হচ্ছে range এর শেষের index।

```php
<?php
$fruits = array('banana', 'apple', 'orange', 'plum', 'dates');

$someFruits = array_splice($fruits, 1, 3);

print_r($fruits);
print_r($someFruits);
```

আউটপুট:

```php
Array
(
    [0] => banana
    [1] => dates
)
Array
(
    [0] => apple
    [1] => orange
    [2] => plum
)
```

## array_sum()

এই ফাংশনের মাধ্যমে আমরা কোন একটি অ্যারের সব এলিমেন্ট গুলোর যোগফল বের করতে পারি। এই ফাংশনের প্রথম প্যারামিটার হচ্ছে অ্যারে।

```php
<?php
$numbers = array(1, 2, 3, 4, 5);

$total = array_sum($numbers);

echo $total;
```

আউটপুট:

```php
15
```

আরেকটা উদাহরণ

```php
<?php

function add() {
    return array_sum(func_get_args());
}

echo add(1, 2, 3, 4, 5);
```

আউটপুট:

```php
15
```

## array_unique()

এই ফাংশনের মাধ্যমে আমরা কোন একটি অ্যারের ডুপ্লিকেট এলিমেন্ট গুলো রিমুভ করতে পারি। এই ফাংশনের প্রথম প্যারামিটার হচ্ছে রিমুভ করতে চাওয়া অ্যারে।

```php
<?php
$fruits = array('banana', 'apple', 'orange', 'plum', 'dates', 'banana', 'apple');

$uniqueFruits = array_unique($fruits);

print_r($uniqueFruits);
```

আউটপুট:

```php
Array
(
    [0] => banana
    [1] => apple
    [2] => orange
    [3] => plum
    [4] => dates
)
```

## array_walk()

এই ফাংশনের মাধ্যমে আমরা কোন একটি অ্যারের সব এলিমেন্ট গুলোকে একটি ফাংশনের মধ্যে পাঠাতে পারি। এই ফাংশনের প্রথম প্যারামিটার হচ্ছে অ্যারে এবং দ্বিতীয় প্যারামিটার হচ্ছে একটি ফাংশন। এই ফাংশন সব এলিমেন্ট গুলোকে সেই ফাংশনের মধ্যে পাঠায়।

```php
<?php
$fruits = array('apple', 'banana', 'orange');

array_walk($fruits, function (&$fruit) {
    $fruit = strtoupper($fruit);
});

print_r($fruits);
```

আউটপুট:

```php
Array
(
    [0] => APPLE
    [1] => BANANA
    [2] => ORANGE
)
```

## asort()

এই ফাংশনের মাধ্যমে আমরা কোন একটি অ্যাসোসিয়েটিভ অ্যারের সব এলিমেন্ট গুলোকে অ্যারের ভ্যালুর উর্দ্ধক্রমানুসারে sort করতে পারি। এই ফাংশনের প্রথম প্যারামিটার হচ্ছে অ্যাসোসিয়েটিভ অ্যারে।

```php
<?php
$fruits = array(
    'a' => 'banana',
    'b' => 'apple',
    'c' => 'orange'
);

asort($fruits);

print_r($fruits);
```

আউটপুট:

```php
Array
(
    [b] => apple
    [a] => banana
    [c] => orange
)
```

## in_array()

এই ফাংশন দিয়ে আমরা কোন একটি এলিমেন্ট একটি অ্যারের মধ্যে আছে কিনা তা চেক করতে পারি। এই ফাংশনের প্রথম প্যারামিটার হচ্ছে এলিমেন্ট এবং দ্বিতীয় প্যারামিটার হচ্ছে অ্যারে। এই ফাংশন যদি এলিমেন্ট অ্যারের মধ্যে পাই তাহলে এটি true রিটার্ন করবে আর না পাইলে ফলাফল হবে false।

```php
<?php
$fruits = array('apple', 'banana', 'orange');

if (in_array('apple', $fruits)) {
    echo 'Apple exists';
} else {
    echo 'Apple does not exist';
}
```

আউটপুট:

```php
Apple exists
```

আরেকটা উদাহরণ 

```php
<?php

$allowedFileExtensions = ['jpg', 'jpeg', 'png', 'gif'];

$filename = 'image.png';

$fileParts = explode('.', $filename);

$fileExtension = strtolower(end($fileParts));

if (in_array($fileExtension, $allowedFileExtensions)) {
    echo 'File is allowed';
} else {
    echo 'File is not allowed';
}
```

আউটপুট:

```php
File is allowed
```

## ksort()

এই ফাংশনের মাধ্যমে আমরা কোন একটি অ্যাসোসিয়েটিভ অ্যারের সব এলিমেন্ট গুলোকে অ্যারের key গুলোর উর্দ্ধক্রমানুসারে sort করতে পারি। এই ফাংশনের প্রথম প্যারামিটার হচ্ছে অ্যাসোসিয়েটিভ অ্যারে।

```php
<?php
$fruits = array(
    'a' => 'banana',
    'b' => 'apple',
    'c' => 'orange'
);

ksort($fruits);

print_r($fruits);
```

আউটপুট:

```php
Array
(
    [a] => banana
    [b] => apple
    [c] => orange
)
```

## natsort()

এই ফাংশনের মাধ্যমে আমরা কোন একটি অ্যাসোসিয়েটিভ অ্যারের সব এলিমেন্ট গুলোকে sort করতে পারি। এই ফাংশনের প্রথম প্যারামিটার হচ্ছে অ্যাসোসিয়েটিভ অ্যারে।

```php
<?php
$fruits = array('orange2', 'orange10', 'orange1');

natsort($fruits);

print_r($fruits);
```

আউটপুট:

```php
Array
(
    [2] => orange1
    [0] => orange2
    [1] => orange10
)
```

## rsort()

এই ফাংশনের মাধ্যমে আমরা কোন একটি অ্যারের সব এলিমেন্ট গুলোকে অধঃক্রমানুসারে sort করতে পারি। এই ফাংশনের প্রথম প্যারামিটার হচ্ছে অ্যারে।

```php
<?php
$fruits = array('banana', 'apple', 'orange');

rsort($fruits);

print_r($fruits);
```

আউটপুট:

```php
Array
(
    [0] => orange
    [1] => banana
    [2] => apple
)
```

## sort()

এই ফাংশনের মাধ্যমে আমরা কোন একটি অ্যারের সব এলিমেন্ট গুলোকে উর্দ্ধক্রমানুসারে sort করতে পারি। এই ফাংশনের প্রথম প্যারামিটার হচ্ছে অ্যারে।

```php
<?php
$fruits = array('banana', 'apple', 'orange');

sort($fruits);

print_r($fruits);
```

আউটপুট:

```php
Array
(
    [0] => apple
    [1] => banana
    [2] => orange
)
```

## usort()

এই ফাংশনের মাধ্যমে আমরা কোন একটি অ্যাসোসিয়েটিভ অ্যারের সব এলিমেন্ট গুলোকে sort করতে পারি। এই ফাংশনের প্রথম প্যারামিটার হচ্ছে অ্যাসোসিয়েটিভ অ্যারে এবং দ্বিতীয় প্যারামিটার হচ্ছে একটি ফাংশন। এই ফাংশন সব এলিমেন্ট গুলোকে সেই ফাংশনের মধ্যে পাঠায় এবং সেই ফাংশনের মধ্যে যেই কন্ডিশন থাকবে সেই কন্ডিশন অনুযায়ী sort করে ফেলে।

```php
<?php
$fruits = array(
    'a' => 'banana',
    'b' => 'apple',
    'c' => 'orange'
);

usort($fruits, function ($a, $b) {
    return $a > $b;
});

print_r($fruits);
```

আউটপুট:

```php
Array
(
    [0] => apple
    [1] => banana
    [2] => orange
)
```

## explode()

এই ফাংশনের মাধ্যমে আমরা কোন স্ট্রিং কে অ্যারেতে কনভার্ট করতে পারি। এই ফাংশনের প্রথম প্যারামিটার হচ্ছে ডেলিমিটার এবং দ্বিতীয় প্যারামিটার হচ্ছে স্ট্রিং ধারনকৃত ভেরিএবল নাম।

```php
<?php
$string = 'banana, apple, orange';

$fruits = explode(', ', $string);

print_r($fruits);
```

আউটপুট:

```php
Array
(
    [0] => banana
    [1] => apple
    [2] => orange
)
```

## implode(){#implode-function}

এই ফাংশনের মাধ্যমে আমরা কোন অ্যারেকে স্ট্রিং এ কনভার্ট করতে পারি। এই ফাংশনের প্রথম প্যারামিটার হচ্ছে ডেলিমিটার এবং দ্বিতীয় প্যারামিটার হচ্ছে স্ট্রিং এ কনভার্ট করতে চাওয়া অ্যারে।

```php
<?php
$fruits = array('banana', 'apple', 'orange');

$string = implode(', ', $fruits);

echo $string;
```

আউটপুট:

```php
banana, apple, orange
```

## rand()

এই ফাংশনের মাধ্যমে আমরা কোন একটি random নাম্বার পেতে পারি। এই ফাংশনের প্রথম প্যারামিটার হচ্ছে শুরুর random নাম্বার এবং দ্বিতীয় প্যারামিটার হচ্ছে শেষের random নাম্বার।

```php
<?php
$randomNumber = rand(1, 10);

echo $randomNumber;
```

আউটপুট:

```php
7
```
