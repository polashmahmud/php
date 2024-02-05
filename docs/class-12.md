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

```
composer
```

ইনস্টল সফলভাবে সম্পন্ন হয়ে থাকলে _Composer_ ভার্সন সহ যাবতীয় বিবরণ প্রদর্শিত হবে।

## Composer দিয়ে Carbon ইন্সটলেশন

_Composer_ ইন্সটল করা থাকলে/হয়ে গেলে এবার নিচের কমান্ড দিয়ে কার্বন ইন্সটল করতে পারেন।

```
composer require nesbot/carbon
```

এই একটি কমান্ডের মাধ্যমে _Carbon_ ব্যবহার করার জন্য যাবতীয় ফাইল আমরা পেয়ে যাব। এটা যেমনিভাবে _Carbon_ ‍এর _latest version_ ইন্সটল করবে, তেমনিভাবে `composer.json` কনফিগ ফাইলটাও সেটআপ করে দিবে।

আপনি উপরোক্ত কমান্ড ব্যবহার করতে না চাইলে প্রথমে `composer.json` নামে একটি `json` ফাইল তৈরি করুন, অতঃপর নিন্মোক্ত কমান্ড রান করুনঃ

```
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

## Carbon এর ব্যবহার পদ্ধতি{#use-of-carbon}

_Carbon_ ব্যবহার করতে আমাদেরকে প্রথমে `autoload.php` নামক একটি ফাইল যা **vendor** নামক ফোল্ডারের অভ্যন্তরে আছে তাকে ফাইল আপলোডার ফাংশনের সাহায্যে ইমপোর্ট করতে হবে। অতঃপর `use` ব্যবহার করে `Carbon\Carbon` এই নেমস্পেসটি ব্যবহার করে _Carbon_ ক্লাসটি অন্তর্ভুক্ত করতে হবে।

যেহেতু আমরা এখনও পিএইচপির ক্লাস বা অবজেক্ট ওরিয়েন্টেড কনসেপ্ট সম্পর্কে কোন জ্ঞান অর্জন করিনি তাই আপাতত এভাবে করে যেতে থাকি। পরবর্তীতে আমরা এগুলো বুঝতে পারব। এই পর্যন্ত সুষ্ঠুভাবে সম্পন্ন হলে এখন আমরা তারিখ ও সময় আমাদের চাহিদামতো ফরম্যাটিং করতে পারব। উদাহরণঃ

```php
<?php

require_once("vendor/autoload.php");

// import Carbon class using namespace with autoloader
use Carbon\Carbon;

// print the now() static method of Carbon class
echo Carbon::now();
```

আউটপুটঃ

```
Output at the time of writing:
2024-01-29 16:02:42
```

## Carbon Class দিয়ে অবজেক্ট তৈরি

এবার আমরা _Carbon Class_ দিয়ে অবজেক্ট তৈরি করে পরবর্তীতে সেটা বিভিন্নভাবে বিভিন্ন প্রয়োজনে ব্যবহার করার চেষ্টা করব। উদাহরণঃ

```php
// create an instance of Carbon class
$c = new Carbon();
```

**খেয়াল রাখতে হবে**, _Carbon Class_ দিয়ে কোন অবজেক্ট তৈরি করতে হলে প্রথমে অবশ্যই `autoload.php` ফাইলটি অন্তর্ভুক্ত করতে হবে। অতঃপর যথাযথ নেমস্পেস ব্যবহার করতে হবে। এগুলো ছাড়া স্বাভাবিকভাবে কোন একটা অবজেক্ট তৈরি করতে গেলে আমরা এই মর্মে একটি **_PHP Fatal error_** পাব যে আমাদের _Carbon Class_ টি _not found_। ২টি প্রক্রিয়া সঠিকভাবে সম্পন্ন করে `var_dump()` করলে আমরা যথাযথ আউটপুট দেখতে পাব। উদাহরণঃ

```php
<?php
require_once "vendor/autoload.php";
use Carbon\Carbon;

$c = new Carbon();

var_dump($c);
```

আউটপুটঃ

```
object(Carbon\Carbon)#2 (19) {
  ["endOfTime":protected]=>
  bool(false)
  ["startOfTime":protected]=>
  bool(false)
  ["constructedObjectId":protected]=>
  string(32) "00000000000000020000000000000000"
  ["localMonthsOverflow":protected]=>
  NULL
  ["localYearsOverflow":protected]=>
  NULL
  ["localStrictModeEnabled":protected]=>
  NULL
  ["localHumanDiffOptions":protected]=>
  NULL
  ["localToStringFormat":protected]=>
  NULL
  ["localSerializer":protected]=>
  NULL
  ["localMacros":protected]=>
  NULL
  ["localGenericMacros":protected]=>
  NULL
  ["localFormatFunction":protected]=>
  NULL
  ["localTranslator":protected]=>
  NULL
  ["dumpProperties":protected]=>
  array(3) {
    [0]=>
    string(4) "date"
    [1]=>
    string(13) "timezone_type"
    [2]=>
    string(8) "timezone"
  }
  ["dumpLocale":protected]=>
  NULL
  ["dumpDateProperties":protected]=>
  NULL
  ["date"]=>
  string(26) "2024-01-29 18:25:03.821603"
  ["timezone_type"]=>
  int(3)
  ["timezone"]=>
  string(3) "UTC"
}
```

আমরা দেখতে পাচ্ছি কোন এররবিহীন `$c` নামক ভ্যারিয়েবলে নতুন একটা অবজেক্ট ক্রিয়েট হয়েছে। `var_dump()` করে এই অবজেক্টের যাবতীয় তথ্য আমরা দেখতে পাচ্ছি। তারিখ, টাইম, টাইম জোন, টাইমস্ট্যাম্প ইত্যাদিসহ ডেটটাইম রিলেটেড বহু তথ্য _Carbon Class_ ডিফল্টভাবে আমাদেরকে প্রদান করেছে।

এবার আমরা চাইলে এভাবে `new` কিওয়ার্ড অতঃপর _Carbon Class_ কল করে কোন অবজেক্ট ক্রিয়েট না করে সরাসরি _Carbon Class_ এর static মেথড কল করে অবজেক্ট ক্রিয়েট করতে পারি। পূর্বের মত `var_dump()` করে নিশ্চিত হতে পারি দুটি প্রক্রিয়া একইরকম আউটপুট প্রদান করে কিনা। উদাহরণঃ

```php
<?php
require_once "vendor/autoload.php";
use Carbon\Carbon;

