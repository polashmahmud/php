# পিএইচপি বেসিক কোর্স

## PHP Functions

**ফাংশন কাকে বলে?**

ফাংশন হচ্ছে একটি ব্লক অব কোড যা আপনি পুনরায় ব্যবহার করতে পারেন। এটি একটি সংকলন যা একটি নির্দিষ্ট কাজ করে।

পিএইচপি অনেক সহজ এবং পাওয়ার ফুল আর জনপ্রিয় তার অন‍্যতম কারন হচ্ছে এর ফাংশন। পিএইচপি একটি ফাংশনাল প্রোগ্রামিং ল্যাঙ্গুয়েজ
যার মাধ্যমে আপনি একটি ফাংশন তৈরি করে তাকে পুনরায় ব্যবহার করতে পারেন। একটি ফাংশন একটি বিশেষ কাজ করে এবং একটি ফাংশন একটি
নাম থাকে।

PHP-তে 1000 টিরও বেশি বিল্ট-ইন ফাংশন রয়েছে।

## ফাংশন তৈরি করা

ফাংশন তৈরি করার জন্য `function` কিওয়ার্ড ব্যবহার করতে হয়। এরপর ফাংশনের নাম এবং এর প্যারামিটার লিখতে হয়। ফাংশনের নাম
লিখার সময় স্পেস ব্যবহার করা যাবে না। ফাংশনের নাম লিখার পর একটি ব্র্যাকেট দিতে হয় যেখানে ফাংশনের প্যারামিটার লিখতে হয়।
ফাংশনের প্যারামিটার লিখার পর একটি ব্র্যাকেট দিতে হয় যেখানে ফাংশনের বডি লিখতে হয়। ফাংশনের বডির মধ্যে আপনি যেকোনো কিছু
লিখতে পারেন।

**ফাংশন তৈরির সিংট্যাক্স হচ্ছে**

```php
function functionName() {
    // code to be executed
}
```

**আসুন একটু উদাহরণ দেখি**

```php
function hello() {
    echo "Hello World!";
}

hello(); // call the function
```

আউটপুট:

```php
Hello World!
```

## PHP Function Arguments

ফাংশনের মধ্যে আপনি প্যারামিটার পাঠাতে পারেন। প্যারামিটার হচ্ছে ফাংশনের মধ্যে যে ভ্যালু পাঠানো হয়। আপনি যদি ফাংশনের মধ্যে প্যারামিটার পাঠাতে চান তাহলে ফাংশনের নাম লিখার পর একটি ব্র্যাকেট দিতে হয় যেখানে প্যারামিটার লিখতে হয়। প্যারামিটার লিখার সময় স্পেস ব্যবহার করা যাবে না। প্যারামিটার লিখার পর একটি ব্র্যাকেট দিতে হয় যেখানে ফাংশনের বডি লিখতে হয়। ফাংশনের বডির মধ্যে আপনি যেকোনো কিছু লিখতে পারেন।

**ফাংশনের প্যারামিটার লিখার সিংট্যাক্স হচ্ছে**

```php
function functionName($parameter1, $parameter2, $parameter3) {
    // code to be executed
}
```

**আসুন একটু উদাহরণ দেখি**

```php
function sum($num1, $num2) { // two parameters
    $total = $num1 + $num2;
    echo "Sum of the two numbers $num1 and $num2 is : $total";
}

sum(10, 20); // argument values passed
```

আউটপুট:

```php
Sum of the two numbers 10 and 20 is : 30
```

**আরেকটি উদাহরণ**

```php
function familyName($fname) {
  echo "$fname Refsnes.<br>";
}

familyName("Jani");
familyName("Hege");
familyName("Stale");
familyName("Kai Jim");
familyName("Borge");
```

আউটপুট:

```php
Jani Refsnes.
Hege Refsnes.
Stale Refsnes.
Kai Jim Refsnes.
Borge Refsnes.
```

আরেকটি উদাহরণ দেখিঃ

```php
function familyName($fname, $year) {
  echo "$fname Refsnes. Born in $year <br>";
}

familyName("Hege", "1975");
familyName("Stale", "1978");
familyName("Kai Jim", "1983");
```

আউটপুট:

```php
Hege Refsnes. Born in 1975
Stale Refsnes. Born in 1978
Kai Jim Refsnes. Born in 1983
```

## Default Argument Value

আপনি চাইলে ফাংশনের প‍্যারামিটারের ডিফল্ট ভ‍্যালু জেট করে রাখতে পারবেন। 

```php
function makecoffee($type = "cappuccino")
{
    return "Making a cup of $type.\n";
}
echo makecoffee();
echo makecoffee(null);
echo makecoffee("espresso");
```

আউটপুট:

