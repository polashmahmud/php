# PHP DateTime ফরম্যাটিংয়ে _Carbon_ এর ব্যবহার

## Carbon কি?

[**_Carbon_**](https://github.com/briannesbitt/Carbon) একটি _simple PHP API extension_। পিএইচপিতে সময় এবং তারিখ সংক্রান্ত যাবতীয় কর্মকান্ড সুষ্ঠ, সহজ এবং সুচারুরূপে সম্পন্ন করতে এই টুল/এক্সটেনশন/লাইব্রেরি যাই বলিনা কেন নির্মিত হয়।

## Carbon Install করার প্রক্রিয়া

[_Carbon_ এর অফিশিয়াল ডকুমেন্টেশন](https://carbon.nesbot.com/#gettingstarted) অনুযায়ী এটা দুইভাবে ইন্সটল করা যায়।

1. পিএইচপি প্যাকেজ ম্যানেজার **_Composer_** এর সাহায্যে ইন্সটল এবং সেটআপ করা
2. [Carbon zip ফাইল](https://github.com/briannesbitt/Carbon/releases) ডাউনলোড করে ম‍্যানুয়ালি সেটআপ করা

ডকুমেন্টেশন অনুযায়ী _Composer_ ব্যবহার করে ইনস্টল করা সবচেয়ে সহজ এবং রেকমেন্ডেড পদ্ধতি। _Carbon_ এর অফিশিয়াল সাইটে উভয় পদ্ধতিতে ইনস্টল করার প্রক্রিয়া তুলে ধরা হয়েছে। বিস্তারিত দেখতে উপরে প্রদত্ত অফিশিয়াল ডকুমেন্টেশনের লিংকে ক্লিক করুন।

আমরা এখানে _Composer_ ব‍্যবহার করে _Carbon_ ইন্সটল করবো। **দ্রষ্টব্যঃ** _Composer_ ব‍্যবহার করে ইন্সটল করতে হলে আমাদের মেশিনে _Composer_ অবশ্যই ইন্সটল করা থাকতে হবে।

## Composer ইন্সটল করার প্রক্রিয়া

আপনার মেশিনে যদি _Composer_ ইনস্টল করা না থাকে তাহলে [Composer অফিশিয়াল সাইট](https://getcomposer.org/download/) থেকে [_`Composer-Setup.exe`_](https://getcomposer.org/Composer-Setup.exe) ফাইলটি ডাউনলোড করে ইনস্টল করতে পারেন। এটি উইন্ডোজ ব্যবহারকারীদের জন্য। ম্যাক বা লিনাক্স ব্যবহারকারীরা [এই লিংকে](https://getcomposer.org/doc/00-intro.md#downloading-the-composer-executable) গিয়ে [এই ফাইলটি](https://getcomposer.org/installer) ডাউনলোড করতে পারেন।

আপনার মেশিনে _Composer_ ইনস্টল করা আছে/হয়েছে কিনা চেক করতে নিন্মোক্ত কমান্ড ব্যবহার করুন।

```bash
composer
```

ইনস্টল সফলভাবে সম্পন্ন হয়ে থাকলে _Composer_ ভার্সন সহ যাবতীয় বিবরণ প্রদর্শিত হবে।

## Composer দিয়ে Carbon ইন্সটলেশন

_Composer_ ইন্সটল করা থাকলে/হয়ে গেলে এবার নিচের কমান্ড দিয়ে কার্বন ইন্সটল করতে পারেন।

```bash
composer require nesbot/carbon
```

এই একটি কমান্ডের মাধ্যমে _Carbon_ ব্যবহার করার জন্য যাবতীয় ফাইল আমরা পেয়ে যাব। এটা যেমনিভাবে _Carbon_ ‍এর _latest version_ ইন্সটল করবে, তেমনিভাবে `composer.json` কনফিগ ফাইলটাও সেটআপ করে দিবে।

আপনি উপরোক্ত কমান্ড ব্যবহার করতে না চাইলে প্রথমে `composer.json` নামে একটি `json` ফাইল তৈরি করুন, অতঃপর নিন্মোক্ত কমান্ড রান করুনঃ

```bash
composer install
```

ফলে আপনি তখন `composer.json` ফাইলে নিন্মোক্ত `json` ডাটাগুলো দেখতে পাবেন।

```json
{
  "require": {
    "nesbot/carbon": "^2.72.2"
  }
}
```

আর যদি _Composer_ ব‍্যবহার করে ইন্সটল করতে না চান তাহলে ডকুমেন্টেশন/ম্যানুয়াল পড়ুন।

## Carbon এর ব্যবহার পদ্ধতি

_Carbon_ ব্যবহার করতে আমাদেরকে প্রথমে `autoload.php` নামক একটি ফাইল যা **vendor** নামক ফোল্ডারের অভ্যন্তরে আছে তাকে ফাইল আপলোডার ফাংশনের সাহায্যে ইমপোর্ট করতে হবে। অতঃপর `use` ব্যবহার করে `Carbon\Carbon` এই নেমস্পেসটি ব্যবহার করে _Carbon_ ক্লাসটি অন্তর্ভুক্ত করতে হবে।

যেহেতু আমরা এখনও পিএইচপির ক্লাস বা অবজেক্ট ওরিয়েন্টেড কনসেপ্ট সম্পর্কে কোন জ্ঞান অর্জন করিনি তাই আপাতত এভাবে করে যেতে থাকি। পরবর্তীতে আমরা এগুলো বুঝতে পারব। এই পর্যন্ত সুষ্ঠুভাবে সম্পন্ন হলে এখন আমরা তারিখ ও সময় আমাদের চাহিদামতো ফরম্যাটিং করতে পারব। উদাহরণঃ

```php
<?php
    require_once "vendor/autoload.php";
    use Carbon\Carbon;

    echo Carbon::now();
```

**আউটপুট**

```bash
2021-07-21 12:00:00
```

## Creating

```php
    require_once "vendor/autoload.php";

    $c = new Carbon();
```

আমরা যদি এখাবে একটা অবজেক্ট ক্রিয়েট করতে চাই তাহলে আমরা দেখবো যে আমাদের একটা ইরর দিচ্ছে এবং বলছে আমাদের নেম প্লেস দেওয়া নাই। এখন আমরা যদি নেম প্লেস দেই তাহলে আমরা দেখবো যে আমাদের কার্বন ক্লাস টা ইনক্লুড করা হয়েছে।

```php
<?php
    require_once "vendor/autoload.php";
    use Carbon\Carbon;

    $c = new Carbon();

    var_dump($c);
?>
```

**আউটপুট**

```bash
object(Carbon\Carbon)#1 (3) {
  ["date"]=>
  string(26) "2021-07-21 12:00:00.000000"
  ["timezone_type"]=>
  int(3)
  ["timezone"]=>
  string(13) "Asia/Dhaka"
}
```

এখন আমরা দেখতে পাচ্ছি যে আমাদের ইরর দিচ্ছে না কিন্তু আমাদের নতুন একটা অবজেক্ট ক্রিয়েট হয়ে গিয়েছে। এবং এই অবজেক্টে আমরা দেখতে পাচ্ছি যে ডিফল্ট ভাবে অনেক কিছুই ডেট টাইম রিলেটেড জিনিসপত্র আমাদের জন‍্য দেওয়া হয়েছে। যেমন তারিখ, টাইম, টাইম জোন, টাইমস্ট্যাম্প ইত্যাদি।

আমরা চাইলে এভাবে new কিওয়ার্ড ব্যবহার না করে static ওয়েতেও একটা অবজেক্ট ক্রিয়েট করতে পারি।

```php
<?php
    require_once "vendor/autoload.php";
    use Carbon\Carbon;

    $c = Carbon::now();

    var_dump($c);
?>
```

**আউটপুট**

```bash
object(Carbon\Carbon)#1 (3) {
  ["date"]=>
  string(26) "2021-07-21 12:00:00.000000"
  ["timezone_type"]=>
  int(3)
  ["timezone"]=>
  string(13) "Asia/Dhaka"
}
```

আপনারা দেখতে পাচ্ছেন আমাদের আউটপুটে কোনই পরিবর্তন আসে নাই। কিন্তু static ম‍্যাথডটা ইউজার ফ্রেন্ডলি।

আরেকটা স্টাটিক ম‍্যাথড আছে today() ম‍্যাথড। এই ম‍্যাথড টা ব্যবহার করে আমরা আজকের তারিখ পেতে পারি।

```php
<?php
    require_once "vendor/autoload.php";
    use Carbon\Carbon;

    $c = Carbon::today();

    var_dump($c);
?>
```

**আউটপুট**

```bash
object(Carbon\Carbon)#1 (3) {
  ["date"]=>
  string(26) "2021-07-21 12:00:00.000000"
  ["timezone_type"]=>
  int(3)
  ["timezone"]=>
  string(13) "Asia/Dhaka"
}
```

এখন আপনি now() এবং today() এর মাঝে যদি পার্থক‍্য দেখেন তাহলে খুব একটা পার্থক‍্য পাবেন না। শুধু মাত্র টাইমটাই পার্থক‍্য দেখতে পাবেন।

আরেকটা আছে tomorrow() ম‍্যাথড। এই ম‍্যাথড টা ব্যবহার করে আমরা আগামীকালের তারিখ পেতে পারি।

```php
<?php
    require_once "vendor/autoload.php";
    use Carbon\Carbon;

    $c = Carbon::tomorrow();

    var_dump($c);
?>
```

**আউটপুট**

```bash
object(Carbon\Carbon)#1 (3) {
  ["date"]=>
  string(26) "2021-07-22 12:00:00.000000"
  ["timezone_type"]=>
  int(3)
  ["timezone"]=>
  string(13) "Asia/Dhaka"
}
```

আরেকটা আছে yesterday() ম‍্যাথড। এই ম‍্যাথড টা ব্যবহার করে আমরা গতকালের তারিখ পেতে পারি।

```php
<?php
    require_once "vendor/autoload.php";
    use Carbon\Carbon;

    $c = Carbon::yesterday();

    var_dump($c);
?>
```

**আউটপুট**

```bash
object(Carbon\Carbon)#1 (3) {
  ["date"]=>
  string(26) "2021-07-20 12:00:00.000000"
  ["timezone_type"]=>
  int(3)
  ["timezone"]=>
  string(13) "Asia/Dhaka"
}
```

আপনি চাইলে create() ম‍্যাথড ব‍্যবহার করে কার্বন ক্লাস এর মাধ্যমে কোন তারিখ ক্রিয়েট করতে পারেন।

```php
<?php
    require_once "vendor/autoload.php";
    use Carbon\Carbon;

    $c = Carbon::create(2021, 7, 22);

    var_dump($c);
?>
```

**আউটপুট**

```bash
object(Carbon\Carbon)#1 (3) {
  ["date"]=>
  string(26) "2021-07-22 12:00:00.000000"
  ["timezone_type"]=>
  int(3)
  ["timezone"]=>
  string(13) "Asia/Dhaka"
}
```

## create() ম‍্যাথডের সিনট্যাক্স

```php
    Carbon::create($year, $month, $day, $hour, $minute, $second, $tz);
```

আপনি চাইলে createFromDate() ম‍্যাথড ব‍্যবহার করে কার্বন ক্লাস এর মাধ্যমে কোন তারিখ ক্রিয়েট করতে পারেন।

```php
<?php
    require_once "vendor/autoload.php";
    use Carbon\Carbon;

    $c = Carbon::createFromDate(2021, 7, 22);

    var_dump($c);
?>
```

**আউটপুট**

```bash
object(Carbon\Carbon)#1 (3) {
  ["date"]=>
  string(26) "2021-07-22 12:00:00.000000"
  ["timezone_type"]=>
  int(3)
  ["timezone"]=>
  string(13) "Asia/Dhaka"
}
```

## createFromDate() ম‍্যাথডের সিনট্যাক্স

```php
    Carbon::createFromDate($year, $month, $day, $tz);
```

আপনি চাইলে createFromTime() ম‍্যাথড ব‍্যবহার করে কার্বন ক্লাস এর মাধ্যমে কোন তারিখ ক্রিয়েট করতে পারেন।

```php
<?php
    require_once "vendor/autoload.php";
    use Carbon\Carbon;

    $c = Carbon::createFromTime(12, 0, 0);

    var_dump($c);
?>
```

**আউটপুট**

```bash
object(Carbon\Carbon)#1 (3) {
  ["date"]=>
  string(26) "2021-07-21 12:00:00.000000"
  ["timezone_type"]=>
  int(3)
  ["timezone"]=>
  string(13) "Asia/Dhaka"
}
```

## createFromTime() ম‍্যাথডের সিনট্যাক্স

```php
    Carbon::createFromTime($hour, $minute, $second, $tz);
```

আপনি চাইলে createFromTimestamp() ম‍্যাথড ব‍্যবহার করে কার্বন ক্লাস এর মাধ্যমে কোন তারিখ ক্রিয়েট করতে পারেন।

```php
<?php
    require_once "vendor/autoload.php";
    use Carbon\Carbon;

    $c = Carbon::createFromTimestamp(1626872400);

    var_dump($c);
?>
```

**আউটপুট**

```bash
object(Carbon\Carbon)#1 (3) {
  ["date"]=>
  string(26) "2021-07-21 12:00:00.000000"
  ["timezone_type"]=>
  int(3)
  ["timezone"]=>
  string(13) "Asia/Dhaka"
}
```

## createFromTimestamp() ম‍্যাথডের সিনট্যাক্স

```php
    Carbon::createFromTimestamp($timestamp, $tz);
```

আপনি চাইলে হিউমেন রিডেবল ফরম‍্যাটকেও তারিখে রূপান্তর করতে পারেন।

```php
<?php
    require_once "vendor/autoload.php";
    use Carbon\Carbon;

    $c = new Carbon('first day of January 2008', 'Asia/Dhaka');

    var_dump($c);
?>
```

**আউটপুট**

```bash
object(Carbon\Carbon)#1 (3) {
  ["date"]=>
  string(26) "2008-01-01 12:00:00.000000"
  ["timezone_type"]=>
  int(3)
  ["timezone"]=>
  string(13) "Asia/Dhaka"
}
```

আপনি চাইলে + এবং - অপারেটর ব‍্যবহার করে কার্বন ক্লাস এর মাধ্যমে কোন তারিখ ক্রিয়েট করতে পারেন।

```php
<?php
    require_once "vendor/autoload.php";
    use Carbon\Carbon;

    $c = new Carbon('+2 days');

    var_dump($c);
?>
```

**আউটপুট**

```bash
object(Carbon\Carbon)#1 (3) {
  ["date"]=>
  string(26) "2021-07-23 12:00:00.000000"
  ["timezone_type"]=>
  int(3)
  ["timezone"]=>
  string(13) "UTC"
}
```

```php
<?php
    require_once "vendor/autoload.php";
    use Carbon\Carbon;

    $c = new Carbon('-6 days 12 hours');

    var_dump($c);
?>
```

**আউটপুট**

```bash
object(Carbon\Carbon)#1 (3) {
  ["date"]=>
  string(26) "2021-07-15 00:00:00.000000"
  ["timezone_type"]=>
  int(3)
  ["timezone"]=>
  string(13) "UTC"
}
```

## formation

আমরা এখন দেখবো আমরা কতো সুন্দর করে তারিখকে ফরম‍্যাট করতে পারি।

```php
<?php
    require_once "vendor/autoload.php";
    use Carbon\Carbon;

    $c = Carbon::now();

    echo $c->toDateString();
?>
```

**আউটপুট**

```bash
2021-07-21
```

আমরা যদি আরেকটা দেখি

```php
<?php
    require_once "vendor/autoload.php";
    use Carbon\Carbon;

    $c = Carbon::now();

    echo $c->toDateTimeString();
?>
```

**আউটপুট**

```bash
2021-07-21 12:00:00
```

আমরা যদি আরেকটা দেখি

```php
<?php
    require_once "vendor/autoload.php";
    use Carbon\Carbon;

    $c = Carbon::now();

    echo $c->toRssString();
?>
```

**আউটপুট**

```bash
Wed, 21 Jul 2021 12:00:00 +0000
```

আমরা যদি আরেকটা দেখি

```php
<?php
    require_once "vendor/autoload.php";
    use Carbon\Carbon;

    $c = Carbon::now();

    echo $c->toAtomString();
?>
```

**আউটপুট**

```bash
2021-07-21T12:00:00+00:00
```

তাহলে আমরা দেখতে পাচ্ছি যে আমরা চাইলে অনেক কিছুই ব‍্যবহার করে আমাদের মতো করে ফরম‍্যাট করতে পারি। সবথেকে বেশি ব্যবহার হয় এই ফরম‍্যাট ম‍্যাথড।

```php
<?php
    require_once "vendor/autoload.php";
    use Carbon\Carbon;

    $c = Carbon::now();

    echo $c->format('l jS \\of F Y h:i:s A');
?>
```

**আউটপুট**

```bash
Wednesday 21st of July 2021 12:00:00 PM
```

আরেকটা বেশি ব‍্যবহৃত হয় তা হচ্ছে হিউমেন রিডেবল ফরম‍্যাট।

```php
<?php
    require_once "vendor/autoload.php";
    use Carbon\Carbon;

    $c = new Carbon('first day of January 2008', 'Asia/Dhaka');

    echo $c->diffForHumans();
?>
```

**আউটপুট**

```bash
16 years ago
```

## Getters

কার্বনে অনেক ইউজপুল গেটার আছে। আমরা যদি কার্বনের গেটার গুলো দেখতে চাই তাহলে আমরা দেখতে পারি নিচের কোড গুলো।

```php
<?php
    require_once "vendor/autoload.php";
    use Carbon\Carbon;

    $c = new Carbon('first day of January 2008', 'Asia/Dhaka');

    echo $c->year;
    echo $c->month;
    echo $c->day;
    echo $c->hour;
    echo $c->minute;
    echo $c->second;
    echo $c->timestamp;
    echo $c->timezone;
    echo $c->timezoneName;
?>
```

**আউটপুট**

```bash
2008
1
1
12
0
0
1199164800
Asia/Dhaka
Asia/Dhaka
```

আপনি চাইলে dayOfWeek গেটার ব‍্যবহার করে কোন দিনের তারিখ পেতে পারেন।

```php
<?php
    require_once "vendor/autoload.php";
    use Carbon\Carbon;

    $c = new Carbon('first day of January 2008', 'Asia/Dhaka');

    echo $c->dayOfWeek;
?>
```

**আউটপুট**

```bash
2
```

আপনি চাইলে dayOfYear গেটার ব‍্যবহার করে কোন দিনের তারিখ পেতে পারেন।

```php
<?php
    require_once "vendor/autoload.php";
    use Carbon\Carbon;

    $c = new Carbon('first day of January 2008', 'Asia/Dhaka');

    echo $c->dayOfYear;
?>
```

**আউটপুট**

```bash
1
```

আপনি চাইলে weekOfMonth গেটার ব‍্যবহার করে কোন সপ্তাহের তারিখ পেতে পারেন।

```php
<?php
    require_once "vendor/autoload.php";
    use Carbon\Carbon;

    $c = new Carbon('first day of January 2008', 'Asia/Dhaka');

    echo $c->weekOfMonth;
?>
```

**আউটপুট**

```bash
1
```

আপনি চাইলে weekOfYear গেটার ব‍্যবহার করে কোন সপ্তাহের তারিখ পেতে পারেন।

```php
<?php
    require_once "vendor/autoload.php";
    use Carbon\Carbon;

    $c = new Carbon('first day of January 2008', 'Asia/Dhaka');

    echo $c->weekOfYear;
?>
```

**আউটপুট**

```bash
1
```

আপনি চাইলে daysInMonth গেটার ব‍্যবহার করে কোন মাসের দিন পেতে পারেন।

```php
<?php
    require_once "vendor/autoload.php";
    use Carbon\Carbon;

    $c = new Carbon('last day of January 2008', 'Asia/Dhaka');

    echo $c->daysInMonth;
?>
```

**আউটপুট**

```bash
31
```

আপনি চাইলে formatLocalized গেটার ব‍্যবহার করে কোন মাসের দিন পেতে পারেন।

```php
<?php
    require_once "vendor/autoload.php";
    use Carbon\Carbon;

    $c = Carbon::now();

    echo $c->formatLocalized('%A %d %B %Y');
?>
```

**আউটপুট**

```bash
Wednesday 21 July 2021
```

আপনি চাইলে খুব সহজে age গেটার ব‍্যবহার করে কোন মাসের দিন পেতে পারেন।

```php
<?php
    require_once "vendor/autoload.php";
    use Carbon\Carbon;

    $c = new Carbon('01/01/2000');

    echo $c->age;
?>
```

**আউটপুট**

```bash
21
```

## Setters

কার্বনে অনেক ইউজপুল সেটার আছে। আমরা যদি কার্বনের সেটার গুলো দেখতে চাই তাহলে আমরা দেখতে পারি নিচের কোড গুলো।

```php
<?php
    require_once "vendor/autoload.php";
    use Carbon\Carbon;

    $c = Carbon::now();

    $c->year = 2021;
    $c->month = 7;
    $c->day = 22;
    $c->hour = 12;
    $c->minute = 0;
    $c->second = 0;
    $c->timestamp = 1626872400;
    $c->timezone = 'Asia/Dhaka';
    $c->timezoneName = 'Asia/Dhaka';

    echo $c->toDateTimeString();
?>
```

**আউটপুট**

```bash
2021-07-22 12:00:00
```

## timezone

কার্বনে অনেক ইউজপুল টাইমজোন আছে। আমরা যদি কার্বনের টাইমজোন গুলো দেখতে চাই তাহলে আমরা দেখতে পারি নিচের কোড গুলো।

```php
<?php
    require_once "vendor/autoload.php";
    use Carbon\Carbon;

    $c = Carbon::now();

    echo $c->tzName;
    echo $c->tz;
?>
```

**আউটপুট**

```bash
Asia/Dhaka
Asia/Dhaka
```

আপনি চাইলে টাইমজোন চেঞ্জ করতে পারেন।

```php
<?php
    require_once "vendor/autoload.php";
    use Carbon\Carbon;

    $c = Carbon::now();

    $c->tz = 'Asia/Dhaka';

    echo $c->tzName;
    echo $c->tz;
?>
```

**আউটপুট**

```bash
Asia/Dhaka
Asia/Dhaka
```

আপনি চাইলে সরাসরি টাইমজোন চেঞ্জ করতে পারেন।

```php
<?php
    require_once "vendor/autoload.php";
    use Carbon\Carbon;

    $c = Carbon::now('Asia/Dhaka');

    echo $c->tzName;
    echo $c->tz;
?>
```

**আউটপুট**

```bash
Asia/Dhaka
Asia/Dhaka
```

আপনি চাইলে তারিখের সাথে টাইম জোন পাঠিয়ে দিতে পারবেন

```php
<?php
    require_once "vendor/autoload.php";
    use Carbon\Carbon;

    $c = Carbon::createFromDate(2021, 7, 22, 20, 10, 10, 'Asia/Dhaka');

    echo $c->toDateTimeString();
?>
```

**আউটপুট**

```bash
2021-07-22 20:10:10
```

আপনি setTimeZone() ম‍্যাথড ব‍্যবহার করেও টাইমজোন চেঞ্জ করতে পারেন।

```php
<?php
    require_once "vendor/autoload.php";
    use Carbon\Carbon;

    $c = Carbon::now()->setTimeZone('Asia/Dhaka');

    echo $c->tzName;
?>
```

**আউটপুট**

```bash
Asia/Dhaka
```

## Manipulating

কার্বনে অনেক ইউজপুল ম‍্যানিপুলেট আছে। আমরা যদি কার্বনের ম‍্যানিপুলেট গুলো দেখতে চাই তাহলে আমরা দেখতে পারি নিচের কোড গুলো।

```php
<?php
    require_once "vendor/autoload.php";
    use Carbon\Carbon;

    $c = Carbon::now();

    echo $c->addYears(5)->toDateTimeString();
    echo $c->subYears(5)->toDateTimeString();
    echo $c->addMonths(5)->toDateTimeString();
    echo $c->subMonths(5)->toDateTimeString();
    echo $c->addDays(5)->toDateTimeString();
    echo $c->subDays(5)->toDateTimeString();
    echo $c->addWeeks(5)->toDateTimeString();
    echo $c->subWeeks(5)->toDateTimeString();
    echo $c->addHours(5)->toDateTimeString();
    echo $c->subHours(5)->toDateTimeString();
    echo $c->addMinutes(5)->toDateTimeString();
    echo $c->subMinutes(5)->toDateTimeString();
    echo $c->addSeconds(5)->toDateTimeString();
    echo $c->subSeconds(5)->toDateTimeString();
?>
```

**আউটপুট**

```bash
2026-07-21 12:00:00
2021-07-21 12:00:00
2021-12-21 12:00:00
2021-07-21 12:00:00
2021-07-26 12:00:00
2021-07-21 12:00:00
2021-08-25 12:00:00
2021-07-21 12:00:00
2021-07-21 17:00:00
2021-07-21 12:00:00
2021-07-21 12:05:00
2021-07-21 12:00:00
2021-07-21 12:00:05
2021-07-21 12:00:00
```

## Comparisons

কার্বনে অনেক ইউজপুল কম্প‍্যারিসন আছে। আমরা যদি কার্বনের কম্প‍্যারিসন গুলো দেখতে চাই তাহলে আমরা দেখতে পারি নিচের কোড গুলো।

```php
<?php
    require_once "vendor/autoload.php";
    use Carbon\Carbon;

    $c1 = Carbon::now();
    $c2 = Carbon::now('+2 days');

    echo $c1->eq($c2); // Equal
    echo $c1->ne($c2); // Not Equal
    echo $c1->gt($c2); // Greater Than
    echo $c1->gte($c2); // Greater Than or Equal
    echo $c1->lt($c2); // Less Than
    echo $c1->lte($c2); // Less Than or Equal
?>
```

**আউটপুট**

```bash
000001
```

## Difference

কার্বনে অনেক ইউজপুল ডিফারেন্স আছে। আমরা যদি কার্বনের ডিফারেন্স গুলো দেখতে চাই তাহলে আমরা দেখতে পারি নিচের কোড গুলো।

```php
<?php
    require_once "vendor/autoload.php";
    use Carbon\Carbon;

    $c1 = Carbon::now();
    $c2 = Carbon::now('+2 days');

    echo $c1->diffInYears($c2);
    echo $c1->diffInMonths($c2);
    echo $c1->diffInDays($c2);
    echo $c1->diffInWeeks($c2);
    echo $c1->diffInHours($c2);
    echo $c1->diffInMinutes($c2);
    echo $c1->diffInSeconds($c2);
?>
```

**আউটপুট**

```bash
0
0
2
0
48
2880
172800
```

আপনি চাইলে ডিফারেন্স এর সাথে কিছু কাস্টমাইজেশন করতে পারেন।

```php
<?php
    require_once "vendor/autoload.php";
    use Carbon\Carbon;

    $c1 = Carbon::now();
    $c2 = Carbon::now('+2 days');

    echo $c1->diffForHumans($c2);
?>
```

**আউটপুট**

```bash
2 days from now
```

আপনি চাইলে একজন মানুষ কতো বছর বয়স তা খুব সহজেই বাহির করতে পারেন

```php
<?php
    require_once "vendor/autoload.php";
    use Carbon\Carbon;

    $c1 = new Carbon('01/01/2000');
    $c2 = new Carbon('01/01/2021');

    echo "আমার বয়স " . $c1->diffInYears($c2) . " বছর";
?>
```

**আউটপুট**

```bash
আমার বয়স 21 বছর
```

আপনি চাইলে parse() ম‍্যাথড ব‍্যবহার করে কার্বন ক্লাস এর মাধ্যমে কোন তারিখ পার্স করতে পারেন।

```php
<?php
    require_once "vendor/autoload.php";
    use Carbon\Carbon;

    $c = Carbon::now();
    $c2 = Carbon::parse('+2 weeks');

    echo $c->diffForHumans($c2);
?>
```

**আউটপুট**

```bash
2 weeks before
```

```php
<?php
    require_once "vendor/autoload.php";
    use Carbon\Carbon;

    $c = Carbon::now();
    $c2 = Carbon::parse('+2 weeks');

    echo $c->diffInWeekays($c2);
?>
```

**আউটপুট**

```bash
10
```

```php
<?php
    require_once "vendor/autoload.php";
    use Carbon\Carbon;

    $c = Carbon::now();
    $c2 = Carbon::parse('+2 weeks');

    echo $c->diffInWeekenddays($c2);
?>
```

**আউটপুট**

```bash
4
```

```php
<?php
    require_once "vendor/autoload.php";
    use Carbon\Carbon;

    $c = Carbon::now();
    $c2 = Carbon::parse('+2 weeks');

    echo $c->diffInWeeks($c2);
?>
```

**আউটপুট**

```bash
2
```

আমরা parse() ম‍্যাথড এর মাধ্যমে কোন তারিখ পার্স করতে পারি।

```php
<?php
    require_once "vendor/autoload.php";
    use Carbon\Carbon;

    $c = Carbon::parse('2021-07-22 12:00:00');

    echo $c->diffForHumans();
?>
```

**আউটপুট**

```bash
2 years ago
```

```php
<?php
    require_once "vendor/autoload.php";
    use Carbon\Carbon;

    $c = Carbon::parse('+ 2 weeks');

    echo $c->diffForHumans();
?>
```

**আউটপুট**

```bash
1 week from now
```

## modifiers

কার্বনে অনেক ইউজপুল মডিফায়ার আছে। আমরা যদি কার্বনের মডিফায়ার গুলো দেখতে চাই তাহলে আমরা দেখতে পারি নিচের কোড গুলো।

```php
<?php
    require_once "vendor/autoload.php";
    use Carbon\Carbon;

    $c = Carbon::parse('2021-07-22 12:00:00');

    echo $c->startOfDay();
    echo $c->endOfDay();
    echo $c->startOfMonth();
    echo $c->endOfMonth();
    echo $c->startOfYear();
    echo $c->endOfYear();
    echo $c->startOfDecade();
    echo $c->endOfDecade();
    echo $c->startOfCentury();
    echo $c->endOfCentury();
    echo $c->startOfWeek();
    echo $c->endOfWeek();
?>
```

**আউটপুট**

```bash
2021-07-22 00:00:00
2021-07-22 23:59:59
2021-07-01 00:00:00
2021-07-31 23:59:59
2021-01-01 00:00:00
2021-12-31 23:59:59
2020-01-01 00:00:00
2029-12-31 23:59:59
2000-01-01 00:00:00
2099-12-31 23:59:59
2021-07-18 00:00:00
2021-07-24 23:59:59
```