$c = Carbon::now();

var_dump($c);
```

আউটপুটঃ

```
object(Carbon\Carbon)#2 (19) {
  ["endOfTime":protected]=>
  bool(false)
  ["startOfTime":protected]=>
  bool(false)
  ["constructedObjectId":protected]=>
  string(32) "00000000000000020000000000000000"
  ["localMonthsOverflow":protected]=>
  NULL
  ["localYearsOverflow":protected]=>
  NULL
  ["localStrictModeEnabled":protected]=>
  NULL
  ["localHumanDiffOptions":protected]=>
  NULL
  ["localToStringFormat":protected]=>
  NULL
  ["localSerializer":protected]=>
  NULL
  ["localMacros":protected]=>
  NULL
  ["localGenericMacros":protected]=>
  NULL
  ["localFormatFunction":protected]=>
  NULL
  ["localTranslator":protected]=>
  NULL
  ["dumpProperties":protected]=>
  array(3) {
    [0]=>
    string(4) "date"
    [1]=>
    string(13) "timezone_type"
    [2]=>
    string(8) "timezone"
  }
  ["dumpLocale":protected]=>
  NULL
  ["dumpDateProperties":protected]=>
  NULL
  ["date"]=>
  string(26) "2024-01-30 13:44:19.950076"
  ["timezone_type"]=>
  int(3)
  ["timezone"]=>
  string(3) "UTC"
}
```

শুধুমাত্র সময়ের পরিবর্তন ছাড়া বাকি আউটপুটগুলো খেয়াল করলে দেখবেন সবগুলো একইরকম। তারমানে আমাদের আউটপুটে কোনই পরিবর্তন আসে নাই। অন্যদিকে _static_ মেথড ব্যবহার করা `new` কিওয়ার্ড দিয়ে ক্লাস _instance_ তৈরি করে অতঃপর তার মেথড কল করা থেকে যেমনিভাবে সহজ, তেমনিভাবে _Self Explanatory_ and _User Friendly_।

## Carbon দিয়ে সময়/তারিখ প্রদর্শন

_Carbon_ এর [`Carbon::now()`](https://carbon.nesbot.com/docs/) _static_ মেথড ব্যবহার করে আমরা একইসাথে হালনাগাদ সময় এবং তারিখ পেতে পারি। ইতিপূর্বে আমরা এর [উদাহরণ](#use-of-carbon) দেখে এসেছি। এর পাশাপাশি আরেকটা _static_ মেথড হল, [`Carbon::today()`](https://carbon.nesbot.com/docs/) মেথড। এই মেথডটি ব্যবহার করে আমরা শুধুমাত্র আজকের তারিখ পেতে পারি। উদাহরণঃ

```php
<?php
require_once "vendor/autoload.php";
use Carbon\Carbon;

$c = Carbon::today();

echo "Output at the time of writing:\n" . $c;
```

আউটপুটঃ

```
Output at the time of writing:
2024-01-31 00:00:00
```

তেমনিভাবে আরেকটি _static_ মেথড হল, [`Carbon::tomorrow()`](https://carbon.nesbot.com/docs/) মেথড। নাম দেখেই আন্দাজ করা যায় এই মেথড ব্যবহার করে আমরা আগামীকালের তারিখ পেতে পারি। উদাহরণঃ

```php
<?php
require_once "vendor/autoload.php";
use Carbon\Carbon;

$c = Carbon::tomorrow();

echo "Output at the time of writing:\n" . $c;
```

আউটপুটঃ

```
Output at the time of writing:
2024-02-01 00:00:00
```

একইভাবে আছে [`Carbon::yesterday()`](https://carbon.nesbot.com/docs/) _static_ মেথড। এই মেথড ব্যবহার করে গতকালের তারিখ পাওয়া সম্ভব।

```php
<?php
require_once "vendor/autoload.php";
use Carbon\Carbon;

$c = Carbon::yesterday();