```php
Making a cup of cappuccino.
Making a cup of .
Making a cup of espresso.
```

## Argument type

আমরা যদি চাই তাহলে আমাদের যে Argument গুলো ফাংশনে ব‍্যবহার করি সেগুলোর টাইপ আমরা সেট করে দিতে পারি

```php
function addNumbers(int $a, int $b) {
  return $a + $b;
}
echo addNumbers(5, "5 days");
// since strict is NOT enabled "5 days" is changed to int(5), and it will return 10
```

আউটপুট:

```php
10
```

```php
function makecoffee($types = array("cappuccino"), $coffeeMaker = NULL)
{
    $device = is_null($coffeeMaker) ? "hands" : $coffeeMaker;
    return "Making a cup of ".join(", ", $types)." with $device.\n";
}
echo makecoffee();
echo makecoffee(array("cappuccino", "lavazza"), "teapot");
```

আউটপুট:

```php
Making a cup of cappuccino with hands.
Making a cup of cappuccino, lavazza with teapot.
```

## PHP Functions - Returning values

একটি ফাংশনের মান ফেরত দিতে রিটার্ন ব‍্যবহার করা হয়। 

```php
function sum(int $x, int $y) {
  $z = $x + $y;
  return $z;
}

echo "5 + 10 = " . sum(5, 10) . "<br>";
echo "7 + 13 = " . sum(7, 13) . "<br>";
echo "2 + 4 = " . sum(2, 4);
```

আউটপুট:

```php
5 + 10 = 15
7 + 13 = 20
2 + 4 = 6
```

## PHP Return Type Declarations

```php
function addNumbers(float $a, float $b) : float 
{
  return $a + $b;
}
echo addNumbers(1.2, 5.2);
```

আউটপুট:

```php
6.4
```

**আরেকটি উদাহরণ**

```php
function addNumbers(float $a, float $b) : int {
  return (int)($a + $b);
}
echo addNumbers(1.2, 5.2);
```

আউটপুট:

```php
6
```

## Passing Arguments by Reference

```php
function add_five(&$value) {
  $value += 5;
}

$num = 2;
add_five($num);
echo $num;
```

আউটপুট:


```php
7
```

## আলাদা ফাইল তৈরি করা

আমরা চাইলে ফাংশনগুলো রি-ইউজ করবার জন‍্য আলাদা একটা ফাইল তৈরি করে ব‍্যবহার করতে পারি। 

`functions.php`
```php
<?php

// sum

function sum($a, $b) {
  return $a + $b;
}
```

`index.php`

```php
<?php

require_once 'functions.php';

echo sum(1, 2); // 3
```

## আনলিমিটেড আর্গুমেন্ট পাস করা

আপনি চাইলে ফাংশনে আনলিমিটেড আর্গুমেন্ট পাস করতে পারেন। 

```php
function sum(...$numbers) {
  $total = 0;
  foreach ($numbers as $n) {
    $total += $n;
  }
  return $total;
}

echo sum(1, 2, 3, 4, 5); // 15
```

## একটা বড় ফাংশনকে ছোট ছোট ফাংশনে ভাগ করা

আপনি চাইলে একটা বড় ফাংশনকে ছোট ছোট ফাংশনে ভাগ করতে পারেন। 

```php
function sum(...$numbers) {
  $total = 0;
  foreach ($numbers as $n) {
    $total += $n;
  }
  return $total;
}

function avg(...$numbers) {
  $total = sum(...$numbers);
  return $total / count($numbers);
}

echo avg(1, 2, 3, 4, 5); // 3
```

## ফাংশনের মধ্যে ফাংশন ব্যবহার করা

আপনি চাইলে ফাংশনের মধ্যে ফাংশন ব্যবহার করতে পারেন। 

```php

function sum(...$numbers) {
  $total = 0;
  foreach ($numbers as $n) {
    $total += $n;
  }
  return $total;
}

function avg(...$numbers) {
  $total = sum(...$numbers);
  return $total / count($numbers);
}

function avg_sum(...$numbers) {
  $average = avg(...$numbers);
  $total = sum(...$numbers);
  return "Average: $average, Sum: $total";
}

echo avg_sum(1, 2, 3, 4, 5); // Average: 3, Sum: 15
```

## Recursive Function

কোন ফাংশন যদি নিজে নিজে কল করে তাকে রিকার্সিভ ফাংশন বলে।

```php
function number($n)
{
    echo $n ."\n";
    
    $n++;
    
    number($n);
}

number(1);
```

```php
function factorial($n) {
  if($n <= 1) {
    return 1;
  }
  else {
    return $n * factorial($n - 1);
  }
}

echo factorial(5); // 120
```

## Scope and Global Variables

