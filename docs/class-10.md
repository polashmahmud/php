# পিএইচপি প্রজেক্টঃ 01 - Build Image Gallery

পূর্ববর্তী ক্লাসে আমরা _HTML Form_ এর ফাইল টাইপ _input element_ এর মাধ্যমে কিভাবে ইউজার থেকে ফাইল ইনপুট নিয়ে তা নির্ধারিত ডিরেক্টরি বা ফোল্ডারে সেভ করা যায় তার ব্যবহার দেখেছি। আজকের ক্লাসে পূর্ববর্তী ধারণাকে কাজে লাগিয়ে পাশাপাশি নতুন কিছু বিষয় শিখে ফাইল নিয়ে আমরা কি কি করতে পারি তার একটা সম্যক ধারণা পেতে একটি ছোটখাট প্রজেক্ট করব।

## প্রজেক্ট বিবরণ

- **প্রজেক্ট নামঃ** প্রজেক্টটির ধরণ অনুযায়ী আমরা এর নাম _Build Image Gallery_ দিতে পারি।

- **প্রক্রিয়াঃ** আমাদের একটি ফোল্ডার বা ডিরেক্টরি থাকবে। এই ফোল্ডারটিতে যখনই আমাদের ঠিক করে দেয়া ফাইল টাইপ এবং সাইজ অনুযায়ী কোন ইমেজ বা ছবি যোগ করা হবে তখনই তার আউটপুট ব্রাউজারে একটি ওয়েবপেজের মাধ্যমে আমরা প্রদর্শন করব। এখন ব্রাউজার আমরা নিজে থেকে রিলোড দিতে পারি, অথবা ফোল্ডারে কোন ছবি যোগ হওয়ামাত্র ব্রাউজার নিজে থেকে রিলোড নেবে এমন প্রক্রিয়াও করতে পারি। আমরা প্রজেক্টটি এমনভাবে করব যাতে ফোল্ডারে ইতিমধ্যে এক বা একাধিক ছবি থেকে থাকলে আমরা সেগুলো ব্রাউজারে প্রদর্শন করব।

- **করণীয়ঃ** শিক্ষার্থীদের করণীয় থাকবে, একজন ইউজারকে ছবি আপলোডের সুযোগ দেয়া এবং আপলোড সফলভাবে সম্পন্ন হলে সেই ডিরেক্টরিতে রাখা এবং ব্রাউজারে প্রদর্শন করা। মোটকথা, আমরা একটি _Image gallary type_ ওয়েবসাইট বানাবো।

## প্রজেক্ট ফাইনাল লুক

আমাদের প্রজেক্ট দেখতে ফাইনালি নিন্মোক্ত ধরণের হবেঃ–

![Image Gallery First Look](/public/image-gallery-first-look.png "Image Gallery First Look")

