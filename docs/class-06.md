# পিএইচপি Array ফাংশন

## in_array() ফাংশন

এই ফাংশন দিয়ে আমরা যদি কোন একটি এলিমেন্ট একটি অ্যারের মধ্যে আছে কিনা তা চেক করতে পারি। এই ফাংশনের প্রথম প্যারামিটার হচ্ছে এলিমেন্ট এবং দ্বিতীয় প্যারামিটার হচ্ছে অ্যারে। এই ফাংশন যদি এলিমেন্ট অ্যারের মধ্যে পাই তাহলে এটি ট্রু রিটার্ন করবে আর না পাইলে ফলাফল হবে ফলস।

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

আরেকটা উদাহরন

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

## array_keys ফাংশন

এই ফাংশনের মাধ্যমে আমরা কোন একটি অ্যারের সব কী গুলো পেতে পারি। এই ফাংশনের প্রথম প্যারামিটার হচ্ছে অ্যারে এবং দ্বিতীয় প্যারামিটার হচ্ছে অপশনাল। যদি আমরা দ্বিতীয় প্যারামিটার দেই তাহলে এই ফাংশন সেই অ্যারের মধ্যে সেই ভ্যালু গুলোর কী গুলো দেখাবে।

```php
<?php
$fruits = array('apple', 'banana', 'orange');

$keys = array_keys($fruits);

print_r($keys);
```

আউটপুট:

```php
Array
(
    [0] => 0
    [1] => 1
    [2] => 2
)
```

## array_map ফাংশন

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

## array_sum ফাংশন

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

## array_filter ফাংশন

এই ফাংশনের মাধ্যমে আমরা কোন একটি অ্যারের সব এলিমেন্ট গুলোকে একটি ফাংশনের মধ্যে পাঠাতে পারি এবং সেই ফাংশনের মধ্যে যেই কন্ডিশন থাকবে সেই কন্ডিশন অনুযায়ী ফিল্টার করতে পারি। এই ফাংশনের প্রথম প্যারামিটার হচ্ছে একটি ফাংশন এবং দ্বিতীয় প্যারামিটার হচ্ছে অ্যারে। এই ফাংশন সব এলিমেন্ট গুলোকে সেই ফাংশনের মধ্যে পাঠায় এবং সেই ফাংশনের মধ্যে যেই কন্ডিশন থাকবে সেই কন্ডিশন অনুযায়ী ফিল্টার করে ফেলে।

```php
<?php
$numbers = array(1, 2, 3, 4, 5);

$evenNumbers = array_filter($numbers, function ($number) {
    return $number % 2 == 0;
});

print_r($evenNumbers);
```

আউটপুট:

```php
Array
(
    [1] => 2
    [3] => 4
)
```

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

আউটপুট:

```php
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

## array_walk ফাংশন

এই ফাংশনের মাধ্যমে আমরা কোন একটি অ্যারের সব এলিমেন্ট গুলোকে একটি ফাংশনের মধ্যে পাঠাতে পারি। এই ফাংশনের প্রথম প্যারামিটার হচ্ছে একটি ফাংশন এবং দ্বিতীয় প্যারামিটার হচ্ছে অ্যারে। এই ফাংশন সব এলিমেন্ট গুলোকে সেই ফাংশনের মধ্যে পাঠায়।

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

## sort ফাংশন

এই ফাংশনের মাধ্যমে আমরা কোন একটি অ্যারের সব এলিমেন্ট গুলোকে সর্ট করতে পারি। এই ফাংশনের প্রথম প্যারামিটার হচ্ছে অ্যারে।

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

## rsort ফাংশন

এই ফাংশনের মাধ্যমে আমরা কোন একটি অ্যারের সব এলিমেন্ট গুলোকে সর্ট করতে পারি। এই ফাংশনের প্রথম প্যারামিটার হচ্ছে অ্যারে।

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

## asort ফাংশন

এই ফাংশনের মাধ্যমে আমরা কোন একটি অ্যাসোসিয়েটিভ অ্যারের সব এলিমেন্ট গুলোকে সর্ট করতে পারি। এই ফাংশনের প্রথম প্যারামিটার হচ্ছে অ্যাসোসিয়েটিভ অ্যারে।

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

## ksort ফাংশন

এই ফাংশনের মাধ্যমে আমরা কোন একটি অ্যাসোসিয়েটিভ অ্যারের সব এলিমেন্ট গুলোকে সর্ট করতে পারি। এই ফাংশনের প্রথম প্যারামিটার হচ্ছে অ্যাসোসিয়েটিভ অ্যারে।

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

## natsort ফাংশন

এই ফাংশনের মাধ্যমে আমরা কোন একটি অ্যাসোসিয়েটিভ অ্যারের সব এলিমেন্ট গুলোকে সর্ট করতে পারি। এই ফাংশনের প্রথম প্যারামিটার হচ্ছে অ্যাসোসিয়েটিভ অ্যারে।

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

## usort ফাংশন

এই ফাংশনের মাধ্যমে আমরা কোন একটি অ্যাসোসিয়েটিভ অ্যারের সব এলিমেন্ট গুলোকে সর্ট করতে পারি। এই ফাংশনের প্রথম প্যারামিটার হচ্ছে অ্যাসোসিয়েটিভ অ্যারে এবং দ্বিতীয় প্যারামিটার হচ্ছে একটি ফাংশন। এই ফাংশন সব এলিমেন্ট গুলোকে সেই ফাংশনের মধ্যে পাঠায় এবং সেই ফাংশনের মধ্যে যেই কন্ডিশন থাকবে সেই কন্ডিশন অনুযায়ী সর্ট করে ফেলে।

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

## array_multisort ফাংশন

এই ফাংশনের মাধ্যমে আমরা একাধিক অ্যারেকে সর্ট করতে পারি। এই ফাংশনের প্রথম প্যারামিটার হচ্ছে সর্ট করতে চাইমা অ্যারে এবং দ্বিতীয় প্যারামিটার হচ্ছে সর্ট করার ধরন।

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

## array_push ফাংশন

এই ফাংশনের মাধ্যমে আমরা কোন একটি অ্যারের শেষে একটি এলিমেন্ট যোগ করতে পারি। এই ফাংশনের প্রথম প্যারামিটার হচ্ছে অ্যারে এবং দ্বিতীয় প্যারামিটার হচ্ছে যে এলিমেন্টটি যোগ করতে চাইমা।

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

## array_pop ফাংশন

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

## array_reduce ফাংশন

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

## rand ফাংশন

এই ফাংশনের মাধ্যমে আমরা কোন একটি র‍্যান্ডম নাম্বার পেতে পারি। এই ফাংশনের প্রথম প্যারামিটার হচ্ছে শুরুর র‍্যান্ডম নাম্বার এবং দ্বিতীয় প্যারামিটার হচ্ছে শেষের র‍্যান্ডম নাম্বার।

```php
<?php
$randomNumber = rand(1, 10);

echo $randomNumber;
```

আউটপুট:

```php
7
```

## array_merge_recursive ফাংশন

এই ফাংশনের মাধ্যমে আমরা একাধিক অ্যারেকে একটি অ্যারেতে মার্জ করতে পারি। এই ফাংশনের প্রথম প্যারামিটার হচ্ছে মার্জ করতে চাইমা অ্যারে এবং দ্বিতীয় প্যারামিটার হচ্ছে মার্জ করার অ্যারে।

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

## array_merge ফাংশন

এই ফাংশনের মাধ্যমে আমরা একাধিক অ্যারেকে একটি অ্যারেতে মার্জ করতে পারি। এই ফাংশনের প্রথম প্যারামিটার হচ্ছে মার্জ করতে চাইমা অ্যারে এবং দ্বিতীয় প্যারামিটার হচ্ছে মার্জ করার অ্যারে।

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

## array_slice ফাংশন

এই ফাংশনের মাধ্যমে আমরা কোন একটি অ্যারের একটি রেঞ্জ কে রিটার্ন করতে পারি। এই ফাংশনের প্রথম প্যারামিটার হচ্ছে অ্যারে এবং দ্বিতীয় প্যারামিটার হচ্ছে রেঞ্জ এর শুরুর ইনডেক্স এবং তৃতীয় প্যারামিটার হচ্ছে রেঞ্জ এর শেষের ইনডেক্স।

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

## array_splice ফাংশন

এই ফাংশনের মাধ্যমে আমরা কোন একটি অ্যারের একটি রেঞ্জ কে রিমুভ করতে পারি এবং সেই রিমুভ করা এলিমেন্ট গুলোকে আমরা অন্য কোন অ্যারেতে রাখতে পারি। এই ফাংশনের প্রথম প্যারামিটার হচ্ছে অ্যারে এবং দ্বিতীয় প্যারামিটার হচ্ছে রেঞ্জ এর শুরুর ইনডেক্স এবং তৃতীয় প্যারামিটার হচ্ছে রেঞ্জ এর শেষের ইনডেক্স।

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

## array_chunk ফাংশন

এই ফাংশনের মাধ্যমে আমরা কোন একটি অ্যারেকে একটি অ্যারের মধ্যে ভাগ করতে পারি। এই ফাংশনের প্রথম প্যারামিটার হচ্ছে ভাগ করতে চাইমা অ্যারে এবং দ্বিতীয় প্যারামিটার হচ্ছে ভাগ করার সাইজ।

```php
<?php
$fruits = array('banana', 'apple', 'orange', 'plum', 'dates');