ফাংশনের মধ্যে ডিক্লেয়ার করা ভ্যারিয়েবলগুলো ফাংশনের বাইরে ব্যবহার করা যায় না। এই ধরনের ভ্যারিয়েবলগুলোকে স্কোপ ভ্যারিয়েবল বলে। আর ফাংশনের বাইরে ডিক্লেয়ার করা ভ্যারিয়েবলগুলোকে গ্লোবাল ভ্যারিয়েবল বলে।

```php
$x = 5; // global scope

function myTest() {
  // using x inside this function will generate an error
  echo "<p>Variable x inside function is: $x</p>";
}

myTest();

echo "<p>Variable x outside function is: $x</p>";
```

আউটপুট:

```php
Variable x inside function is:
Variable x outside function is: 5
```

## The global Keyword

আপনি চাইলে ফাংশনের মধ্যে গ্লোবাল ভ্যারিয়েবল ব্যবহার করতে পারেন। এটি করার জন‍্য `global` কিওয়ার্ড ব্যবহার করতে হয়।

```php
$x = 5;
$y = 10;

function myTest() {
  global $x, $y;
  $y = $x + $y;
}

myTest();

echo $y; // outputs 15
```

## The static Keyword

আপনি চাইলে ফাংশনের মধ্যে স্ট্যাটিক ভ্যারিয়েবল ব্যবহার করতে পারেন। এটি করার জন‍্য `static` কিওয়ার্ড ব্যবহার করতে হয়।

```php
function myTest() {
  static $x = 0;
  echo $x;
  $x++;
}

myTest();

myTest();

myTest();
```

আউটপুট:

```php
0
1
2
```

## PHP Functions - String

পিএইচপি এর মধ্যে অনেক গুলো স্ট্রিং ফাংশন রয়েছে। এগুলো হচ্ছেঃ

- `addcslashes()` - একটি স্ট্রিং এর কোড রিটার্ন করে।
- `addslashes()` - স্ল্যাশ সহ উদ্ধৃতি স্ট্রিং রিটার্ন করে।
- `bin2hex()` - বাইনারি ডেটাকে হেক্সাডেসিমেল রূপান্তর করে।
- `chop()` - একটি স্ট্রিং থেকে স্পেস বা অন্য কিছু সরিয়ে ফেলে। 
- `chr()` - একটি কোড থেকে একটি ক্যারেক্টার রিটার্ন করে।
- `chunk_split()` - একটি স্ট্রিং কে বিভিন্ন ভাগে ভাগ করে।
- `convert_uudecode()` - একটি uuencoded স্ট্রিং ডিকোড করে।
- `count_chars()` - একটি স্ট্রিং এর সংখ্যা গুলো রিটার্ন করে।

### addcslashes example

```php
<?php
$str = "Hello World!";
echo addcslashes($str, 'A..z');
?>
```

আউটপুট:

```php
\H\e\l\l\o \W\o\r\l\d\!
```

### addslashes example

```php
<?php
$str = "Is your name O'reilly?";
echo addslashes($str);
?>
```

আউটপুট:

```php
Is your name O\'reilly?
```

### bin2hex example

```php
<?php
$str = "Hello World!";
echo bin2hex($str);
?>
```

আউটপুট:

```php
48656c6c6f20576f726c6421
```

### chop example

```php
<?php
$str = "Hello World!";
echo chop($str,"World!");
?>
```

আউটপুট:

```php
Hello
```

### chr example

```php
<?php
echo chr(046);
?>
```

আউটপুট:

```php
&
```

### chunk_split example

```php
<?php
$str = "Hello world!";
echo chunk_split($str,1,".");
?>
```

আউটপুট:

```php
H.e.l.l.o. .w.o.r.l.d.!
```

### convert_uudecode example

```php
<?php
echo convert_uudecode("+22!L;W9E(%!(4\"$`\n`");
?>
```

আউটপুট:

```php
I love PHP!
```

### count_chars example

```php
<?php
$str = "Hello World!";
echo count_chars($str,3);
?>
```

আউটপুট:

```php
 !HWdelor
```


## PHP Functions - Array

পিএইচপি এর মধ্যে অনেক গুলো অ্যারে ফাংশন রয়েছে। এগুলো হচ্ছেঃ

- `array()` - একটি অ্যারে তৈরি করে।
- `array_change_key_case()` - 
- `array_chunk()` - 
- `array_column()` - 
- `array_combine()` - 
- `array_count_values()` - 
- `array_diff_assoc()` - 
- `array_diff_key()` - 
- `array_diff_uassoc()` - 
- `array_diff_ukey()` - 

### array example

```php
<?php
$a=array("red","green");
array_push($a,"blue","yellow");
print_r($a);
?>
```