সাইটের ইউআই আমরা [tailwindcss](https://tailwindcss.com/docs/installation) এর মাধ্যমে করেছি। শিক্ষার্থীরা নিজ পছন্দমতো করতে পারেন।

তাহলে চলুন শুরু করি।

## প্রজেক্টের প্রাথমিক সেটআপ

প্রথমেই আমরা একটি empty ফোল্ডার তৈরি করব `gallery` নামে। এই ফোল্ডারে আমরা আমাদের যাবতীয় ফাইল এবং ডিরেক্টরিগুলো রাখব। এই ডিরেক্টরিতে আমরা প্রাথমিক একটা ফাইল তৈরি করব `index.php` নামে। অতঃপর একটি সাব ডিরেক্টরি তৈরি করব `images` নামে। এই ডিরেক্টরিই হবে আমাদের এন্ট্রি পয়েন্ট। এই `images` ডিরেক্টরিতে থাকা যাবতীয় ফাইল এবং কন্টেন্ট আমরা পিএইচপির সাহায্যে পড়ার চেষ্টা করব এবং আমাদের প্রয়োজন এবং প্রক্রিয়া অনুযায়ী ব্যবহার করে ফাইনাল প্রজেক্টটা দাঁড় করাব। 

## Directory Functions

### opendir() function

পিএইচপির মাধ্যমে কোন ডিরেক্টরি পড়তে হলে আমাদেরকে প্রথমেই [`opendir()`](https://www.php.net/manual/en/function.opendir.php) ফাংশনের মাধ্যমে ডিরেক্টরিকে ওপেন করে নিতে হবে। এই ফাংশন ব্যবহার ব্যতীত আমরা ডিরেক্টরিতে থাকা ফাইল বা কন্টেন্টগুলোর এক্সেস পাবনা, ফলতঃ ডিরেক্টরি ওপেন না করে ফাইল পড়তে গেলে _Fatal Error_ পাব।

এখন আমরা `opendir()` ফাংশন দিয়ে ফাইল ওপেন করে `var_dump()` করে দেখতে পারি _images_ ফোল্ডার ওপেন হচ্ছে কি না। উদাহরণঃ–

```php
<?php

  $dir = opendir('images');

  var_dump($dir);
```

আউটপুটঃ–

```
resource(3) of type (stream)
```

আউটপুট দেখে আমরা বুঝতে পারছি, ডিরেক্টরি ওপেন হয়েছে।

### readdir() function

ডিরেক্টরি ওপেন করার পর আমাদের দ্বিতীয় কাজ হল, এর ভেতরে থাকা ফাইল কন্টেন্টগুলো পড়া। সেজন্য আমাদেরকে পিএইচপির [`readdir()`](https://www.php.net/manual/en/function.readdir.php) ফাংশনটি ব্যবহার করতে হবে।

খেয়াল রাখতে হবে, এই ফাংশনটি কোন একটি লুপের ভেতরে ব্যবহার করতে হবে। কারণ, একটি ডিরেক্টরিতে সাধারণত একাধিক ফাইল পাওয়া যায়। তাই প্রতিটি ফাইল পড়তে হলে লুপের সাহায্য নিতে হবে। প্রতিটি লুপে আমরা কি পাচ্ছি `var_dump()` করে তা চেক করতে পারি। উদাহরণঃ–

```php
<?php

  $dir = opendir('images');

  while($imageFile = readdir($dir)){
    var_dump($imageFile);
  }
```

আউটপুট:

```
string(1) "." string(2) ".."
```

আউটপুটে আমরা `string` ডাটা টাইপ আকারে দুটি স্ট্রিং ডাটা দেখতে পাচ্ছি। একটি হল, _single dot `.`_ এবং অন্যটি হল _double dot `..`_। মনে রাখবেন যখনই কোন ডিরেক্টরি ওপেন করে তার কন্টেন্টগুলো পড়ার চেষ্টা করবেন তখনই এইজাতীয় একটি বা দুটি আউটপুট দেখতে পাবেন। এই আউটপুট দুটি **Linux** এর ফোল্ডার স্ট্রাকচার প্রক্রিয়াকে নির্দেশ করে। যারা কমান্ড লাইন এর সাহায্যে ফোল্ডার এক্সেস করে থাকেন, তারা সাধারণত এই স্ট্রাকচারের সাথে পূর্ব-পরিচিত।

#### এই আউটপুট দুটি দ্বারা কি বোঝায়?

- প্রথমটি দ্বারা আপনি বর্তমানে যে ডিরেক্টরিতে অবস্থান করছেন তার নির্দেশনা প্রদান করে।

- দ্বিতীয়টি দ্বারা বর্তমান ডিরেক্টরির এক ধাপ উপরের ডিরেক্টরি বোঝায়। সহজ ভাষায় বর্তমান ফাইল ডিরেক্টরির প্যারেন্ট ডিরেক্টরি বোঝায়।

বিষয়টি বুঝতে _'images'_ শূণ্য ডিরেক্টরিতে আমরা `abc.txt` নামে একটি ফাইল তৈরি করতে পারি। তখন আমাদের আউটপুট হবেঃ–

```
string(1) "." string(2) ".." string(7) "abc.txt"
```

### closedir() function

ডিরেক্টরি ওপেন করার পর সেটা ক্লোজ করতে [`closedir()`](https://www.php.net/manual/en/function.closedir.php) ব্যবহার করতে হয়। এই ফাংশনটি ব্যবহার করা রেকমেন্ডেড। ছোটখাট প্রজেক্টে ব্যবহার না করার ফ্লেক্সিবিলিটি আছে। তবে বেস্ট প্রাকটিস হল, ব্যবহার করা।

## প্রজেক্ট ডেভলপমেন্ট প্রক্রিয়া

আমাদের টাস্কে ফিরে আসি। আমরা এখন _'images'_ ফোল্ডারের মধ্যে কিছু ছবি যোগ করে দেখব কি আউটপুট আসে। যোগ করার পর আউটপুটঃ–

```
string(9) "image.jpg" string(11) "image-2.jpg" string(2) ".." string(11) "image-3.jpg" string(1) "." string(7) "abc.txt" string(11) "image-1.jpg"
```

আউটপুট দেখে আমরা বুঝতে পারছি _'images'_ ডিরেক্টরিতে থাকা ইমেজ ফাইলগুলোর নাম আমরা পেয়ে গেছি। এখন কোনভাবে যদি আমরা এইচটিএমএল `img` এলিমেন্টের `src` এট্রিবিউটের মধ্যে ইমেজ নামসহ তার পুরো ফোল্ডার পাথটা বসাতে পারি তাহলেই সেটা আমরা ব্রাউজারে প্রদর্শন করতে পারব। তাই নয় কি?

এক্ষেত্রে আমাদের মূল চ্যালেঞ্জ তিনটি।

1. **Linux** ফোল্ডার স্ট্রাকচারের কল্যাণে যে দুটি অতিরিক্ত স্ট্রিং আমরা পাচ্ছি সেগুলো কোনভাবে অপসারণ করতে হবে।

2. আমরা আউটপুটগুলো এইমুহূর্তে স্ট্রিং আকারে পাচ্ছি, এটাকে একটি অ্যারেতে রূপান্তর করতে হবে যাতে সেটার উপর লুপ চালিয়ে আমরা প্রতিটি ইমেজ ফাইলের নাম পেতে পারি।

3. প্রতিটি ইমেজ ফাইলের পূর্বে তার প্যারেন্ট ফোল্ডারের নাম যোগ করে দিতে হবে। ফলে ফাইলগুলোর রিলেটিভ ফোল্ডার পাথ আমরা পাব এবং সে অনুযায়ী ইমেজ ফাইলগুলো প্রদর্শন করতে পারব।

মোটকথা, ব্রাউজারে ইমেজগুলো ডাইনামিক্যালি প্রদর্শনের জন্য automatically আইডেন্টিফাই করা যায় এমন **dynamic** এবং **readable url** তৈরি করতে হবে। যার ফলশ্রুতিতে ডাইনামিক্যালি ইমেজ পাথ জেনারেট হবে, ব্রাউজার সেই পাথ resolve করে ইমেজ ফাইলগুলো লোড করার চেষ্টা করবে। যদি আমরা এই পর্যায় সম্পন্ন করতে পারি তাহলে আমাদের প্রজেক্টের মূল কাজটি হয়ে যাবে।

এই কাজটি করতে আমাদের লজিকগুলো আমরা `index.php` তথা বর্তমান ফাইলেই লিখতে পারি অথবা ভিন্ন একটি ফাইলে লিখতে পারি। প্রোগ্রামিংয়ে separate of concern একটি গুরুত্বপূর্ণ বিষয়; আমরা ইতিপূর্বে আলোচনা করেছি। সেই ধারা বজায় রাখতে আমরা ভিন্ন একটি ফাইল ব্যবহার করব আমাদের লজিকগুলো লেখার জন্য।

আমরা সেই ফাইলটির নাম দিবঃ `directoryReader.php`। আমাদের জবটি সম্পন্ন করতে আমরা একটি ফাংশন ব্যবহার করব যাতে আমাদের কোড Reusable হয়। ফাংশনটি তৈরিতে আমাদের লজিক হলঃ

> ফাংশনটি যখন আমরা কল করব তখন আর্গুমেন্ট আকারে একটি ওপেন ডিরেক্টরি পাস করব। ফাংশনে আমরা প্রথমে একটি empty array variable নিব।
>
> অতঃপর লুপ চালিয়ে `readdir()` ফাংশন দিয়ে ওপেন রাখা ডিরেক্টরির ফাইল কন্টেন্টগুলো এক্সেস করব।
>
> অতঃপর প্রতিবার লুপ চালিয়ে পাওয়া আউটপুটগুলো চেক করে সেখান থেকে **Linux** ফোল্ডার স্ট্রাকচারের যে দুটি অতিরিক্ত স্ট্রিং আমরা বাই ডিফল্ট পাচ্ছি তা বাদ দিব।
>
> এই চেকটি সম্পন্ন হওয়ার পর উত্তীর্ণ আউটপুটগুলো আমাদের পূর্বঘোষিত empty array variable এ জমা করব।
>
> ফাইনালি, ফাংশন থেকে সেই array কে রিটার্ন করব।

এবার এক এক করে লজিকগুলো আমরা প্রয়োগ করব। প্রথমেই `$files = []` নামে একটি empty array variable তৈরি করব। উদাহরণঃ

```php
<?php

  function directoryreader() {
  $files = [];
  }
```

তাহলে আমাদের পরবর্তী প্রসেসগুলো কি কি? আসুন মিলিয়ে দেখিঃ

1. loop through the files
2. do some check
3. return images (i.e. files) array
4. add to images (i.e. files) array

প্রসেসগুলো অনুসরণ করার পূর্বে আমরা ফাংশন প্যারামিটার সেট করে নিব। যাতে করে আমাদের ফাংশনটি Reusable এবং Dynamically ব্যবহারের উপযোগী হয়।

- প্রথমে আমরা একটি স্ট্রিং প্যারামিটার সেট করব ডিরেক্টরির জন্য, প্রত্যাশা হলঃ ফাংশন কল করার সময় যে ডিরেক্টরিটি আমরা পড়তে চাইছি সেটা পাস করে দিব। উদাহরণঃ

```php
<?php

  function directoryReader($directory) {
  $files = [];
  }
```

- দ্বিতীয় প্যারামিটার একটি array সেট করব, যার ডিফল্ট ভ্যালু আমরা দিয়ে দিব **Linux** ফোল্ডার স্ট্রাকচারের সেই দুটি স্ট্রিং — তথা SINGLE DOT (`.`) এবং DOUBLE DOT (`..`) — যেগুলো আমরা `$files = []` array তে অন্তর্ভূক্ত করবনা। ফলে আমাদের array ভ্যালুতে শুধুমাত্র ইমেজ নামগুলোই থাকবে। উদাহরণঃ

```php
<?php

  function directoryReader($directory, array $exclude = array('.','..')) {
  $files = [];
  }
```

এবার, আমরা চেক করে দেখব ফাংশনের প্রথম প্যারামিটারে যে ভ্যালু তথা ডিরেক্টরি পাস করা হবে সেটা আসলেই ডিরেক্টরি কিনা। যাতে ভুলকরে ডিরেক্টরি ব্যতিত অন্য কোন ভ্যালু পাস করা হলে আমরা তা নিয়ন্ত্রণ করতে পারি। যদি ডিরেক্টরি ব্যতিত অন্য কোন ভ্যালু পাস করা হয়, তখন `null` return করব। আমরা [`$is_dir`](https://www.php.net/manual/en/function.is-dir.php) ফাংশন দিয়ে directory চেক দিবো। আমাদের ফাংশন ঠিকঠাক কাজ করছে তার ধারণা পেতে ক্ষণিকের জন্য ফাংশন থেকে হার্ড কোডেড `true` রিটার্ন করব। `directoryReader.php` ফাইলের কোড উদাহরণঃ

```php
<?php

  function directoryReader($directory, array $exclude = array('.', '..')) {
      $files = [];

      if (!is_dir($directory)) {
          return null;
      }

      return true;
  }
```

একইসাথে `index.php` তে আমাদের পূর্বোক্ত কোডগুলো মুছে ফেলব, যেহেতু সকল কাজ আমরা এখন ফাংশনের সাহায্যে করার প্রস্তুতি নিচ্ছি। অতঃপর `directoryReader.php` ফাইলটা `index.php` তে অন্তর্ভূক্ত করব। অতঃপর `$images` নামে একটি ভ্যারিয়েবল ডিক্লেয়ার করে ভ্যালু হিসেবে `directoryReader` ফাংশনটি কল করব এবং প্রথম আর্গুমেন্টে ডিরেক্টরি নামটি পাস করব। দ্বিতীয় আর্গুমেন্ট আমরা পাস করবনা। যেহেতু আমরা তার জন্য ডিফল্ট ভ্যালু ইতিপূর্বেই সেট করে এসেছি। সবশেষে `$images` ভ্যারিয়েবলকে `var_dump()` করব। ২টি উদাহরণ দেখিঃ

1. ```php
   <?php

    require 'directoryReader.php';

    $images = directoryReader('images');

    var_dump($images);
   ```

   আউটপুটঃ

   ```
   bool(true)
   ```

2. ```php
      <?php

        require 'directoryReader.php';

        $images = directoryReader('css');

        var_dump($images);
   ```

   আউটপুটঃ

   ```
   NULL
   ```

প্রথম উদাহরণের ফাংশন কলে আমরা সঠিক ডিরেক্টরি পাস করেছি। তাই `$images` ভ্যারিয়েবলের ভ্যালু হিসেবে `true` রিটার্ন পেয়েছি, যা প্রত্যাশিত। দ্বিতীয় উদাহরণের ফাংশন কলে আমরা ভুল ডিরেক্টরি পাস করেছি। ফলাফলও প্রত্যাশামাফিক `NULL` পেয়েছি।

## আউটপুট স্যানিটাইজ করা

আমরা আউটপুট হিসেবে `true` রিটার্ন পেয়েছি কারণ পরীক্ষার উদ্দেশ্যে `directoryReader()` ফাংশনে আমরা হার্ড কোডেড `true` রিটার্ন করেছি যখন ফাংশনটিতে ভ্যালিড ডিরেক্টরি পাস করা হবে। কিন্তু ডিরেক্টরি ভ্যালিড না হলে `NULL` রিটার্ন করবে। এখন আমাদের প্রোগ্রামের ব্যবহার উপযোগীতা বৃদ্ধির জন্য আমরা `NULL` পেলে তখন সেটাকে প্রতিরোধ করে একটা readable মেসেজ দিতে পারি। কয়েকটি উপায়ে আমরা কাজটি করতে পারি।

1. আমরা [`is_null()`](https://www.php.net/manual/en/function.is-null.php) ফাংশন দিয়ে একটা চেক বসাতে পারি। চেকের ভেতর [`exit`](https://www.php.net/manual/en/function.exit.php) language construct ব্যবহার করে আমরা নিশ্চিত হতে পারি, পরবর্তী কোডগুলো যাতে এক্সিকিউট না হয়। যেমনঃ

```php
<?php
  require 'directoryReader.php';

  $images = directoryReader('css');

  if(is_null($images)){
    echo 'no folder found!';
    exit;
  }
```

2. আবার একইরকম চেক [`empty()`](https://www.php.net/manual/en/function.empty.php) ফাংশন দিয়েও বসাতে পারি। যেমনঃ

```php
<?php

  if(empty($images)){
      echo 'no folder found!';
      exit;
  }
```

3. অথবা, আরো সহজে আমরা `!` বা **Not Operator** ব্যবহার করেও চেক বসাতে পারি। যেমনঃ

```php
<?php

  if(!$images){
      echo 'no folder found!';
      exit;
  }
```

**দ্রষ্টব্য**, code optimization এর স্বার্থে চেকের ভেতর `echo` এবং `exit` — এই ২টি language construct ব্যবহার করার পরিবর্তে শুধুমাত্র [`die`](https://www.php.net/manual/en/function.die) language construct টি ব্যবহার করতে পারি। যেমনঃ

```php
<?php

  if(!$images){
    die('no folder found!');
  }
```

সকল ক্ষেত্রে আমাদের আউটপুটঃ

```
no folder found!
```

## opendir() ফাংশন দিয়ে ডিরেক্টরি খোলা

এই পর্যায় শেষে আমরা এখন `directoryReader.php` ফাইলে এসে ফাংশনের পরবর্তী লজিকগুলো তৈরি করব। আমরা `opendir()` ফাংশন দিয়ে আর্গুমেন্টে পাওয়া ডিরেক্টরিটি ওপেন করব, একইসাথে চেক করে দেখব ওপেন করার সময় কোন ধরণের সমস্যা হল কিনা। আউটপুটকে `var_dum()` করব। পূর্ববর্তী কোডসহ নতুন চেক যোগ করার উদাহরন দেখিঃ

```php
<?php
  function directoryReader($directory, array $exclude = array('.', '..')) {
      $files = [];
      if (!is_dir($directory)) {
        return null;
      }

      if (!($fileDirectory = opendir($directory))){
        return null;
      }

      var_dump($fileDirectory);
  }
```

আউটপুটঃ

```
resource(4) of type (stream) no folder found!
```

আউটপুট দেখে আমরা বুঝতে পারি আমাদের ডিরেক্টরিটি ওপেন হয়েছে। **no folder found!** আউটপুট দেখতে পাচ্ছি কারণ আমরা ফাংশন থেকে কোন ভ্যালু রিটার্ন করিনি। ফলে ফাংশন বাই ডিফল্ট `NULL` return করায় ওই আউটপুটটি আমরা পাচ্ছি।

## readdir() ফাংশন দিয়ে ডিরেক্টরি পাঠ

এবার আমরা ওপেন ডিরেক্টরিকে `readdir()` ফাংশন দিয়ে পড়ার চেষ্টা করব। উদাহরণঃ

```php
<?php

  while (($file = readdir($fileDirectory)) !== false) {
    var_dump($file);
  }
```

আউটপুটঃ

```
string(9) "image.jpg" string(2) ".." string(1) "." no folder found!
```

এখনও আমরা **no folder found!** আউটপুট দেখতে পাচ্ছি কারণ আমরা ফাংশন থেকে কোন ভ্যালু রিটার্ন করিনি। এটাকে প্রতিরোধ করতে আমরা ফাংশন থেকে `$files` array ভেরিয়েবলকে return করব। রিটার্ন করার আগে আমরা ডিরেক্টরিটা ক্লোজ করব। এটা রেকমেন্ডেড, না করলেও কোন সমস্যা নাই।

```php
<?php
  function directoryReader($directory, array $exclude = array('.', '..')) {
    $files = [];

    if (!is_dir($directory)) {
        return null;
    }

    if (!($fileDirectory = opendir($directory))) {
        return null;
    }

    while (($file = readdir($fileDirectory)) !== false) {
      var_dump($file);
    }

    closedir($fileDirectory); // Use the directory handle, not the directory path

    return $files;
  }
```

আউটপুটঃ

```
string(9) "image.jpg" string(2) ".." string(1) "."
```

এবার আউটপুটগুলোতে আমরা ডিরেক্টরিতে থাকা ফাইলগুলো দেখতে পাচ্ছি। পাশাপাশি **Linux** ফোল্ডার স্ট্রাকচারের ২টি আউটপুটও বাই ডিফল্ট পাচ্ছি। এখন আমাদের কাজ হল, এই `.` **SINGLE DOT** আর `..` **DOUBLE DOT** কে বাদ দেয়া। উদাহরণঃ

```php
<?php
  function directoryReader($directory, array $exclude = array('.', '..')) {
    $files = [];

    if (!is_dir($directory)) {
        return null;
    }

    if (!($fileDirectory = opendir($directory))) {
        return null;
    }

    while (($file = readdir($fileDirectory)) !== false) {
      if (in_array($file, $exclude)) {
        continue;
      }
      var_dump($file);
    }

    closedir($fileDirectory); // Use the directory handle, not the directory path

    return $files;
  }
```

আউটপুটঃ

```
string(9) "image.jpg"
```

এবার আমাদের কাজ, ফাইলগুলোকে _readable url_ এ কনভার্ট করা এবং প্রতিটা ফাইলের সাথে তার folder নামটাও dynamically যোগ করে দেয়া। সেজন্য আমরা _string concatenation_ করতে পারি। উদাহরণঃ

```php
<?php
  while (($file = readdir($fileDirectory)) !== false) {
    if (in_array($file, $exclude)) {
      continue;
    }
    $files[] = $directory.'/'. $file;
  }
```

এবার ফাংশন সঠিক আউটপুট রিটার্ন করছে কিনা পরীক্ষা করতে আমরা এখন `index.php` ফাইলে গিয়ে $images ভ্যারিয়েবলকে `var_dump( )` করে দেখব।

```php
var_dump($images);
```

আউটপুট:

```
array(4) { [0]=> string(16) "images/images.jpg" [1]=> string(18) "images/images-2.jpg" [2]=> string(18) "images/images-3.jpg" [3]=> string(18) "images/images-1.jpg" }
```

## ওয়েবসাইটে ইমেজ ফাইল প্রদর্শন

আমরা ফোল্ডারসহ ইমেজ ফাইলগুলো দেখতে পাচ্ছি। এখন images গুলো আমাদের ওয়েবসাইটে show করাবো। তারজন্য `index.php` তে একটি পিএইচপি ফাইল তৈরি করে এর ভিতরে একটি বেসিক HTML স্ট্রাকচার নিবো, যার ভিতরে একটি head ও body সেকশন থাকবে এবং $images array এর উপর লুপ চালাবো আর সকল image গুলো এক এক করে print করবো। উদাহরণঃ

```php
<?php
  require 'directoryReader.php';

  $images = directoryReader('images');
  if(!$images){
      die('no folder found!');
  }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    <?php foreach($images as $image):?>
      <img src="<?php echo $image ?>" alt="">
    <?php endforeach; ?>

</body>
</html>
```

আমাদেরকে এতক্ষণ অনুসরণ করে থাকলে এখন আপনার সাইটেও image গুলো show হবে।

এবার আমরা [Tailwind CSS](https://tailwindcss.com/) ব্যবহার করে একটি সুন্দর লেআউট তৈরি করে ইমেজগুলো প্রদর্শন করব। পাশাপাশি ইউজার কর্তৃক ইমেজ আপলোডের জন্য আমরা একটি HTML ফর্ম নিব।

```php
<?php
  require 'directoryReader.php';

  $images = directoryReader('images');
  if(!$images){
      die('no folder found!');
  }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@0.7.4/dist/tailwind.min.css" rel="stylesheet">
    <title>Image Gallery</title>
</head>
<body class="bg-gray-200 p-4">

<div class="max-w-6wl mx-auto">
    <div class="flex item-center justify-between">
        <div class="flex">
            <h1 class="text-2xl mb-8"><strong>PHP Basic Course</strong><br>Simple Image Gallery</h1>
        </div>

            <!-- Image Upload Form -->
            <form action="/upload" method="post" enctype="multipart/form-data" class="mb-4">
                <label for="imageUpload" class="block text-sm font-medium text-gray-700">Upload Image</label>
                    <input type="file" id="imageUpload" name="image" class="mt-1 p-2 border rounded-md">
                    <button type="submit" class="rounded bg-blue p-4 py-2 text-white hover:bg-blue">Upload</button>
            </form>

        </div>

    <div class="grid grid-cols-2 md:grid-cols-3 gap-4 border-t border-gray-300 pt-3">

      <?php foreach($images as $image):?>
        <img class="h-auto max-w-full rounded-lg" src="<?php echo $image ?>" alt="">
      <?php endforeach; ?>

    </div>
</div>
</body>
</html>
```

আউটপুটঃ

![image-gallery-final-look](/public/image-gallery-final-look.png "Image Gallery Final Look")

## প্রজেক্ট টাস্ক/এসাইনমেন্ট

শিক্ষার্থীদের জন্য এই প্রজেক্টের টাস্ক বা এসাইনমেন্ট হল, ইউজারকে ইমেজ ফাইল আপলোডের সুযোগ দেয়া। অতঃপর তার দেয়া আপলোড ফাইলগুলো গ্রহনযোগ্য টাইপের ইমেজ ফাইল কিনা তা চেক করা। পাশাপাশি নির্ধারিত সাইজের কিনা তা যাচাই করা। যদি হয়, তখন ফাইলগুলো আপলোড করে আমরা যে ডিরেক্টরি read করে সাইটে ইমেজ ফাইলগুলো প্রদর্শন করেছি সেই ডিরেক্টরিতে জমা করা। যাতে ফাইল আপলোড সফলভাবে সম্পন্ন হওয়ার সাথে সাথেই আমরা তা সাইটে লাইভ দেখতে পারি।
