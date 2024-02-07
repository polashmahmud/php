# পিএইচপি দিয়ে HTML ফর্ম ডাটার Advance ম্যানিপুলেশন

পূর্ববর্তী ক্লাসে আমরা পিএইচপি বেসিক কনসেপ্টগুলো সম্পর্কে বিস্তর ধারণা পেয়েছি । আজকের ক্লাসে আমরা Advance কিছু শিখব । এখন থেকে ক্লাস গুলো একটু হার্ড হয়ে যাবে। ক্লাস গুলো করার সাথে সাথে প্রাকটিস করতে হবে।

 আজকে আমরা ফাইল আপলোড নিয়ে আলোচনা করবো।ওলরেডি যতগুলা ফর্ম আছে,ফর্মের যে ফিল্ড গুলা আছে সবগুলোই দেখানো হয়েছে শুধু মাত্র ফাইল আপলোড বাদ দিয়ে। কিভাবে ফাইল আপলোড করবেন তা নিয়ে আলোচনা হবে।

1. Single file upload
2. Multiple file upload

দুটা নিয়েই আলোচনা হবে।

ফাইল আপলোড করে আপনও পিএইচপি এর মাধ্যমে কোন একটা ফাইলের মধ্যে আপনি পিএইচপি দিয়ে লিখতে পারেন। ডাটা সংগ্রহ করতে পারেন। আবার পড়তেও পারবেন।যেমন: store করার সময় আমরা mysql, mongodb database ইউস করে থাকি। আপনি চাইলে ফাইলকেও ডাটাবেইজ হিসাবে ইউস করতে পারেন। ফাইলের মধ্যেও কিভাবে রিড করতে হয়,কিভাবে write করতে হয়, কিভাবে ওপেন করবেন, ফাইলের কিছু পারমিশন সেট করতে হয় এসব বিষয় নিয়ে আলোচনা করবো। এর পরে আমরা crud type একটা প্রজেক্ট করবো। ফাইল দিয়ে ডাটা ষ্টোরের মাধ্যমে crud দিয়ে প্রসেস করবো।

## Single file upload

প্রথমে আমরা `index.php` নামে একটি পিএইচপি ফাইল তৈরি করে এর ভিতরে একটি বেসিক HTML স্ট্রাকচার নিব যার ভিতরে একটি head ও body সেকশন থাকবে।

```php
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>File Upload</title>
  </head>

  <body></body>
</html>
```

এখন দেখবো যে কি ভাবে ফাইল আপলোড করতে পারি।

ফাইল আপলোডের জন্য আমাদের form নিতে হবে। form এর মধ্যে method  নিবো। post method এ ফাইল আপলোড করবো। এখন form এর মধ্যে input নিয়ে typefile  নিবো। আরেকবার input নিয়ে টাইপ সাবমিট, নেম  ভ্যালুনিবো। এই input টা বাটন হিসাবে কাজ করবে।

```php
<form method="post">
    <input type="file">
    <input type="submit" name="submit" value="submit">
</form>
```