আউটপুট:

```php
Array ( [0] => red [1] => green [2] => blue [3] => yellow )
```

### array_change_key_case example

```php
<?php
$a=array("Name"=>"Peter","Age"=>"41","Country"=>"USA");
print_r(array_change_key_case($a,CASE_UPPER));
?>
```

আউটপুট:

```php
Array ( [NAME] => Peter [AGE] => 41 [COUNTRY] => USA )
```

### array_chunk example

```php
<?php
$a=array("a"=>"red","b"=>"green","c"=>"blue","d"=>"yellow");
print_r(array_chunk($a,2));
?>
```

আউটপুট:

```php
Array ( [0] => Array ( [0] => red [1] => green ) [1] => Array ( [0] => blue [1] => yellow ) )
```

### array_column example

```php
<?php
$a=array(
array(
"id"=>1,
"first_name"=>"John",
"last_name"=>"Doe",
),
array(
"id"=>2,
"first_name"=>"Mary",
"last_name"=>"Moe",
),
array(
"id"=>3,
"first_name"=>"Julie",
"last_name"=>"Dooley",
)
);
print_r(array_column($a,"first_name"));
?>
```

আউটপুট:

```php
Array ( [0] => John [1] => Mary [2] => Julie )
```

### array_combine example

```php
<?php
$a=array("a"=>"red","b"=>"green","c"=>"blue");
$b=array("a"=>"orange","b"=>"banana","c"=>"apple");
print_r(array_combine($a,$b));
?>
```

আউটপুট:

```php
Array ( [red] => orange [green] => banana [blue] => apple )
```

### array_count_values example

```php
<?php
$a=array("A","Cat","Dog","A","Dog");
print_r(array_count_values($a));
?>
```

আউটপুট:

```php
Array ( [A] => 2 [Cat] => 1 [Dog] => 2 )
```

### array_diff_assoc example

```php
<?php
$a1=array("a"=>"red","b"=>"green","c"=>"blue","d"=>"yellow");
$a2=array("a"=>"red","b"=>"green","c"=>"blue");
$result=array_diff_assoc($a1,$a2);
print_r($result);
?>
```

আউটপুট:

```php
Array ( [d] => yellow )
```

### array_diff_key example

```php
<?php
$a1=array("a"=>"red","b"=>"green","c"=>"blue","d"=>"yellow");
$a2=array("a"=>"red","b"=>"green","c"=>"blue");
$result=array_diff_key($a1,$a2);
print_r($result);
?>
```

আউটপুট:

```php
Array ( [d] => yellow )
```

### array_diff_uassoc example

```php
<?php
function myfunction($a,$b)
{
if ($a===$b)
  {
  return 0;
  }
return ($a>$b)?1:-1;
}

$a1=array("a"=>"red","b"=>"green","c"=>"blue","d"=>"yellow");
$a2=array("a"=>"red","b"=>"green","c"=>"blue");

$result=array_diff_uassoc($a1,$a2,"myfunction");
print_r($result);
?>
```

আউটপুট:

```php
Array ( [d] => yellow )
```

### array_diff_ukey example

```php
<?php
function myfunction($a,$b)
{
if ($a===$b)
  {
  return 0;
  }
return ($a>$b)?1:-1;
}

$a1=array("a"=>"red","b"=>"green","c"=>"blue","d"=>"yellow");
$a2=array("a"=>"red","b"=>"green","c"=>"blue");

$result=array_diff_ukey($a1,$a2,"myfunction");
print_r($result);
?>
```

আউটপুট:

```php
Array ( [d] => yellow )
```

## PHP Functions - Math

পিএইচপি এর মধ্যে অনেক গুলো ম্যাথ ফাংশন রয়েছে। এগুলো হচ্ছেঃ

- `abs()` - 
- `acos()` - 
- `acosh()` - 
- `asin()` - 

### abs example

```php
<?php
echo(abs(-6.7));
?>
```

আউটপুট:

```php
6.7
```

### acos example

```php
<?php
echo(acos(0.5));
?>
```

আউটপুট:

```php
1.0471975511966
```

### acosh example

```php
<?php
echo(acosh(1.5));
?>
```

আউটপুট:

```php
0.96242365011921
```

### asin example

```php
<?php
echo(asin(0.5));
?>
```

আউটপুট:

```php
0.5235987755983
```

## PHP Functions - File

পিএইচপি এর মধ্যে অনেক গুলো ফাইল ফাংশন রয়েছে। এগুলো হচ্ছেঃ

- `basename()` - 
- `chgrp()` - 

### basename example

```php
<?php
$path = "/home/httpd/html/index.php";
$file = basename($path);
echo $file;
?>
```