echo "Output at the time of writing:\n" . $c;
```

আউটপুটঃ

```
Output at the time of writing:
2024-01-30 00:00:00
```

## Carbon দিয়ে কাস্টম সময়/তারিখ তৈরি

_Carbon_ দিয়ে কাস্টম সময়/তারিখ তৈরি করতে চাইলে আমাদেরকে [`Carbon::create()`](https://carbon.nesbot.com/docs/) _static_ মেথডটি ব‍্যবহার করতে হবে। এই মেথডের মাধ্যমে প্রদত্ত প্যারামিটারের ভিত্তিতে নিজস্ব পছন্দমতো সময়/তারিখ তৈরি করা সম্ভব।

### create() _static_ মেথডের সিনট্যাক্স

**create()** _static_ মেথডের মধ্যে আমরা ৭টি আর্গুমেন্ট পাস করতে পারব। ধারাবাহিকতা বজায় রেখে এই আর্গুমেন্টগুলো পাস করতে হবে। ধারাবাহিকভাবে আর্গুমেন্টগুলোর লিস্টঃ

1. **$year** বা বছরের ভ্যালু
2. **$month** বা মাসের ভ্যালু
3. **$day** বা দিনের ভ্যালু
4. **$hour** বা ঘণ্টার ভ্যালু
5. **$minute** বা মিনিটের ভ্যালু
6. **$second** বা সেকেন্ডের ভ্যালু
7. **$tz** বা টাইমজোন (সময়ভিত্তিক অঞ্চলের) ভ্যালু

```php
    Carbon::create($year, $month, $day, $hour, $minute, $second, $tz);
```

উদাহরণঃ

```php
<?php
require_once "vendor/autoload.php";
use Carbon\Carbon;

$c = Carbon::create(2024, 02, 23);

echo "Output: " . $c;
```

আউটপুটঃ

```
Output: 2024-02-23 20:30:40
```

### create() মেথড সদৃশ গুরুত্বপূর্ণ মেথডসমূহ

**create()** _static_ মেথডের সদৃশ আরো কিছু মেথড আছে যার সাহায্যে আমরা কাস্টম সময় বা তারিখ চাইলে তৈরি করতে পারি। তন্মধ্যে একটি হল, [`Carbon::createFromDate()`](https://carbon.nesbot.com/docs/) _static_ মেথড। এই মেথডটি ব‍্যবহার করে আমরা শুধুমাত্র যেকোন তারিখ তৈরি করতে পারব; এটি `Carbon::today()` _static_ মেথডের মত কাজ করে। ফলে এই মেথডটি ব্যবহার করলে আমরা যে সময়টি পাব সেটি হবে হালনাগাদ সময়; যেমনটা আমরা _static_ `Carbon::now()` মেথড কল করে পেয়ে থাকি।

### createFromDate() মেথডের সিনট্যাক্স

**createFromDate()** _static_ মেথডের মধ্যে আমরা ৪টি আর্গুমেন্ট পাস করতে পারব। যা অবশ্য বোধগম্যও বটে। ধারাবাহিকতা বজায় রেখে এই আর্গুমেন্টগুলো পাস করতে হবে। ধারাবাহিকভাবে আর্গুমেন্টগুলোর লিস্টঃ

1. **$year** বা বছরের ভ্যালু
2. **$month** বা মাসের ভ্যালু
3. **$day** বা দিনের ভ্যালু
4. **$tz** বা টাইমসেট/টাইমজোন (সময়ভিত্তিক অঞ্চলের) ভ্যালু

```php
    Carbon::createFromDate($year, $month, $day, $tz);
```

উদাহরণঃ

```php
<?php
require_once "vendor/autoload.php";
use Carbon\Carbon;

$c = Carbon::createFromDate(2024, 02, 23);

echo "Output at the time of writing:\n" . $c;
```

আউটপুটঃ

```
Output at the time of writing:
2024-02-23 02:55:41
```

### createFromTime() মেথড

একইভাবে আছে [`Carbon::createFromTime()`](https://carbon.nesbot.com/docs/) _static_ মেথড। এই মেথডের সাহায্যে আমরা শুধুমাত্র কোন সময় তৈরি করতে পারব। ফলে এটি `Carbon::now()` _static_ মেথডের মত কাজ করে। এই মেথডটি ব্যবহার করলে আমরা যে তারিখটি পাব সেটি হবে হালনাগাদ তারিখ; যেমনটা আমরা _static_ `Carbon::today()` মেথড কল করে পেয়ে থাকি।

### createFromTime() মেথডের সিনট্যাক্স

**createFromTime()** _static_ মেথডের মধ্যেও বোধগম্যভাবে আমরা ৪টি আর্গুমেন্ট পাস করতে পারব। ধারাবাহিকতা বজায় রেখে এই আর্গুমেন্টগুলো পাস করতে হবে। ধারাবাহিকভাবে আর্গুমেন্টগুলোর লিস্টঃ

1. **$hour** বা ঘণ্টার ভ্যালু
2. **$minute** বা মিনিটের ভ্যালু
3. **$second** বা সেকেন্ডের ভ্যালু
4. **$tz** বা টাইমসেট/টাইমজোন (সময়ভিত্তিক অঞ্চলের) ভ্যালু

```php
    Carbon::createFromTime($hour, $minute, $second, $tz);
```

উদাহরণঃ

```php
<?php
require_once "vendor/autoload.php";
use Carbon\Carbon;

$c = Carbon::createFromTime(12, 0, 0);

