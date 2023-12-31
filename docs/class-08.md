# পিএইচপি দিয়ে HTML ফর্ম ডাটার Advance ম্যানিপুলেশন

আজকের ক্লাসে পুরো ফর্ম ডাটার পিএইচপি ম্যানিপুলেশন প্রসেস গুলা দেখবো। ফর্মের ভিতরে যা যা থাকে যেমন- Text input, Radio Buttons, Checkbox, Multi-checkbox, Date Picker, Time Picker, Multi selection Dropdown, Single selection Dropdown ইত্যাদি নিয়ে একটি উদাহণ ফর্ম তৈরি করবো। এজন্য আমরা jQuery ভিত্তিক একটি 
লাইব্রেরি(Select2)-কে প্লাগিন হিসেবে ব্যবহার করবো। Multi-checkbox, Select Dropdown ইত্যাদি কিভাবে কাজ করে সেগুলো দেখবো।

প্রথমে আমরা ফর্মের ডিজাইন করবো। ডিজাইন করার জন্য আসলে আমরা tailwind css ব্যবহার করবো। আপনারা চাইলে [Bootstrap](https://getbootstrap.com/) ব্যবহার করেও ডিজাইন করতে পারেন।

## Initial Setup

১. ডিজাইনের জন্য আমরা tailwind css cdn ইউস করবো। 

২. প্রথমে একটি folder এর ভীতরে `index.php` নামে একটা ফাইল তৈরি করে এর ভিতরে একটি বেসিক HTML স্ট্রাকচার নিব এবং [localhost](http://localhost) এ রান করে নিবো ।

কিভাবে রান করতে হয় তা পূর্বের ক্লাস এ দেখানো হয়েছে। 

বেসিক HTML স্ট্রাকচার:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tailwind CSS Form</title>
</head>
<body>
    <h2>Hello</h2>
</body>
```

উপরোক্ত এইচটিএমএলের ইনিশিয়াল টেমপ্লেট-এর head সেকশনে [tailwind css cdn](https://tailwindcss.com/docs/installation/play-cdn)  টা লিংক করে দিবো।

```html
<link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
```

আমাদের index.php ফাইলের বর্তমান অবস্থাঃ

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    <title>Tailwind CSS Form</title>
</head>
<body>
    <h2>Hello</h2>
</body>
</html>
```

এবার আমরা পরবর্তী ধাপ তথা ফর্ম তৈরি করব।

## প্রাথমিক এইচটিএমএল ফর্ম{#build-first-html-form}

আমাদের index.php ফাইলের body সেকশনে একটি এইচটিএমএল ফর্ম তৈরি করা হলো যার ভিতরে Text input, Radio Buttons এবং Multi-checkbox ফিল্ডগুলো থাকবে প্রাথমিক ভাবে বিভিন্ন রকম value প্রদান করার জন্য। 

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    <title>Tailwind CSS Form</title>
</head>
<body class="bg-gray-200 p-6">
    <div class="max-w-md mx-auto bg-white p-8 border rounded-md shadow-md">
        <h2 class="text-2xl font-semibold md-4">Example From</h2>
        
    
        <form action="">
            <!-- Text input -->
            <div class="md-4">
                <label for="name" class="block text-sm font-medium text-gray-600">Name</label>
                <input type="text" id="name" name="name" class="mt-1 p-2 w-2 w-full border rounded-md">
            </div>
    
            <!-- Radio Buttons -->
            <div class="md-4">
                <label for="gender" class="block text-sm font-medium text-gray-600">Gender</label>
                <div class="mt-1 space-x-4">
                    <label for="inline-flex items-center">
                        <input type="radio" name="gender" value="male" class="from-radio text-indigo-600">
                        <span class="ml-2">Male</span>
                    </label>
                    <label for="inline-flex items-center">
                        <input type="radio" name="gender" value="female" class="from-radio text-indigo-600">
                        <span class="ml-2">Female</span>
                    </label>
                </div>
            </div>

            <!-- Multi-checkbox -->
              <div class="mb-4">
                <label for="subscribe"  class="block text-sm font-medium text-gray-600">Subscribe to Newsletter</label>
                <div class="space-y-2">
                    <label class="inline-flex items-center">
                        <input type="checkbox" name="subscribe[]" value="checkbox1" class="form-checkbox text-indigo-600">
                        <span class="ml-2">Checkbox 1</span>
                    </label>
                    <label class="inline-flex items-center">
                        <input type="checkbox" name="subscribe[]" value="checkbox2" class="form-checkbox text-indigo-600">
                        <span class="ml-2">Checkbox 2</span>
                    </label>
                    <label class="inline-flex items-center">
                        <input type="checkbox" name="subscribe[]" value="checkbox3" class="form-checkbox text-indigo-600">
                        <span class="ml-2">Checkbox 3</span>
                    </label>
                </div>
            </div>
        </form>
    </div>   
</body>
</html>
```

এরপর এইচটিএমএল এর ভিতর আমরা date picker ফিল্ড নিবো ।

```html
<!-- Date Picker -->
<div class="mb-4">
    <label for="datepicker" class="block text-sm font-medium text-gray-600">Pick a Date</label>
    <input type="text" id="datepicker" name="datepicker" class="mt-1 p-2 w-full border rounded-md">
</div>
```

এখানে date picker ব্যবহারের জন্য আমাদের jquery নির্ভরতা দরকার হবে। এজন্য পূর্বের ন‍্যায় এইচটিএমএলের ইনিশিয়াল টেমপ্লেট-এর head সেকশনে [jquery cdn](https://releases.jquery.com/) টা লিংক করে দিবো।

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
```

এরপর head section এ jquery cdn এর নিচে  [flatpicker cdn](https://flatpickr.js.org/getting-started/) লিংক করে দিবো।

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css">
<script src="https://cdn.jsdelivr.net/npm/flatpickr"></script>
```

এখন, সবশেষে body section-এর close tag-এর উপরে datepicker যথাযথ কাজ করার জন্য flatpickr ইনিশিয়ালাইজ করে নিতে javascript  Call করতে হবে।

```html
//all codes are above as regular
    <script>
        // Initialize Flatpickr for the date and time pickers
        flatpickr("#datepicker", {
            enableTime: false,
            dateFormat: "Y-m-d",
        });
    </script>
</body>
</html>
```

Note::  https://flatpickr.js.org/examples/  এই documentation এর মাধ্যম Date Format ব্যবহারের সকল তথ্য জানা যাবে ।

এরপর এইচটিএমএল form section এর ভিতর time picker ফিল্ড নিবো।

```html
<!-- Time Picker -->
<div class="mb-4">
    <label for="timepicker" class="block text-sm font-medium text-gray-600">Pick a Time</label>
    <input type="text" id="timepicker" name="timepicker" class="mt-1 p-2 w-full border rounded-md">
</div>
```

এখন, পূর্বের datepicker-এর ন‍্যায় আবার timepicker যথাযথ কাজ করার জন্য flatpickr ইনিশিয়ালাইজ করে নিতে javascript  Call করতে হবে। তবে এবার পূর্বের code-এর নিচে বসালেই হবে।

উদাহরণ:

```html
//all codes are above as regular
    <script>
         // Initialize Flatpickr for the date and time pickers
        flatpickr("#datepicker", {
            enableTime: false,
            dateFormat: "Y-m-d",
        });

        flatpickr("#timepicker",{
        enableTime: true,
        noCalendar: true,
        dateFormat: "H:i",
        });
    </script>
</body>
</html>
```

Note::  https://www.php.net/manual/en/datetime.format.php এই documentation-এর মাধ্যমে Time Format-এর কোনটা কিভাবে লিখতে হবে, কি লিখলে আউটপুট কি হবে ইত্যাদি ব্যবহারের সকল তথ্য জানা যাবে। 

এখন, আবার এইচটিএমএল form section-এর ভিতরে Multiple Option সিলেক্ট করার জন্য ****Multi select**** ফিল্ড নিবো।

```html
<!-- Multiselect Dropdown using Select2 -->
    <div class="mb-4">
        <label for="options" class="block text-sm font-medium text-gray-600">Select Options</label>
        <select id="options" name="options[]" class="mt-1 p-2 w-full border rounded-md" multiple>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
            <option value="option4">Option 4</option>
            <option value="option5">Option 5</option>
            <option value="option6">Option 6</option>
        </select>
    </div>
```

Note: Multiple select ব্যবহার করার ক্ষেত্রে array চিহ্ন '[ ]' যেমনঃ options[] ব্যবহার করতে হবে।

এরপর head section-এ [select2 cdn](https://select2.org/getting-started/installation) নিয়ে এসে flatpicker cdn-এর উপর বসাতে হবে।

```html
<script src="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js"></script>
```

এখন ****Multi select**** active করার জন্য Select2 ইনিশিয়ালাইজ করে নিতে js-এর কিছু code বসাতে হবে। যা পূর্বের script code-এর ভিতরে বসালেই হবে।

```html

<script>
    // Initialize Select2 for the multiselect dropdown
    $(document).ready(function() {
        $('#options').select2();
    });
</script>
```

এখন আবার এইচটিএমএল [f](https://flatpickr.js.org/getting-started/)orm section এর  ভিতর Select Dropdown  এবং Submit Button ফর্ম নিবো

```html
<!-- Select Dropdown -->
  <div class="mb-4">
      <label for="country" class="block text-sm font-medium text-gray-600">Country</label>
      <select id="country" name="country" class="mt-1 p-2 w-full border rounded-md">
          <option value="usa">United States</option>
          <option value="canada">Canada</option>
          <option value="uk">United Kingdom</option>
      </select>
  </div>

  <!-- Submit Button -->
  <div class="mt-6">
      <button type="submit" class="bg-indigo-600 text-white p-2 rounded-md">Submit</button>
  </div>
```

## ## Method

Method এর মধ্যে POST নিবো আর আমরা যেহেতু একই পেজে কোড রান করবো সেজন্য action=”#” লিখবো ।

```html
<form action="#" method="POST">
```

## $_SERVER

এখন php এর $_SERVER  মাধ্যমে  দেখবো code  রান হচ্ছে কি না ? 

```php
<?php
    //  Check if the form is submited
     if($_SERVER['REQUEST_METHOD'] === 'POST'){
       echo'hi';
     }
?>
```

আউটপুটঃ

![input-data-sample-page](/public/class-8-part-1.png "Input Data Sample Page")

এখন আমরা isset এর মাধ্যমে Text input এর name চেক দিবো

```php
$name = '';

if($_SERVER['REQUEST_METHOD'] == 'POST'){
 $name = isset($_POST['name']) ? htmlspecialchars($_POST['name']) : '';
 echo $name;
}
```

যদি ফর্মে name tag এর ভীতরে কিছু লিখি তাহলে উপরের উদাহারনের মত সেই নাম টা শো হবে আর কোন কিছু না লিখে submit দিলে কিছু show হবে না ।

এরপর name এর এখানে নিচের  javascript line লিখে চেক দিয়ে দেখতে হবে  string আকারে গেছে কি না? যদি string আকারে যায় তাহলে মনে করতে হবে Php আকারে declare করে নি।

```php
<script>alert('hi')</script>
```

এভাবে আমাদের চেক করে নিতে হবে কোন security issues আছে কি না ?


এবার php এর মধ্যে ফরমের special character গুলোর তৈরি  করবো ।

```php
$name = '';
$gender = '';
$subscribe = [];
$datepicker  = '';
$timepicker = '';
$options = [];
$country = '';

if($_SERVER['REQUEST_METHOD'] == 'POST'){
    $name = isset($_POST['name']) ? htmlspecialchars($_POST['name']) : '';
    $gender = isset($_POST['gender']) ? htmlspecialchars($_POST['gender']) : '';
    $subscribe = isset($_POST["subscribe"]) ? $_POST["subscribe"] : [];
    $datepicker = isset($_POST['datepicker']) ? htmlspecialchars($_POST['datepicker']) : '';
    $timepicker = isset($_POST['timepicker']) ? htmlspecialchars($_POST['timepicker']) : '';
    $options = isset($_POST['options']) ? $_POST['options'] : [];
    $country = isset($_POST['country']) ? htmlspecialchars($_POST['country']) : '';
}
```

special character গুলোকে সুন্দর করে প্রিন্ট করার জন্য লিখবো

```php
echo '<div class="mb-6">';
echo '<ul>';
echo '<li><strong>Name:</strong> '.$name.'</li>' ;
echo '<li><strong>Gender:</strong> '.$gender.'</li>' ;
echo '<li><strong>Subscribe:</strong> '.implode(', ', $subscribe).'</li>' ;
echo '<li><strong>Datepicker:</strong> '.$datepicker.'</li>' ;
echo '<li><strong>Timepicker:</strong> '.$timepicker.'</li>' ;
echo '<li><strong>Options:</strong> '. implode(',',$options).'</li>' ;
echo '<li><strong>Country:</strong> '.$country.'</li>' ;
echo '</ul>';
echo '</div>';
```

আমরা যদি এখন চাই আমরা যে ফর্ম টা submit করবো submit এর যে value গুলা আসে সেগুলা relapse বা রিমুভ হবে না । তার জন্য আমাদের বিভিন্ন ফর্মের মধ্যে ইনপুট section এর মধ্যে value নামে priority  নিতে হবে । এই value এর মধ্যে যাই নিবো তাই দেখাবে। 

```php
<!-- Text input -->
 <div class="md-4">
     <label for="name" class="block text-sm font-medium text-gray-600">Name</label>
     <input type="text" id="name" value="<?php echo $name ?>" name="name" class="mt-1 p-2 w-2 w-full border rounded-md">
 </div>
```

আউটপুটঃ

![input-data-sample-page](/public/class-8-part-2.png "Input Data Sample Page")

এখন আমরা ভালুর মধ্যে php ব্লক নিতে পারি। php  ব্লকের মধ্যে name variable টা প্রিন্ট করে দিতে পারি।

```php
value="<?php echo $name ?>"     
```

আবার আমরা php এর shorthand ভালু ও নিতে পারি ।

```php
value="<?= $name ?>"    
```

এভাবেও করা যায় কিন্তু full কোড লিখেই কোড করা উচিৎ। shorthand অনেক server এ **visible** করা থাকে না। তাই আমাদের reguler কোড ব্যবহার করা উচিৎ।

এখন আমরা যদি নাম ভালুএ তে কোন নামে লিখে submit করি তাহলে সেই নাম এই শো হবে ।

এখন আমরা gender ফর্মের মধ্যে পিএইচপি ব্লক নিবো

gender এ male এর জন্য নিচের format টা নিবো

```php
<?php echo $gender === 'male' ? 'checked' : ''?>
```

আর ফর্মের জন্য নিচের টা নিবো

```php
<?php echo $gender === 'female' ? 'checked' : ''?>
```

Date picker এবং Time Picker ফর্মের জন্য name ফর্মের  একই পিএইচপি ব্লক নিয়ে কাজ করা যাবে।

### Date picker

```php
value="<?php echo $datepicker ?>"
```

### Time Picker

```php
value="<?php echo $timepicker ?>"
```

Multiselect ফর্মের জন্য in_array এর মাধ্যমে true / false return করতে হবে

```php
<select id="options" name="options[]" class="mt-1 p-2 w-full border rounded-md" multiple>
    <option value="option1"<?php echo in_array('option1',$options) ? 'selected' : '' ?>>Option 1</option>
    <option value="option2"<?php echo in_array('option2',$options) ? 'selected' : '' ?>>Option 2</option>
    <option value="option3"<?php echo in_array('option3',$options) ? 'selected' : '' ?>>Option 3</option>
    <option value="option4"<?php echo in_array('option4',$options) ? 'selected' : '' ?>>Option 4</option>
    <option value="option5"<?php echo in_array('option5',$options) ? 'selected' : '' ?>>Option 5</option>
    <option value="option6"<?php echo in_array('option6',$options) ? 'selected' : '' ?>>Option 6</option>
</select>
```

Dropdown ফর্মের জন্য কিভাবে php declare করতে হবে নিচে দেখানো হলো ।

```php
<select id="country" name="country" class="mt-1 p-2 w-full border rounded-md">
      <option value="usa"<?php echo ($country === 'usa') ? 'selected' : ''; ?>>United States</option>
      <option value="canada"<?php echo ($country === 'canada') ? 'selected' : ''; ?>>Canada</option>
      <option value="uk"<?php echo ($country === 'uk') ? 'selected' : ''; ?>>United Kingdom</option>
      <option value="bd"<?php echo ($country === 'bd') ? 'selected' : ''; ?>>Bangladesh</option>
      <option value="india"<?php echo ($country === 'india') ? 'selected' : ''; ?>></option>
  </select>
```

Multi-checkbox ফর্মের জন্য php declare করা হলো ।

```php
<!-- Multi-checkbox -->
          <div class="mb-4">
            <label for="subscribe"  class="block text-sm font-medium text-gray-600">Subscribe to Newsletter</label>
            <div class="space-y-2">
                <label class="inline-flex items-center">
                    <input type="checkbox" name="subscribe[]" value="checkbox1" class="form-checkbox text-indigo-600" <?php echo in_array('checkbox1', $subscribe) ? 'checked' : ''; ?>>
                    <span class="ml-2">Checkbox 1</span>
                </label>
                <label class="inline-flex items-center">
                    <input type="checkbox" name="subscribe[]" value="checkbox2" class="form-checkbox text-indigo-600" <?php echo in_array('checkbox2', $subscribe) ? 'checked' : ''; ?>>
                    <span class="ml-2">Checkbox 2</span>
                </label>
                <label class="inline-flex items-center">
                    <input type="checkbox" name="subscribe[]" value="checkbox3" class="form-checkbox text-indigo-600" <?php echo in_array('checkbox3', $subscribe) ? 'checked' : ''; ?>>
                    <span class="ml-2">Checkbox 3</span>
                </label>
            </div>
        </div>
```

আউটপুটঃ

![input-data-sample-page](/public/class-8-part-3.png "Input Data Sample Page")


[Edit This Page](https://github.com/polashmahmud/php/edit/main/docs/class-08.md)