$someFruits = array_chunk($fruits, 2);

print_r($someFruits);
```

আউটপুট:

```php
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
```

## array_reverse ফাংশন

এই ফাংশনের মাধ্যমে আমরা কোন একটি অ্যারেকে রিভার্স করতে পারি। এই ফাংশনের প্রথম প্যারামিটার হচ্ছে রিভার্স করতে চাইমা অ্যারে।

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

## array_unique ফাংশন

এই ফাংশনের মাধ্যমে আমরা কোন একটি অ্যারের ডুপ্লিকেট এলিমেন্ট গুলো রিমুভ করতে পারি। এই ফাংশনের প্রথম প্যারামিটার হচ্ছে রিমুভ করতে চাইমা অ্যারে।

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

## array_search ফাংশন

এই ফাংশনের মাধ্যমে আমরা কোন একটি এলিমেন্ট এর ইনডেক্স খুঁজে বের করতে পারি। এই ফাংশনের প্রথম প্যারামিটার হচ্ছে খুঁজে বের করতে চাইমা এলিমেন্ট এবং দ্বিতীয় প্যারামিটার হচ্ছে অ্যারে।

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

## array_key_exists ফাংশন

এই ফাংশনের মাধ্যমে আমরা কোন একটি কী আছে কিনা তা চেক করতে পারি। এই ফাংশনের প্রথম প্যারামিটার হচ্ছে চেক করতে চাইমা কী এবং দ্বিতীয় প্যারামিটার হচ্ছে অ্যারে।

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

আউটপুট:

```php
Key exists
```

## implode ফাংশন{#implode-array-function}

এই ফাংশনের মাধ্যমে আমরা কোন অ্যারেকে স্ট্রিং এ কনভার্ট করতে পারি। এই ফাংশনের প্রথম প্যারামিটার হচ্ছে স্ট্রিং এ কনভার্ট করতে চাইমা অ্যারে এবং দ্বিতীয় প্যারামিটার হচ্ছে ডেলিমিটার।

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

## explode ফাংশন

এই ফাংশনের মাধ্যমে আমরা কোন স্ট্রিং কে অ্যারেতে কনভার্ট করতে পারি। এই ফাংশনের প্রথম প্যারামিটার হচ্ছে অ্যারে এবং দ্বিতীয় প্যারামিটার হচ্ছে ডেলিমিটার।

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

## array_flip ফাংশন

এই ফাংশনের মাধ্যমে আমরা কোন অ্যাসোসিয়েটিভ অ্যারের কী এবং ভ্যালু একসাথে পারি এবং সেই অ্যাসোসিয়েটিভ অ্যারেকে রিভার্স করতে পারি।

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

আউটপুট:

```php
Array
(
    [banana] => a
    [apple] => b
    [orange] => c
)
```

## array_key_first ফাংশন

এই ফাংশনের মাধ্যমে আমরা কোন অ্যাসোসিয়েটিভ অ্যারের প্রথম কী এবং ভ্যালু পেতে পারি।

```php
<?php
$fruits = array(
    'a' => 'banana',
    'b' => 'apple',
    'c' => 'orange'
);

$firstKey = array_key_first($fruits);

echo $firstKey;
```

আউটপুট:

```php
a
```

## array_key_last ফাংশন

এই ফাংশনের মাধ্যমে আমরা কোন অ্যাসোসিয়েটিভ অ্যারের শেষ কী এবং ভ্যালু পেতে পারি।

```php
<?php
$fruits = array(
    'a' => 'banana',
    'b' => 'apple',
    'c' => 'orange'
);

$lastKey = array_key_last($fruits);

echo $lastKey;
```

আউটপুট:

```php
c
```