এখন যদি [localhost](http://localhost) এ site টি open করি তাহলে file upload এর একটি ফর্ম চলে আসছে । এখন যদি ফাইল আপলোড করি এখন কিন্তু আসবে না কারন আমরা কোন কিছু প্রসেস করি নি।

#### $_FILES
এখন আমরা pre tag নিবো।  pre tag ইউস করা হয় কোড গুলা সুন্দর করে দেখানোর জন্য। pre এর মধ্যে php নিয়ে print_r($_FILES) এটা নিতে হবে।

```php
<pre>
  <?php print_r($_FILES) ?>
</pre>
```

#### enctype="multipart/form-data"

এখন যদি কোন ফাইল আপলোড করি শুধু array return করবে।কারন যখন ফাইল টা দেখাচ্ছি তখন ফর্ম কে call দিতে হবে। ফর্মে call দেওয়ার জন্য 

enctype="multipart/form-data”  দিতে হবে। ফাইল আপলোড হওয়ার জন্য input এ tag name="photo" দিতে হবে।

```php
<form method="post" enctype="multipart/form-data">
    <input type="file" name="photo">
    <input type="submit" name="submit" value="submit">
</form>
```

আউটপুট:

![input-data-sample-page](/public/class-9-part-1.png
"Input Data Sample Page")

এখন যদি file upload করি তাহলে array আকারে file name, full path,type,tmp_name,error,size আসবে।

এখন আমরা array file কে move করে অন্য folder এ নিয়ে যাবো।

#### move_uploaded_file

এখন একটি uploads নামে folder create করবো। এখন মুভ করে upload এ নিয়ে যাবো। এর জন্য php এর move_uploaded_file নামে build in fanction নিতে হবে। এখানে বলে দিতে হবে কোন ফাইল মুভ করবো, এটা দুইটা আর্গুমেন্ট নেয় 

প্রথম আর্গুমেন্টে কোন ফাইলটা মুভ করতে চাচ্ছেন  $_FILES['photo']['tmp_name'] name এবং path দেখায় দিতে হবে 

আর দ্বিতীয় আর্গুমেন্টে বলে দিতে হবে মুভ করা ফাইলের location দিতে হবে।

```php
<pre>
  <?php 
  print_r($_FILES);
  move_uploaded_file($_FILES['photo']['tmp_name'],'uploads/'. $_FILES['photo']['name']); 
  ?>
</pre>
```

এখন যদি কোন পিক আপলোড করি তাহলে uploads ফোল্ডারে চলে যাবে।

এখন আমাদের আরো কিছু বিষয় চেক করতে হবে।

এখানে চেক করতে হবে আমার আপলোড ফাইলটা jpg বা অন্যান্য ফাইল কি না।

যখনি কোন ফাইলে পত্র নিয়ে কাজ করতে লাগবে তখন অবশ্যই ফাইল টাইপ ভেলিডেশন বসাতে হবে। 

সব সময় ভেলিডেশন বসাতে হবে।  যে টাইপের ফাইলে আপলোড হবে তা বলে দিতে হবে image type হলে শুধু image file upload হবে। অন্য type file upload হবে না। doc type file upload হলে শুধু doc type file আপলোড হবে।

এখন আমরা if দিয়ে ভেলিডেশন এড করবো । if দিয়ে request চেক করবো । আমাদের আগে দিয়ে চেক করে নিতে হবে file কি type এ allowed আছে । allowed এ type বসিয়ে variable এ declear করতে হবে । if দিয়ে চেক করে in_array() argument নিতে হবে ।

in_array() এর মধ্য দুইটা  argument নিতে হবে। 

প্রথম argument allowed এর লিড গুলো নিতে হবে । দ্বিতীয় টা তে সেগুলা পাটাবো যা পাচ্ছি । তাহলেই আমার true false type কিছু পেতে পারি

```php
<?php
if ($_FILES['photo']){

    $allowed = ['image/png', 'image/jpg', 'image/jpeg'];
    
    if (!in_array($_FILES['photo']['type'], $allowed)) {
    echo 'Only jpg, jpeg, png files are allowed';
    exit;
    }
    move_uploaded_file($_FILES['photo']['tmp_name'],'uploads/'. $_FILES['photo']['name']);
}

?>
```

এখন যদি কোনো পিক upload করি তাহলে echo show করবে।

আউটপুটঃ

![input-data-sample-page](/public/class-9-part-2.png "Input Data Sample Page")

এখন যদি file size চেক করতে চাই।

```php
if ($_FILES($_FILES['photo']['size']> 1024*1024)) {
echo 'File Size should be less then 1 MB';
exit;
}
```

এখন পর্যন্ত single file upload complete হবে।


## Multiple file upload

এখন আমরা multiple file upload করবো।

প্রথমে আমরা `index.php` নামে একটি পিএইচপি ফাইল তৈরি করে single file এর মতো form তৈরি করে নিবো । কিন্তু multiple file upload করার সময় নাম টা name একটা array হবে। যেমনঃ name="photo[]" । 

দুইভাবে নেওয়া যায় ।

```php
<form method="post" enctype="multipart/form-data">
<input type="file" name="photo[]">
<input type="file" name="photo[]">
<input type="file" name="photo[]">
<input type="file" name="photo[]">
```

অন্য ভাবে input এর শেষ এ multiple লিখে ।

```php
<form method="post" enctype="multipart/form-data">
<input type="file" name="photo[]" multiple>
```

multiple লিখে দেখবো যে  file multiple করা যাচ্ছে । 

আউটপুটঃ

![input-data-sample-page](/public/class-9-part-3.png "Input Data Sample Page")

এখন আবার single file এর মতো  pre এর মধ্যে php নিয়ে print_r($_FILES) এটা নিতে হবে।

```php
<pre>
    <?php print_r($_FILES) ?>
</pre>
```

এখন যদি কোন ফাইল আপলোড করি যে কয়টা multiple file upload করবো তা array আকারে দেখাবে।

আউটপুটঃ

![input-data-sample-page](/public/class-9-part-4.png "Input Data Sample Page")

এখন আমরা array এর মধ্য foreach লুপ নিবো । $key নিতে হবে । লুপ চললে লুপের *ইন্ডেক্স* শুরু হয় ০ থেকে । যতটা *ইন্ডেক্স*  থাকবে ততোটা  key চলবে।

এখন *ইন্ডেক্সের  নাম আনার জন্য file name নিয়ে* ['photo'] তারপর ['name'] তারপর $key নিতে হবে। এর ফলে সে ০ থেকে শুরু করে পর্যায় ক্রমে লুপ চালাবে এবং সব শেষ সবগুলো file এর name এ প্রিন্ট করবে.

এরপর size, tmp_name, type পর্যায় ক্রমে *ইন্ডেক্স*  নিতে হবে। মাঝে মাঝে var_dump করে লুপ চেক করে দেখতে হবে সব ঠিক আসে কি না।

```php
<?php
if($_FILES['photo']){
  foreach($_FILES['photo']['tmp_name'] as $key => $tmp_name){
    $file_name =$_FILES['photo']['name'][$key];
    $file_size =$_FILES['photo']['size'][$key];
    $file_tmp =$_FILES['photo']['tmp_name'][$key];
    $file_type =$_FILES['photo']['type'][$key];
    var_dump($file_name);
  }
}
?>
```

এখন আমরা আবার if দিয়ে একটা condition বসাবো ।

```php
<?php
    if($_FILES['photo']){
      foreach($_FILES['photo']['tmp_name'] as $key => $tmp_name){
        $file_name =$_FILES['photo']['name'][$key];
        $file_size =$_FILES['photo']['size'][$key];
        $file_tmp =$_FILES['photo']['tmp_name'][$key];
        $file_type =$_FILES['photo']['type'][$key];
        
        if(move_uploaded_file($file_tmp,'uploads/'.$file_name)){
          echo'File Uploaded';
        }else{
          echo'Error uploading file';
        }
      }
  }
?>
```

এখন যদি কোনো multiple পিক upload করি 

আউটপুটঃ

![input-data-sample-page](/public/class-9-part-5.png "Input Data Sample Page")

