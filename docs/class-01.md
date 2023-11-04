# পিএইচপি বেসিক কোর্স

## PHP এর ইতিহাস

**PHP** একটি প্রোগ্রামিং ভাষা। এটি মূলত সার্ভার-সাইড স্ক্রিপ্টিং-এর জন্য ব্যবহৃত হয়। **PHP** শব্দটির পূর্ণরূপ:- **_Personal Home Page_**, পূর্বে এটি এই নামেই পরিচিত ছিল। তবে বর্তমানে এর ফুল মিনিং হচ্ছে **Hypertext Preprocessor** **(হাইপার-টেক্সট প্রি-প্রসেসর)**। ১৯৯৩ সালে ড্যানিশ-কানাডিয়ান প্রোগ্রামার [রাসমাস লেডর্ফ](https://en.wikipedia.org/wiki/Rasmus_Lerdorf) এটি সৃষ্টি করেন এবং ১৯৯৫ সালে সবার জন্য উন্মুক্ত করে দেন।

অতএব, **PHP** একটি বহুল ব‍্যবহৃত ওপেন সোর্স ল‍্যাংগুয়েজ। [পিএইচপি ডেভলপমেন্ট টিম](https://php.net/credits/), [জেন্ড টেকনোলজি](https://www.zend.com/) এবং [পিএইচপি ফাউন্ডেশন](https://thephp.foundation/) — যাদেরকে একসাথে **PHP Group** নামে অভিহিত করা হয় তারা বর্তমানে এই ভাষাটির রক্ষণাবেক্ষণ, রিসার্চ এন্ড ডেভলপমেন্টসহ যাবতীয় উন্নয়নমূলক কর্মকান্ড করে থাকেন। **PHP’র** বর্তমান ভার্সন 8.2। **PHP** নিয়ে আরো বিস্তারিত জানতে [**PHP Wiki**](https://en.wikipedia.org/wiki/PHP) পড়ুন।

ফ্রন্ডএন্ড ওয়েবের অবিচ্ছেদ্য অংশ JavaScript এর মত **PHPও** একটি Dynamically Typed Language। যার অর্থ, **PHPতে** ভ্যারিয়েবল ডিক্লেয়ার করতে হলে কোন ধরণের ডাটা টাইপ প্রদান করার প্রয়োজন পড়ে না। রানটাইমে **PHP** Interpreter ভ্যারিয়েবলের ভ্যালু বুঝে ডাটা টাইপ নিজে থেকেই সেট করে দেয়। যদিও ডেভলপাররা চাইলে নিজে থেকেও সেট করে দিতে পারে।

**PHP** দিয়ে যেমনিভাবে ডাইনামিক ওয়েবসাইট, স্ট্যাটিক ওয়েবসাইট বা ওয়েব এপ্লিকেশন তৈরি করা যায়। তেমনিভাবে ডাটাবেস ম্যানেজমেন্টও করা যায়। পাশাপাশি HTML, CSS, JavaScript বা XML ইত্যাদির ভেতর খুব ফ্লেক্সিবলি **PHP** কোড লিখে একটি সার্ভারের সাহায্যে রান করে যেকোন ধরণের ছোট থেকে ছোট, বড় থেকে বড় এপ্লিকেশন তৈরি করা সম্ভব।

যেকোন প্রোগ্রামিং ল্যাংগুয়েজ শেখার জন্য অফিশিয়াল ডকুমেন্টেশনের কোন বিকল্প নাই। তাই **PHP** শিখতে অবশ্যই [**PHP Manual**](https://www.php.net/manual/en/index.php) পড়ুন। সাথে সাথে স্টান্ডার্ড PHP কোড লিখতে [**PHP FIG (PHP Framework Interoperability Group)**](https://www.php-fig.org/) কমিউনিটির [**The PHP Standard Recommendation (PSR)**](https://www.php-fig.org/psr/) গুলো পড়ে সেগুলো অনুসরণ করার চেষ্টা করুন।

## PHP ইনস্টলেশন

আপনি যদি HTML, CSS এবং JavaScript শিখে **PHP** শিখতে এসে থাকেন প্রথমত আপনাকে একটা বিষয় বুঝতে হবে। **PHP** একটি সার্ভার-সাইড ল্যাংগুয়েজ। যার অর্থ আপনি **PHP** কোড লিখে তার আউটপুট সচরাচর HTML, JavaScript এর মত ব্রাউজারে দেখতে পাবেন না। এজন্য আপনাকে এক্সট্রা কিছু পদক্ষেপ নিতে হবে। যার মধ্যে প্রথম হল, –(সার্ভার-সাইড ল্যাংগুয়েজ রান করার জন্য) – একটি সার্ভার সেটআপ করা। পরবর্তীতে এটা নিয়েই কথা হবে।

সকল অপারেটিং সিস্টেমেই **PHP** ব‍্যবহার করার সুযোগ আছে। অপারেটিং সিস্টেমভেদে ব্যবহার পদ্ধতিতে যেমন ভিন্নতা রয়েছে, তেমনি রয়েছে সিস্টেম স্পেসিফিক বিভিন্ন প‍্যাকেজ এবং টুল।

Mac ইউজারদের জন‍্য **PHP** আগে থেকেই ইনস্টল থাকে। সেক্ষেত্রে _Apache configuration file_ **httpd.conf** এর কিছু লাইন আনকমেন্ট করলেই **PHP** কোড লিখে তা এক্সেস করা যাবে। ফাইলটি `/private/etc/apache2/httpd.conf` সাধারণত এই পাথেই পাওয়া যাবে — (যদি পরিবর্তন না করা হয়)। এই ফাইলের নিন্মের লাইন দুটির সামনে থেকে `# (hash sign)` সরিয়ে দিলে আনকমেন্ট হবে। অতঃপর আপনি `php –v` দিয়ে চেক করতে পারেন PHP কাজ করছে কিনা।

```apache
# LoadModule php5_module libexec/httpd/libphp5.so
# AddModule mod_php5.c
```

আরও, সহজ পন্থায় নিচের প্যাকেজগুলো থেকে যেকোন একটা দিয়েও ইনস্টল করতে পারেন। আরো প্যাকেজ অপশন দেখার জন্য বা ইনস্টলেশন গাইড জানার জন্য গুগল করুন।

-   [Home Brew](https://brew.sh/)


-   [Herd](https://herd.laravel.com/)


যদি লিনাক্স ইউজার হোন তাহলে আমার পরামর্শ হচ্ছে আপনি কোন প্রকার প‍্যাকেজ ব‍্যবহার না করে সরাসরি টারমিনাল দিয়ে সেটাপ দিন। এ জন‍্য নিচের কমান্ড ২টি ব্যবহার করুন। বিস্তারিত জানতে গুগল করুন।

```bash
sudo  apt-get update &&  sudo  apt-get upgrade

sudo apt-get  install php
```

Windows ইউজারদের জন‍্য **PHP** সেটাপ করাটা কিছুটা ট্রিকি টাস্ক। কারণ এক্ষেত্রে Mac এর মত যেমনি _Pre-installed_ **PHP** পাওয়া যায় না, তেমনি কমান্ড লাইন ব্যবহার করেও ইনস্টল করার সুযোগ নাই। তবে সহজ দুটি অপশন আছে। এক. ম্যানুয়ালি সেটআপ করা। যেটা ফলো করা কঠিন হলেও আপনার জন্য রেকমেন্ডেড। এক্ষেত্রে মূল কাজটি হল আপনার মেশিনে **_PHP Environment Variable_** সেট করা। কেন এবং কিভাবে জানতে এই [ডক ফাইলটির](https://docs.google.com/document/d/1eLROwtv_BHfqPpa_lMPod__pWLTkin3446SKQl7taM4/edit?usp=sharing) সাহায্য নিন। আপনি গুগল বা ইউটিউবেও গাইডলাইন পেয়ে যাবেন।

২য় উপায় হল, **_PHP Installer Tools_** এর সাহায্য নেয়া। সেজন্য অনেক ধরণের টুল এভেলেবল আছে। নিচে জনপ্রিয় কিছু টুলের তালিকা দেয়া হল।

-   [Laragon](https://laragon.org/index.html)


-   [Wampserver](https://www.wampserver.com/en/)


-   [XAMPP Server](https://www.apachefriends.org/download.html)


-   [WSL](https://learn.microsoft.com/en-us/windows/wsl/install)


এখানে খেয়াল রাখবেন, ম্যানুয়ালি **PHP** ইনস্টল করলে আপনি আলাদা কিছু সুবিধা পাবেন, যা এই টুলগুলোর ক্ষেত্রে সুলভ নয়। এ বিষয়ে আরো বিস্তারিত জানতে **PHP’র** [**Official Manual**](https://www.php.net/manual/en/install.php) এর সাহায্য নিন।

## PHP ইনস্টলেশনের পরবর্তী পদক্ষেপসমূহ

**PHP** ইনস্টল করা হলে আপনাকে _Terminal'র_ ব‍্যবহার শেখা উচিত। প্রতিটি অপারেটিং সিস্টেমের সাথে _Terminal_ ইন্টিগ্রেটেড বা যুক্ত করা থাকে। সংক্ষেপে _Terminal_ হল আপনার কম্পিউটারের একটি টেক্সট-বেইজড ইন্টারফেস। যা দিয়ে বিভিন্ন ধরণের অপারেশন যেমন: কমান্ড টাইপ করে ফাইল ম্যানিপুলেশন, প্রোগ্রাম এক্সিকিউশন, ডকুমেন্টস ওপেন করাসহ আরো অনেক কিছু করতে পারবেন। বেসিক্যালি এমন অনেক কাজ যা আপনি কিবোর্ড-মাউস চেপে করে থাকেন তা কিছু নির্দিষ্ট কমান্ডের সাহায্যেই করতে পারবেন।

যারা এডভান্সলি _Terminal_ ব্যবহার করেন তারা এই কমান্ডগুলো জানেন, যারা একদমই নতুন তাদের এগুলো শেখা উচিত। নিচে সচরাচর ব‍্যবহৃত কিছু কমান্ড দেওয়া হল:

ফোল্ডার তৈরি করা

```bash
mkdir foldername
```

তৈরি করা ফোল্ডারে প্রবেশ করা

```bash
cd foldername
```

ফোল্ডারের ভিতরে কি কি আছে তা চেক করা

```bash
ls
```
```bash
ls  -la
```

ফোল্ডার থেকে বাহির হওয়া

```bash
cd  ..
```

মনে রাখবেন উপরের কমান্ডগুলো _Linux_ বেইজড _Git Bash’র_। কিছু কিছু কমান্ড Mac বা Windows’র সাথে মিলে যেতে পারে। তবে প্রত্যেকটা অপারেটিং সিস্টেমের আলাদা আলাদা কমান্ড লাইন আছে। যেহেতু ডে-টু-ডে লাইফে এমন কমান্ডগুলোর ব্যবহার আপনার দরকার হবে, তাই এই কমান্ডগুলো সকল ডেভলপারের শেখা উচিত।

### কোন কমান্ড লাইন শিখবেন?

সিস্টেম স্পেসিফিক কমান্ড লাইন অনেক ক্ষেত্রেই দরকার পড়ে। তাই সেগুলো শেখা যেতে পারে। তবে আপনার এমন কমান্ড লাইন শেখা উচিত যেটা আসলে কোন সিস্টেমের মধ্যে সীমাবদ্ধ থাকে না। ফলে Mac, Windows বা Linux; সিস্টেম যাইহোক আপনি নির্দ্বিধায় যেকোন জায়গায় সেটা ব্যবহার করতে পারেন। এমন মাল্টি-সিস্টেম-সাপোর্টেড একটি টুলের নাম [**Git Bash**](https://git-scm.com/downloads)। এছাড়াও আরো অনেক টুল আছে। সব বিষয়ে বিস্তারিত জানতে, Git Bash’র আরো কমান্ড পেতে [ডকুমেন্টেশন ম্যানুয়াল](https://git-scm.com/docs) পড়ুন বা গুগল করুন।

এছাড়াও আপনি Mac ইউজার হলে ডিফল্ট যে Terminal আছে সেটা ব‍্যবহার করতে পারেন অথবা [iterm2](https://iterm2.com/), [warp](https://www.warp.dev/) ব‍্যবহার করতে পারেন।

Windows’র জন‍্য [Windows Terminal](https://apps.microsoft.com/detail/windows-terminal/9N0DX20HK701?hl=en-us&gl=BD) এবং Linux’র জন‍্য ডিফল্ট যে Terminal আছে তাই যথেষ্ট। চাইলে আপনার পছন্দ অনুযায়ী বিকল্প কিছুও ব্যবহার করতে পারেন।

## PHP Tags

**PHP** কোড লেখার শুরুতে আপনাকে **PHP’র** মৌলিক ট্যাগ সম্পর্কে জানতে হবে।

**PHP’র** মৌলিক ট্যাগ:– **ওপেনিং ট‍্যাগ হচ্ছে** `<?php` **আর ক্লোজিং ট‍্যাগ হচ্ছে** `?>` ।

যদি আপনি ফাইলটি শুধুমাত্র **PHP** কোড লেখার জন‍্য তৈরি করেন তখন **PHP’র** ওপেনিং ট্যাগ পুরো ফাইলের প্রথমে একবার লিখলেই চলবে; ক্লোজিং ট্যাগের প্রয়োজন নাই। কারণ, বর্তমানে PHP নিয়ে কাজ করতে গেলে ক্লোজিং ট‍্যাগের দরকার পড়ে না।

এটিকে শর্ট-হ‍্যান্ড পদ্ধতিতেও লেখা যায়। সেক্ষেত্রে **ওপেনিং ট‍্যাগ** `<?` **ক্লোজিং ট‍্যাগ** `?>` । তবে সবসময় শর্ট-হ‍্যান্ড ট‍্যাগ এড়িয়ে চলা/ব‍্যবহার না করা ভালো।

তবে আপনি যদি **PHP** ফাইলে HTML বা HTML ফাইলে **PHP** লিখতে চান তখন ওপেনিং এবং ক্লোজিং উভয় ট্যাগ অবশ্যই ব‍্যবহার করতে হবে।

উদাহরণ:—

```php
<?php echo "if you want to serve PHP code in XHTML or XML documents, use these tags"; ?>
                
<p>Hi, I'm a paragraph of HTML, inserted between two PHP tags</p>

<?= "print this string" ?>
```

যদি পুরো ফাইলটাই হয় **PHP** তাহলে কোন ক্লোজিং ট‍্যাগের দরকার নাই:—

```php
<?php
echo "Hello world";

// ... more code

echo "Last statement";

//The script ends here with no PHP closing tag
```

## echo statement

**PHP-তে** কোন ডাটাকে আউটপুট হিসেবে দেখাবার জন‍্য echo statement ব‍্যবহৃত হয়। এটা দিয়ে এক অথবা একাধিক string, multi-line string, escape characters, ভ্যারিয়েবল, array ইত্যাদি আউটপুট দেখানো যায়।

```php
<?php
echo "echo does not require parentheses.";

// Strings can either be passed individually as multiple arguments or
// concatenated together and passed as a single argument
echo 'This ', 'string ', 'was ', 'made ', 'with multiple parameters.', "\n";
echo 'This ' . 'string ' . 'was ' . 'made ' . 'with concatenation.' . "\n";

// No newline or space is added; the below outputs "helloworld" all on one line
echo "hello";
echo "world";

// Same as above
echo "hello", "world";

echo "This string spans
multiple lines. The newlines will be
output as well";

echo "This string spans\nmultiple lines. The newlines will be\output as well.";
```

**নোট:–** echo statement দুইভাবে লেখা যায়। এক. `echo` তথা ব্রাকেট বা parenthesis () ছাড়া। দুই. ব্রাকেট বা parenthesis () সহ, `echo()`। দুটোই ভ্যালিড। তবে ব্রাকেট ছাড়াই বেশি ব্যবহার হয়।

string, escape characters, ভ্যারিয়েবল, array সহ যেসকল শব্দ বা term নতুন মনে হচ্ছে, বুঝতে পারছেন না; সেগুলো নিয়ে ঘাবড়াবার কিছু নেই। ধীরে ধীরে আমরা সব জানতে পারব।

## Variables

#### Variables কাকে বলে?

Variables হচ্ছে কোন তথ‍্য (data) ধারণ করে রাখার একটি মাধ‍্যম। যেকোন application এর তথ্যভাণ্ডারে (memory) অস্থায়ীভাবে (temporarily) কোন তথ‍্য (data) সংরক্ষণ (store) করার জন্য Variables ব্যবহৃত হয়।

অস্থায়ীভাবে (temporarily) কথার অর্থ হল, আপনি চাইলে এই ডাটাটা যেকোন সময় পরিবর্তন করতে পারবেন। যেহেতু Variables’র ডাটা পরিবর্তন করা যায় তাই এর নাম Variables —অর্থাৎ যার ডাটা বা ভ্যালু ভ্যারি (vary) করে বা পরিবর্তন হয়।

যদি কখনোই ডাটা বা ভ্যালু পরিবর্তন করার প্রয়োজন দেখা না দেয়, তখন Constant ব্যবহৃত হয়। এটা নিয়ে আমরা পরবর্তীতে জানতে পারব। চিন্তা করবেন না।

#### PHP তে Variables লেখার নিয়ম:

**PHP-তে** ভ‍্যারিয়েবল লিখতে সবার আগে একটা $ (ডলার) সাইন দিতে হয়। একটি ভ‍্যালিড ভ‍্যারিয়েবলের নাম শুরু হয় প্রথমে ডলার সাইন ($) তারপর লেটার/অক্ষর অথবা আন্ডার-স্কোর দিয়ে। এর পর তার সাথে যে কোন অক্ষর, সংখ‍্যা বা আন্ডার-স্কোর থাকতে পারে।

```php
<?php
$var = 'Bob';
$Var = 'Joe';
echo "$var, $Var";      // outputs "Bob, Joe"

$4site = 'not yet';     // invalid; starts with a number
$_4site = 'not yet';    // valid; starts with an underscore
$täyte = 'mansikka';    // valid; 'ä' is (Extended) ASCII 228.
```

#### PHP Variables’র ডিফল্ট ভ্যালু কি?

ডিফল্ট ভাবে, _Variable declare_ করার সময় এর ভ্যালু হিসেবে আপনি যে মান বা ভ্যালু সেট করেন, সেটাই Variable-টির মান বা ভ্যালু হিসেবে নির্ধারিত হয়। `echo` অথবা `var_dump` করলে আপনি সেই ভ্যালুটিই দেখতে পাবেন। যদি পরবর্তীতে আপনি তার অন্য কোন মান বা ভ্যালু সেট করেন তখন আপডেটেড ভ্যালুটি দেখতে পাবেন।

```php
<?php

$name = 'Polash';

echo $name; // Output: Polash

$name = 'Mahmud';

echo $name; // Output: Mahmud

```

আপনি চাইলে একটা _Variable-র_ মান বা ভ্যালু হিসেবে পূর্বে সেট করা অন‍্যকোন _Variable_ দিতে পারেন/এসাইন করতে পারেন। সেক্ষেত্রে পূর্বে সেট করা _Variable-এ_ যদি ভ্যালু এসাইন করা থাকে তাহলে নতুন _Variable-টিও_ সেই ভ্যালু বা মান ধারণ করবে।

```php
<?php
$name = 'Polash';

$firstName = $name;

echo $firstName; // Output: Polash
```

আবার আপনি চাইলে একটা _Variable-র_ মান বা ভ্যালু হিসেবে অন‍্যকোন _Variable_ এসাইন করার পর  ২টি _Variable-র_ যেকোন একটি বা উভয়টির ভ্যালু পরিবর্তন করতে পারবেন। সেক্ষেত্রে একটির ভ্যালু পরিবর্তন করার কারণে অন্যটির ভ্যালু বা মানের কোন পরিবর্তন হবে না।

```php
<?php
$name = 'Polash';

$firstName = $name;

$name = 'Mahmud';

echo $fireName; // Output: Polash
// try to change the value of $firstName variable and see the output

echo $name; // Output: Mahmud
```

### Assigned by reference variable টা কি?

অবশ্য, যদি ১টি _Variable-_র ভ্যালু পরিবর্তন করলে অন্যটির  ভ্যালুও আপনাআপনি পরিবর্তন হবে এমন সুবিধা আপনি চান, তখন _Variable_ এসাইন করার সময় পূর্বের _Variable_ নামের আগে একটি `&` (_ampersand_) চিহ্ন ব‍্যবহার করুন। এই প্রক্রিয়াকে [_assigned by reference_](https://www.php.net/manual/en/language.variables.basics.php) বলে।

```php
<?php
$foo = 'Bob';              // Assign the value 'Bob' to $foo
$bar = &$foo;              // Reference $foo via $bar.
$bar = "My name is $bar";  // Alter $bar...
echo $bar;                 // Output: My name is Bob
echo $foo;                 // $foo is altered too. Meaning it's output also: My name is Bob
```

এখানে একটা গুরুত্বপূর্ণ বিষয় হল, শুধুমাত্র ইতিপূর্বে এসাইন করা _Variable-র_ ক্ষেত্রেই assigned by reference-এই অপারেশন ভ্যালিড। অন‍্যথায় এটা কাজ করবে না।

```php
<?php
$foo = 25;
$bar = &$foo;      // This is a valid assignment.
$bar = &(24 * 7);  // Invalid; references an unnamed expression.

function test()
{
   return 25;
}

$bar = &test();    // Invalid.
```

### _Variable_-এর নাম কিভাবে লিখলে ভালো হবে?

_Variable-_ এর নাম অনেক ভাবেই লেখা যায়, এবং সবগুলোই ভ্যালিড। তবে একটা প্রজেক্ট বা এপ্লিকেশনে যে কোন একটা স্টাইল ফলো করা উচিত।

```php
$myname    // litteral words
$my_name   // Snakecase: Words are delimited by an underscore.
$myNameIs  // Camelcase: Words are delimited by capital letters, except the initial word.
$MyNameIs  // Pascalcase: Words are delimited by capital letters.

// Hungarian Notation with Camelcase notation
$arrDistributeGroup  // Array called “Distribute Group”
$sUserName           // String called “User Name”
$iRandomSeed         // Integer called “Random Seed”
```

অবশ্য যখন কোন পাবলিক প্রজেক্ট বা ওপেন সোর্স প্রোগ্রামে কাজ করবেন তখন কিছু _recommended standards_ এবং _conventions_ আপনাকে ফলো করতে হবে, _for better code, for better product_। সেসকল _recommended conventions_ জানতে [**PHP-FIG এর ওয়েবসাইট**](https://www.php-fig.org/psr/) অনুসরণ করুন।

**PHP-তে** dynamically variable নাম সেট করা যায়। আবার dynamically variable-র ভ্যালুকে এক্সেসও করা যায়। **PHP-র** ভাষায় এটাকে **_variable variable_** বলে। Dynamically variable নাম সেট করা:–

```php
$greet = 'hello';

$$greet = 'world';        // sets $hello as the variable name

echo "$greet $hello";     // output: hello world
echo "$greet {$$greet}";  // output: same as above
```

Dynamically variable-র ভ্যালু এক্সেস করা:–

```php
$fname = 'Polash';
$name = 'fname';

echo $$name;              // print: Polash

echo 'Hello '.$name;      // output: Hello fname
echo "\n";                // new line
echo "Hello $$name";      // output: Hello $fname
echo "Hello {$$name}";    // output: Hello Polash
```

## Types of data in PHP

**PHP-তে** আপনি _Variable-_র মান বা ভ্যালু হিসেবে যে ডাটা প্রদান করবেন তাকে কয়েকটি টাইপে ভাগ করা হয়। এটাকে _**type casting**_-ও বলতে পারেন। যেমন:–

-   `NULL`


-   `bool`


-   `int` (integer number বা পূর্ণসংখ্যা)


-   `float` (floating-point number বা ভগ্নসংখ্যা)


-   `string`


-   `array`


-   `object`


-   [`callable`](https://www.php.net/manual/en/language.types.callable.php)


-   `resource`


**PHP-র** পরিচিতিতে আগেই জেনেছেন, এটি একটি dynamically typed language, যার অর্থ; **PHP-তে** _Variable-র_ ধরণ বা টাইপ বলে দেয়ার প্রয়োজন পড়ে না। _Variable-র_ মান বা ভ্যালু দেখে _runtime-এ_ **PHP** dynamically নিজেই ডাটা টাইপ নির্ধারণ করে দেয়। অবশ্য [type declarations](https://www.php.net/manual/en/language.types.declarations.php) বা _[type casting](https://www.php.net/manual/en/language.types.type-juggling.php#language.types.typecasting)-র_ সাহায্যে আপনি চাইলে ডাটা টাইপটি সেট করে দিতে পারেন।

### Non-initialized variable concept

খেয়াল রাখবেন, _Variable-র_ মান এসাইন করা বা _initialize_ করাটা জরুরি নয়। _Variable-র_ মান সেট না করেও _Variable declare_ করা যায়। তখন সেটি হয়, _**Uninitialized variable**_। সেক্ষেত্রে আপনি _Variable-র_ টাইপ পাবেন `NULL` এবং সাথে আপনার সার্ভার সেটআপ অনুযায়ী `Warning: Undefined variable` এমন মেসেজও দেখতে পারেন।

```php
<?php
$name;

var_dump($name);  // NULL
```


তবে আপনি যদি _**type casting**-র_ সাহায্যে ডাটা টাইপ আগেই নির্ধারণ করেন সেক্ষেত্রে:–

-   `bool` ডাটা টাইপ সেট করলে আউটপুট হিসেবে `false` পাবেন।


-   `int` বা `float` ডাটা টাইপ সেট করলে আউটপুট হিসেবে `0` পাবেন।


-   `string` ডাটা টাইপ সেট করলে আউটপুট হিসেবে `empty string ""` পাবেন।


-   `array` ডাটা টাইপ সেট করলে আউটপুট হিসেবে `empty ‍array {}` পাবেন।

```php
$name;

var_dump((bool) $name);    // bool(false)
var_dump((int) $name);     // int(0)
var_dump((float) $name);   // float(0)
var_dump((string) $name);  // string(0) ""
var_dump((array) $name);   // array(0) {}
```


### Variable সম্পর্কে তথ্য কিভাবে পাবেন?

**PHP-তে** কিছু _**in-built function**_ আছে যেগুলো দিয়ে আমরা একটি _Variable_ সম্পর্কে তথ্য পেতে পারি। _Variable-র_ ধরণ/টাইপ ও ভ্যালু/মান দেখা এবং যাচাই করার জন‍্য সবচেয়ে বেশি ব‍্যবহৃত হয় [var_dump()](https://www.php.net/manual/en/function.var-dump.php) ফাংশনটি। আবার _Variable-র_ শুধুমাত্র ডাটা টাইপ জানতে [get_debug_type()](https://www.php.net/manual/en/function.get-debug-type.php) ফাংশনটি ব্যবহৃত হয়। _Variable-র_ ডাটা টাইপ নির্দিষ্ট কোন ধরণের কিনা তা যাচাই করার জন‍্য `is_type()` সিরিজের ফাংশনগুলো ব‍্যবহৃত হয়।

সেক্ষেত্রে `is_` এর পরে যে টাইপ সম্পর্কে জানতে চান তার keyword টা লিখুন, যেমন:– `is_string()`, `is_array()`, `is_int()` ইত্যাদি।

```php
$a_bool = true;   // a bool
$an_int = 12;     // an int
$an_float = 5.05;  // a float
$a_str  = "foo";  // a string
$a_str2 = 'foo';  // a string

echo get_debug_type($a_bool), "\n";
echo get_debug_type($a_str), "\n";

// If this is an integer, increment it by four
if (is_int($an_int)) {
    $an_int += 4;
}
var_dump($an_int);

// If $a_bool is a string, print it out
if (is_string($a_bool)) {
    echo "String: $a_bool";
}
```

আরো বিস্তারিত জানতে [**PHP Manual**](https://www.php.net/manual/en/language.types.intro.php) পড়ুন।

## NULL

NULL ডাটা টাইপ হলো **PHP-র** _unit data type_, অর্থাৎ এই ডাটা টাইপের একটিই ভ্যালু, সেটি [`null`](https://www.php.net/manual/en/language.types.null.php):–

```php
<?php
$var = NULL; 
echo $var;
```

ইতিপূর্বে খেয়াল করেছেন, _uninitialized variable_ বা যেই _variable-র_ ভ্যালু ডিফাইন করা হয়না – (_undefined variable_) – তার ভ্যালু হয় `null`। তেমনিভাবে কোন _variable-র_ উপর [`unset()`](https://www.php.net/manual/en/function.unset.php) ফাংশন ব্যবহার করলে তার ভ্যালু তখন `null` হিসেবে সেট হয়।

## Booleans

[`(bool)`](https://www.php.net/manual/en/language.types.boolean.php) বুলিয়ান **PHP-র** একটি ডাটা টাইপ। এর ২টি মাত্র ভ্যালু:– `true` ও `false`। কোন একটি ভ্যালুর সত্য-মিথ্যা যাচাই করার জন্য এটি ব্যবহৃত হয়। একটি _variable-কে_ **PHP** প্রোগ্রামিংয়ের ভাষায় সত্য বা মিথ্যা হিসেবে সেট করতে **PHP-র** `true` ও `false` _constants_ ২টি ব্যবহৃত হয়। ২টি _constants-ই case-insensitive_, অর্থাৎ `true`, `True`, `TRUE` ইত্যাদি আপনার ইচ্ছামত লিখতে পারবেন।

```php
<?php
$foo = True; // assign the value TRUE to $foo
```

তবে ইতিপূর্বেই বলা হয়েছে, _**consistent code writing is the part of better programming.**_

আপনি চাইলে _**type casting**-এর_ মাধ্যমে যেকোন ডাটা টাইপের ভ্যালুকে `(bool)` বুলিয়ান ডাটা টাইপে কনভার্ট করতে পারেন।

```php
<?php
var_dump((bool) "");        // bool(false)
var_dump((bool) "0");       // bool(false)
var_dump((bool) 1);         // bool(true)
var_dump((bool) -2);        // bool(true)
var_dump((bool) "foo");     // bool(true)
var_dump((bool) 2.3e5);     // bool(true)
var_dump((bool) array(12)); // bool(true)
var_dump((bool) array());   // bool(false)
var_dump((bool) "false");   // bool(true)
```
যখন অন্য কোন ডাটা টাইপকে _**type casting**_ করে `(bool)` বুলিয়ান ডাটা টাইপে কনভার্ট করেন, নিন্মোক্ত ভ্যালুগুলো **PHP** তখন `false` হিসেবে বিবেচনা করে:–

- `(bool)` বুলিয়ান ডাটা টাইপ `false`
- `(int)` ইন্টেজার ডাটা টাইপ `0` (শূণ্য)
- `(float)` ফ্লোট ডাটা টাইপ `0.0` বা `-0.0` (শূণ্য দশমিক শূণ্য বা মাইনাস শূণ্য দশমিক শূণ্য)
- `(string)` স্ট্রিং ডাটা টাইপ `""`, `''` _(empty string)_ এবং `"0"`
- `(array)` ডাটা টাইপ `array()` শূণ্য এরে
- `(NULL)` ডাটা টাইপ নিজেই


> অবশ্যই মনে রাখবেন, **PHP** `0` ছাড়া অন্য সকল নেগেটিভ বা পজেটিভ নাম্বারের মত `-1`কেও `true` ভ্যালু হিসেবে বিবেচনা করে। সাথে `(resource)` ডাটা টাইপ এবং `NAN (Not A Number)` সহ অন্য সবকিছুকেও `true` ভ্যালু হিসেবে বিবেচনা করে।


## Integers

[`(int)`](https://www.php.net/manual/en/language.types.integer.php) **PHP-র** আরো একটি ডাটা টাইপ। এর মাধ্যমে _**Integer (পূর্ণসংখ্যা)-র**_ কোন নাম্বারকে বুঝানো হয়ে থাকে।

**PHP-তে** _**Integer (পূর্ণসংখ্যা)-র**_ কোন নাম্বারকে কয়েকভাবে লেখার সুযোগ আছে:–

- _decimal (base 10)_ বা দশমিক নাম্বারের সাহায্যে, নাম্বারগুলো হল:— 0 থেকে 9 পর্যন্ত
- _hexadecimal (base 16)_ বা হেক্সাডেসিমেল (ষোড়দশ গণনাপদ্ধতি) নাম্বারের সাহায্যে, নাম্বারগুলো হল:— 0 থেকে 9 এবং A থেকে F পর্যন্ত
- _octal (base 8)_ বা অক্টাল (অষ্টক গণনাপদ্ধতি) নাম্বারের সাহায্যে, নাম্বারগুলো হল:— 0 থেকে 7 পর্যন্ত
- _binary (base 2)_ বা বাইনারি (দুই সংখ্যাবিশিষ্ট) নাম্বারের সাহায্যে, নাম্বারগুলো হল:— 0 এবং 1

এখন এই নাম্বার সিস্টেমগুলোর সাহায্যে লেখা হলে তাকে ওই নাম্বারের দিকে সম্পৃক্ত করে _notation_ নাম দেয়া হয়। যেমন: _decimal_ বা দশমিক নাম্বারের সাহায্যে লিখলে তাকে বলে _decimal notation_ ইত্যাদি।

সংখ্যাগুলোর পূর্বে [_**(-) মাইনাস বা নেগেশন অপারেটর**_](https://www.php.net/manual/en/language.operators.arithmetic.php) ব্যবহার করলে তা নেগেটিভ ***(int)-এ*** পরিণত হয়। আমরা **PHP** অপারেটর সম্পর্কে পরবর্তীতে জানব।

### কোন _notation_ কিভাবে লিখবেন?

_decimal notation_ স্বাভাবিক সংখ্যা লেখার মতই লিখবেন।

```php
<?php
$a = 1234;   // decimal number
$a = -3030; // negative decimal number
```

_octal notation_ লিখতে হলে সংখ্যাটি `0` দিয়ে শুরু করতে হবে। **PHP 8.1.0** থেকে শুরুতে `0o` বা `0O` দিয়েও লেখার সুযোগ তৈরি হয়েছে।

```php
<?php
$a = 0123; // octal number (equivalent to 83 decimal)
$a = 0o123; // octal number (as of PHP 8.1.0)
```

_hexadecimal notation_ লিখতে হলে সংখ্যাটি `0x` দিয়ে শুরু করতে হবে।

```php
<?php
$a = 0x1A; // hexadecimal number (equivalent to 26 decimal)
```

_binary notation_ লিখতে হলে সংখ্যাটি `0b` দিয়ে শুরু করতে হবে।

```php
<?php
$a = 0b11111111; // binary number (equivalent to 255 decimal)
```

**PHP 7.4.0** অনুযায়ী আপনার ***(int)*** সংখ্যাগুলোতে _ *(underscore)* থাকলে কোন সমস্যা নাই। **PHP's scanner** কোড পড়ার সময় _better readability_-র জন্য এগুলোকে রিমুভ (অপসারণ) করে দেয়।

```php
<?php
$a = 1_234_567; // decimal number (as of PHP 7.4.0)
```

### একটি ***(int)*** সংখ্যার সাইজ কত হতে পারে?

**PHP-তে** একটি ***(int)*** সংখ্যার সাইজ আসলে আপনি যে প্লাটফর্ম বা আর্কিটেকচার ব্যবহার করছেন তার উপর নির্ভর করে। এখানে খেয়াল করার একটি বিষয় হল, **PHP** `C` বা `Java`-র মত `unsigned int` টাইপ সাপোর্ট করে না। যেহেতু শুধু `signed int` সাপোর্ট করে, তাই **PHP-তে** `32-bit`-র আর্কিটেকচারে ***(int)-র*** সর্বোচ্চ সাইজ সাধারণত প্রায় ২ বিলিয়নের মত হয়। `64-bit`-র আর্কিটেকচারে যা প্রায় `9E18`-র সমান হয়। `signed int` এবং `unsigned int` সম্পর্কে বিস্তারিত জানতে গুগল করুন।

আপনার আর্কিটেকচার কতটুকু সাইজ ধারণ করতে পারে তা চেক করতে ***PHP_INT_SIZE*** _constant_ ব্যবহার করতে পারেন। যেমন:- ম্যাক্সিমাম ভ্যালু বের করতে ***PHP_INT_MAX*** এবং মিনিমাম ভ্যালু বের করতে ***PHP_INT_MIN*** ব্যবহার করুন।

### সীমার অধিক ***(int)*** (integer overflow) কি?

আপনার আর্কিটেকচার যতটুুকু ***(int)*** সাইজ ধারণ করতে পারে আপনার দেয়া সংখ্যার সাইজ তার বেশি হলে, তেমনিভাবে কোন অপারেশন বা ক্যালকুলেশন চালানোর ফলে আউটপুট সর্বোচ্চ ***(int)*** সাইজের বেশি হলে **PHP** ওই সংখ্যাকে ***(float)*** ডাটা টাইপে কনভার্ট করে দেয়। যেমন:–

#### Integer overflow on a 32-bit system {#integer-overflow-example-1}

```php
<?php
$large_number = 2147483647;
var_dump($large_number);                     // int(2147483647)

$large_number = 2147483648;
var_dump($large_number);                     // float(2147483648)

$million = 1000000;
$large_number =  50000 * $million;
var_dump($large_number);                     // float(50000000000)
```

#### Integer overflow on a 64-bit system {#integer-overflow-example-2}

```php
<?php
$large_number = 9223372036854775807;
var_dump($large_number);                     // int(9223372036854775807)

$large_number = 9223372036854775808;
var_dump($large_number);                     // float(9.2233720368548E+18)

$million = 1000000;
$large_number =  50000000000000 * $million;
var_dump($large_number);                     // float(5.0E+19)
```

> ***(int)*** বা ***(float)*** এই ২টি ডাটা টাইপকেই **PHP-তে** `/` *(division operator)* দিয়ে ভাগ করা হয়। শুধু ***(int)*** ডাটা টাইপকে ভাগ করার জন্য আলাদা কোন অপারেটর **PHP-তে** নেই। এর অর্থ:– ২টি ***(int)*** সংখ্যাকে ভাগ করে ফলাফল যদি ভগ্নসংখ্যা হয় তখন তার ডাটা টাইপও ***(int)*** থেকে কনভার্ট হয়ে ***(float)*** টাইপে পরিণত হয়। যেমন:-

```php
<?php
var_dump(25/7);         // float(3.5714285714286)
```

>তবে রেজাল্ট টাইপও ***(int)***-এ রাখতে চাইলে [`intdiv()`](https://www.php.net/manual/en/function.intdiv.php) ফাংশনের ব্যবহার বা ***type-casting*** করা যেতে পারে। তখন **PHP** ভগ্নসংখ্যার ভগ্নাংশটুকু ফেলে দিয়ে সেটাকে ***(int)*** হিসেবে আউটপুট দিবে।

```php
<?php
var_dump(intdiv(25, 7)); // int(3)
var_dump((int) (25/7)); // int(3)
```

> আপনি চাইলে [`round()`](https://www.php.net/manual/en/function.round.php) ফাংশন ব্যবহার করে একটি সুন্দর ভ্যালুতে কনভার্ট করতে পারেন।

```php
<?php
var_dump(round(25/7));  // float(4)
```

### ***type casting*** করে যেকোন ভ্যালুকে `(int)` টাইপে রূপান্তর

ইতিপূর্বে আমরা দেখেছি, যেকোন ভ্যালুকে ***type casting***-র মাধ্যমে `(bool)` টাইপে কনভার্ট করা যায়। তেমনিভাবে যেকোন ভ্যালুকে `(int)` টাইপেও কনভার্ট করা যায়। সেটা করতে `(int)`, `(integer)` অথবা [`intval()`](https://www.php.net/manual/en/function.intval.php) ফাংশন ব্যবহার করুন। যদিও বেশিরভাগ ক্ষেত্রে এগুলোর প্রয়োজন পড়ে না; আপনার স্ক্রিপ্টই অটোমেটিকভাবে টাইপ নির্ধারণ করে দিতে পারে।

তবুও আসুন দেখি, ***type casting*** করলে আমরা কি ধরণের আউটপুট পেতে পারি।

> যদি `resource` টাইপের ভ্যালুকে `int`-এ কনভার্ট করেন, **PHP** তখন রান-টাইমে একটি _unique resource number_ `resource` ডাটার সাথে এসাইন করে আউটপুট দেয়।

> `(bool)` বুলিয়ান ডাটাকে `int`-এ কনভার্ট করলে `false` ভ্যালুর আউটপুট হবে `0`, `true` হলে আউটপুট হবে `1`।

> `(float)` থেকে `(int)`-এ কনভার্ট করলে সেই সংখ্যার দশমিক অংশটুকু বাদ পড়ে যাবে। বাকিটুকু `(int)`-এ কনভার্ট হয়ে আউটপুট হবে। খেয়াল রাখবেন, **PHP 8.1.0** থেকে এমন কনভার্শন করলে আপনি একটি _deprecation notice_ পাবেন।

```php
<?php

function foo($value): int {
  return $value; 
}

var_dump(foo(8.1)); // "Deprecated: Implicit conversion from float 8.1 to int loses precision" as of PHP 8.1.0
var_dump(foo(8.1)); // 8 prior to PHP 8.1.0
var_dump(foo(8.0)); // 8 in both cases

var_dump((int)8.1); // 8 in both cases
var_dump(intval(8.1)); // 8 in both cases
```

> `(float)` সংখ্যাকে `(int)`-এ কনভার্ট করতে গিয়ে আউটপুট যদি `(int)`-এর সর্বোচ্চ সাইজকে অতিক্রম করে যায়, তখন রেজাল্ট হবে `undefined`। কারণ `(float)` ডাটা টাইপ `(int)`-এর সঠিক রেজাল্ট যথাযথভাবে প্রদান করতে পারে না। এক্ষেত্রে আপনি কোন ওয়ার্নিং বা নোটিশও পাবেন না **PHP** থেকে।

> `NaN` এবং `Infinity` কে `(int)`-এ কনভার্ট করলে আউটপুট হবে `0`।

> কোন _unknown fraction_ কে `(int)`-এ কনভার্ট করলে অপ্রত্যাশিত ফলাফল পেতে পারেন। যেমন:–

```php
<?php
echo (int) ( (0.1+0.7) * 10 ); // echoes 7!
```

> `(string)` কে `(int)`-এ কনভার্ট করার ক্ষেত্রে যদি পুরো `(string)` টি _Numeric_ (সংখ্যাভিত্তিক) হয় বা `(string)`-এর শুরুটা কোন সংখ্যা দিয়ে হয় তখন ঐ সংখ্যাটি/সংখ্যাগুলো আউটপুট হিসেবে পাওয়া যাবে। তবে পুরোটা খাঁটি `(string)` হলে আউটপুট `0` হবে।

> `(null)` কে `(int)`-এ কনভার্ট করলে আউটপুট হবে `0`। তেমনিভাবে উপরোল্লিখিত টাইপ ছাড়া অন্য কোন টাইপ থেকে `(int)`-এ কনভার্ট করলে রেজাল্ট হবে `undefined`। সাথে মনে রাখবেন, পূর্বনির্ধারিত এ-জাতীয় কোন নিয়মের উপর নির্ভর করবেন না। ভবিষ্যতে যেকোন সময় এই নিয়ম পরিবর্তন হতে পারে।

## Floating Point Numbers

[_floating point numbers_](https://www.php.net/manual/en/language.types.float.php) (ভগ্নসংখ্যা) কে `(float)`, `(doubles)` বা `(real numbers)` বলা হয়। এটি **PHP-র** আরো একটি ডাটা টাইপ।

নিম্নে দেয়া যেকোন একটি _syntax_ ব্যবহার করে `(float)` ডাটা টাইপ লেখা সম্ভব:–

```php
<?php
$a = 1.234; 
$b = 1.2e3; 
$c = 7E-10;
$d = 1_234.567; // as of PHP 7.4.0
```

`(int)`-এর মত `(float)` ডাটা টাইপেও 1টি `(float)` সংখ্যার সর্বোচ্চ সাইজ প্ল্যাটফর্ম বা আর্কিটেকচারের উপর নির্ভর করে। তবে `64-bit` আর্কিটেকচারে সাধারণ ভ্যালু মোটামুটি প্রায় `1.8e308`-র মত। যা প্রায় `14 decimal digits`-র _precision_ এর সমান। *floating point precision* সম্পর্কে বিস্তারিত জানতে গুগল করুন বা **PHP Manual** পড়ুন।

### `(float)`-এ ***type casting***

`(string)` সহ অন্যান্য সকল টাইপ থেকে `(float)`-এ কনভার্ট করার ক্ষেত্রে `(int)`-এ কনভার্ট করার নিয়মগুলোই প্রযোজ্য হয়।

### `(float)` Comparison

**PHP-তে** `(float)` ডাটা টাইপকে *internally* যেভাবে উপস্থাপন করা হয় তার ভিত্তিতে ১টি `(float)`-র সাথে অন্য আরেকটির *equality* (সমান-অসমান) চেক করা বেশ দুরূহ ১টি টাস্ক। তবুও *machine epsilon* বা *unit roundoff*-র সাহায্যে এই সীমাবদ্ধতা দূর করা সম্ভব। যেমন:–

***$a* and *$b* are equal to 5 digits of precision:**

```php
<?php
$a = 1.23456789;
$b = 1.23456780;
$epsilon = 0.00001;

if(abs($a-$b) < $epsilon) {
    echo "true";
}
```

বিস্তারিত জানতে **PHP Manual** পড়ুন।

অনেকসময় *numeric operations* (যোগ, বিয়োগ, ‍গুণ, ভাগ ইত্যাদির গণনা) চালানোর ফলে আপনি `NAN` জাতীয় রেজাল্ট বা ভ্যালু পেতে পারেন। মনে রাখবেন, `NAN` **PHP-র** একটি *constant*। *floating-point calculations-এ* এমন রেজাল্ট পাওয়ার অর্থ হল, ভ্যালুটি *undefined* অথবা উপস্থাপনযোগ্য নয়।

তাই এই `NAN` ভ্যালুকে শুধুমাত্র **`true`** ছাড়া নিজেকে নিজের সাথে বা অন্য কোন ভ্যালুর সাথে *loose omparison* (শুধুমাত্র ভ্যালুর মিল খোঁঁজা) অথবা *strict comparison* (ভ্যালুর সাথে টাইপের মিলও খোঁজা) যাই করেন না কেন, রেজাল্ট `false` হবে। *comparison* সম্পর্কে আমরা ভবিষ্যতে আরো বিস্তারিত জানতে পারব।
>এমনটা হওয়ার কারণ, `NAN` কোন একটি নির্দিষ্ট ভ্যালু ধারণ না করে বিভিন্ন রকমের ভ্যালু ধারণ করতে পারে, তাই অন্য ভ্যালুর সাথে বা নিজের সাথে তুলনা করে কখনোই প্রত্যাশিত রেজাল্ট পাওয়া যাবে না। বরং এমন ভ্যালু চেক করতে [`is_nan()`](https://www.php.net/manual/en/function.is-nan.php) ফাংশন ব্যবহার করুন।

## Strings

`(string)`ও **PHP-র** একটি ডাটা টাইপ। *Strings* হচ্ছে একসাথে এক বা একাধিক অক্ষরের সম্মেলন। এক একটি অক্ষর একটি বাইটের *(byte)* সমান। তাই **PHP** শুধুমাত্র `256-character` *character encoding* সাপোর্ট করে, অতি জনপ্রিয় `unicode` *character encoding* সাপোর্ট করে না। ডিটেইল জানতে [**Manual**](https://www.php.net/manual/en/language.types.string.php#language.types.string.details) দেখুন।

> `32-bit` আর্কিটেকচারে একটি `(string)`-র সর্বোচ্চ সাইজ 2GB *`(2147483647 bytes maximum)`* পর্যন্ত হয়।

### Strings Syntax

`(string)` ডাটা চারটি ভিন্ন উপায়ে তৈরি করা যেতে পারে। এগুলোকে `string literal` বলে। যেমন:–

1.   [single quoted](https://www.php.net/manual/en/language.types.string.hp#language.types.string.syntax.single) (সিংগেল কোটেশনের ভেতর)


2.   [double quoted](https://www.php.net/manual/en/language.types.string.php#language.types.string.syntax.double) (ডাবল কোটেশনের ভেতর)


3.   [heredoc syntax](https://www.php.net/manual/en/language.types.string.php#language.types.string.syntax.heredoc) (হিয়ার-ডক সিনট্যাক্স)


4.   [nowdoc syntax](https://www.php.net/manual/en/language.types.string.php#language.types.string.syntax.nowdoc) (নাউ-ডক সিনট্যাক্স)


#### Single quoted

একটি `(string)` ডাটা তৈরি করার সবচেয়ে সহজ পদ্ধতি হলো সিংগেল কোটেশনের `('')` ভেতর ভ্যালুগুলো লেখা।

> আপনার `(string)` ডাটার অবস্থা যদি এমন হয় যে, সিংগেল কোটেশন `('')` বা ব্যাকস্ল্যাশ `(\)` ভ্যালু হিসেবে লেখার প্রয়োজন তখন ***escape character*** `(\)` ব্যবহার করুন। নিচের কোডে ‍উদাহরণ দেখুন।

>খেয়াল রাখবেন, সিংগেল কোটেশনে `('')` অন্যান্য ***escape sequences*** যেমন:– `(\r)`, `(\n)` ইত্যাদি স্বাভাবিক *character* হিসেবে বিবেচিত হবে। তখন এই `(\)` *character*-টি ব্যাকস্ল্যাশ হিসেবে বিবেচিত হবে।

>তেমনিভাবে *variable*-র নাম লিখলে তাও স্বাভাবিক *character* হিসেবে বিবেচিত হবে। *variable* এক্সিকিউশন হয়ে তার ভ্যালু পাওয়া যাবে না। যে সুযোগ `("")` ডাবল কোটেশন এবং `heredoc syntax`-এ পাওয়া যায়।

```php
<?php
echo 'this is a simple string';

echo 'You can also have embedded newlines in
strings this way as it is
okay to do';

// Outputs: Arnold once said: "I'll be back"
echo 'Arnold once said: "I\'ll be back"';

// Outputs: You deleted C:\*.*?
echo 'You deleted C:\\*.*?';

// Outputs: You deleted C:\*.*?
echo 'You deleted C:\*.*?';

// Outputs: This will not expand: \n a newline
echo 'This will not expand: \n a newline';

// Outputs: Variables do not $expand $either
echo 'Variables do not $expand $either';
```

#### Double quote

যদি কোন স্ট্রিং `""` ডাবল কোটেশন দিয়ে তৈরি করা হয় তাহলে তাকে ডাবল কোড বলে।

#### Heredoc (হেরেডোক)

স্ট্রিংগুলিকে সীমাবদ্ধ করার তৃতীয় উপায় হল হেরেডোক সিনট্যাক্স: `<<<`

```php
<?php
// no indentation
echo <<<END
      a
     b
    c
\n
END;

// 4 spaces of indentation
echo <<<END
      a
     b
    c
    END;
```


#### Nowdoc syntex

এটা herodoc এর মতোই তবে এটাতে সিংগেল কোড আসে আর হেরোডোক এ ডাবল কোড আসে।

```php
<?php
echo <<<'EOD'
Example of string spanning multiple lines
using nowdoc syntax. Backslashes are always treated literally,
e.g. \\ and \'.
EOD;
```

## Comments

`//` এটা দিয়ে সিংগেল লাইন কমেন্ট করা হয়।

মাল্টিপুল লাইন কমেন্ট

/* More complex example, with variables. */

## Constant

যার মান পরিবর্তন করা যায় না। 
```php
<?php

const DB_HOST = 'localhost';

```