echo "Output at the time of writing:\n" . $c;
```

আউটপুটঃ

```
Output at the time of writing:
2024-01-31 20:30:40
```

### createFromTimestamp() মেথড

আরেকটি _static_ মেথড হল, [`Carbon::createFromTimestamp()`](https://carbon.nesbot.com/docs/) মেথড। এটি ব‍্যবহার করে আমাদের প্রদত্ত টাইমস্টাম্পের ভিত্তিতে কোন সময়/তারিখ তৈরি করতে পারব।

### createFromTimestamp() ম‍্যাথডের সিনট্যাক্স

**createFromTimestamp()** _static_ মেথডের মধ্যে আমরা শুধুমাত্র ২টি আর্গুমেন্ট পাস করতে পারব। ধারাবাহিকতা বজায় রেখে সেগুলো পাস করতে হবে। তার লিস্টঃ

1. **$timestamp** বা টাইমস্টাম্পের ভ্যালু
2. **$tz** বা টাইমসেট/টাইমজোন (সময়ভিত্তিক অঞ্চলের) ভ্যালু

```php
    Carbon::createFromTimestamp($timestamp, $tz);
```

উদাহরণঃ

```php
<?php
require_once "vendor/autoload.php";
use Carbon\Carbon;

$c = Carbon::createFromTimestamp(454654654);

echo "Output: " . $c;
```

আউটপুটঃ

```
Output: 1984-05-29 04:57:34
```

## Carbon এ ইংরেজী বাক্য দিয়ে সময়/তারিখ তৈরি

এবার আমরা দেখব কিভাবে আমরা আমাদের দৈনন্দিন সময়/তারিখ গণনা/হিসাব করার পদ্ধতিতে সময়/তারিখ তৈরি করতে পারি। তথা হিউমেন রিডেবল ফরম‍্যাটকেও তারিখ বা সময়ে রূপান্তর করতে পারি। কোন টাইমজোন আমরা পূর্ব থেকে সেট না করলে বাই ডিফল্ট ইউটিসি টাইমজোনে সময় এবং তারিখগুলো প্রদর্শিত হয়। আমরা নিজস্ব টাইমজোন সেট করে নিজের অঞ্চলের সময় এবং তারিখ অনুযায়ী আউটপুট পেতে পারি। উদাহরণঃ

```php
<?php
require_once "vendor/autoload.php";
use Carbon\Carbon;

$c = new Carbon('first day of January 2008', 'Asia/Dhaka');

echo "Output: " . $c;
```

আউটপুটঃ

```
Output: 2008-01-01 00:00:00
```

আরো সুবিধা হল, আমরা `+` চিহ্ন ব্যবহার করে হালনাগাদ ডেটটাইমের সাথে কিছু ডেটটাইম যোগ করে নিতে পারি। আবার `-` চিহ্ন ব‍্যবহার করে হালনাগাদ ডেটটাইমের সাথে কিছু ডেটটাইম বিয়োগ করে ডেটটাইম তৈরি করতে পারি। উদাহরণঃ

```php
<?php
require_once "vendor/autoload.php";
use Carbon\Carbon;

$c = new Carbon('+2 days', 'Asia/Dhaka');

echo "Output at the time of writing:\n" . $c;
```

আউটপুটঃ

```
Output at the time of writing:
2024-02-02 09:35:41
```

```php
<?php
require_once "vendor/autoload.php";
use Carbon\Carbon;

$c = new Carbon('-2 days', 'Asia/Dhaka');

echo "Output at the time of writing:\n" . $c;
```

আউটপুটঃ

```
Output at the time of writing:
2024-01-29 09:36:02
```

```php
<?php
require_once "vendor/autoload.php";
use Carbon\Carbon;

$c = new Carbon('-2 days 6 hours', 'Asia/Dhaka');

echo "Output at the time of writing:\n" . $c;
```

আউটপুটঃ

```
Output at the time of writing:
2024-01-30 01:25:48
```

## Carbon এর সাহায্যে ডেটটাইম ফরম্যাট

আমাদের ডেটটাইমকে ইচ্ছামাফিক বিভিন্ন ফরম্যাটে প্রিন্ট এবং প্রদর্শনের জন্য _Carbon_ খুবই ব্যবহারযোগ্য বেশকিছু মেথড প্রদান করেছে। যেগুলো খুবই হ্যান্ডফুল _Carbon_ ক্লাস মেথড। এখন আমরা এই মেথডগুলোর সাহায্যে কত সুন্দর করে আমাদের ডেটটাইমকে ফরম‍্যাট করতে পারি তাই দেখব।

### toDateString() মেথড

প্রথমে আমরা ব্যবহার করব [`toDateString()`](https://carbon.nesbot.com/docs/#api-formatting) মেথড। এই মেথডের সাহায্যে আমরা আমাদের ডেটকে স্ট্রিং ডাটা টাইপে রূপান্তর করে প্রিন্ট করতে পারি। উদাহরণঃ

```php
<?php
require_once "vendor/autoload.php";
use Carbon\Carbon;

$c = Carbon::now();

echo "Output at the time of writing:\n" . $c->toDateString() . "\n";
```

আউটপুটঃ

```
Output at the time of writing:
2024-01-30
```

### toDateTimeString() মেথড

আর যদি ডেটের সাথে টাইমকেও স্ট্রিংয়ে রূপান্তর করার ইচ্ছা হয়, তাহলে আমরা [`toDateTimeString()`](https://carbon.nesbot.com/docs/#api-formatting) মেথড ব্যবহার করতে পারি। উদাহরণঃ

```php
<?php
require_once "vendor/autoload.php";
use Carbon\Carbon;

$c = Carbon::now();

