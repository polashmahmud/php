# পিএইচপি Array পরিচিতি ও অপারেশন

## Array কি ও কেন?{#Array-Basics}

পিএইচপির ডাটা স্ট্রাকচার নিয়ে [প্রথম ক্লাসে](https://php.polashmahmud.com/class-01.html) আমরা কিছু ধারণা নিয়েছি। সেই ক্লাসে [ডাটা টাইপ সেকশনে](https://php.polashmahmud.com/class-01.html#types-of-data-in-php) আমরা পিএইচপি সাপোর্টেড ডাটা টাইপগুলোর একটি লিস্টও দেখেছি।

সেই তালিকায় একটি ডাটা টাইপ ছিল **Array**। তাহলে প্রথম যে ধারণাটা আমরা পেলাম তা হল, **Array** পিএইচপির একটি ডাটা টাইপ। শুধুমাত্র পিএইচপি কেন, পৃথিবীর প্রায় প্রতিটি প্রোগ্রামিং ল্যাংগুয়েজে এই ডাটা টাইপটির ধারণা আছে। _এখন জানার বিষয় হল এইটা আসলে কি?_ তার আগে চলুন **Scalar Data** কি সেটা একটু বুঝি।

#### Scalar Data কি?{#Scalar-Data}

আমরা এতদূর অবধি যতগুলো ডাটা টাইপ দেখে এসেছি, আপনি যদি সবগুলোর চরিত্র বা _characteristic_ বিশ্লেষণ করেন তাহলে দেখবেন ঐ সমস্ত ডাটা টাইপ একসাথে শুধুমাত্রে একটি ডাটা বা ভ্যালু ধারণ করতে পারে। এর বেশি ভ্যালু ধারণ করার ক্যাপাসিটি তাদের নেই। `NULL`, `bool`, `int`, `float` বা `string` যেটাই হোক না কেন, ভেবে বলুন তো এরা কি একসাথে একটির বেশি ভ্যালু হোল্ড করতে পারে? পারেনা। এই সমস্ত ডাটা টাইপগুলোকেই **Scalar Data** বলে।

_তাই বলে কি আপনি বাস্তব জীবনে সবসময় একবারে একটিমাত্র ভ্যালু সেট করার প্রয়োজনীয়তা নিয়েই বাস করেন? একাধিক ভ্যালু একসাথে সেট করা বা স্টোর করার প্রয়োজনীয়তা কি আপনার হয়না বা হবেনা?_

প্রসঙ্গ যখন বাস্তব জীবন তখন ঘটনাটা আসলে ভিন্ন। আপনাকে বেশিরভাগ সময়ই একাধিক ভ্যালু একবারে সেট করতে হয় বা তার প্রয়োজনীয়তা দেখা দেয়। কারণ জীবন একমুখী নয়, বহুমুখী। এই হিসেবে আপনার ডাটা ফ্লো বহুমুখী হবে এটাই স্বাভাবিক।

_এখন প্রোগ্রামিংয়ে এই বহুমুখী ডাটা ফ্লো আমরা কিভাবে অর্জন করতে পারি?_

এখানেই আসে **Array**, **object**, **class** ইত্যাদি ডাটা টাইপের ধারণা। আমরা এখানে **Array** নিয়ে কথা বলব। বাকিগুলো ভবিষ্যতে জানব ইনশাআল্লাহ।

#### তাহলে **Array** কি?{#what-is-array-in-php}

[**Array**](https://www.php.net/manual/en/language.types.array.php#language.types.array) পিএইচপির একটি ডাটা টাইপ যার ভেতর সাধারণত আমরা একের অধিক ভ্যালু রাখার সুযোগ পাই। একটি ভ্যারিয়েবলের মধ্যে একাধিক ভ্যালু রাখাতে এই ডাটা টাইপটি ব্যবহৃত হয়।

**Array** এর পরিচিতি আরো ভালোভাবে বুঝতে হলে পিএইচপি ম্যানুয়ালের এই অংশটুকু দেখুন:-

> An array in PHP is actually an ordered map. A map is a type that associates values to keys. This type is optimized for several different uses; it can be treated as an array, list (vector), hash table (an implementation of a map), dictionary, collection, stack, queue, and probably more. As array values can be other arrays, trees and multidimensional arrays are also possible.

ম্যাপ, লিস্ট _(vector)_, _hash table_ ইত্যাদি বিষয়গুলো না বুঝলে কোন সমস্যা নাই। এগুলো এখনই আপনাকে জানতে হবে তা নয়। তবে বুঝতে পারলে ভালো। তাতে **Array** এর পুরো চিত্রটা বুঝতে পারবেন। ম্যাপের যে সংজ্ঞাটা দেয়া হয়েছে এখন ভাসা ভাসা ভাবে সেটা বুঝতে পারলেও আপনি **Array** এর চরিত্র সম্পর্কে একটা ধারণা পেয়ে যাবেন।

#### **Array** কিভাবে তৈরি করব?{#how-to-make-array-in-php}

পিএইচপিতে আমরা ২ ভাবে **Array** তৈরি করতে পারি।

1. `array()` ফাংশন ব্যবহার করে। তখন আমাদের ভ্যালুগুলো এই ফাংশনের আর্গুমেন্টে আমরা পাস করে দিব, সে সেই ভ্যালুগুলো নিয়ে একটা **Array** তৈরি করবে। যেমনঃ-

> ```php
> <?php
>   $array = array('polash', 'mehedi', 'sunny', 'shakil');
> ```

2. **short array syntax** ব্যবহার করে। যেমনঃ-

> ```php
> <?php
>   // Using the short array syntax
>   $array = ['polash', 'mehedi', 'sunny', 'shakil'];
> ```

### array ডাটাগুলোর আউটপুট কিভাবে দেখব?{#array-output}

_যেহেতু আমরা [**Scalar Data**](#Scalar-Data) গুলোর আউটপুট প্রিন্ট করতে [`echo`](https://www.php.net/manual/en/function.echo.php) বা [`print`](https://www.php.net/manual/en/function.print.php) ফাংশন ২টি ব্যবহার করে এসেছি, এখন **Dynamic Data like array, object etc..** গুলোর আউটপুটও কি একইভাবে প্রিন্ট করতে পারব?_

না, পারবনা। ডাটা যেহেতু ডাইনামিক তাই _echo_ বা _print_ এর মত **Scalar Data** আউটপুট দেয়া ফাংশন এর আউটপুট প্রসেস করতে পারবেনা। কারণ _echo_ বা _print_ আউটপুট দেয়ার সময় রেজাল্টকে স্ট্রিং ডাটায় কনভার্ট করে তারপর আউটপুট দেয়। একটা ফুল _array_ আউটপুটকে যেহেতু স্ট্রিংয়ে কনভার্ট করা যায়না তাই এই ২টি ফাংশন কোন কাজে আসবে না। হ্যাঁ, যদি _array_ এর নির্দিষ্ট কোন এলিমেন্ট প্রিন্ট করার দরকার পড়ে তখন এরা ঠিকই কাজে আসবে।

তাহলে কিভাবে _array_ কে প্রিন্ট করব? সেজন‍্য আমাদের পিএইচপির বিল্ট-ইন একটি ফাংশন [`var_dump()`](https://www.php.net/manual/en/function.var-dump) বা [`print_r()`](https://www.php.net/manual/en/function.print-r) ব‍্যবহার করতে হবে। উদাহরণঃ-

```php
<?php
    $array = array('polash', 'mehedi', 'sunny', 'shakil');
    var_dump($array);
    print_r($array);
```

`var_dump()` ফাংশনের আউটপুটঃ-

```
array(4) {
  [0]=>
  string(6) "polash"
  [1]=>
  string(7) "mehedi"
  [2]=>
  string(5) "sunny"
  [3]=>
  string(6) "shakil"
}
```

`print_r()` ফাংশনের আউটপুটঃ-

```
Array
(
    [0] => polash
    [1] => mehedi
    [2] => sunny
    [3] => shakil
)
```

_ফলাফল দেখে মনে কি প্রশ্ন জেগেছে এমন আউটপুট পেলাম কেন?_

`print_r()` ফাংশনের আউটপুটটা _human readable_ ফর্ম্যাটে আছে – যা মূলত এই ফাংশনটির ডিউটি – তাই আমরা এটাই বোঝার চেষ্টা করি। এটা বুঝতে হলে আমাদের বুঝতে হবে _array_ ইন্টার্নালি কিভাবে ডাটা স্টোর করে।

## ইন্টার্নালি Array, এলিমেন্ট ও ইনডেক্স কি?{#internal-array-structure}

_array_ যেহেতু একাধিক ভ্যালুর সমন্বয় তাই কোন ভ্যালু কোথায় কিভাবে নির্ধারিত হবে, কি ধরণের ট্রিটমেন্ট পাবে সেটাও নির্ধারণ করা জরুরী। এই নির্ধারণ প্রক্রিয়াটার মাধ্যমে আমরা _array_ এর ইন্টার্নাল ডাটা স্ট্রাকচারটা বুঝতে পারি।

_array_ ইন্টার্নালি স্টোর করতে যে বিষয়টি খেয়াল করা হয় সেটা হল, প্রতিটি ভ্যালু একটি ইন্টিজার সংখ্যার বিপরীতে স্টোর হবে। এই ইন্টিজার সংখ্যাটিকে _array_ এর ইনডেক্স বলা হয়। ইনডেক্সিংয়ের প্রক্রিয়া প্রতিটি _array_ টাইপ ডাটার সাথে অবশ্যই ঘটবে এবং ইনডেক্সিংয়ের সূচনা 0 দিয়ে শুরু হবে। এককথায় যাকে বলে, **zero based indexing**। এই জাতীয় _array_ কে পিএইচপির ভাষায় **Indexed arrays** বলে।

এই ইনডেক্স সংখ্যাগুলো তার পজিশন অনুযায়ী ম্যাচ করে _array_ এর এক একটি ডাটা স্টোর করে, তাই _array_ থেকে নির্দিষ্ট কোন পজিশনের ডাটা পেতে চাইলে তার ইনডেক্স নাম্বারটা রেফার করতে হবে। যেমনঃ-

```php
<?php
    $array = array('polash', 'mehedi', 'sunny', 'shakil');
    echo $array[0];
```

আউটপুটঃ-

```
polash
```

**short array syntax** এর উদাহরণঃ-

```php
<?php
    $array = ['polash', 'mehedi', 'sunny', 'shakil'];
    echo $array[0];
?>
```

আউটপুটঃ-

```
polash
```

এই ইনডেক্সকে _array_ এর **key** নামেও অভিহিত করা হয় যদি আলাদাভাবে আপনি key ব্যবহার না করেন। ভ্যালুগুলো এইরকম এক একটি key এর অধীনে থাকে। key আর ভ্যালু মিলেই _array_ এর এক একটি এলিমেন্ট তৈরি হয়। তাহলে _array_ এলিমেন্ট হল key এবং ভ্যালুর সমন্বয়।

key আর ভ্যালুর ধারণা মূলত **Associative arrays** নামে পিএইচপির আরো ১টি array টাইপ থেকে এসেছে। যেখানে স্পেসিফিক্যালি ভ্যালুর সাথে key ও ডিফাইন করে দিতে হয়। যেমনঃ-

```php
<?php
    $array = array(
        "foo" => "bar",
        "bar" => "foo",
    );

    // Using the short array syntax
    $array = [
        "foo" => "bar",
        "bar" => "foo",
    ];
```

এই key ডিফাইন করা যদিও অপশনাল তবে পিএইচপিতে সকল array মূলত এই _Associative arrays_ স্ট্রাকচারেই তৈরি হয়। তাই যখন key ডিফাইন করা হয়না তখনও key বিদ্যমান থাকে। তখন ইন্টিজার সংখ্যার ইনডেক্সটাই key হিসেবে বিবেচিত হয় এবং key, value এর প্রেজেন্টেশন তখন এমন `key => value` হয়। `print_r()` ব্যবহার করে উপরে আমরা যে উদাহরণ দেখেছি সেটা এখন তো বুঝতে পারছি তাইনা। রেফারেন্সের জন্য আবার দেখে আসতে পারি।

এবার আসুন **Array** এর টাইপগুলো নিয়ে একটু আলোচনা করি।

## Array types

পিএইচপিতে অ্যারেকে তিনটা টাইপে ভাগ করা যায়। যেমনঃ

- **Indexed arrays**
- **Associative arrays**
- **Multidimensional arrays**

## Indexed arrays

একটি _Indexed array_ হলো এমন একটি _array_ যেখানে প্রত্যেকটি ভ‍্যালুর জন‍্য একটি ইনডেক্স নাম্বার থাকে, যার সাহায্যে তার ভ্যালুগুলো এক্সেস করা যায়। উপরে আমরা এ বিষয়ে জেনে এসেছি। যেমনঃ-

```php
<?php
    $array = array('polash', 'mehedi', 'sunny', 'shakil');
    print_r($array);
```

আউটপুটঃ-

```
Array
(
    [0] => polash
    [1] => mehedi
    [2] => sunny
    [3] => shakil
)
```

## Associative arrays

**Associative array** সম্পর্কে কিছুটা ধারণা আমরা উপরে পেয়েছি। আরো কিছু জানার চেষ্টা করি। একটি _Associative array_ হলো এমন একটি অ্যারে যেখানে প্রত্যেকটি ভ‍্যালুর জন‍্য একটি করে key থাকে। key এবং ভ্যালু এই দুইয়ের যোগসূত্রে _Associative array_ হয়। যেমনঃ-

```php
<?php
    $array = array(
        'name' => 'polash',
        'age' => 25,
        'location' => 'Dhaka'
    );
    print_r($array);
```

আউটপুটঃ-

```
Array
(
    [name] => polash
    [age] => 25
    [location] => Dhaka
)
```

এক্ষেত্রে মনে রাখতে হবে key সব সময়ই ইউনিক হতে হবে। যদি দুইটা key এর নাম একই হয়ে যায় তাহলে পূর্বের key এর সাথে সেট করা ভ্যালুটাকে পরের key এর সাথে এসাইন করা ভ্যালুটা _override_ করে ফেলবে। ফলে প্রথমে সেট করা ভ্যালুটা পরিবর্তন হয়ে তার জায়গায় নতুন ভ্যালু বসে যাবে। মোটকথা, আপনি _Associative array_ তে ডুপ্লিকেট key সেট করতে পারবেন না।

উদাহরণ দেখিঃ-

```php
<?php
    $people = [
        'polash' => [
            'age' => 32,
        ],
        'polash' => [
            'age' => 42,
        ],
    ];

    print_r($people);
```

আউটপুটঃ-

```
Array
(
    [polash] => Array
        (
            [age] => 42
        )
)
```

আবার, _Array_ এর কিছু এলিমেন্টে key সেট করে বাকিগুলোতে সেট না করলেও কোন সমস্যা নাই। সেক্ষেত্রে যেই এলিমেন্টগুলোর key সেট করা হয়নি তাদের ইনডেক্স আগে থেকে কোনটা সেট হয়ে থাকলে তারপর থেকে গণনা শুরু হবে। আর সেট না থাকলে 0 থেকে শুরু হবে। যেমনঃ-

```php
<?php
    $array = array(
        "a",
        "b",
        6 => "c",
        "d",
    );

    print_r($array);
```

আউটপুটঃ-

```
Array
(
    [0] => a
    [1] => b
    [6] => c
    [7] => d
)
```

আপনার জন্য টাস্ক হল "d" এর key 7 কেন তা বের করা।

## Multidimensional arrays

পিএইচপি _array_ এর তৃতীয় টাইপ হল, **Multidimensional arrays**। এটি এমন একটি _array_ যে তার অধীনে মাল্টি-লেভেলের _array_ ডাটা হোল্ড করতে পারে। তাই এর অধীনে থাকা ভ্যালুগুলো এক বা একাধিক _array_ হবে।

পিএইচপি যেহেতু মাল্টি-লেভেলের _array_ হোল্ড করে তাই বাস্তব জীবনে এর প্রয়োগ দুই, তিন, চার, পাঁচ বা আরো ডিপ লেভেলে হতে পারে। তবে তিন লেভেলের বেশি হলে ঐ ডাটা নিয়ে কাজ করা বা ম্যানেজ করা মানুষের জন্য বেশ কষ্টসাধ্য বটে। উদাহরণ দেখিঃ-

```php
<?php
    $array = array(
        array('polash', 'mehedi', 'sunny', 'shakil'),
        array('polash', 'mehedi', 'sunny', 'shakil'),
        array('polash', 'mehedi', 'sunny', 'shakil')
    );
    print_r($array);
```

আউটপুটঃ-

```
Array
(
    [0] => Array
        (
            [0] => polash
            [1] => mehedi
            [2] => sunny
            [3] => shakil
        )
    [1] => Array
        (
            [0] => polash
            [1] => mehedi
            [2] => sunny
            [3] => shakil
        )
    [2] => Array
        (
            [0] => polash
            [1] => mehedi
            [2] => sunny
            [3] => shakil
        )
)
```

## Array সাইজ/লেংথ বের করার উপায়?{#Array-Counting}

একটি _Array_ তে কয়টি ভ‍্যালু আছে সেই সংখ্যা জানতে তথা _Array_ এর লেংথ বা দৈর্ঘ্য জানতে পিএইচপির বিল্ট-ইন [`count()`](https://www.php.net/manual/en/function.count.php) ফাংশনটি আমরা ব্যবহার করতে পারি। যেমনঃ-

```php
<?php
    $array = array('polash', 'mehedi', 'sunny', 'shakil');
    echo count($array);
```

আউটপুট হবেঃ

```
4
```

এই একই কাজ আমরা আরো একটি ফাংশনের সাহায্যে করতে পারি। সেটি হল, [`sizeof()`](https://www.php.net/manual/en/function.sizeof)। যেমনঃ-

```php
<?php
    $array = array('polash', 'mehedi', 'sunny', 'shakil');
    echo sizeof($array);
```

আউটপুটঃ-

```
4
```

একটি _Array_ তে থাকা ভ‍্যালুগুলোর কোন ভ্যালু কতবার এসেছে _Array_ ফাংশনের সাহায্যে চাইলে আমরা সেটাও জানতে পারি। ফলে কোন ভ‍্যালুটি ইউনিক, কোনটি ইউনিক না, এই ফাংশনটির সাহায্যে আমরা তাও জানতে পারি। ফাংশনটি হল, [`array_count_values()`](https://www.php.net/manual/en/function.array-count-values.php)।

ফাংশনটি প্যারামিটার আকারে একটি _Array_ প্রত্যাশা করে। অতঃপর তার উপর অপারেশন চালিয়ে _associative array_ রিটার্ন করে। যেখানে _Array_ এর ভ্যালুগুলো keys আকারে প্রিন্ট হয় এবং কে কতবার এসেছে সেটা ভ্যালু হিসেবে প্রিন্ট হয়। যেমনঃ-

```php
<?php
    $array = array('polash', 'mehedi', 'sunny', 'shakil', 'polash', 'mehedi', 'sunny');
    // var_dump(array_count_values($array));
    print_r(array_count_values($array));
```

আউটপুটঃ-

```
Array
(
    [polash] => 2
    [mehedi] => 2
    [sunny] => 2
    [shakil] => 1
)
```

# Array Operation: Loop

## Indexed array তে Loop চালানো {#Loop-through-indexed-array}

একটি _indexed array_ এর ভেতর লুপ চালানোর জন‍্য আমরা [`for`](https://www.php.net/manual/en/control-structures.for.php) লুপ ব্যবহার করতে পারি। যেমনঃ-

```php
<?php
    $array = array('polash', 'mehedi', 'sunny', 'shakil');
    for ($i = 0; $i < count($array); $i++) {
        echo $array[$i] . PHP_EOL;
    }
```

আউটপুটঃ-

```
polash
mehedi
sunny
shakil
```

## Associative array তে Loop চালানো {#Loop-through-associative-array}

একটি _Associative array_ এর ভেতর লুপ চালানোর জন‍্য আমরা [`foreach()`](https://www.php.net/manual/en/control-structures.foreach.php#control-structures.foreach) লুপ ব্যবহার করতে পারি। যেমনঃ-

```php
<?php
    $array = array(
        'name' => 'polash',
        'age' => 25,
        'location' => 'Dhaka'
    );
    foreach ($array as $key => $value) {
        echo $key . ' : ' . $value . PHP_EOL;
    }
```

আউটপুট হবেঃ

```
name : polash
age : 25
location : Dhaka
```

আমরা ইতিপূর্বে জেনেছি, পিএইচপি সকল _array_ স্ট্রাকচারই _Associative array_ এর উপর ভিত্তি করে তৈরি হয়। তাই আপনি `foreach()` লুপ _indexed array_ তেও ব্যবহার করতে পারেন। এর ভাইস ভার্সাও করা যায়, তথা `for` লুপ দিয়েও _Associative array_ এবং _Multidimensional arrays_ তে লুপ চালানো যায়। তবে তার ইম্প্লিমেন্টেশন বেশ জটিল।

## Multidimensional array তে লুপ চালানো{#Loop-through-multidimensional-array}

একটি মাল্টিডাইমেনশনাল অ্যারের ভেতরে লুপ চালানোর জন‍্যও আমরা `foreach` লুপ ব্যবহার করতে পারি।

```php
<?php
    $array = array(
        array('polash', 'mehedi', 'sunny', 'shakil'),
        array('polash', 'mehedi', 'sunny', 'shakil'),
        array('polash', 'mehedi', 'sunny', 'shakil')
    );
    foreach ($array as $key => $value) {
        echo $key . ' : ' . $value . PHP_EOL;
    }
?>
```

আউটপুট হবেঃ

```
0 : Array
1 : Array
2 : Array
```

এখানে আমরা দেখতে পাচ্ছি মাল্টিডাইমেনশনাল অ্যারের ভেতরে আবার অ্যারে আছে। তাই আমরা আবার একটি `foreach` লুপ চালাবো যেটি আমাদের মাল্টিডাইমেনশনাল অ্যারের ভেতরের ভ‍্যালু গুলো প্রিন্ট করবে।

```php
<?php
    $array = array(
        array('polash', 'mehedee', 'sunny', 'shakil'),
        array('polash', 'mehedee', 'sunny', 'shakil'),
        array('polash', 'mehedee', 'sunny', 'shakil')
    );
    foreach ($array as $key => $value) {
        foreach ($value as $key => $value) {
            echo $key . ' : ' . $value . PHP_EOL;
        }
    }
?>
```

আউটপুট হবেঃ

```php
0 : polash
1 : mehedee
2 : sunny
3 : shakil
0 : polash
1 : mehedee
2 : sunny
3 : shakil
0 : polash
1 : mehedee
2 : sunny
3 : shakil
```

যদি আরো কিছু উদাহারণ দেখিঃ

```php
$peoples = [
    [
        'id' => 1,
        'name' => 'John',
        'email' => 'john@example.com'
    ],
    [
        'id' => 2,
        'name' => 'Jane',
        'email' => 'jane@example.com'
    ],
];

foreach ($peoples as $people) {
    echo $people['name'] . '|' . $people['email'] . PHP_EOL;
}
```

আউটপুট হবেঃ

```php
John|john@example.com
Jane|jane@example.com
```

আমাদের এই অ্যারের ভিতরে যদি আরো অ্যারে থাকে তাহলে আমাদের অ্যারেটা একটু কমপ্লেক্স হয়ে যাচ্ছে। তখন আমরা কি করে প্রিন্ট করবো।

```php
$peoples = [
    [
        'id' => 1,
        'name' => 'John',
        'email' => 'john@example.com',
        'likes' => ['php', 'laravel']
    ],
    [
        'id' => 2,
        'name' => 'Jane',
        'email' => 'jane@example.com',
        'likes' => ['php', 'wordpress']
    ],
];

foreach ($peoples as $people) {
    echo $people['name'] .  '<br>';

    foreach ($people['likes'] as $like) {
        echo $like . PHP_EOL;
    }
}
```

আউটপুট হবেঃ

```php
John
php
laravel
Jane
php
wordpress
```

আমরা যদি চাই তাহলে likes টাকে লুপ না চালিয়ে স্ট্রিং আকারে দেখিয়ে দিতে পারি।

```php
$peoples = [
    [
        'id' => 1,
        'name' => 'John',
        'email' => 'john@example.com',
        'likes' => ['php', 'laravel']
    ],
    [
        'id' => 2,
        'name' => 'Jane',
        'email' => 'jane@example.com',
        'likes' => ['php', 'wordpress']
    ],
];

foreach ($peoples as $people) {
<<<<<<< HEAD
    echo $people['name'] .  '<br>';

    echo implode(', ', $people['likes']);
=======
    echo $people['name'] . PHP_EOL;

    echo implode(', ', $people['likes']) . PHP_EOL;
>>>>>>> 7de096aeac5d14ce015b8fdede71484222a313ec
}
```

আউটপুট হবেঃ

```php
John
php, laravel
Jane
php, wordpress
```

আমরা যদি চাই তাহলে ইনডেক্স সহকারে লুপ চালাতে পারি।

```php
$peoples = [
    [
        'id' => 1,
        'name' => 'John',
        'email' => 'john@example.com',
        'likes' => ['php', 'laravel']
    ],
    [
        'id' => 2,
        'name' => 'Jane',
        'email' => 'jane@example.com',
        'likes' => ['php', 'wordpress']
    ],
];

foreach ($peoples as $index => $people) {
    echo $index . ' : ' . $people['name'] . PHP_EOL;
}
```

আউটপুট হবেঃ

```php
0 : John
1 : Jane
```

আপনার যদি এমন একটা অ্যারে থাকে যার key গুলো একই না তাহলে আপনি লুপ চালানোর সময় এই key গুলো চেক করে নিতে পারেন।

```php
$status = [
    ['text' => 'What a lovely day!'],
    ['text' => 'Have a cup of tea!'],
    'status' => 200
];

foreach ($status as $key => $value) {
    if ($key !== 'status') {
        echo $value['text'] . PHP_EOL;
    }
}
```

আউটপুট হবেঃ

```php
What a lovely day!
Have a cup of tea!
```

এই জিনিসটা আরেকটু সুন্দর ভাবেও করা যায়। যেমনঃ

```php
$status = [
    ['text' => 'What a lovely day!'],
    ['text' => 'Have a cup of tea!'],
    'status' => 200
];

foreach ($status as $key => $value) {
    if ($key === 'status') {
        continue;
    }
    echo $value['text'] . PHP_EOL;
}
```

আউটপুট হবেঃ

```php
What a lovely day!
Have a cup of tea!
```

আমরা অ্যারের ভিতর কোন কিছু সার্চও করতে পারি।

```php
$peoples = [
    [
        'id' => 1,
        'name' => 'John',
        'email' => 'john@example.com'
    ],
    [
        'id' => 2,
        'name' => 'Jane',
        'email' => 'jane@example.com'
    ],
];

$toFind = 'John';
$found = false;

foreach ($peoples as $people) {
    if ($people['name'] === $toFind) {
        $found = $people;
        break;
    }
}
print_r($found);
```

আউটপুট হবেঃ

```php
Array
(
    [id] => 1
    [name] => John
    [email] => john@example.com
)
```

আপনি যদি চান তাহলে লুপ চালিয়ে main অ্যারের ভ‍্যালু বড় হাতের অক্ষরে রূপান্তর করতে পারেন, এ জন‍্য & এই চিহ্ন ব‍্যবহার করতে হবে।

```php
$peoples = [
    [
        'id' => 1,
        'name' => 'John',
        'email' => 'john@example.com'
    ],
    [
        'id' => 2,
        'name' => 'Jane',
        'email' => 'jane@example.com'
    ],
];

foreach ($peoples as &$people) {
   $people['name'] = strtoupper($people['name']);
}

print_r($peoples);
```

আউটপুট হবেঃ

```php
Array
(
    [0] => Array
        (
            [id] => 1
            [name] => JOHN
            [email] => john@example.com
        )

    [1] => Array
        (
            [id] => 2
            [name] => JANE
            [email] => jane@example.com
        )

)
```

আপনার যদি পুরাতন ভ‍্যালু এবং নতুন ভ‍্যালু দুইটাই দরকার হয়ে থাকে তাহলে আপনি অন‍্য ভাবেও এটা করতে পারেন।

```php
$peoples = [
    [
        'id' => 1,
        'name' => 'John',
        'email' => 'john@example.com'
    ],
    [
        'id' => 2,
        'name' => 'Jane',
        'email' => 'jane@example.com'
    ],
];

$newPeoples = [];

foreach ($peoples as $people) {
    $person['name'] = strtoupper($people['name']);
    $newPeoples[] = $person;
}

print_r($peoples);
```

আউটপুট হবেঃ

```php
Array
(
    [0] => Array
        (
            [name] => JOHN
        )

    [1] => Array
        (
            [name] => JANE
        )

)
```

আমরা অ্যারের ভিতর যেভাবে কোন কিছু গুণন করতে পারি।

```php
$numbers = [1,2,3,4,5];

foreach ($numbers as &$number) {
    $number *= 2;
}
print_r($numbers);
```

আউটপুট হবেঃ

```php
Array
(
    [0] => 2
    [1] => 4
    [2] => 6
    [3] => 8
    [4] => 10
)
```

আরেকটা উদাহরণ:

```php
$numbers = [1,2,3,4,5];

foreach ($numbers as &$number) {
    $number *= 2;
}

foreach ($numbers as $number) {
    echo $number . PHP_EOL;
}
```

আউটপুট হবেঃ

```php
2
4
6
8
8
```

এখানে সমস‍্যাটা হচ্ছে শেষের দুইটা ৮, ৮ প্রিন্ট হচ্ছে এটা ঠিক করবার জন‍্য আমাদের unset() ব‍্যবহার করতে হবে।

```php
$numbers = [1,2,3,4,5];

foreach ($numbers as &$number) {
    $number *= 2;
    unset($number);
}

foreach ($numbers as $number) {
    echo $number . PHP_EOL;
}
```

আউটপুট হবেঃ

```php
2
4
6
8
10
```