আউটপুট:

```php
index.php
```

### chgrp example

```php
<?php
$file = 'groups.txt';
// changes group
chgrp($file,4);
?>
```

## PHP Functions - URL

পিএইচপি এর মধ্যে অনেক গুলো ইউআরএল ফাংশন রয়েছে। এগুলো হচ্ছেঃ

- `base64_decode()` - 
- `base64_encode()` - 
- `get_headers()` - 
- `get_meta_tags()` - 

### base64_decode example

```php
<?php
$str = 'VGhpcyBpcyBhbiBlbmNvZGVkIHN0cmluZw==';
echo base64_decode($str);
?>
```

আউটপুট:

```php
This is an encoded string
```

### base64_encode example

```php
<?php
$str = 'This is an encoded string';
echo base64_encode($str);
?>
```

আউটপুট:

```php
VGhpcyBpcyBhbiBlbmNvZGVkIHN0cmluZw==
```

### get_headers example

```php
<?php
$url = 'http://www.example.com';
print_r(get_headers($url));
?>
```

আউটপুট:

```php
Array ( [0] => HTTP/1.1 200 OK [1] => Date: Sat, 09 May 2020 07:54:01 GMT [2] => Server: Apache [3] => Last-Modified: Sat, 09 May 2020 07:50:01 GMT [4] => Accept-Ranges: bytes [5] => Content-Length: 44 [6] => Cache-Control: max-age=0, no-cache, no-store, must-revalidate [7] => Pragma: no-cache [8] => Expires: Wed, 11 Jan 1984 05:00:00 GMT [9] => Connection: close [10] => Content-Type: text/html )
```

### get_meta_tags example

```php
<?php
$tags = get_meta_tags('https://www.w3schools.com/');
echo $tags['author'];       // name
echo $tags['keywords'];     // php code examples
echo $tags['description'];  // code examples
echo $tags['geo_position']; // 10.000000;20.000000
?>
```

আউটপুট:

```php
w3schools.com
php code examples
Code examples
10.000000;20.000000
```

## PHP Functions - Variable

পিএইচপি এর মধ্যে অনেক গুলো ভ্যারিয়েবল ফাংশন রয়েছে। এগুলো হচ্ছেঃ

- `boolval()` - 
- `debug_zval_dump()` - 
- `doubleval()` - 
- `empty()` - 

### boolval example

```php
<?php
$foo = 10;   // $foo is an integer
$bar = (boolean) $foo;
echo $bar;
?>
```

আউটপুট:

```php
1
```

### debug_zval_dump example

```php
<?php
$a = "Hello World!";
xdebug_debug_zval( 'a' );
?>
```

আউটপুট:

```php
a: (refcount=1, is_ref=0)='Hello World!'
```

### doubleval example

```php
<?php
$a = 10.365;
echo doubleval($a);
?>
```

আউটপুট:

```php
10.365
```

### empty example

```php
<?php
$var = 0;

// Evaluates to true because $var is empty
if (empty($var)) {
    echo '$var is either 0, empty, or not set at all';
}

// Evaluates as true because $var is set
if (isset($var)) {
    echo '$var is set even though it is empty';
}
?>
```

আউটপুট:

```php
$var is either 0, empty, or not set at all
$var is set even though it is empty
```

## PHP Functions - Date

পিএইচপি এর মধ্যে অনেক গুলো ডেট ফাংশন রয়েছে। এগুলো হচ্ছেঃ

- `checkdate()` - 
- `date_add()` - 
- `date_create_from_format()` - 
- `date_create()` - 

### checkdate example

```php
<?php
var_dump(checkdate(12, 31, 2000));
var_dump(checkdate(2, 29, 2001));
?>
```

আউটপুট:

```php
bool(true)
bool(false)
```

### date_add example

```php
<?php
$date = date_create('2000-01-01');
date_add($date, date_interval_create_from_date_string('10 days'));
echo date_format($date, 'Y-m-d');
?>
```

আউটপুট:

```php
2000-01-11
```

### date_create_from_format example

```php
<?php
$date = date_create_from_format('j-M-Y', '15-Feb-2009');
echo date_format($date, 'Y-m-d');
?>
```

আউটপুট:

```php
2009-02-15
```

### date_create example

```php
<?php
$date = date_create('2000-01-01');
echo date_format($date, 'Y-m-d');
?>
```

আউটপুট:

```php
2000-01-01
```

## PHP Functions - Calendar

পিএইচপি এর মধ্যে অনেক গুলো ক্যালেন্ডার ফাংশন রয়েছে। এগুলো হচ্ছেঃ

- `cal_days_in_month()` - 
- `cal_from_jd()` - 
- `cal_info()` - 
- `cal_to_jd()` - 

