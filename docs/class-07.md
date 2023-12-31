# পিএইচপির সাহায্যে এইচটিএমএল ফর্ম ম্যানিপুলেশন

বিগত ৬টি ক্লাসে আমরা পিএইচপির ফান্ডামেন্টাল বা বুনিয়াদি কনসেপ্টগুলো সম্পর্কে ধারণা নিয়েছি। [ডাটা স্ট্রাকচার](/class-01.html#types-of-data-in-php), [পিএইচপি অপারেশন](/class-02.html#পিএইচপি-অপারেশন-এবং-এক্সপ্রেশন), [কন্ট্রোল স্ট্রাকচার](/class-03.html), [ফাংশনাল প্রোগ্রামিং](/class-04.html#understanding-functional-php-and-scope) সহ [Array পরিচিতি](class-05.html#পিএইচপি-array-পরিচিতি-ও-অপারেশন) এবং [Array ফাংশন](/class-06.html#পিএইচপি-array-ভিত্তিক-প্রয়োজনীয়-কিছু-ফাংশন) ইত্যাদি সম্পর্কে বিস্তর ধারণা আমরা পেয়েছি।

এবার আসুন এই ধারণাগুলোকে আরো সমৃদ্ধ করি এবং এর রিয়েল ওয়ার্ল্ড ব্যবহার জানার চেষ্টা করি। পূর্ববর্তী ক্লাসগুলোতে শেখা কনসেপ্ট বা থিওরিগুলোকে প্রাকটিক্যালি কিভাবে ব্যবহার করা যায় এখন থেকে সেটা জানার চেষ্টা করি। তাই এই ক্লাসে আমরা পিএইচপির সাহায্যে এইচটিএমএল [DOM (Document Object Model)](https://dom.spec.whatwg.org/) ম্যানিপুলেশনের একটি প্রক্রিয়া দেখব। যেখানে আমরা একটি এইচটিএমএল ফর্ম তৈরি করে ইউজার থেকে বিভিন্ন রকমের ইনপুট নেয়ার চেষ্টা করব। অতঃপর সেই ইনপুটগুলো বিভিন্ন রকম শর্তারোপের ভিত্তিতে এইচটিএমএল পেজে দেখানোর চেষ্টা করব।

এই প্রক্রিয়া সম্পন্ন করতে আমরা খুবই পাওয়ারফুল একটি সিএসএস ফ্রেমওয়ার্ক [Bootstrap](https://getbootstrap.com/) টুলটির সাহায্য নিব। নিজস্ব সীমাবদ্ধতার কারণে আমরা স্পেসিফিকভাবে [Bootstrap version 4.3.1](https://getbootstrap.com/docs/4.3/getting-started/introduction/) ব্যবহার করব। তবে যদি Bootstrap সম্পর্কে আপনার ধারণা থাকে, আপনি চাইলে লেটেস্ট ভার্সনটাও ব্যবহার করতে পারেন। অথবা অন্য কোন ফ্রেমওয়ার্ক যেমন [Tailwind CSS](https://tailwindcss.com/) অথবা শুধু [Raw CSS](https://www.w3schools.com/Css/) ও ব্যবহার করতে পারেন।

তাহলে চলুন শুরু করা যাক।

## Initial Setup

প্রথমে আমরা `index.php` নামে একটি পিএইচপি ফাইল তৈরি করে এর ভিতরে একটি বেসিক HTML স্ট্রাকচার নিব যার ভিতরে একটি head ও body সেকশন থাকবে।

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>

  <body></body>
</html>
```

উপরোক্ত এইচটিএমএলের ইনিশিয়াল টেমপ্লেট-এর head সেকশনে [Bootstrap CDN](https://getbootstrap.com/docs/4.3/getting-started/download/#jsdelivr) টা লিংক করব।

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
  integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
  crossorigin="anonymous"
/>
```

অতঃপর আমরা ধাপে ধাপে এগোতে থাকব এবং [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction) ম্যানিপুলেশনের প্রক্রিয়াটা বাস্তবায়ন করব।

আমাদের index.php ফাইলের বর্তমান অবস্থাঃ

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossorigin="anonymous"
    />
    <title>Document</title>
  </head>

  <body></body>
</html>
```

এবার আমরা পরবর্তী ধাপ তথা ফর্ম তৈরি করব।

## প্রাথমিক এইচটিএমএল ফর্ম তৈরি{#build-first-html-form}

চলুন আমাদের index.php ফাইলের body সেকশনে একটি এইচটিএমএল ফর্ম তৈরি করি যেখানে প্রাথমিকভাবে বিভিন্ন রকম value প্রদানের‌‌‌ জন্য একটি input ফিল্ড থাকবে এবং তা submit করার জন্য একটি button থাকবে।

```html
<body>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <h2>Submit Form</h2>

        <form action="">
          <div class="form-group">
            <label for="inputValue">Enter Value:</label>
            <input
              type="text"
              name="inputValue"
              id="inputValue"
              class="form-control"
            />
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  </div>
</body>
```

### Attributes for form submission

পরবর্তী ধাপের আগে চলুন ফর্ম রিলেটেড কিছু গুরুত্বপূর্ণ বিষয় পরিষ্কার হয়ে নিই। আমরা যখন সাবমিট বাটনে ক্লিক করে কোন এইচটিএমএল ফর্ম সাবমিট করি ব্রাউজার তখন আমাদের নির্দেশিত কিছু গাইডলাইন অনুযায়ী ফর্ম সাবমিশন করে। আর সেই গাইডলাইনগুলো আমরা [ফর্ম এলিমেন্টের](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form) একাধিক [এট্রিবিউটের](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#attributes_for_form_submission) সাহায্যে দিতে পারি।

#### action Attribute

এদের মধ্যে একটি এট্রিবিউট রয়েছে [`action`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#action)। এই এট্রিবিউটের মাধ্যমে আমরা সাধারণত ফর্ম সাবমিশনের এড্রেস বা ঠিকানা নির্ধারণ করে থাকি। তাই এর ভ্যালু হিসেবে আমাদেরকে [URL](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL) প্রদান করতে হয়। যদি কোন ভ্যালু তথা URL প্রদান না করা হয়, যেমনঃ `action=""`, তখন যে ওয়েবপেজে অবস্থান করে ফর্মটি সাবমিট করা হয় সেখানেই তথা নিজের কাছেই ফর্মের ডাটাগুলো সাবমিট হয়। আর যদি কোন relative বা absolute URL দেয়া হয় যেমনঃ `action="/one.php"`, তখন সেই নির্দিষ্ট পেজটি অর্থাৎ one.php এভেলেবল থাকলে ফর্মটি তাতে সাবমিট হয়। নাহলে Not Found আউটপুট প্রদর্শন করে।

নিম্নোক্ত code লক্ষ্য করুন:

```html
<form action="/one.php">
  <div class="form-group">
    <label for="inputValue">Enter Value:</label>
    <input type="text" name="inputValue" id="inputValue" class="form-control" />
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
```

এখানে `one.php` নামে locally আমাদের কোন ফাইল নাই। তাই আমরা ব্রাউজারে Not Found দেখতে পাব। প্রমাণঃ

![Not Found Example](/public/not-found-page.png "Not Found Output")

#### method Attribute

আরেকটি এট্রিবিউট হল, `method`। যার মাধ্যমে আমরা সাধারণত ফর্ম সাবমিশনের প্রসেসটা নির্ধারণ করে থাকি। এই এট্রিবিউটের ভ্যালুগুলো মূলত একেকটি [**HTTP**](https://developer.mozilla.org/en-US/docs/Web/HTTP) method। যার মাধ্যমে আমরা ব্রাউজারকে ওয়েবে আমাদের ডাটাগুলো এক জায়গা থেকে আরেক জায়গায় কিভাবে ট্রান্সফার হবে সেই নির্দেশনা দিয়ে থাকি।

নিম্নোক্ত code লক্ষ্য করুন:

```html
<form action="" method="">
  <div class="form-group">
    <label for="inputValue">Enter Value:</label>
    <input type="text" name="inputValue" id="inputValue" class="form-control" />
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
```

এখানে আমরা সেই ভ্যালুগুলো থেকে ২টি ভ্যালু বা method [`GET`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/GET) এবং [`POST`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/POST) সম্পর্কে বিশেষভাবে জানার চেষ্টা করব। কারণ `method` এট্রিবিউটের ভ্যালু হিসেবে http method গুলোর মধ্যে এই ২টি method বা ভ্যালু অনুমোদিত আছে। তেমনি ব্রাউজারেও এই method দুটি বেশি ব্যবহৃত এবং প্রত্যাশিত হয়ে থাকে।

## GET Request/Method{#get-method}

এটি ফর্ম সাবমিশন প্রক্রিয়ার default পদ্ধতি। তাই আপনি যদি `method` এট্রিবিউট ব্যবহার না করেন, বা ব্যবহার করলেও কোন ভ্যালু সেট না করেন, অথবা ভ্যালু হিসেবে **GET** ই সেট করেন, যেমনঃ `method="GET"`; সবগুলোর ক্ষেত্রে প্রতিক্রিয়া একইরকম হবে। উল্লেখ্য, GET আপনি lowercase অর্থাৎ get ও লিখতে পারেন।

নিম্নোক্ত code লক্ষ্য করুন:

```html
<form action="" method="GET">
  <div class="form-group">
    <label for="inputValue">Enter Value:</label>
    <input type="text" name="inputValue" id="inputValue" class="form-control" />
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
```

কি সেই প্রতিক্রিয়া? সেটি হল, **GET Method** এর সাহায্যে ‍যখন কোন ডাটা ট্রান্সফার করা হয়, তখন সেই ডাটা কন্টেন্টগুলো ব্রাউজার **URL** বারে প্রদর্শিত হয়। যেমনঃ আমরা যদি আমাদের তৈরি করা input ফিল্ডে কোন ডাটা প্রদান করে সাবমিট করি তাহলে সেই ডাটার বিস্তারিত তথ্য আমরা ব্রাউজারের address বারে দেখতে পাব। প্রমাণঃ

আমাদের ইনপুটঃ

![input-data-sample-page](/public/input-data.png "Input Data Sample Page")

প্রাপ্ত আউটপুটঃ

![output-on-get-method](/public/get-method-output-on-url.png "GET method output on the URL")

আউটপুটের '?' প্রশ্নবোধক চিহ্নের পরবর্তী অংশগুলো দেখুন। আমরা সেখানে `inputValue=This+is+an+input.` এমন আউটপুট দেখতে পাচ্ছি। `inputValue` এই ডাটাটা এসেছে ফর্মের ইনপুট এলিমেন্টের `name` এট্রিবিউট থেকে। মনে আছে? ভুলে গেলে এইচটিএমএল কোডটা আবার চেক করুন। এরপরে আমরা দেখতে পাচ্ছি ইকুয়াল সাইন '=' এবং শেষে আমাদের ইনপুট দেয়া ডাটা।

যদি আপনার মনে প্রশ্ন জাগে, '+' বা যোগচিহ্ন কেন ভ্যালুর ভিতরে। আমরা তো কোন যোগচিহ্ন দেইনি। উত্তর হল, **URL** এর ভেতর স্পেস অনুমোদিত নয়। কিন্তু আমরা তো ডাটাগুলো স্পেস দিয়ে বিন্যাস করে তারপর সাবমিট করেছি। ফলে সেই স্পেসগুলো যোগচিহ্ন দ্বারা পরিবর্তিত হয়েছে।

এখন, এই **GET Method**-এ GET ভ্যালুটি ডিফল্ট ভ্যালু হওয়ার অর্থ কিন্তু এই নয় যে, সবসময় আপনি এটাই ব্যবহার করবেন। বরং ডাটা ট্রান্সফারকালীন এই মেথড ব্যবহারে সমস্যা হওয়ার সমূহ সম্ভাবনা আছে। এরমধ্যে বিশেষভাবে বললে এই মেথডের সাহায্যে ডাটা ট্রান্সফার করলে ডাটার সিকিউরিটি বা নিরাপত্তা লংঘনের ঝুঁকি অনেক বেশি থাকে। এছাড়াও এসকিউএল ইনজেকশনসহ ডাটা চুরির বিভিন্ন মাধ্যম ব্যবহার করে দুষ্টপ্রকৃতির লোকেরা বা হ্যাকাররা আপনার ডাটার এক্সেস পেয়ে যেতে পারে। তাই এই মেথড ভেবেচিন্তে ঠিক তখনই ব্যবহার করা উচিত যখন আপনার [ফর্ম ডাটাগুলোর কোন সাইড ইফেক্ট](https://developer.mozilla.org/en-US/docs/Glossary/Idempotent) নাই।

তাহলে উপায়? চলুন দেখি।

## POST Request/Method{#post-method}

ডাটা ট্রান্সফার করার নিরাপদ এবং গ্রহণযোগ্য মেথড হল **POST Method**। কারণ এই মেথডে প্রেরিত ডাটাগুলো এইচটিএমএল হেডার এলিমেন্টের ভেতর সংরক্ষিত হয়ে [request body](https://developer.mozilla.org/en-US/docs/Web/API/Request/body) আকারে ট্রান্সফার হয়। ফলে ডাটার নিরাপত্তা ঝুঁকি অনেকাংশে কমে যায়। ফলে এই ডাটাগুলো কিন্তু ব্রাউজারের address বারে আর প্রদর্শিত হয়না।

```html
<form action="" method="POST">
  <div class="form-group">
    <label for="inputValue">Enter Value:</label>
    <input type="text" name="inputValue" id="inputValue" class="form-control" />
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
```

এদুটি ছাড়াও ডাটা প্রেরণের আরো কিছু মেথড আছে। যেমনঃ **PUT, PATCH, DELETE**। মনে রাখবেন, এইচটিএমএল ফর্মের মাধ্যমে ডাটা ট্রান্সফার করলে শুধুমাত্র **GET** এবং **POST** এই দুটি মেথড ব্যবহার করতে পারবেন। কারণ, এদুটি এইচটিএমএল অনুমোদিত value, আগেও বলেছি।

**PUT, PATCH, DELETE** মেথডগুলো এইচটিএমএল অনুমোদিত ভ্যালু নয়। তাই ব্রাউজার একটি এইচটিএমএল ফর্মের মেথড এট্রিবিউটের ক্ষেত্রে সহজাতভাবে শুধুমাত্র **GET** এবং **POST** মেথডকেই চেনে। অন্য মেথডগুলো সাধারণত [**AJAX call**](https://stackoverflow.com/questions/33074877/why-a-browser-only-supports-get-and-post-http-methods) এর ক্ষেত্রে সাপোর্টেড। তাই সেগুলোর সাপোর্ট ফর্মের ভ্যালুতে পেতে বা ব্রাউজারে এক্সেস করতে গেলে হিডেন ইনপুট এলিমেন্ট ব্যবহার করে সেখানে মেথডগুলো প্রদান করা হয়।

## PUT, PATCH, DELETE Method{#put-patch-delete-method}

চলুন এই মেথডগুলোর পরিচিতি জানার চেষ্টা করি।

**PUT Method** সাধারণত সার্ভারে থাকা কোন রিসোর্স আপডেট করতে ব্যবহৃত হয়। এই মেথডটি একবারে পুরো রিসোর্সটাকেই আপডেট করে। তার মাধ্যমে রিসোর্সের কোন অংশ বা ভাগ আপডেট করা সম্ভব নয়।

**PATCH Method** সার্ভারে থাকা কোন রিসোর্সের পার্টিকুলার অংশ বা পোর্শন আপডেট করতে যেমনিভাবে ব্যবহৃত হয়, তেমনি একবারে পুরো রিসোর্স আপডেট করতেও ব্যবহৃত হয়।

উপরোক্ত পরিচিতিদ্বয় বুঝে থাকলে আশা করি আপনি উভয়ের ভেতরের পার্থক্য বুঝতে পেরেছেন। তবুও পরিষ্কার করি, **PUT** একসাথে পুরো রিসোর্স আপডেট করে, ভাঙা অংশ আপডেট করেনা। আর **PATCH** উভয়টাই আপডেট করে।

**DELETE Method** সার্ভারে থাকা কোন রিসোর্স ডিলিট করতে ব্যবহৃত হয়। এখানে [সংক্ষিপ্ত পরিচিতি](https://dev.to/qbentil/http-methods-get-post-put-patch-delete-1fhi) তুলে ধরা হয়েছে। বিস্তারিত জানতে গুগল করুন।

**নোটঃ** এইচটিএমএল ফর্মের মেথড এট্রিবিউটের ভ্যালু হিসেবে উপরোক্ত সমস্ত মেথড বা রিকুয়েস্টগুলো দুইভাবে লেখা যায়। ক্যাপিটাল লেটার বা বড় অক্ষরে, স্মল লেটার বা ছোট অক্ষরে। অর্থাৎ ভ্যালুগুলো কেইস-সেন্সিটিভ নয়। আমরা এই ক্লাসে ক্যাপিটাল লেটারে লিখব।

যেহেতু, PUT, PATCH, DELETE মেথডগুলো এইচটিএমএল অনুমোদিত ভ্যালু নয় এবং ব্রাউজার চেনে না বা Read করতে পারে না। তাই ব্রাউজারকে চিনিয়ে দেয়ার জন্য একটি এইচটিএমএল ফর্মের ভিতরে হিডেন ভ্যালুসহ একটি Input ফিল্ড নিয়ে সেখানে PUT, PATCH, DELETE প্রয়োজনমত যেকোন একটি বসিয়ে কাজ করতে হয়।

নিম্নোক্ত code লক্ষ্য করুন:

```html
<form action="" method="POST">
  <input type="hidden" name="PUT/PATCH/DELETE" />
  <div class="form-group">
    <label for="inputValue">Enter Value:</label>
    <input type="text" name="inputValue" id="inputValue" class="form-control" />
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
```

## Form Data Retrieval

ফর্ম সাবমিট করে আমরা তো ডাটাগুলো পাঠাতে সক্ষম হয়েছি, তাইনা। এবার আমরা প্রেরিত ডাটাগুলো পিএইচপির সাহায্যে উদ্ধার করার প্রক্রিয়া জানব।

একই ফাইলে এইচটিএমএল এবং পিএইচপি লেখার ক্ষেত্রে সাধারণত সবাই প্রথমে `<?php ?>` ট্যাগের ভেতরে পিএইচপি code গুলো লেখে, অতঃপর এইচটিএমএল syntax গুলো নিচে লেখে। আপনিও এভাবে লিখতে পারেন।

নিম্নোক্ত code লক্ষ্য করুন:

```php
<?php

//All php code goes here.

?>
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossorigin="anonymous"
    />
    <title>Document</title>
  </head>

  <body></body>
</html>
```

সহজে বোঝা এবং উপস্থাপনের সুবিধার্থে আমরা অবশ্য এইচটিএমএল syntax এর পাশাপাশি পিএইচপি code লিখে যাব।

তাহলে চলুন শুরু করা যাক। আমরা ফর্ম এলিমেন্টের close ট্যাগ অর্থাৎ `</form>`-এর পর পিএইচপি code লেখা শুরু করছি।

নিম্নোক্ত code লক্ষ্য করুন:

```html
<form action="" method="POST">
  <input type="hidden" name="PUT/PATCH/DELETE" />
  <div class="form-group">
    <label for="inputValue">Enter Value:</label>
    <input type="text" name="inputValue" id="inputValue" class="form-control" />
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>

<?php

//All php code goes here.

?>
```

ফর্মের মাধ্যমে প্রেরিত ডাটাগুলো উদ্ধার করার জন্য আমরা পিএইচপির কিছু বিল্ট-ইন ফিচার ব্যবহার করব। পিএইচপির ভাষায় একে [**superglobal variables**](https://www.php.net/manual/en/language.variables.superglobals.php#refsect1-language.variables.superglobals-description) বলে। চলুন আমাদের ক্লাস সম্পর্কিত variable গুলো সম্পর্কে জানি।

## $\_GET — HTTP GET{#GET-HTTP-GET}

[`$_GET`](https://www.php.net/manual/en/reserved.variables.get.php) পিএইচপির একটি **Predefined Variable**। একে [**Superglobal**](https://www.php.net/manual/en/language.variables.superglobals.php) ভ্যারিয়েবলও বলা হয়। এটি একটি অ্যাসোসিয়েটিভ অ্যারে। যার মধ্যে কারেন্ট স্ক্রিপ্টের **URL parameter** বা অন্য ভাষায় **query string** এর মাধ্যমে প্রেরিত ডাটাগুলো key-value আকারে সেট করা থাকে।

যেখানে এইচটিএমএল এলিমেন্টভেদে `name` এট্রিবিউটের মধ্যে দেয়া value টা key হিসেবে সার্ভ হয় এবং এলিমেন্টে ইনপুট দেয়া value টা ঐ key এর value হিসেবে সার্ভ হয়। যেমনঃ আমাদের ফর্মটির ইনপুট এলিমেন্টের `name` এট্রিবিউটে value আছে `inputValue`। এইচটিএমএলঃ

```html
<input type="text" name="inputValue" id="inputValue" class="form-control" />
```

এই এলিমেন্ট ফিল্ডে ইনপুট দেয়া value টা আমরা পিএইচপির `$_GET` অ্যাসোসিয়েটিভ অ্যারে সদৃশ ভ্যারিয়েবলের সাহায্যে এক্সেস করতে পারি। সেক্ষেত্রে ফর্মের মেথড এট্রিবিউটে value হিসেবে অবশ্যই **GET** রিকুয়েস্ট ব্যবহার করতে হবে। এইচটিএমএলঃ

```html
<form action="" method="GET">
  <div class="form-group">
    <label for="inputValue">Enter Value:</label>
    <input type="text" name="inputValue" id="inputValue" class="form-control" />
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
```

এটাকে যদি আমরা `var_dump()` করি, উদাহরণঃ

```php
// display submitted value
<?php
  var_dump($_GET['inputValue']);
?>
```

তাহলে এইমুুুহুর্তে আউটপুট পাব NULL । কারণ আমরা ইনপুট হিসেবে কোন value প্রদান করিনি। কিন্তু যদি আমরা value প্রদান করি যেমনঃ `I'm giving an input.`, তাহলে কি দেখতে পাব? উদাহরণ দেখিঃ

```
string(20) "I'm giving an input."
```

এমনিভাবে এই মেথডের ক্ষেত্রে আমরা **URL** address বারে '?' প্রশ্নবোধক চিহ্নের পর কোন একটি নাম দিয়ে (যেমনঃ `name`) অতঃপর '=' সমান চিহ্ন দিয়ে যদি কোন value সেট করি (যেমনঃ `Learn-Form-Manipulation`) তখনও অ্যাসোসিয়েটিভ অ্যারের key হিসেবে name সার্ভ হবে এবং value হিসেবে Learn-Form-Manipulation সার্ভ হবে।

URL parameter পরিবর্তনের নমুনাঃ http://localhost:3000/php/index.php?name=Learn-Form-Manipulation। উল্লেখ্য, পূর্বেই বলেছি যে URL এর ভেতর স্পেস অনুমোদিত নয়। তাই আমরা ডাটা বা value র স্পেসগুলো '-' হাইফেন দিয়ে ফিল করে দিয়েছি। চাইলে অন্য কোন চিহ্ন দিয়েও করা যেতে পারে। যেমনটি পূর্বের এক উদাহরণে আমাদের সাবমিট করা value র স্পেসগুলো ব্রাউজারের URL address বারে যোগচিহ্ন দ্বারা পরিবর্তিত হয়েছে।
প্রাপ্ত ফলাফলঃ

```
string(23) "Learn-Form-Manipulation"
```

## $\_POST — HTTP POST{#POST-HTTP-POST}

$_GET অ্যাসোসিয়েটিভ অ্যারের মত [$\_POST](https://www.php.net/manual/en/reserved.variables.post.php) ও একটি অ্যাসোসিয়েটিভ অ্যারে সদৃশ পূর্ব-নির্ধারিত ভ্যারিয়েবল বা সুপারগ্লোবাল ভ্যারিয়েবল।

এই ভ্যারিয়েবলের সাহায্যে ফর্মের মাধ্যমে প্রেরিত ডাটা এক্সেস করতে হলে মেথড এট্রিবিউট হিসেবে **POST** সেট করতে হবে। এইচটিএমএলঃ

```html
<form action="" method="POST">
  <div class="form-group">
    <label for="inputValue">Enter Value:</label>
    <input type="text" name="inputValue" id="inputValue" class="form-control" />
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
```

ডাটাগুলো যখন **HTTP POST** মেথডের সাহায্যে ট্রান্সফার হয়, তখন ফর্ম এলিমেন্টে [`enctype`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#enctype) এট্রিবিউটটি এভেলেবল হয়। এই এট্রিবিউটের মাধ্যমে প্রেরিত ডাটার টাইপ নির্ধারণ করে দেয়া যায়। যাকে **HTTP Content-Type** ও বলতে পারি। এট্রিবিউটটির value হিসেবে `application/x-www-form-urlencoded` অথবা `multipart/form-data` দিয়ে যে ডাটাগুলো প্রেরিত হয়, **$\_POST** অ্যাসোসিয়েটিভ অ্যারে সদৃশ ভ্যারিয়েবলে সেই ডাটাগুলো ঠিক $\_GET ভ্যারিয়েবলের মত key-value আকারে স্টোর হয় এবং সেভাবে তাকে এক্সেসও করা যায়। উদাহরণঃ

```php
// display submitted value
<?php
  var_dump($_POST['inputValue']);
?>
```

ইনপুট ফিল্ডে কোন ইনপুট না দেয়া অবস্থায় `NULL` আউটপুট পাব। যদি কোন ডাটা ইনপুট দেই, যেমনঃ `This is a POST Input`, তখন কি আউটপুট পাব দেখিঃ

```
string(20) "This is a POST Input"
```

## $\_REQUEST — HTTP Request{#REQUEST-HTTP-Request}

$\_GET এবং $\_POST এর মতই এটাও একটি অ্যাসোসিয়েটিভ অ্যারে সদৃশ সুপার গ্লোবাল ভ্যারিয়েবল। $\_GET, $\_POST এবং [$\_COOKIE](https://www.php.net/manual/en/reserved.variables.cookies.php) সর্বমোট এই তিনটি ভ্যারিয়েবলের কন্টেন্ট বা ডাটা এক্সেস করতে [$\_REQUEST](https://www.php.net/manual/en/reserved.variables.request.php) গ্লোবাল ভ্যারিয়েবলটি ব্যবহার করা যেতে পারে।

যেহেতু ফর্মে এই মুহুর্তে আমরা POST মেথড ব্যবহার করছি। প্রমাণঃ

```html
<form action="" method="POST">
  <div class="form-group">
    <label for="inputValue">Enter Value:</label>
    <input type="text" name="inputValue" id="inputValue" class="form-control" />
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
```

ইনপুট ফিল্ডে একটি ডাটা ইনপুট দিয়ে আমরা সেটা $\_REQUEST ভ্যারিয়েবলের মাধ্যমে এক্সেস করার চেষ্টা করি। উদাহরণঃ

```php
// display submitted value
<?php
  var_dump($_REQUEST['inputValue']);
?>
```

আমাদের ইনপুটঃ `This is a Request Input`। আউটপুটঃ

```
string(23) "This is a Request Input"
```

এই ভ্যারিয়েবলের ক্ষেত্রে ফর্ম মেথড GET বা POST যেকোনোটি হতে পারে।

## ‍HTTP ডাটা ট্রান্সফার মেথড দেখা{#find-http-transfer-method}

আপনার এপ্লিকেশন সার্ভারের সাথে কোন HTTP Method এর সাহায্যে ডাটা ট্রান্সফার করছে সেটা জানার প্রয়োজন হলে আমাদের আরো একটি অ্যাসোসিয়েটিভ অ্যারে সদৃশ সুপার-গ্লোবাল ভ্যারিয়েবলের সাহায্য নিতে হয়। তার নাম, [`$_SERVER`](https://www.php.net/manual/en/reserved.variables.server.php)।

কোন মেথডে ডাটা ট্রান্সফার হচ্ছে জানতে **$\_SERVER** অ্যারেতে অ্যাসোসিয়েটিভ অ্যারের ডাটা এক্সেস করার পদ্ধতি এপ্লাই করতে হবে। key হিসেবে পিএইচপির আগে থেকে নির্ধারণ করা একটি key `REQUEST_METHOD` প্রদান করতে হবে। যেমনঃ

```php
<?php
  var_dump($_SERVER['REQUEST_METHOD']);
?>
```

যেহেতু আমাদের ফর্মে এইমুহুর্তে ডাটা ট্রান্সফার হচ্ছে POST মেথডে, তাই আমরা ভ্যালু হিসেবে সেটাই দেখতে পাব। উদাহরণঃ

```
string(4) "POST"
```

এবার আসুন আমরা উপরোক্ত শিক্ষাকে কাজে লাগিয়ে আমাদের দেয়া ইনপুটগুলোকে DOM Manipulation এর সাহায্যে এইচটিএমএল পেইজে দেখানোর চেষ্টা করি।

## htmlspecialchars() Function

তার আগে আমরা একটি ফাংশন সম্পর্কে জানি। ফাংশনটির নামঃ [`htmlspecialchars()`](https://www.php.net/manual/en/function.htmlspecialchars)। এটি একটি স্ট্রিং সম্পর্কিত ফাংশন। এর কাজ হল, এইচটিএমএলের ভেতর যে সকল ক্যারেক্টারগুলো স্পেশাল হিসেবে বিবেচিত, যেমনঃ `< > / '' "" &` ইত্যাদি; যেগুলো এইচটিএমএলের syntex ক্যারেক্টার হিসেবেও ধর্তব্য সেগুলোকে এইচটিএমএল entity তে কনভার্ট করা। ফলে কখনো যদি আপনার এমন প্রয়োজন হয় যে, এইচটিএমএল code ব্রাউজার সরাসরি পার্স না করে বরং স্ট্রিং আকারে return করবে তখন এই ফাংশনটি ব্যবহার করতে পারেন।

যেমন ধরুন আপনার টেক্সট আকারে এইচটিএমএল code দেখানোর প্রয়োজন হল। এখন এইচটিএমএল code স্ট্রিং আকারে লিখে যদি কোন ভ্যারিয়েবলে স্টোর করি এবং `echo` দিয়ে সেটা print করি তাহলে কি আমাদের প্রয়োজন পূর্ণ হবে? চলুন দেখিঃ

```php
<?php
  $new = "<a href='test'>Test</a>";

  // browser will execute the code and treat it like HTML code
  echo $new;
?>
```

আউটপুটঃ

![HTML-Code-Execution-Output](/public/html-special-chars-execution.png "HTML anchor tag got executed")

দেখতে পাচ্ছি, আমাদের উদ্দেশ্য পূরণ হয়নি। বরং ব্রাউজার code টাকে এইচটিএমএল হিসেবে বিবেচনা করে এক্সিকিউট করে ফেলেছে। এবার `htmlspecialchars()` ফাংশন ব্যবহার করে দেখি আমাদের উদ্দেশ্য পূরণ হয় কিনা। উদাহরণঃ

```php
<?php
  $new = htmlspecialchars("<a href='test'>Test</a>");

  echo $new; // &lt;a href=&#039;test&#039;&gt;Test&lt;/a&gt;
?>
```

Terminal আউটপুটঃ

```
&lt;a href=&#039;test&#039;&gt;Test&lt;/a&gt;
```

Browser আউটপুটঃ

```
<a href='test'>Test</a>
```

প্রমাণঃ

![HTML-Special-Chars-Executed](/public/html-special-chars-executed-success.png "HTML code to string conversion success")

ইনপুট ফিল্ড থেকে প্রাপ্ত ডাটাগুলোর ক্ষেত্রে এখন থেকে আমরা এই ফাংশনটি ব্যবহার করব।


[Edit This Page](https://github.com/polashmahmud/php/edit/main/docs/class-07.md)