echo "Output at the time of writing:\n" . $c->toDateTimeString() . "\n";
```

আউটপুটঃ

```
Output at the time of writing:
2024-01-30 02:09:50
```

যেহেতু আমরা কোন টাইমজোন সেট করি নাই, তাই ডিফল্ট ইউটিসি টাইমজোনে আউটপুট দেখতে পাচ্ছি।

### toRssString() মেথড

আর টাইমজোন সহ কথায়, পাশাপাশি অংকে দিন, তার সাথে মাস, বছর, ঘন্টা, মিনিট এবং সেকেন্ড ইত্যাদি তথা একটি ডেটটাইমের পুরো বিবরণ যদি স্ট্রিং আকারে আমরা প্রিন্ট করতে চাই তাহলে [`toRssString()`](https://carbon.nesbot.com/docs/#api-formatting) মেথড ব্যবহার করতে পারি। উদাহরণঃ

```php
<?php
require_once "vendor/autoload.php";
use Carbon\Carbon;

$c = Carbon::now();

echo "Output at the time of writing:\n" . $c->toRssString() . "\n";
```

আউটপুটঃ

```
Output at the time of writing:
Tue, 30 Jan 2024 07:11:05 +0600
```

### toAtomString() মেথড

আমরা ডেটটাইমের ফরম্যাটটা যদি **International Atomic Time (TAI)** যেটা — _subset of the **ISO 8601** standard_ — এর অনুযায়ী করতে চাই তাহলে আমাদের ব্যবহার করতে হবে [`toAtomString`](https://carbon.nesbot.com/docs/#api-formatting) মেথড। উদাহরণঃ

```php
<?php
require_once "vendor/autoload.php";
use Carbon\Carbon;

$c = Carbon::now();

echo "Output at the time of writing:\n" . $c->toAtomString() . "\n";
```

আউটপুটঃ

```
Output at the time of writing:
2024-01-30T07:28:25+06:00
```

### format() মেথড

_Carbon_ প্রদত্ত ডেটটাইম ফরম্যাট সংক্রান্ত যাবতীয় মেথডগুলোর মধ্যে সবচেয়ে বেশি ব্যবহৃত এবং কার্যবহ মেথড হল, [`format()`](https://carbon.nesbot.com/docs/#api-formatting)। এটি ডেটটাইম স্ট্রিং ফরম্যাট মেথডগুলোর _base_ মেথড। তাই বাকি সব মেথডগুলো এই মেথডটির উপর ভিত্তি করে তৈরিকৃত। ফলে আমরা চাইলে পিএইচপির বিল্ট-ইন ডেটটাইম ফরম্যাট আমাদের মতো করে `format()` মেথডের আর্গুমেন্টে ব‍্যবহার করে অনেক ভাবেই ফরম‍্যাট করতে পারি। তাই এই ফরম‍্যাট ম‍্যাথডটি সবথেকে বেশি ব্যবহার হয় ।

```php
<?php
require_once "vendor/autoload.php";
use Carbon\Carbon;

$c = Carbon::now();

echo "Output at the time of writing:\n" . $c->format('l jS \\of F Y h:i:s A');
```

আউটপুটঃ

```
Output at the time of writing:
Sunday 4th of February 2024 12:54:02 AM
```

ফলে আমরা পছন্দসই হিউমেন রিডেবল ফরম‍্যাটে দিন-তারিখ ফরম্যাট করতে পারি এবং আউটপুট পেতে পারি।

## হিউমেন রিডেবল ফরম‍্যাটে সময়ের পার্থক্য

মানুষের বোধগম্য উপায়ে দিন-তারিখের পার্থক্য নির্ণয়ে _Carbon_ বেশকিছু মেথড ব্যবহার করে। এখানে আমরা সবথেকে বেশি ব‍্যবহৃত মেথডটির ব্যবহার দেখব।

### diffForHumans() মেথড

সবথেকে বেশি ব‍্যবহৃত যে মেথডটির ব্যবহার আমরা দেখব তা হল, [`diffForHumans()`](https://carbon.nesbot.com/docs/#api-humandiff) মেথড। এই মেথডটি ব্যবহার করতে হলে আমাদের প্রথমে _Carbon_ ক্লাস দিয়ে একটি অবজেক্ট তৈরি করে নিতে হবে। অতঃপর সেই অবজেক্টের উপর মেথডটিকে কল করতে হবে। অন্যথায় আমরা চাইলে কার্বন ডকুমেন্টেশন অনুসরণ করে [_verbose methods_](https://carbon.nesbot.com/docs/#api-humandiff) ব্যবহার করতে পারি। কয়েকটি উদাহরণঃ

1. ```php
   <?php
   require_once "vendor/autoload.php";
   use Carbon\Carbon;

   $c = new Carbon('first day of January 2028', 'Asia/Dhaka');

   echo $c->diffForHumans();
   ```

   আউটপুটঃ

   ```
   3 years from now
   ```

2. ```php
   <?php
   require_once "vendor/autoload.php";
   use Carbon\Carbon;

   $c = new Carbon('first day of January 2021', 'Asia/Dhaka');

   echo $c->diffForHumans();
   ```

   আউটপুটঃ

   ```
   3 years ago
   ```

3. ```php
   <?php
   require_once "vendor/autoload.php";
   use Carbon\Carbon;

   $c = new Carbon('first day of January 2022', 'Asia/Dhaka');

   echo $c->diffForHumans();
   ```

   আউটপুটঃ

   ```
   2 years ago
   ```

4. ```php
   <?php
   require_once "vendor/autoload.php";
   use Carbon\Carbon;

   $c = new Carbon('first day of January 2023', 'Asia/Dhaka');

   echo $c->diffForHumans();
   ```

   আউটপুটঃ

   ```
   1 year ago
   ```

5. ```php
   <?php
   require_once "vendor/autoload.php";
   use Carbon\Carbon;

   $c = new Carbon('first day of January 2024', 'Asia/Dhaka');

   echo $c->diffForHumans();
   ```

   আউটপুটঃ

   ```
   1 month ago
   ```

আরো উদাহরণঃ

6. ```php
   <?php
   require_once "vendor/autoload.php";
   use Carbon\Carbon;

   $c = new Carbon('first day of January 2008', 'Asia/Dhaka');

   echo $c->diffForHumans();
   ```

   আউটপুটঃ

   ```
   16 years ago
   ```

## দিন-তারিখের খুঁটিনাটি বের করা

_Carbon_ ক্লাস দিয়ে কোন দিন-তারিখের উপর অবজেক্ট তৈরি করে অতঃপর আমরা সেই অবজেক্টের বিভিন্ন প্রোপার্টি ব্যবহার করে দিন-তারিখের খুঁটিনাটি তথ্য এক এক করে বের করতে পারি। এই প্রোপার্টিগুলো Getters হিসেবে পরিচিত। আমরা যদি কার্বনের গেটার গুলো দেখতে চাই তাহলে আমরা দেখতে পারি নিচের কোড গুলো।

```php
<?php
require_once "vendor/autoload.php";
use Carbon\Carbon;