### cal_days_in_month example

```php
<?php
echo "There were ".cal_days_in_month(CAL_GREGORIAN, 8, 2003)." days in August 2003";
?>
```

আউটপুট:

```php
There were 31 days in August 2003
```

### cal_from_jd example

```php
<?php
$jd = cal_to_jd(CAL_GREGORIAN, 8, 16, 2003);
echo "$jd\n";
print_r(cal_from_jd($jd, CAL_GREGORIAN));
?>
```

আউটপুট:

```php
2452850
Array ( [date] => 8/16/2003 [month] => 8 [day] => 16 [year] => 2003 [dow] => 6 [abbrevdayname] => Sat [dayname] => Saturday [abbrevmonth] => Aug [monthname] => August )
```

### cal_info example

```php
<?php
print_r(cal_info(0));
?>
```

আউটপুট:

```php

```

### cal_to_jd example

```php
<?php
echo cal_to_jd(CAL_GREGORIAN, 8, 16, 2003);
?>
```

আউটপুট:

```php
2452850
```


## PHP Functions - PHP Options & Information

পিএইচপি এর মধ্যে অনেক গুলো পিএইচপি অপশন এবং ইনফরমেশন ফাংশন রয়েছে। এগুলো হচ্ছেঃ

- `assert_options()` - 
- `assert()` - 
- `cli_get_process_title()` - 
- `cli_set_process_title()` - 

### assert_options example

```php
<?php
assert_options(ASSERT_ACTIVE,   true);
assert_options(ASSERT_BAIL,     true);
assert_options(ASSERT_WARNING,  false);
assert_options(ASSERT_CALLBACK, 'my_assert_handler');

function my_assert_handler($file, $line, $code, $desc = null)
{
    echo "Assertion failed at $file:$line: $code";
    if ($desc) {
        echo ": $desc";
    }
    echo "\n";
}

assert('2 < 1'); // Assertion failed at assert.php:14: 2 < 1
?>
```

আউটপুট:

```php
Assertion failed at assert.php:14: 2 < 1
```

### assert example

```php
<?php
$a = 3;
$b = 4;
assert($a < $b);
echo "$a is less than $b";
?>
```

আউটপুট:

```php
3 is less than 4
```

### cli_get_process_title example

```php
<?php
echo cli_get_process_title();
?>
```

আউটপুট:

```php
php
```

### cli_set_process_title example

```php
<?php
cli_set_process_title('myprocess');
echo cli_get_process_title();
?>
```

আউটপুট:

```php
myprocess
```

## PHP Functions - PHP Regular Expressions

পিএইচপি এর মধ্যে অনেক গুলো পিএইচপি রেগুলার এক্সপ্রেশন ফাংশন রয়েছে। এগুলো হচ্ছেঃ

- `preg_filter()` - 
- `preg_grep()` - 
- `preg_last_error_msg()` - 
- `preg_last_error()` - 

### preg_filter example

```php
<?php
$patterns = array ('/(19|20)(\d{2})-(\d{1,2})-(\d{1,2})/',
                   '/^\s*{(\w+)}\s*=/');
$replace = array ('\3/\4/\1\2', '$\1 =');
echo preg_filter($patterns, $replace, '{startDate} = 1999-5-27');
?>
```

আউটপুট:

```php
$startDate = 5/27/1999
```

### preg_grep example

```php
<?php
$subject = array('1', 'a', '2', 'b', '3', 'A', 'B', '4');
$pattern = '/^\d$/';
$matches = preg_grep($pattern, $subject);
print_r($matches);
?>
```

আউটপুট:

```php
Array ( [0] => 1 [2] => 2 [4] => 3 [7] => 4 )
```

### preg_last_error_msg example

```php
<?php
preg_match('/(?:\D+|<\d+>)*[!?]/', 'foobar foobar foobar');
echo preg_last_error_msg();
?>
```

আউটপুট:

```php
PREG_BACKTRACK_LIMIT_ERROR
```

### preg_last_error example

```php
<?php
preg_match('/(?:\D+|<\d+>)*[!?]/', 'foobar foobar foobar');
echo preg_last_error();
?>
```

আউটপুট:

```php
2
```

## PHP Functions - PHP Error Handling

পিএইচপি এর মধ্যে অনেক গুলো পিএইচপি এরর হ্যান্ডলিং ফাংশন রয়েছে। এগুলো হচ্ছেঃ

- `debug_backtrace()` - 
- `debug_print_backtrace()` - 
- `error_clear_last()` - 
- `error_get_last()` - 

### debug_backtrace example

