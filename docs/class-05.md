# পিএইচপি Array এর পরিচিতি এবং অপারেশন

## Array কি ও কেন?{#Array-Basics}

পিএইচপির ডাটা স্ট্রাকচার নিয়ে [প্রথম ক্লাসে](https://php.polashmahmud.com/class-01.html) আমরা কিছু ধারণা নিয়েছি। সেই ক্লাসে [ডাটা টাইপ সেকশনে](https://php.polashmahmud.com/class-01.html#types-of-data-in-php) আমরা পিএইচপি সাপোর্টেড ডাটা টাইপগুলোর একটি লিস্টও দেখেছি।

সেই তালিকায় একটি ডাটা টাইপ ছিল **Array**। তাহলে প্রথম যে ধারণাটা আমরা পেলাম তা হল, **Array** পিএইচপির একটি ডাটা টাইপ। শুধুমাত্র পিএইচপি কেন, পৃথিবীর প্রায় প্রতিটি প্রোগ্রামিং ল্যাংগুয়েজে এই ডাটা টাইপটির ধারণা আছে। *এখন জানার বিষয় হল এইটা আসলে কি?* তার আগে চলুন **Scalar Data** কি সেটা একটু বুঝি।

#### Scalar Data কি?{#Scalar-Data}

আমরা এতদূর অবধি যতগুলো ডাটা টাইপ দেখে এসেছি, আপনি যদি সবগুলোর চরিত্র বা *characteristic* বিশ্লেষণ করেন তাহলে দেখবেন ঐ সমস্ত ডাটা টাইপ একসাথে শুধুমাত্রে একটি ডাটা বা ভ্যালু ধারণ করতে পারে। এর বেশি ভ্যালু ধারণ করার ক্যাপাসিটি তাদের নেই। `NULL`, `bool`, `int`, `float` বা `string` যেটাই হোক না কেন, ভেবে বলুন তো এরা কি একসাথে একটির বেশি ভ্যালু হোল্ড করতে পারে? পারেনা। এই সমস্ত ডাটা টাইপগুলোকেই **Scalar Data** বলে।

*তাই বলে কি আপনি বাস্তব জীবনে সবসময় একবারে একটিমাত্র ভ্যালু সেট করার প্রয়োজনীয়তা নিয়েই বাস করেন? একাধিক ভ্যালু একসাথে সেট করা বা স্টোর করার প্রয়োজনীয়তা কি আপনার হয়না বা হবেনা?*

প্রসঙ্গ যখন বাস্তব জীবন তখন ঘটনাটা আসলে ভিন্ন। আপনাকে বেশিরভাগ সময়ই একাধিক ভ্যালু একবারে সেট করতে হয় বা তার প্রয়োজনীয়তা দেখা দেয়। কারণ জীবন একমুখী নয়, বহুমুখী। এই হিসেবে আপনার ডাটা ফ্লো বহুমুখী হবে এটাই স্বাভাবিক।

*এখন প্রোগ্রামিংয়ে এই বহুমুখী ডাটা ফ্লো আমরা কিভাবে অর্জন করতে পারি?*

এখানেই আসে **Array**, **object**, **class** ইত্যাদি ডাটা টাইপের ধারণা। আমরা এখানে **Array** নিয়ে কথা বলব। বাকিগুলো ভবিষ্যতে জানব ইনশাআল্লাহ।

##### তাহলে **Array** কি?{#what-is-array-in-php}

[**Array**](https://www.php.net/manual/en/language.types.array.php#language.types.array) পিএইচপির একটি ডাটা টাইপ যার ভেতর সাধারণত আমরা একের অধিক ভ্যালু রাখার সুযোগ পাই। একটি ভ্যারিয়েবলের মধ্যে একাধিক ভ্যালু রাখাতে এই ডাটা টাইপটি ব্যবহৃত হয়।

**Array** এর পরিচিতি আরো ভালোভাবে বুঝতে হলে পিএইচপি ম্যানুয়ালের এই অংশটুকু দেখুন:-

>An array in PHP is actually an ordered map. A map is a type that associates values to keys. This type is optimized for several different uses; it can be treated as an array, list (vector), hash table (an implementation of a map), dictionary, collection, stack, queue, and probably more. As array values can be other arrays, trees and multidimensional arrays are also possible.

ম্যাপ, লিস্ট *(vector)*, *hash table* ইত্যাদি বিষয়গুলো না বুঝলে কোন সমস্যা নাই। এগুলো এখনই আপনাকে জানতে হবে তা নয়। তবে বুঝতে পারলে ভালো। তাতে **Array** এর পুরো চিত্রটা বুঝতে পারবেন। ম্যাপের যে সংজ্ঞাটা দেয়া হয়েছে এখন ভাসা ভাসা ভাবে সেটা বুঝতে পারলেও আপনি **Array** এর চরিত্র সম্পর্কে একটা ধারণা পেয়ে যাবেন।

##### **Array** কিভাবে তৈরি করব?{#how-to-make-array-in-php}

পিএইচপিতে আমরা ২ ভাবে **Array** তৈরি করতে পারি।

1. `array()` ফাংশন ব্যবহার করে। তখন আমাদের ভ্যালুগুলো এই ফাংশনের আর্গুমেন্টে আমরা পাস করে দিব, সে সেই ভ্যালুগুলো নিয়ে একটা **Array** তৈরি করবে।

```php
<?php
    $array = array('polash', 'mehedee', 'sunny', 'shakil');
?>
```

array কে প্রিন্ট করবার জন‍্য আমাদের var_dump ব‍্যবহার করতে হবে। যেহেতু এখানে একাধিক ভ‍্যালু আছে তাই আমরা এখানে echo করতে পারবো না। 

```php
<?php
    $array = array('polash', 'mehedee', 'sunny', 'shakil');
    var_dump($array);
?>
```

আউটপুট হবেঃ

```php
array(4) { [0]=> string(6) "polash" [1]=> string(7) "mehedee" [2]=> string(5) "sunny" [3]=> string(6) "shakil" }
```

এখানে আমরা দেখতে পাচ্ছি একটি অ্যারের মধ্যে একাধিক ভ‍্যালু আছে এবং একটি অ্যারের ভেতরে আছে একটি ইনডেক্স নাম্বার। এখানে প্রথম ভ‍্যালুর ইনডেক্স নাম্বার 0 এবং শেষ ভ‍্যালুর ইনডেক্স নাম্বার 3। আমরা যদি কোন একটি ভ‍্যালু প্রিন্ট করতে চাই তাহলে একটি ইনডেক্স নম্বর দিতে হবে। যেমনঃ

```php
<?php
    $array = array('polash', 'mehedee', 'sunny', 'shakil');
    echo $array[0];
?>
```

আউটপুট হবেঃ

```php
polash
```

আমরা অ্যারে ভিন্ন ভাবেও লিখতে পারি। যেমনঃ

```php
<?php
    $array = ['polash', 'mehedee', 'sunny', 'shakil'];
    echo $array[0];
?>
```

আউটপুট হবেঃ

```php
polash
```

## Array types

পিএইচপিতে অ্যারেকে তিনটা টাইপে ভাগ করা যায়। যেমনঃ

- Indexed arrays
- Associative arrays
- Multidimensional arrays

## Indexed arrays

একটি ইনডেক্স অ্যারে হলো এমন একটি অ্যারে যেখানে প্রত্যেকটি ভ‍্যালুর জন‍্য একটি ইনডেক্স নাম্বার থাকে। যেমনঃ

```php
<?php
    $array = array('polash', 'mehedee', 'sunny', 'shakil');
    var_dump($array);
?>
```

আউটপুট হবেঃ

```php
array(4) { [0]=> string(6) "polash" [1]=> string(7) "mehedee" [2]=> string(5) "sunny" [3]=> string(6) "shakil" }
```

## Associative arrays

একটি এসোসিয়েটিভ অ্যারে হলো এমন একটি অ্যারে যেখানে প্রত্যেকটি ভ‍্যালুর জন‍্য একটি key থাকে। যেমনঃ

```php
<?php
    $array = array(
        'name' => 'polash',
        'age' => 25,
        'location' => 'Dhaka'
    );
    var_dump($array);
?>
```

আউটপুট হবেঃ

```php
array(3) { ["name"]=> string(6) "polash" ["age"]=> int(25) ["location"]=> string(5) "Dhaka" }
```

এ ক্ষেত্রে মনে রাখতে হবে key সব সময়ই ইউনিক হতে হবে। যদি দুইটা key এর নাম একই হয়ে যায় তাহলে পরের অ্যারের ভ‍্যালু দিয়ে পূর্বের অ্যারেটা পরিবর্তন হয়ে যাবে।

উদাহরণ দেখিঃ

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

var_dump($people);
?>
```

আউটপুট হবেঃ

```php
array(1) { ["polash"]=> array(1) { ["age"]=> int(42) } }
```

## Multidimensional arrays

একটি মাল্টিডাইমেনশনাল অ্যারে হলো এমন একটি অ্যারে যেখানে প্রত্যেকটি ভ‍্যালু আবার একটি অ্যারে হবে। যেমনঃ

```php
<?php
    $array = array(
        array('polash', 'mehedee', 'sunny', 'shakil'),
        array('polash', 'mehedee', 'sunny', 'shakil'),
        array('polash', 'mehedee', 'sunny', 'shakil')
    );
    var_dump($array);
?>
```

আউটপুট হবেঃ

```php
array(3) { 
[0]=> array(4) { [0]=> string(6) "polash" [1]=> string(7) "mehedee" [2]=> string(5) "sunny" [3]=> string(6) "shakil" }
[1]=> array(4) { [0]=> string(6) "polash" [1]=> string(7) "mehedee" [2]=> string(5) "sunny" [3]=> string(6) "shakil" } 
[2]=> array(4) { [0]=> string(6) "polash" [1]=> string(7) "mehedee" [2]=> string(5) "sunny" [3]=> string(6) "shakil" } 
}
```

## Array Counting

একটি অ্যারের ভ‍্যালু গুলোর সংখ্যা বের করতে হলে আমরা `count()` ফাংশনটি ব্যবহার করতে পারি।

```php
<?php
    $array = array('polash', 'mehedee', 'sunny', 'shakil');
    echo count($array);
?>
```

আউটপুট হবেঃ

```php
4
```

## array_count_values()

একটি অ্যারের ভ‍্যালু গুলোর মধ্যে প্রতিটি ইউনিক ভ‍্যালুর উপস্থিতি সংখ্যা বের করতে হলে আমরা `array_count_values()` ফাংশনটি ব্যবহার করতে পারি।

```php
<?php
    $array = array('polash', 'mehedee', 'sunny', 'shakil', 'polash', 'mehedee', 'sunny');
    var_dump(array_count_values($array));
?>
```

আউটপুট হবেঃ

```php
array(4) { ["polash"]=> int(2) ["mehedee"]=> int(2) ["sunny"]=> int(2) ["shakil"]=> int(1) }
```

## sizeof()

একটি অ্যারের ভ‍্যালু গুলোর সংখ্যা বের করতে হলে আমরা `sizeof()` ফাংশনটি ব্যবহার করতে পারি।

```php
<?php
    $array = array('polash', 'mehedee', 'sunny', 'shakil');
    echo sizeof($array);
?>
```

আউটপুট হবেঃ

```php
4
```

## Looping through an indexed array

একটি ইনডেক্স অ্যারের ভেতরে লুপ চালানোর জন‍্য আমরা `for` লুপ ব্যবহার করতে পারি।

```php
<?php
    $array = array('polash', 'mehedee', 'sunny', 'shakil');
    for ($i = 0; $i < count($array); $i++) {
        echo $array[$i] . '<br>';
    }
?>
```

আউটপুট হবেঃ

```php
polash
mehedee
sunny
shakil
```

## Looping through an associative array

একটি এসোসিয়েটিভ অ্যারের ভেতরে লুপ চালানোর জন‍্য আমরা `foreach` লুপ ব্যবহার করতে পারি।

```php
<?php
    $array = array(
        'name' => 'polash',
        'age' => 25,
        'location' => 'Dhaka'
    );
    foreach ($array as $key => $value) {
        echo $key . ' : ' . $value . '<br>';
    }
?>
```

আউটপুট হবেঃ

```php
name : polash
age : 25
location : Dhaka
```

## Looping through a multidimensional array

একটি মাল্টিডাইমেনশনাল অ্যারের ভেতরে লুপ চালানোর জন‍্য আমরা `foreach` লুপ ব্যবহার করতে পারি।

```php
<?php
    $array = array(
        array('polash', 'mehedee', 'sunny', 'shakil'),
        array('polash', 'mehedee', 'sunny', 'shakil'),
        array('polash', 'mehedee', 'sunny', 'shakil')
    );
    foreach ($array as $key => $value) {
        echo $key . ' : ' . $value . '<br>';
    }
?>
```

আউটপুট হবেঃ

```php
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
            echo $key . ' : ' . $value . '<br>';
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
    echo $people['name'] . '|' . $people['email'] . '<br>';
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
        echo $like . '<br>';
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
    echo $people['name'] .  '<br>';
    
    echo implode(', ', $people['likes']);
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
    echo $index . ' : ' . $people['name'] .  '<br>';
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
    ['text' => 'Have a cuf of tea!'],
    'status' => 200
];

foreach ($status as $key => $value) {
    if ($key !== 'status') {
        echo $value['text'] . '<br>';
    }
}
```

আউটপুট হবেঃ

```php
What a lovely day!
Have a cuf of tea!
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
    echo $value['text'] . '<br>';
}
```

আউটপুট হবেঃ

```php
What a lovely day!
Have a cuf of tea!
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
var_dump($found);
```

আউটপুট হবেঃ

```php
array(3) {
  ["id"]=>
  int(1)
  ["name"]=>
  string(4) "John"
  ["email"]=>
  string(16) "john@example.com"
}
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