$c = new Carbon('first day of January 2008', 'Asia/Dhaka');

echo "The year is: " . $c->year . "\n";
echo "The month of the year is: " . $c->month . "\n";
echo "The day of the month is: " . $c->day . "\n";
echo "The hour is: " . $c->hour . "\n";
echo "The minute is: " . $c->minute . "\n";
echo "The second is: " . $c->second . "\n";
echo "The timestamp is: " . $c->timestamp . "\n";
echo "The timezone is: " . $c->timezone . "\n";
echo "The timezone name is: " . $c->timezoneName . "\n";
```

আউটপুটঃ

```
The year is: 2008
The month of the year is: 1
The day of the month is: 1
The hour is: 0
The minute is: 0
The second is: 0
The timestamp is: 1199124000
The timezone is: Asia/Dhaka
The timezone name is: Asia/Dhaka
```

### dayOfWeek গেটার ব‍্যবহার

আপনি চাইলে dayOfWeek গেটার ব‍্যবহার করে সপ্তাহের কোন দিনে অবস্থান করছেন তা জানতে পারেন। 0 (তথা রবিবার) থেকে 6 (তথা শনিবার) পর্যন্ত সংখ্যা পাওয়া যাবে। উদাহরণঃ

```php
<?php
require_once "vendor/autoload.php";
use Carbon\Carbon;

$c = new Carbon('first day of January 2008', 'Asia/Dhaka');

echo "The Day of the week of 01-01-2024 is: " . $c->dayOfWeek;
```

আউটপুটঃ

```
The Day of the week of 01-01-2024 is: 2
```

### dayOfYear গেটার ব‍্যবহার

এভাবে আপনি চাইলে dayOfYear গেটার ব‍্যবহার করে বছরের কোন দিনে অবস্থান করছেন তা জানতে পারেন। উদাহরণঃ

```php
<?php
require_once "vendor/autoload.php";
use Carbon\Carbon;

$c = new Carbon('first day of January 2024', 'Asia/Dhaka');

echo $c->dayOfYear;
```

আউটপুটঃ

```
1
```

### weekOfMonth গেটার ব‍্যবহার

আপনি চাইলে weekOfMonth গেটার ব‍্যবহার করে মাসের কোন সপ্তাহে অবস্থান করছেন তা জানতে পারেন। যদি মাসের প্রথম সপ্তাহে অবস্থান করেন তথা ১ থেকে ৭ তারিখের মধ্যে তাহলে 1 পাবেন। যদি দ্বিতীয় সপ্তাহে তথা ৭ থেকে ১৪ তারিখের মধ্যে থাকেন তাহলে 2 পাবেন। যদি তৃতীয় সপ্তাহে তথা ১৫ থেকে ২১ তারিখের মধ্যে থাকেন তাহলে 3 পাবেন। যদি চতুর্থ সপ্তাহে তথা ২২ থেকে ২৮ তারিখের মধ্যে থাকেন তাহলে 4 পাবেন। এর উপরে গেলে 5 পাবেন। উদাহরণঃ

```php
<?php
require_once "vendor/autoload.php";
use Carbon\Carbon;

$c = new Carbon('first day of January 2024', 'Asia/Dhaka');

echo "The week of the month of Jan 2024 is: " . $c->weekOfMonth;
```

আউটপুটঃ

```
The week of the month of Jan 2024 is: 1
```

### weekOfYear গেটার ব‍্যবহার

আপনি চাইলে weekOfYear গেটার ব‍্যবহার করে বছরের কোন সপ্তাহে অবস্থান করছেন তা জানতে পারেন। উদাহরণঃ

```php
<?php
require_once "vendor/autoload.php";
use Carbon\Carbon;

$c = new Carbon('first day of January 2024', 'Asia/Dhaka');

