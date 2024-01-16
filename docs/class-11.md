# পিএইচপি তারিখ ও সময় ফরম্যাটিং

পিএইচপি তারিখ ও সময় ফরম্যাটিং এর জন্য বিল্ট ইন ফাংশন আছে। এই ফাংশন গুলো ব্যবহার করে আমরা পিএইচপি তারিখ ও সময় কে আমাদের পছন্দ মত ফরম্যাট করতে পারি। এই ফাংশন গুলো হচ্ছে `date()` এবং `time()`।

## তারিখ ফরম্যাটিং

আমরা পিএইচপি এর `date()` ফাংশন ব্যবহার করে তারিখ ফরম্যাট করতে পারি। এই ফাংশন এর প্রথম প্যারামিটার হচ্ছে ফরম্যাট এবং দ্বিতীয় প্যারামিটার হচ্ছে তারিখ। আমরা যে কোন ফরম্যাট ব্যবহার করতে পারি। একটি উদাহরণ দেখা যাক।

### Syntax

```php
date(format, timestamp)
```

### Example

```php
<?php
    echo date("d-m-Y"); // 21-07-2021
?>
```

এখানে `d` মানে দিন, `m` মানে মাস এবং `Y` মানে বছর। আমরা যে কোন ফরম্যাট ব্যবহার করতে পারি। একটি উদাহরণ দেখা যাক।

```php
<?php
    echo date("d/m/Y"); // 21/07/2021
?>
```

কিছু কমন চার্টশীট দেখা যাক।

| Character | Description | example |
| --- | --- | --- |
| d | The day of the month (from 01 to 31) | 21 |
| D | A textual representation of a day (three letters) | Wed |
| m | A numeric representation of a month (from 01 to 12) | 07 |
| M | A short textual representation of a month (three letters) | Jul |
| y | A two digit representation of a year | 21 |
| Y | A four digit representation of a year | 2021 |

