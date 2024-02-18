# পিএইচপি মৌলিক

## Comments

**PHP** ৩ ধরণের কমেন্ট স্টাইল সাপোর্ট করে।

1. `C++` ল্যাংগুয়েজের কমেন্ট স্টাইলের মত এক লাইনের কমেন্ট ("one-line" comment)। `//` এটা দিয়ে সিংগেল লাইন কমেন্ট করা হয়। যেমন:-
>```php
><?php
>    echo 'This is a test'; // This is a one-line c++ style comment
>```
>
> এই *"one-line" comment* স্টাইল দিয়ে একটি লাইনের শেষ পর্যন্ত অথবা *current block of PHP code* এর শেষ পর্যন্ত (যেটা আগে আসে) কমেন্ট করা যায়। তাই `// ... ?>` বা `# ... ?>` এমন *PHP code block* এর পর যদি কোন **HTML** কোড থাকে সেটা আউটপুটে প্রিন্ট হবে। `?>` এটি **PHP** কোডের শেষ বোঝায়, তাই এর পর থেকে **HTML** কোড শুরু হয়ে যায়। `//` বা `#` এই ২টি এই নিয়মের পরিবর্তন ঘটাতে পারেনা।
>
>> ```HTML
>><h1>This is an <?php # echo 'simple';?> example</h1>
>><p>The header above will say 'This is an example'.</p>
>>```

2. `C` ল্যাংগুয়েজের কমেন্ট স্টাইলের মত মাল্টিপল লাইন কমেন্ট। এর জন্য ব্যবহৃত হয় `/* */`।
>```php
><?php
>/* This is a multi line comment
>       yet another line of comment */
>    echo 'This is yet another test';
>
>/* More complex example, with variables. */
>```
>
> এই কমেন্ট স্টাইলটি একটার ভেতরে আরেকটা দিয়ে *nest* করা যাবেনা। কারণ প্রথম `*/` এই চিহ্নটি দেয়ার সাথে সাথেই মাল্টিপল লাইন কমেন্ট শেষ বলে ধরে নেয়া হবে। এরপরে যতগুলো আসবে সব এরর থ্রো করবে।
>
>> ```php
>> <?php
>> /*
>>    echo 'This is a test'; /* This comment will cause a problem */
>> */
>>```

3. `Unix shell-style` (Perl style) এর comment। `#` হ্যাশ সাইন দিয়ে করতে হয়। এটিও সিংগেল লাইন কমেন্ট বা *"one-line" comment* এর মত কাজ করে।
>
>```php
><?php
>echo 'One Final Test'; # This is a one-line shell-style comment
>```


[Edit This Page](https://github.com/polashmahmud/php/edit/main/docs/class-01.md)