echo $c->weekOfYear;
```

আউটপুটঃ

```
1
```

### daysInMonth গেটার ব‍্যবহার

আপনি চাইলে daysInMonth গেটার ব‍্যবহার করে কোন মাসের মোট দিনসংখ্যা পেতে পারেন।

```php
<?php
require_once "vendor/autoload.php";
use Carbon\Carbon;

$c = new Carbon('last day of January 2024', 'Asia/Dhaka');

echo $c->daysInMonth;
```

আউটপুটঃ

```
31
```

### formatLocalized গেটার ব‍্যবহার

আপনি চাইলে formatLocalized গেটার ব‍্যবহার করে কোন সময়কে পছন্দসই ফরম্যাটে পেতে পারেন। উদাহরণঃ

```php
<?php
require_once "vendor/autoload.php";
use Carbon\Carbon;

$c = Carbon::now();

echo $c->formatLocalized('%A %d %B %Y');
```

আউটপুটঃ

```
Monday 05 February 2024
```

### age গেটার ব‍্যবহার

আপনি চাইলে খুব সহজে age গেটার ব‍্যবহার করে বর্তমান সময় থেকে নিয়ে আপনার প্রদত্ত সময়ের ভেতরে কতটুকু ব্যবধান আছে তা জানতে পারেন। উদাহরণঃ

```php
<?php
require_once "vendor/autoload.php";
use Carbon\Carbon;

$c = new Carbon('01/01/2000');

echo "Output at the time of writing: " . $c->age . " years.";
```

আউটপুটঃ

```
echo "Output at the time of writing: " . $c->age . " years.";
```

## দিন-তারিখের খুঁটিনাটি সেট/তৈরি করা

কার্বনে অনেক [ইউজফুল সেটার](https://carbon.nesbot.com/docs/#api-setters) আছে। আমরা যদি কার্বনের সেটারগুলো দেখতে চাই তাহলে আমরা দেখতে পারি নিচের কোড গুলো। উদাহরণঃ

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
```

আউটপুটঃ

```
2021-07-22 12:00:00
```

## অঞ্চলভিত্তিক সময় বের/সেট করা

কার্বনে অনেক ইউজফুল টাইমজোন আছে। আমরা যদি কার্বনের টাইমজোনগুলো দেখতে চাই তাহলে আমরা দেখতে পারি নিচের কোড গুলো। উদাহরণঃ

```php
<?php
require_once "vendor/autoload.php";
use Carbon\Carbon;

$c = Carbon::now();

echo $c->tzName;
echo $c->tz;
```

আউটপুটঃ

```
Asia/Dhaka
Asia/Dhaka
```

আপনি চাইলে টাইমজোন প্রোপার্টির ভ্যালু সেট/পরিবর্তন করে টাইমজোন চেঞ্জ করতে পারেন। উদাহরণঃ

```php
<?php
require_once "vendor/autoload.php";
use Carbon\Carbon;

$c = Carbon::now();

$c->tz = 'Asia/Dhaka';

echo $c->tzName;
echo $c->tz;
```

আউটপুটঃ

```
Asia/Dhaka
Asia/Dhaka
```

আবার আপনি চাইলে সরাসরি টাইমজোন সেট করে অবজেক্ট তৈরি করার মাধ্যমে টাইমজোন চেঞ্জ করতে পারেন। উদাহরণঃ

```php
<?php
require_once "vendor/autoload.php";
use Carbon\Carbon;

$c = Carbon::now('Asia/Dhaka');

echo $c->tzName;
echo $c->tz;
```

আউটপুটঃ

```
Asia/Dhaka
Asia/Dhaka
```

তেমনিভাবে আপনি চাইলে createFromDate() স্ট্যাটিক মেথডের মধ্যে তারিখের সাথে টাইম জোন পাঠিয়ে দিতে পারেন। উদাহরণঃ

```php
<?php
require_once "vendor/autoload.php";
use Carbon\Carbon;

$c = Carbon::createFromDate(2021, 7, 22, 20, 10, 10, 'Asia/Dhaka');

echo $c->toDateTimeString();
```

আউটপুটঃ

```
2021-07-22 20:10:10
```

একইভাবে আপনি setTimeZone() ম‍্যাথড ব‍্যবহার করেও টাইমজোন সেট/চেঞ্জ করতে পারেন। উদাহরণঃ

```php
<?php
require_once "vendor/autoload.php";
use Carbon\Carbon;

$c = Carbon::now()->setTimeZone('Asia/Dhaka');

echo $c->tzName;
```

আউটপুটঃ

```
Asia/Dhaka
```

## দিন-তারিখ যোগ বা বিয়োগ করা

