# পিএইচপি দিয়ে Upload System এবং Image Gallery তৈরি করা
আজকে আমরা Image gallary type ওয়েবসাইট বানাবো 

![input-data-sample-page](/public/class-10-part-2.png
"Input Data Sample Page")

ওয়েবসাইটে ফোল্ডারের মধ্য যে কয়টা পিকচার থাকবে ততটাই ওয়েবসাইটে  show করবে

## ## Initial Setup

 এখন আমরা  gallary নামে ফোল্ডার নিয়ে `index.php`  একটি পিএইচপি ফাইল তৈরি করে এর ভিতরে  ফাইল ফোল্ডারকে access দিবো ।

এখন images নামে ফোল্ডার নিবো**।**

ফোল্ডারের ভিতর যেটা থাকবে রিট করে নিয়ে চলে আসবে ।   এটার জন্য পিএইচপির ভিতর ফোল্ডার রিট করার জন্য readdir() ব্যবহার করতে হবে।

## Directory

পিএইচপি **Directory** মধ্য দুইটা **Directory** আছে 

 1.  opendir() - কোন ফোল্ডার open করতে চাচ্ছি সেটা open হবে।

1. closedir() -কোন ফোল্ডার close করতে চাচ্ছি সেটা close হবে।

এখন আমরা opendir()  Directory দিয়ে var_dump করে দেখতে পারি images ফোল্ডার ওপেন হচ্ছে কি না।

```php
<?php
$dir = opendir('images');
var_dump($dir);
?>
```

আউটপুট:

```php
resource(3) of type (stream)
```

এখন আমরা while loop নিয়ে imagefile নামে variable নিয়ে  Directory read করে var_dump চেক দিবো 

```php
<?php
$dir = opendir('images');
while($imageFILE = readdir($dir))
var_dump($imageFILE);
?>
```

আউটপুট:

```php
string(1) "." string(2) ".."
```

এখন images ফোল্ডারের মধ্যে  যদি কোন ফাইল থাকে তাহলে সেটা সাইটে show হবে

এখন images ফোল্ডারের মধ্যে  যদি কয়েকটি image নিয়ে আসি তাহলে যা দেখাবে - 

```php
string(1) "." string(2) ".." string(13) "Images(1).jpg" string(13) "Images(2).jpg" string(13) "Images(3).jpg" string(13) "Images(4).jpg" string(13) "Images(5).jpg" string(13) "Images(6).jpg" string(13) "Images(7).jpg"
```

এখন যেহেতু image গুলো string আকারে দেখাচ্ছে তাই loop চালানোর জন্য array ফর্মেটে আনতে হবে ।  এর জন্য এটা কে Readable url তৈরি করতে হবে automatically যেটাকে browser বুঝবে।

এখন আমরা function এর জন্য directoryReader.php নামে php file নিবো এবং function directoryReader() এর মধ্যে  $files =[]  নামে variables নিবো এর মধ্যে সকল image রাখবো ।

```php
<?php 
function directoryreader(){
 $files =[]
}
?>
```

এখন `index.php` থেকে directory পাটিয়ে দিবো  directoryReader.php ফাইলে এবং  সকল কার্যক্রম directoryreader.php ফাইলে  করবো

1. loop through the files
2. do some check 
3. add to image array
4. return images array

এখন function এর মধ্যে  $directory নিবো এবং `index.php` directory এর images নাম টা trow করে দিবো ।

```php
<?php 
function directoryReader($directory)
{
 $files = [];
}

?>
```

এখন আমরা এই  "." SINGLE DOT আর  ".."  DOUBLE DOT যেটা আসতেছে তা বাদ দিতে হবে।

```php
function directoryReader($directory, array $exclude = array('.','..'))
```

এখন $id_dir দিয়ে directory চেক দিবো ।

```php
<?php
function directoryReader($directory, array $exclude = array('.', '..'))
{
    $files = [];
    if (!is_dir($directory)) {
        return null;
    }
    return true;
}
?>
```

`index.php`  এ সব কিছু ডিলিট দিয়ে require নিয়ে এসে directoryReader.php ফাইল এড করে দিবো  এবং নিচে $images variable নিয়ে directoryReader এড করে images variable এড করবো  ।

 var_dump দিয়ে চেক দিবো  directory পাচ্ছে কি না ?

```php
<?php
require 'directoryReader.php';
$images = directoryReader('images');
var_dump($images);
?>
```

