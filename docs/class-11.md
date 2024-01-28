# পিএইচপি তারিখ ও সময় ফরম্যাটিং

এই ক্লাসে আমরা পিএইচপিতে তারিখ ও সময় কিভাবে সেট করতে হয়, কিভাবে ব্যবহার করতে হয়, কি কি নিয়ম এবং ফর্ম্যাট মেনে চলতে হয়, তারিখ ও সময় নিয়ে পিএইচপির বিল্ট-ইন কি কি ফাংশন রয়েছে এবং সেগুলো কিভাবে ব্যবহার করতে হয় ইত্যাদি বিষয়গুলো জানার চেষ্টা করব।

তারিখ ও সময়কে বিভিন্নভাবে সেটআপ, ফরম্যাটিং এবং প্রেজেন্টেশনের জন্য পিএইচপির বেশকিছু বিল্ট ইন ফাংশন আছে। এই ফাংশনগুলো ব্যবহার করে আমরা তারিখ ও সময়কে আমাদের পছন্দমত বিন্যাস করে প্রদর্শন করতে পারি।

তারমধ্যে ২টি গুরুত্বপূর্ণ ফাংশন হল, [`date()`](https://www.php.net/manual/en/function.date.php) এবং [`time()`](https://www.php.net/manual/en/function.time.php)। আমরা প্রথমে `date()` ফাংশন বা তারিখ ফরম্যাট করা নিয়ে আলোচনা করব। শুরু করা যাক।

## তারিখ ফরম্যাটিং

আমরা পিএইচপি এর `date()` ফাংশন ব্যবহার করে _date_ বা তারিখ ফরম্যাট করতে পারি। এই ফাংশনের প্রথম প্যারামিটার হচ্ছে ফরম্যাট – অর্থাৎ যে রূপে বা গঠনে আমরা তারিখগুলোকে প্রদর্শন করতে প্রত্যাশী – এবং দ্বিতীয় প্যারামিটার হচ্ছে _actual date_ বা প্রকৃত তারিখ। পিএইচপির বেঁধে দেয়া নিয়ম মেনে **তারিখের ফরম্যাট** আমরা আমাদের পছন্দমত দিতে পারি বা ব্যবহার করতে পারি। একটি উদাহরণ দেখা যাক।

### Syntax

```php
date(format, timestamp)
```

### Example

```php
<?php
    // date will be shown in this format
    // 01(day)-01(month)-1970(year)
    echo date("d-m-Y");
```

_(তারিখ যেহেতু বিবর্তনশীল, তাই ডকুমেন্টেশন লেখাকালীন)_ **আউটপুটঃ**

```
28-01-2024
```

ফাংশন প্যারামিটারে পাস করা স্ট্রিং ডাটাগুলোর মধ্যে `d` মানে দিন, `m` মানে মাস এবং `Y` মানে বছর নির্দেশ করা হয়। এখানে আমরা যে কোন ফরম্যাট ব্যবহার করতে পারি। তার একটি উদাহরণ দেখা যাক।

```php
<?php
    echo date("d/m/Y"); // 21/07/2021
```

আউটপুটঃ

```
28/01/2024
```

ফাংশন প্যারামিটারে আমাদেরকে ভ্যালিড স্ট্রিং ডাটা বা ফরম্যাট পাস করতে হবে। যে সকল _characters_ কে **format parameter string** এ রিকগনাইজ করা হয় নিম্নে তার একটি _common_ চার্টশীট দেয়া হল।

| **Format Character** | **Description**                                                                      | **Example**                              |
| -------------------- | ------------------------------------------------------------------------------------ | ---------------------------------------- |
| _Day_                | ---                                                                                  | ---                                      |
| d                    | The day of the month (2 digits with leading zeros)                                   | 01 to 31                                 |
| D                    | A textual representation of a day (three letters)                                    | Mon through Sun                          |
| j                    | The day of the month without leading zeros                                           | 1 to 31                                  |
| l                    | A full textual representation of the day of the week                                 | Sunday through Saturday                  |
| w                    | Numeric representation of the day of the week                                        | 0 (for Sunday) to 6 (for Saturday)       |
| z                    | The day of the year (starting from 0)                                                | 0 to 365                                 |
| _Week_               | ---                                                                                  | ---                                      |
| W                    | ISO-8601 week number of year, weeks starting on Monday                               | Example: 42 (the 42nd week in the year)  |
| _Month_              | ---                                                                                  | ---                                      |
| F                    | A full textual representation of a month                                             | January through December                 |
| m                    | A numeric representation of a month (with leading zeros)                             | 01 to 12                                 |
| M                    | A short textual representation of a month (three letters)                            | Jan through Dec                          |
| n                    | A numeric representation of a month (without leading zeros)                          | 1 to 12                                  |
| t                    | Number of days in the given month                                                    | 28 to 31                                 |
| _Year_               | ---                                                                                  | ---                                      |
| L                    | Whether it's a leap year (1 if it is a leap year)                                    | 1 (if it is a leap year), 0 otherwise.   |
| y                    | A two digit representation of a year                                                 | Example: 01 or 99                        |
| Y                    | A full numeric representation of a year, at least four digits, with - for years BCE. | Examples: -0055, 0787, 1999, 2024, 10191 |
| _Time_               | ---                                                                                  | ---                                      |
| a                    | Lowercase Ante meridiem and Post meridiem                                            | am or pm                                 |
| A                    | Uppercase Ante meridiem and Post meridiem                                            | AM or PM                                 |
| g                    | 12-hour format of an hour without leading zeros                                      | 1 to 12                                  |
| G                    | 24-hour format of an hour without leading zeros                                      | 0 to 23                                  |
| h                    | 12-hour format of an hour with leading zeros                                         | 01 to 12                                 |
| H                    | 24-hour format of an hour with leading zeros                                         | 00 to 23                                 |
| i                    | Minutes with leading zeros                                                           | 00 to 59                                 |
| s                    | Seconds, with leading zeros                                                          | 00 to 59                                 |
| u                    | Microseconds                                                                         | 000000 to 999999                         |
| v                    | Milliseconds                                                                         | 000 to 999                               |
| _Timezone_           | ---                                                                                  | ---                                      |
| e                    | The timezone identifier                                                              | Examples: UTC, GMT, EST, MDT, Asia/Dhaka |
| T                    | The timezone abbreviation, if known; otherwise, the GMT offset.                      | Examples: UTC, GMT, EST, MDT, +0630      |
| O                    | Difference to Greenwich time (GMT) without colon between hours and minutes.          | GMT-0800                                 |
| P                    | Difference to Greenwich time, with colon between hours and minutes.                  | GMT-08:00                                |

আরো জানতে চাইলে [`date_format` ম্যানুয়াল](https://www.php.net/manual/en/datetime.format.php) পড়ুন।

## সময় ফরম্যাটিং

পিএইচপিতে চলমান বর্তমান সময় বের করার প্রয়োজনে [`time()`](https://www.php.net/manual/en/function.time.php) ফাংশনটি ব্যবহার করা হয়। এই ফাংশনটি ইউনিক্স এপক টাইম **(Unix Epoch)** তথা **(January 1 1970 00:00:00 GMT)** থেকে নিয়ে বর্তমান মুহুর্ত পর্যন্ত সময়কে সেকেন্ডে রূপান্তরিত করে ইন্টিজার ডাটা টাইপ আকারে রিটার্ন করে। ফাংশনটির কোন প্যারামিটার নেই। উদাহরণঃ

```php
<?php
    // Output at the time of writing: 1706409469
    echo time();
```

আউটপুটঃ

```
1706409469
```

এখানে আমরা এপক টাইম থেকে নিয়ে বর্তমান মুহুর্ত পর্যন্ত সময়কে একটি ইন্টিজার সংখ্যায় সেকেন্ডে রূপান্তরিত অবস্থায় দেখতে পাচ্ছি। এখন আমরা এই ইন্টিজারকে কিভাবে ব্যবহার এবং উপস্থাপনযোগ্য তারিখ ও সময়ে রূপান্তর করতে পারি সেটা দেখব। সেজন্য আমরা পূর্ববর্তী `date()` ফাংশনের সাহায্য নিতে পারি। উদাহরণঃ

```php
<?php
    // Output at the time of writing: 28-01-2024
    echo date("d-m-Y", time());
```

আউটপুটঃ

```
28-01-2024
```

এখানে আমরা শুধু তারিখকে ফরম্যাট করেছি। এবার এই ইন্টিজার সংখ্যায় থাকা তারিখ ও সময়কে কিভাবে একসাথে রূপান্তর করতে পারি সেটা দেখব।

```php
<?php
    // Output at the time of writing: 28-01-2024 02:53:21
    echo date("d-m-Y H:i:s", time());
```

আউটপুটঃ

```
28-01-2024 02:53:21
```

## Unix Time & Timestamp

### Unix Time এর পরিচয়

[**Unix Time**](https://en.wikipedia.org/wiki/Unix_time) এক ধরণের তারিখ এবং সময়ের উপস্থাপনা যা ব্যাপকভাবে [কম্পিউটিং বা এজাতীয় টেকনোলজিতে](https://en.wikipedia.org/wiki/Computing#Computer) ব্যবহৃত হয়। এটি ১৯৭০ সালের ১ জানুয়ারি ০০:০০:০০ [**Coordinated Universal Time** বা **UTC**](https://en.wikipedia.org/wiki/Coordinated_Universal_Time) থেকে অতিবাহিত হওয়া সময়কে [সেকেন্ডের নিক্তিতে](https://en.wikipedia.org/wiki/Second) পরিমাপ করে। যা [**Unix epoch**](<https://en.wikipedia.org/wiki/Epoch_(computing)>) বা ইউনিক্স উপযুগ নামেও পরিচিত। এটি সম্পন্ন হয় [**leap seconds**](https://en.wikipedia.org/wiki/Leap_second) এর সাথে সামঞ্জস্য ছাড়াই।

আধুনিক কম্পিউটিং টেকনোলজি এই পর্যায়ে উন্নীত হয়েছে যে, ভ্যালুগুলো কখনও কখনও [মাইক্রোসেকেন্ড](https://en.wikipedia.org/wiki/Microseconds) বা [ন্যানোসেকেন্ডের](https://en.wikipedia.org/wiki/Nanosecond) মতো উচ্চতর [**granularity**](https://en.wikipedia.org/wiki/Data_granularity) এর সাথে সংরক্ষণ করা সম্ভব হয়।

### Unix Time এর উদ্ভব

**Unix Time** এর উদ্ভব ঘটে যখন ১৯৬৯ সালে [**Bell Labs**](https://en.wikipedia.org/wiki/Bell_Labs) রিসার্চ সেন্টারে সময়ের প্রতিষ্ঠিত প্রতিষ্ঠান [**_AT&T_**](https://en.wikipedia.org/wiki/AT%26T_Corporation) কর্তৃক [_Unix_ অপারেটিং সিস্টেমের](https://en.wikipedia.org/wiki/Unix) জন্য একটি [**system time**](https://en.wikipedia.org/wiki/System_time) এর প্রয়োজন অনুভূত হয়। পরবর্তীতে এটি অন্যান্য কম্পিউটার অপারেটিং সিস্টেম, ফাইল সিস্টেম, পিএইচপিসহ অন্যান্য প্রোগ্রামিং ভাষা এবং ডাটাবেসে ব্যাপকভাবে ব্যবহৃত হয়েছে, হচ্ছে।

### পিএইচপিতে Unix Timestamp তৈরি

পিএইচপিতে _Unix Timestamp_ তৈরি বা বের জন্য যে বিল্ট-ইন ফাংশন আমরা ব্যবহার করতে পারি সেটি হল, [`strtotime()`](https://www.php.net/manual/en/function.strtotime) ফাংশন। এই ফাংশনের প্রথম প্যারামিটার হচ্ছে তারিখ এবং দ্বিতীয় প্যারামিটার হচ্ছে ইনপুট ফরম্যাট। উদাহরণঃ

```php
<?php
    // Output at the time of writing: 1706400000
    echo strtotime("28-01-2024");
```

আউটপুটঃ

```
1706400000
```

## অতীত, বর্তমান, ভবিষ্যতের তারিখ বের করা

পছন্দমাফিক নির্ধারিত সময় ও তারিখ বের করার ক্ষেত্রে `strtotime()` ফাংশনটি খুবই শক্তিশালী একটি ফাংশন। কারণ, পিএইচপি ম্যানুয়াল অনুযায়ী ফাংশনটি যেকোন **_English textual datetime description_** কে _Unix timestamp_ এ রূপান্তর করে। ফলে আমরা এই ফাংশন দিয়ে খুব সহজে মানুষের বোধগম্য ভাষা এবং উপায় ব্যবহার করে অতীত, বর্তমান বা ভবিষ্যতের যেকোন সময় এবং তারিখ পেতে পারি।

এই ফাংশনের প্রথম প্যারামিটার হচ্ছে _English date format_ ধারণ করে এমন একটি _string_ ডাটা এবং দ্বিতীয় প্যারামিটার হচ্ছে _baseTimestamp_ — তথা কোন নির্ধারিত _Timestamp_ মৌল হিসেবে প্রদান করা, যার ভিত্তিতে প্রথম প্যারামিটারের সময় ও তারিখ গণনা হবে। এটি ঐচ্ছিক প্যারামিটার। না দেয়া হলে বর্তমান সময়কে কেন্দ্র করে গণনা সম্পন্ন হবে। উদাহরণঃ

```php
<?php
    // Output at the time of writing: 1706527660
    echo strtotime("+1 day") . "\n";
```

আউটপুটঃ

```
1706527660
```

আমরা দেখতে পাচ্ছি ফাংশনটি একটি ইন্টিজার রিটার্ন করেছে, যা মূলত একটি _timestamp_। আমাদের প্রত্যাশিত সময় ও তারিখ সেকেন্ড হিসেবে গুণন হয়ে এতে সংরক্ষিত আছে। ফলে আমরা `date()` ফাংশনের সাহায্যে একে খুব সহজে বোধগম্য তারিখ ও সময়ে রূপান্তর করতে পারি। উদাহরণঃ

```php
<?php
    // Output at the time of writing: 29-01-2024
    echo date("d-m-Y", strtotime("+1 day"));
```

আউটপুটঃ

```
29-01-2024
```

## অতীত, বর্তমান, ভবিষ্যতের সময় বের করা

উপরে আমরা শুধু তারিখ দেখতে পাচ্ছি যেহেতু আমরা সময়ের ফরম্যাট `date()` ফাংশনে প্রদান করিনি। এবার চলুন তারিখের সাথে সাথে সময়কেও রূপান্তর করি। উদাহরণঃ

```php
<?php
    // Output at the time of wirting: 29-01-2024 13:41:02
    echo date("d-m-Y H:i:s", strtotime("+1 day"));
```

আউটপুটঃ

```
29-01-2024 13:41:02
```

আবার চাইলে ভবিষ্যত বা অতীতের কোন তারিখ পেতে _English textual datetime_ না দিয়ে সরাসরি কোন একটি তারিখ _string_ আকারে দিয়ে তার টাইমস্টাম্প পেতে পারি। উদাহরণঃ

```php
<?php
    // Output: 1706486400
    echo strtotime("29-01-2024");
```

আউটপুটঃ

```
1706486400
```

অতঃপর সেই টাইমস্টাম্পকে `date()` ফাংশন দিয়ে মানুষের বোধগম্য ফরম্যাটে রূপান্তর করতে পারি। উদাহরণঃ

```php
<?php
    // Output: 24-02-2024
    echo date("d-m-Y", strtotime("24-02-2024"));
```

আউটপুটঃ

```
24-02-2024
```

তারিখের পাশাপাশি সময়ও পেতে পারি যদি আমরা পর্যাপ্ত ফরম্যাট `date()` ফাংশনে প্রদান করি। উদাহরণঃ

```php
<?php
    // Output: 24-02-2024 08:30:00am
    echo date("d-m-Y H:i:sa", strtotime("24-02-2024 08:30:00"));
```

আউটপুটঃ

```
24-02-2024 08:30:00am
```

এভাবেই আমরা প্রয়োজনমাফিক বিভিন্ন ধরণের তারিখ ইউনিক্স টাইমস্টাম্পে বের করে `date()` ফাংশন দিয়ে আমাদের বোধগম্য ভাষায় উপস্থাপন করতে পারি। নিম্নে কিছু উদাহরণ দেয়া হলঃ

```php
<?php
    // Output at the time of writing: 29-01-2024
    echo date("d-m-Y", strtotime("+1 day")) . "\n";
    // Output at the time of writing: 04-02-2024
    echo date("d-m-Y", strtotime("+1 week")) . "\n";
    // Output at the time of writing: 06-02-2024
    echo date("d-m-Y", strtotime("+1 week 2 days 4 hours 2 seconds")) . "\n";
    // Output at the time of writing: 01-02-2024
    echo date("d-m-Y", strtotime("next Thursday")) . "\n";
    // Output at the time of writing: 22-01-2024
    echo date("d-m-Y", strtotime("last Monday")) . "\n";
```

আউটপুটঃ

```
29-01-2024
04-02-2024
06-02-2024
01-02-2024
22-01-2024
```

শুধুমাত্র _Year/Month/Day/Hour/Minute/Second_ এর মান বাড়াতে চাইলে আমরা এই ফাংশনেই প্রথম প্যারামিটার হিসেবে পছন্দমাফিক ফরম্যাট এবং _English textual datetime_ দিতে পারি। উদাহরণঃ

```php
<?php
    // Output at the time of writing: 28-01-2025 15:55:42pm
    echo date("d-m-Y H:i:sa", strtotime("+1 year")) . "\n";
    // Output at the time of writing: 28-02-2024 15:55:42pm
    echo date("d-m-Y H:i:sa", strtotime("+1 month")) . "\n";
    // Output at the time of writing: 29-01-2024 15:55:42pm
    echo date("d-m-Y H:i:sa", strtotime("+1 day")) . "\n";
    // Output at the time of writing: 28-01-2024 16:55:42pm
    echo date("d-m-Y H:i:sa", strtotime("+1 hour")) . "\n";
    // Output at the time of writing: 28-01-2024 15:56:42pm
    echo date("d-m-Y H:i:sa", strtotime("+1 minute")) . "\n";
    // Output at the time of writing: 28-01-2024 15:55:43pm
    echo date("d-m-Y H:i:sa", strtotime("+1 second")) . "\n";
```

আউটপুটঃ

```
28-01-2025 15:55:42pm
28-02-2024 15:55:42pm
29-01-2024 15:55:42pm
28-01-2024 16:55:42pm
28-01-2024 15:56:42pm
28-01-2024 15:55:43pm
```

স্ট্রিং ডাটা হিসেবে _English textual datetime_ দেয়ার সময় `+` সাইন এবং সংখ্যার গণনা ব্যবহার না করে আমরা চাইলে সরাসরি স্ট্রিং ডাটা ব্যবহার করতে পারি। উদাহরণ দেখা যাকঃ

```php
<?php
    // Output at the time of writing: 28-01-2025 16:06:01PM
    echo date("d-m-Y H:i:sA",strtotime("next year")) . "\n";
    // Output at the time of writing: 28-02-2024 16:06:01PM
    echo date("d-m-Y H:i:sA",strtotime("next month")) . "\n";
    // Output at the time of writing: 29-01-2024 16:06:01PM
    echo date("d-m-Y H:i:sA",strtotime("next day")) . "\n";
    // Output at the time of writing: 28-01-2024 17:06:01PM
    echo date("d-m-Y H:i:sA",strtotime("next hour")) . "\n";
    // Output at the time of writing: 28-01-2024 16:07:01PM
    echo date("d-m-Y H:i:sA",strtotime("next minute")) . "\n";
    // Output at the time of writing: 28-01-2024 16:06:02PM
    echo date("d-m-Y H:i:sA",strtotime("next second")) . "\n";
```

আউটপুটঃ

```
28-01-2025 16:06:01PM
28-02-2024 16:06:01PM
29-01-2024 16:06:01PM
28-01-2024 17:06:01PM
28-01-2024 16:07:01PM
28-01-2024 16:06:02PM
```

আমরা অটোমেটিক কপিরাইটের বছর দেখাতে পারি। একটি উদাহরণ দেখা যাক।

```php
<?php
    echo date("Y"); // 2021
?>
```

### Get a time in the Future or Past

নিচে কিছু কমন টাইম ফরমেটের চার্টশীট দেখা যাক।

| Character | Description                                     | Example       |
| --------- | ----------------------------------------------- | ------------- |
| a         | Lowercase Ante meridiem and Post meridiem       | am or pm      |
| A         | Uppercase Ante meridiem and Post meridiem       | AM or PM      |
| g         | 12-hour format of an hour without leading zeros | 1 through 12  |
| G         | 24-hour format of an hour without leading zeros | 0 through 23  |
| h         | 12-hour format of an hour with leading zeros    | 01 through 12 |
| H         | 24-hour format of an hour with leading zeros    | 00 through 23 |
| i         | Minutes with leading zeros                      | 00 to 59      |
| s         | Seconds with leading zeros                      | 00 through 59 |

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