var_dump($peoples);
```

আউটপুট হবেঃ

```php
array(2) {
  [0]=>
  array(3) {
    ["id"]=>
    int(1)
    ["name"]=>
    string(4) "JOHN"
    ["email"]=>
    string(16) "john@example.com"
  }
  [1]=>
  &array(3) {
    ["id"]=>
    int(2)
    ["name"]=>
    string(4) "JANE"
    ["email"]=>
    string(16) "jane@example.com"
  }
}
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

var_dump($newPeoples);
```

আউটপুট হবেঃ

```php
array(2) {
  [0]=>
  array(1) {
    ["name"]=>
    string(4) "JOHN"
  }
  [1]=>
  array(1) {
    ["name"]=>
    string(4) "JANE"
  }
}
```

আমরা অ্যারের ভিতর যেভাবে কোন কিছু গুণন করতে পারি।

```php
$numbers = [1,2,3,4,5];

foreach ($numbers as &$number) {
    $number *= 2;
}
var_dump($numbers);
```

আউটপুট হবেঃ

```php
array(5) {
  [0]=>
  int(2)
  [1]=>
  int(4)
  [2]=>
  int(6)
  [3]=>
  int(8)
  [4]=>
  &int(10)
}
```

আরেকটা উদাহারণ:

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




















