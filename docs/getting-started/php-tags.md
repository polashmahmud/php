# শুরুর পদক্ষেপ

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

echo "This string spans\nmultiple lines. The newlines will be\noutput as well.";
```

**নোট:–** echo statement দুইভাবে লেখা যায়। এক. `echo` তথা ব্রাকেট বা parenthesis () ছাড়া। দুই. ব্রাকেট বা parenthesis () সহ, `echo()`। দুটোই ভ্যালিড। তবে ব্রাকেট ছাড়াই বেশি ব্যবহার হয়।

string, escape characters, ভ্যারিয়েবল, array সহ যেসকল শব্দ বা term নতুন মনে হচ্ছে, বুঝতে পারছেন না; সেগুলো নিয়ে ঘাবড়াবার কিছু নেই। ধীরে ধীরে আমরা সব জানতে পারব।