কার্বনে অনেক [ইউজফুল ম‍্যানিপুলেটর](https://carbon.nesbot.com/docs/#api-addsub) আছে। আমরা যদি কার্বনের ম‍্যানিপুলেটর গুলো দেখতে চাই তাহলে আমরা দেখতে পারি নিচের কোড গুলো। উদাহরণঃ

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
```

আউটপুটঃ

```
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

## দুটি সময়ের ভেতর তুলনা করা

কার্বনে অনেক ইউজপুল কম্প‍্যারিসন আছে। আমরা যদি কার্বনের কম্প‍্যারিসন গুলো দেখতে চাই তাহলে আমরা দেখতে পারি নিচের কোড গুলো। উদাহরণঃ

```php
<?php
require_once "vendor/autoload.php";
use Carbon\Carbon;

$c1 = Carbon::now('Asia/Dhaka');
$c2 = new Carbon('+2 days', 'Asia/Dhaka');

var_dump($c1->eq($c2)); // Equal
echo $c1->ne($c2) . "\n"; // Not Equal
var_dump($c1->gt($c2)); // Greater Than
var_dump($c1->gte($c2)); // Greater Than or Equal
echo $c1->lt($c2) . "\n"; // Less Than
echo $c1->lte($c2); // Less Than or Equal
```

আউটপুটঃ

```
bool(false)
1
bool(false)
bool(false)
1
1
```

## দুটি সময়ের ভেতর পার্থক্য নির্ণয়/নিরূপণ করা

কার্বনে অনেক [ইউজফুল ডিফারেন্স](https://carbon.nesbot.com/docs/#api-comparison) আছে। আমরা যদি কার্বনের ডিফারেন্স গুলো দেখতে চাই তাহলে আমরা দেখতে পারি নিচের কোড গুলো। উদাহরণঃ

```php
<?php
require_once "vendor/autoload.php";
use Carbon\Carbon;

$c1 = Carbon::now('Asia/Dhaka');
$c2 = new Carbon('+2 days', 'Asia/Dhaka');

echo "Difference in years: " . $c1->diffInYears($c2) . "\n";
echo "Difference in months: " . $c1->diffInMonths($c2) . "\n";
echo "Difference in days: " . $c1->diffInDays($c2) . "\n";
echo "Difference in weeks: " . $c1->diffInWeeks($c2) . "\n";
echo "Difference in hours: " . $c1->diffInHours($c2) . "\n";
echo "Difference in minutes: " . $c1->diffInMinutes($c2) . "\n";
echo "Difference in seconds: " . $c1->diffInSeconds($c2);
```

আউটপুটঃ

```
Difference in years: 0
Difference in months: 0
Difference in days: 2
Difference in weeks: 0
Difference in hours: 48
Difference in minutes: 2880
Difference in seconds: 172800
```

আপনি চাইলে ডিফারেন্স বের করার পাশাপাশি এর সাথে কিছু কাস্টমাইজেশনও করতে পারেন। উদাহরণঃ

```php
<?php
require_once "vendor/autoload.php";
use Carbon\Carbon;

$c1 = Carbon::now('Asia/Dhaka');
$c2 = new Carbon('+2 days', 'Asia/Dhaka');

echo "Output: today is " . $c1->diffForHumans($c2);
```

আউটপুটঃ

```
Output: today is 2 days before
```

আপনি চাইলে একজন মানুষ কতো বছর বয়সী তা খুব সহজেই বের করতে পারেন। যেমনঃ

```php
<?php
require_once "vendor/autoload.php";
use Carbon\Carbon;

$c1 = new Carbon('01/01/2000');
$c2 = new Carbon('01/01/2021');

echo "আমার বয়স " . $c1->diffInYears($c2) . " বছর";
```

আউটপুটঃ

```
আমার বয়স 21 বছর
```

আপনি চাইলে parse() ম‍্যাথড ব‍্যবহার করে কার্বন ক্লাস এর মাধ্যমে কোন তারিখ পার্স (তথা নির্দেশনা অনুসরণ করে সে অনুযায়ী ফলাফল প্রদর্শন) করতে পারেন। উদাহরণঃ

```php
<?php
require_once "vendor/autoload.php";
use Carbon\Carbon;

$c = Carbon::now();
$c2 = Carbon::parse('+2 weeks');

echo $c->diffForHumans($c2);
```

আউটপুটঃ

```
2 weeks before
```

```php
<?php
require_once "vendor/autoload.php";
use Carbon\Carbon;

$c = Carbon::now();
$c2 = Carbon::parse('+2 weeks');

echo $c->diffInWeekDays($c2);
```

আউটপুটঃ

```
10
```

```php
<?php
require_once "vendor/autoload.php";
use Carbon\Carbon;

$c = Carbon::now();
$c2 = Carbon::parse('+2 weeks');

echo $c->diffInWeekenddays($c2);
```

আউটপুটঃ

```
4
```

```php
<?php
require_once "vendor/autoload.php";
use Carbon\Carbon;

$c = Carbon::now();
$c2 = Carbon::parse('+2 weeks');

echo $c->diffInWeeks($c2);
```

আউটপুটঃ

```
2
```

এমনিভাবে আমরা parse() ম‍্যাথড এর মাধ্যমে কোন দিন-তারিখও পার্স করতে পারি। উদাহরণঃ

```php
<?php
require_once "vendor/autoload.php";
use Carbon\Carbon;

$c = Carbon::parse('2021-07-22 12:00:00');

echo "Output at the time of writing: " . $c->diffForHumans();
```

আউটপুটঃ

```
Output at the time of writing: 2 years ago
```

```php
<?php
require_once "vendor/autoload.php";
use Carbon\Carbon;

$c = Carbon::parse('+ 2 weeks');

echo $c->diffForHumans();
```

আউটপুটঃ

```
1 week from now
```

## দিন-তারিখের পরিবর্তন সাধন করা

কার্বনে অনেক [ইউজফুল মডিফায়ার](https://carbon.nesbot.com/docs/#api-modifiers) আছে। আমরা যদি কার্বনের মডিফায়ার গুলো দেখতে চাই তাহলে আমরা দেখতে পারি নিচের কোড গুলো।

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
```

আউটপুটঃ

```
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