আরো জানতে চাইলে এই লিংকটি দেখুন। [https://www.php.net/manual/en/function.date.php](https://www.php.net/manual/en/function.date.php)

## unix epoch time

পিএইচপি এর `time()` ফাংশন ব্যবহার করে আমরা ইউনিক্স এপক টাইম পেতে পারি। এই ফাংশন এর কোন প্যারামিটার নেই। এটি সরাসরি ইউনিক্স এপক টাইম রিটার্ন করে। এটি একটি ইন্টিজার রিটার্ন করে। এটি সেকেন্ডে কাউন্ট করে। একটি উদাহরণ দেখা যাক।

```php
<?php
    echo time(); // 1626872400
?>
```

এখানে আমরা দেখতে পাচ্ছি একটি ইন্টিজার রিটার্ন হচ্ছে। এটি সেকেন্ডে কাউন্ট করে। এখন আমরা এই ইন্টিজার কে কিভাবে তারিখ ও সময় এ কনভার্ট করবো সেটা দেখা যাক।

```php
<?php
    echo date("d-m-Y", time()); // 21-07-2021
?>
```

এখানে আমরা দেখতে পাচ্ছি একটি তারিখ। এখন আমরা এই ইন্টিজার কে কিভাবে তারিখ ও সময় এ কনভার্ট করবো সেটা দেখা যাক।

```php
<?php
    echo date("d-m-Y H:i:s", time()); // 21-07-2021 12:00:00
?>
```

## unix timestamp

পিএইচপি এর `strtotime()` ফাংশন ব্যবহার করে আমরা ইউনিক্স টাইমস্ট্যাম্প পেতে পারি। এই ফাংশন এর প্রথম প্যারামিটার হচ্ছে তারিখ এবং দ্বিতীয় প্যারামিটার হচ্ছে ইনপুট ফরম্যাট। একটি উদাহরণ দেখা যাক।

```php
<?php
    echo strtotime("21-07-2021"); // 1626872400
?>
```

## Get a Date in the Future or Past

আমরা পিএইচপি এর `strtotime()` ফাংশন ব্যবহার করে আমরা ভবিষ্যতের তারিখ বা অতীতের তারিখ পেতে পারি। এই ফাংশন এর প্রথম প্যারামিটার হচ্ছে তারিখ এবং দ্বিতীয় প্যারামিটার হচ্ছে ইনপুট ফরম্যাট। একটি উদাহরণ দেখা যাক।

```php
<?php
    echo strtotime("+1 day"); // 1626958800
?>
```

এখানে আমরা দেখতে পাচ্ছি একটি ইন্টিজার রিটার্ন হচ্ছে। এটি সেকেন্ডে কাউন্ট করে। এখন আমরা এই ইন্টিজার কে কিভাবে তারিখ ও সময় এ কনভার্ট করবো সেটা দেখা যাক।

```php
<?php
    echo date("d-m-Y", strtotime("+1 day")); // 22-07-2021
?>
```

এখানে আমরা দেখতে পাচ্ছি একটি তারিখ। এখন আমরা এই ইন্টিজার কে কিভাবে তারিখ ও সময় এ কনভার্ট করবো সেটা দেখা যাক।

```php
<?php
    echo date("d-m-Y H:i:s", strtotime("+1 day")); // 22-07-2021 12:00:00
?>
```

আমরা যদি ভবিষ্যতের তারিখ না দিয়ে সরাসরি দিতে চাই তাহলে আমরা এই ফাংশন এর প্রথম প্যারামিটার হিসেবে তারিখ দিতে পারি। একটি উদাহরণ দেখা যাক।

```php
<?php
    echo strtotime("22-07-2021"); // 1626958800
?>
```

এখানে আমরা দেখতে পাচ্ছি একটি ইন্টিজার রিটার্ন হচ্ছে। এটি সেকেন্ডে কাউন্ট করে। এখন আমরা এই ইন্টিজার কে কিভাবে তারিখ ও সময় এ কনভার্ট করবো সেটা দেখা যাক।

```php
<?php
    echo date("d-m-Y", strtotime("22-07-2021")); // 22-07-2021
?>
```

এখানে আমরা দেখতে পাচ্ছি একটি তারিখ। এখন আমরা এই ইন্টিজার কে কিভাবে তারিখ ও সময় এ কনভার্ট করবো সেটা দেখা যাক।

```php
<?php
    echo date("d-m-Y H:i:s", strtotime("22-07-2021")); // 22-07-2021 12:00:00
?>
```

Date() এর কিছু উদাহরণ দেখা যাক।

```php
<?php
    echo date("d-m-Y", strtotime("+1 day")); // 22-07-2021
    echo date("d-m-Y", strtotime("+1 week")); // 28-07-2021
    echo date("d-m-Y", strtotime("+1 week 2 days 4 hours 2 seconds")); // 30-07-2021
    echo date("d-m-Y", strtotime("next Thursday")); // 29-07-2021
    echo date("d-m-Y", strtotime("last Monday")); // 19-07-2021
?>
```

শুধু মাত্র Year বা Month বা Day বা Hour বা Minute বা Second এর মান বাড়াতে চাইলে আমরা এই ফাংশন এর প্রথম প্যারামিটার হিসেবে তারিখ দিতে পারি। একটি উদাহরণ দেখা যাক।

```php
<?php
    echo strtotime("+1 year"); // 1658408400
    echo strtotime("+1 month"); // 1629541200
    echo strtotime("+1 day"); // 1626958800
    echo strtotime("+1 hour"); // 1626891600
    echo strtotime("+1 minute"); // 1626873000
    echo strtotime("+1 second"); // 1626872401
?>
```

আমরা যদি ভবিষ্যতের তারিখ না দিয়ে সরাসরি দিতে চাই তাহলে আমরা এই ফাংশন এর প্রথম প্যারামিটার হিসেবে তারিখ দিতে পারি। একটি উদাহরণ দেখা যাক।

```php
<?php
    echo strtotime("next year"); // 1658408400
    echo strtotime("next month"); // 1629541200
    echo strtotime("next day"); // 1626958800
    echo strtotime("next hour"); // 1626891600
    echo strtotime("next minute"); // 1626873000
    echo strtotime("next second"); // 1626872401
?>
```

আমরা অটোমেটিক কপিরাইটের বছর দেখাতে পারি। একটি উদাহরণ দেখা যাক।

```php
<?php
    echo date("Y"); // 2021
?>
```

### Get a time in the Future or Past

নিচে কিছু কমন টাইম ফরমেটের চার্টশীট দেখা যাক।

| Character | Description | Example |
| --- | --- | --- |
| a | Lowercase Ante meridiem and Post meridiem | am or pm |
| A | Uppercase Ante meridiem and Post meridiem | AM or PM |
| g | 12-hour format of an hour without leading zeros | 1 through 12 |
| G | 24-hour format of an hour without leading zeros | 0 through 23 |
| h | 12-hour format of an hour with leading zeros | 01 through 12 |
| H | 24-hour format of an hour with leading zeros | 00 through 23 |
| i | Minutes with leading zeros | 00 to 59 |
| s | Seconds with leading zeros | 00 through 59 |

### কিছু উদাহরণ দেখা যাক

```php
<?php
    echo date("h:i:s"); // 12:00:00
    echo date("h:i:s a"); // 12:00:00 pm
    echo date("h:i:s A"); // 12:00:00 PM
    echo date("H:i:s"); // 12:00:00
    echo date("H:i:s a"); // 12:00:00 pm
    echo date("H:i:s A"); // 12:00:00 PM
?>
```

## Get your timezone

আমরা পিএইচপি এর `date_default_timezone_get()` ফাংশন ব্যবহার করে আমরা আমাদের টাইমজোন পেতে পারি। একটি উদাহরণ দেখা যাক।

```php
<?php
    echo date_default_timezone_get(); // Asia/Dhaka
?>
```

## Set your timezone

আমরা পিএইচপি এর `date_default_timezone_set()` ফাংশন ব্যবহার করে আমরা আমাদের টাইমজোন সেট করতে পারি। একটি উদাহরণ দেখা যাক।

```php
<?php
    date_default_timezone_set("Asia/Dhaka");
    echo date_default_timezone_get(); // Asia/Dhaka
?>
```

## কিছু উদাহরণ দেখা যাক

```php
<?php
    date_default_timezone_set("Asia/Dhaka");
    echo date("d-m-Y h:i:s A"); // 21-07-2021 12:00:00 PM
?>
```

## Create a date with maketime()

আমরা পিএইচপি এর `mktime()` ফাংশন ব্যবহার করে আমরা তারিখ তৈরি করতে পারি। এই ফাংশন এর প্রথম প্যারামিটার হচ্ছে ঘন্টা, দ্বিতীয় প্যারামিটার হচ্ছে মিনিট, তৃতীয় প্যারামিটার হচ্ছে সেকেন্ড, চতুর্থ প্যারামিটার হচ্ছে মাস, পঞ্চম প্যারামিটার হচ্ছে দিন এবং ষষ্ঠ প্যারামিটার হচ্ছে বছর। একটি উদাহরণ দেখা যাক।

### Syntax

```php
mktime(hour, minute, second, month, day, year)
```

### Example

```php
<?php
    echo mktime(12, 0, 0, 7, 21, 2021); // 1626872400
?>
```

এখানে আমরা দেখতে পাচ্ছি একটি ইন্টিজার রিটার্ন হচ্ছে। এটি সেকেন্ডে কাউন্ট করে। এখন আমরা এই ইন্টিজার কে কিভাবে তারিখ ও সময় এ কনভার্ট করবো সেটা দেখা যাক।

```php
<?php
    echo date("d-m-Y", mktime(12, 0, 0, 7, 21, 2021)); // 21-07-2021
?>
```

এখানে আমরা দেখতে পাচ্ছি একটি তারিখ। এখন আমরা এই ইন্টিজার কে কিভাবে তারিখ ও সময় এ কনভার্ট করবো সেটা দেখা যাক।

```php
<?php
    echo date("d-m-Y H:i:s", mktime(12, 0, 0, 7, 21, 2021)); // 21-07-2021 12:00:00
?>
```

## কিছু উদাহরণ দেখা যাক

```php
<?php
$startdate = strtotime("Saturday");
$enddate = strtotime("+6 weeks", $startdate);

while ($startdate < $enddate) {
  echo date("M d", $startdate) . "<br>";
  $startdate = strtotime("+1 week", $startdate);
}
?>
```

## আমরা চাইলে দুইটা তারিখের মাঝে কতো দিন বাকি আছে তা বাহির করতে পারি

```php
<?php
    $date1 = strtotime("2021-07-21");
    $date2 = strtotime("2021-07-28");
    $diff = $date2 - $date1;
    echo "Difference between two dates: " . floor($diff / (60*60*24)) . " Days";
?>
```

## আমরা চাইলে দুইটা তারিখের মাঝে কতো ঘন্টা বাকি আছে তা বাহির করতে পারি

```php
<?php
    $date1 = strtotime("2021-07-21 12:00:00");
    $date2 = strtotime("2021-07-21 18:00:00");
    $diff = $date2 - $date1;
    echo "Difference between two dates: " . floor($diff / (60*60)) . " Hours";
?>
```

## আমরা চাইলে দুইটা তারিখের মাঝে কতো মিনিট বাকি আছে তা বাহির করতে পারি

```php
<?php
    $date1 = strtotime("2021-07-21 12:00:00");
    $date2 = strtotime("2021-07-21 12:30:00");
    $diff = $date2 - $date1;
    echo "Difference between two dates: " . floor($diff / (60)) . " Minutes";
?>
```

## আমরা চাইলে দুইটা তারিখের মাঝে কতো সেকেন্ড বাকি আছে তা বাহির করতে পারি

```php
<?php
    $date1 = strtotime("2021-07-21 12:00:00");
    $date2 = strtotime("2021-07-21 12:00:30");
    $diff = $date2 - $date1;
    echo "Difference between two dates: " . floor($diff) . " Seconds";
?>
```