```php
<?php
function a_test($str) {
    echo "\nHi: $str";
    b_test('friend');
}

function b_test($str) {
    echo "\nBye: $str";
    c_test('goodbye');
}

function c_test($str) {
    echo "\n$str";
    $trace = debug_backtrace();
    print_r($trace);
}

a_test('world');

?>
```

আউটপুট:

```php
goodbye
Array ( [0] => Array ( [file] => /home/httpd/html/test.php [line] => 15 [function] => c_test [args] => Array ( [0] => goodbye ) ) [1] => Array ( [file] => /home/httpd/html/test.php [line] => 10 [function] => b_test [args] => Array ( [0] => friend ) ) [2] => Array ( [file] => /home/httpd/html/test.php [line] => 20 [function] => a_test [args] => Array ( [0] => world ) ) )
Bye: friend
Array ( [0] => Array ( [file] => /home/httpd/html/test.php [line] => 15 [function] => c_test [args] => Array ( [0] => goodbye ) ) [1] => Array ( [file] => /home/httpd/html/test.php [line] => 10 [function] => b_test [args] => Array ( [0] => friend ) ) [2] => Array ( [file] => /home/httpd/html/test.php [line] => 20 [function] => a_test [args] => Array ( [0] => world ) ) )
Hi: world
Array ( [0] => Array ( [file] => /home/httpd/html/test.php [line] => 15 [function] => c_test [args] => Array ( [0] => goodbye ) ) [1] => Array ( [file] => /home/httpd/html/test.php [line] => 10 [function] => b_test [args] => Array ( [0] => friend ) ) [2] => Array ( [file] => /home/httpd/html/test.php [line] => 20 [function] => a_test [args] => Array ( [0] => world ) ) )
```


### debug_print_backtrace example

```php
<?php
function a_test($str) {
    echo "\nHi: $str";
    b_test('friend');
}

function b_test($str) {
    echo "\nBye: $str";
    c_test('goodbye');
}

function c_test($str) {
    echo "\n$str";
    debug_print_backtrace();
}

a_test('world');

?>
```

আউটপুট:

```php
goodbye
#0  c_test(goodbye) called at [/home/httpd/html/test.php:15]
#1  b_test(friend) called at [/home/httpd/html/test.php:10]
#2  a_test(world) called at [/home/httpd/html/test.php:20]
Bye: friend
#0  c_test(goodbye) called at [/home/httpd/html/test.php:15]
#1  b_test(friend) called at [/home/httpd/html/test.php:10]
#2  a_test(world) called at [/home/httpd/html/test.php:20]
Hi: world
#0  c_test(goodbye) called at [/home/httpd/html/test.php:15]
#1  b_test(friend) called at [/home/httpd/html/test.php:10]
#2  a_test(world) called at [/home/httpd/html/test.php:20]
```

### error_clear_last example

```php
<?php
echo 1 / 0;
var_dump(error_get_last());
error_clear_last();
var_dump(error_get_last());
?>
```

আউটপুট:

```php
PHP Warning:  Division by zero in /home/httpd/html/test.php on line 2
NULL
NULL
```

### error_get_last example

```php
<?php
echo 1 / 0;
var_dump(error_get_last());
?>
```

আউটপুট:

```php
PHP Warning:  Division by zero in /home/httpd/html/test.php on line 2
array(4) {
  ["type"]=>
  int(2)
  ["message"]=>
  string(23) "Division by zero"
  ["file"]=>
  string(24) "/home/httpd/html/test.php"
  ["line"]=>
  int(2)
}
```

## PHP Functions - PHP XML

পিএইচপি এর মধ্যে অনেক গুলো পিএইচপি এক্সএমএল ফাংশন রয়েছে। এগুলো হচ্ছেঃ

- `utf8_decode()` - 
- `utf8_encode()` - 
- `xml_error_string()` - 
- `xml_get_current_byte_index()` - 

### utf8_decode example

```php
<?php
$str = "This is some text I wrote.üöä";
echo utf8_decode($str);
?>
```

আউটপুট:

```php
This is some text I wrote.üöä
```

### utf8_encode example

```php
<?php
$str = "This is some text I wrote.üöä";
echo utf8_encode($str);
?>
```

আউটপুট:

```php
This is some text I wrote.Ã¼Ã¶Ã¤
```

### xml_error_string example

```php
<?php
$xml_parser = xml_parser_create();
if (!xml_parse($xml_parser, '<foobar>')) {
    die(sprintf('XML error: %s at line %d',
                xml_error_string(xml_get_error_code($xml_parser)),
                xml_get_current_line_number($xml_parser)));
}
xml_parser_free($xml_parser);
?>
```

আউটপুট:

```php
XML error: mismatched tag at line 1
```

### xml_get_current_byte_index example