আউটপুট:

```php
bool(true)
```
## readable message
আর যদি null আসে তাহলে readable মেসেস দেওয়ার জন্য কয়েক ভাবে condition দিতে পারি 

**পদ্ধতি - ১**

```php
<?php
require 'directoryReader.php';

$images = directoryReader('nnn');
if(is_null($images)){
    echo 'no folder found!';
    exit;
}
?>
```

**পদ্ধতি - ২**

```php
if(empty($images)){
    echo 'no folder found!';
    exit;
}
```

**পদ্ধতি - ৩**

```php
if(!$images){
    echo 'no folder found!';
    exit;
}
```

**পদ্ধতি - ৪**

```php
if(!$images){
    die('no folder found!');
}
```

এখন directoryReader.php এসে আমরা function লিখবো । if দিয়ে opendir() ফাইল গুলা বাহির করবো ।

```php
<?php
function directoryReader($directory, array $exclude = array('.', '..'))
{
    $files = [];
    if (!is_dir($directory)) {
        return null;
    }
if (!($fileDirectory = opendir($directory))){
   return null;
}
var_dump($fileDirectory);
}
?>
```

আউটপুট:

```php
resource(4) of type (stream) no folder found!
```

 এখন while লুপ চালাবো

```php
while (($file = readdir($fileDirectory)) !== false) {
   var_dump($file);
}
```

আউটপুট:

```php
string(1) "." string(2) ".." string(13) "Images(1).jpg" string(13) "Images(2).jpg" string(13) "Images(3).jpg" string(13) "Images(4).jpg" no folder found!
```

এখন আমরা এই  "." SINGLE DOT আর  ".."  DOUBLE DOT বাদ দিবো আর এটাকে readable url করতে হবে তারপর এটাকে array বানাতে হবে। 

```php
<?php
function directoryReader($directory, array $exclude = array('.', '..')) 
{
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
?>
```

আউটপুট:

```php
string(13) "Images(1).jpg" string(13) "Images(2).jpg" string(13) "Images(3).jpg" string(13) "Images(4).jpg" no folder found!
```

এখন folder এর নাম dynamic করবো 

```php
while (($file = readdir($fileDirectory)) !== false) {
   if (in_array($file, $exclude)) {
    continue;
   }
   $files[] = $directory.'/'. $file;
}
```

এখন `index.php` $images কে var_dump( ) করতে হবে।

```php
var_dump($images);
```

আউটপুট:

```php
array(4) { [0]=> string(20) "images/Images(1).jpg" [1]=> string(20) "images/Images(2).jpg" [2]=> string(20) "images/Images(3).jpg" [3]=> string(20) "images/Images(4).jpg" }
```

এখন images গুলো সাইটে show করাবো । তারজন্য `index.php` তে  একটি পিএইচপি ফাইল তৈরি করে এর ভিতরে একটি বেসিক HTML স্ট্রাকচার নিবো  যার ভিতরে একটি head ও body সেকশন থাকবে এবং $images array এর  উপর লুপ চালবো আর সকল image গুলো print করবো ।

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

এখন সাইটে  image গুলো  show হবে।

এখন HTML স্ট্রাকচারের মধ্যে ফর্ম নিতে হবে।

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

আউটপুট:

![input-data-sample-page](/public/class-10-part-2.png
"Input Data Sample Page")

এখন `index.php` এ  action=””;  মেথড  এ   <?php echo $_SERVER['PHP_SELF']; ?>  দিয়ে  if  এর isset($_POST['submit']) মাধ্যমে condition দিবো ।

```php
if(isset($_POST['submit'])){

    $imgName = $_FILES['file']['name'];
    $imgTmpName = $_FILES['file']['tmp_name'];
    $imgSize = $_FILES['file']['size'];
    $imgError = $_FILES['file']['error'];
    $imgType = $_FILES['file']['type'];

    $allowImgType = ['image/png', 'image/jpg', 'image/jpeg'];
    $folder='images/';
    if (move_uploaded_file($imgTmpName, $folder . $imgName)) {
        echo 'File uploaded successfully<br>';
        header("Location: index.php");
        exit();
    } else {
        echo 'File upload failed<br>';
    }
}
```

এখন যদি সাইটে কোন Image upload দেই তাহলে সেই image টা সাইটে upload হয়ে সাইটে show হবে।