```php
<?php
$xml_parser = xml_parser_create();
$data = "This is some data";
xml_parse_into_struct($xml_parser, $data, $values, $tags);
echo "Index byte 12: ".$values[$tags['data'][0]]['value'][12];
xml_parser_free($xml_parser);
?>
```

আউটপুট:

```php
Index byte 12: d
```

## PHP Functions - PHP Zip

পিএইচপি এর মধ্যে অনেক গুলো পিএইচপি জিপ ফাংশন রয়েছে। এগুলো হচ্ছেঃ

- `zip_close()` - 
- `zip_entry_close()` - 
- `zip_entry_compressedsize()` - 
- `zip_entry_compressionmethod()` - 

### zip_close example

```php
<?php
$zip = zip_open("/tmp/test.zip");
if ($zip) {
  while ($zip_entry = zip_read($zip)) {
    echo "Name:               " . zip_entry_name($zip_entry) . "\n";
    echo "Actual Filesize:    " . zip_entry_filesize($zip_entry) . "\n";
    echo "Compressed Size:    " . zip_entry_compressedsize($zip_entry) . "\n";
    echo "Compression Method: " . zip_entry_compressionmethod($zip_entry) . "\n";

    if (zip_entry_open($zip, $zip_entry, "r")) {
      echo "File Contents:\n";
      $buf = zip_entry_read($zip_entry, zip_entry_filesize($zip_entry));
      echo "$buf\n";

      zip_entry_close($zip_entry);
    }
    echo "\n";

  }

  zip_close($zip);

}

?>
```

আউটপুট:

```php
Name:               test
Actual Filesize:    27
Compressed Size:    27
Compression Method: 8
File Contents:
This is a test file.

```

### zip_entry_close example

```php
<?php
$zip = zip_open("/tmp/test.zip");
if ($zip) {
  while ($zip_entry = zip_read($zip)) {
    echo "Name:               " . zip_entry_name($zip_entry) . "\n";
    echo "Actual Filesize:    " . zip_entry_filesize($zip_entry) . "\n";
    echo "Compressed Size:    " . zip_entry_compressedsize($zip_entry) . "\n";
    echo "Compression Method: " . zip_entry_compressionmethod($zip_entry) . "\n";

    if (zip_entry_open($zip, $zip_entry, "r")) {
      echo "File Contents:\n";
      $buf = zip_entry_read($zip_entry, zip_entry_filesize($zip_entry));
      echo "$buf\n";

      zip_entry_close($zip_entry);
    }
    echo "\n";

  }

  zip_close($zip);

}

?>
```

আউটপুট:

```php
Name:               test
Actual Filesize:    27
Compressed Size:    27
Compression Method: 8
File Contents:
This is a test file.

```

### zip_entry_compressedsize example

```php
<?php
$zip = zip_open("/tmp/test.zip");
if ($zip) {
  while ($zip_entry = zip_read($zip)) {
    echo "Name:               " . zip_entry_name($zip_entry) . "\n";
    echo "Actual Filesize:    " . zip_entry_filesize($zip_entry) . "\n";
    echo "Compressed Size:    " . zip_entry_compressedsize($zip_entry) . "\n";
    echo "Compression Method: " . zip_entry_compressionmethod($zip_entry) . "\n";

    if (zip_entry_open($zip, $zip_entry, "r")) {
      echo "File Contents:\n";
      $buf = zip_entry_read($zip_entry, zip_entry_filesize($zip_entry));
      echo "$buf\n";

      zip_entry_close($zip_entry);
    }
    echo "\n";

  }

  zip_close($zip);

}

?>
```

আউটপুট:

```php
Name:               test
Actual Filesize:    27
Compressed Size:    27
Compression Method: 8
File Contents:
This is a test file.

```

### zip_entry_compressionmethod example

```php
<?php
$zip = zip_open("/tmp/test.zip");
if ($zip) {
  while ($zip_entry = zip_read($zip)) {
    echo "Name:               " . zip_entry_name($zip_entry) . "\n";
    echo "Actual Filesize:    " . zip_entry_filesize($zip_entry) . "\n";
    echo "Compressed Size:    " . zip_entry_compressedsize($zip_entry) . "\n";
    echo "Compression Method: " . zip_entry_compressionmethod($zip_entry) . "\n";

    if (zip_entry_open($zip, $zip_entry, "r")) {
      echo "File Contents:\n";
      $buf = zip_entry_read($zip_entry, zip_entry_filesize($zip_entry));
      echo "$buf\n";

      zip_entry_close($zip_entry);
    }
    echo "\n";

  }

  zip_close($zip);

}

?>
```

আউটপুট:

```php
Name:               test
Actual Filesize:    27
Compressed Size:    27
Compression Method: 8
File Contents:
This is a test file.

```







