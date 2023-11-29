# পিএইচপির সাহায্যে এইচটিএমএল ফর্ম ম্যানিপুলেশন

বিগত ৬টি ক্লাসে আমরা পিএইচপির ফান্ডামেন্টাল বা বুনিয়াদি কনসেপ্টগুলো সম্পর্কে ধারণা নিয়েছি। [ডাটা স্ট্রাকচার](/class-01.html#types-of-data-in-php), [পিএইচপি অপারেশন](/class-02.html#পিএইচপি-অপারেশন-এবং-এক্সপ্রেশন), [কন্ট্রোল স্ট্রাকচার](/class-03.html), [ফাংশনাল প্রোগ্রামিং](/class-04.html#understanding-functional-php-and-scope) সহ [Array পরিচিতি](class-05.html#পিএইচপি-array-পরিচিতি-ও-অপারেশন) এবং [Array ফাংশন](/class-06.html#পিএইচপি-array-ভিত্তিক-প্রয়োজনীয়-কিছু-ফাংশন) ইত্যাদি সম্পর্কে বিস্তর ধারণা আমরা পেয়েছি।

এবার আসুন এই ধারণাগুলোকে আরো সমৃদ্ধ করি এবং এর রিয়াল ওয়ার্ল্ড ব্যবহার জানার চেষ্টা করি। পূর্ববর্তী ক্লাসগুলোতে শেখা কনসেপ্ট বা থিওরিগুলোকে প্রাকটিক্যালি কিভাবে ব্যবহার করা যায় এখন থেকে সেটা জানার চেষ্টা করি। তাই এই ক্লাসে আমরা পিএইচপির সাহায্যে এইচটিএমএল [DOM (Document Object Model)](https://dom.spec.whatwg.org/) ম্যানিপুলেশনের একটি প্রক্রিয়া দেখব। যেখানে আমরা একটি এইচটিএমএল ফর্ম তৈরি করে ইউজার থেকে বিভিন্ন রকমের ইনপুট নেয়ার চেষ্টা করব। অতঃপর সেই ইনপুটগুলো বিভিন্ন রকম শর্তারোপের ভিত্তিতে এইচটিএমএল পেজে দেখানোর চেষ্টা করব।

এই প্রক্রিয়া সম্পন্ন করতে আমরা খুবই পাওয়ারফুল একটি সিএসএস ফ্রেমওয়ার্ক [Bootstrap](https://getbootstrap.com/) টুলটির সাহায্য নিব। নিজস্ব সীমাবদ্ধতার কারণে আমরা স্পেসিফিকভাবে [Bootstrap version 4.3.1](https://getbootstrap.com/docs/4.3/getting-started/introduction/) ব্যবহার করব। তবে যদি Bootstrap সম্পর্কে আপনার ধারণা থাকে, আপনি চাইলে লেটেস্ট ভার্সনটাও ব্যবহার করতে পারেন। অথবা অন্য কোন ফ্রেমওয়ার্ক যেমন [Tailwind CSS](https://tailwindcss.com/) অথবা শুধু [Raw CSS](https://www.w3schools.com/Css/) ও ব্যবহার করতে পারেন।

তাহলে চলুন শুরু করা যাক।

## Initial Setup

প্রথমে আমরা `index.html` নামে একটি ফাইল তৈরি করব।

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

সেখানে এইচটিএমএলের ইনিশিয়াল টেমপ্লেট বসাব এবং [Bootstrap CDN](https://getbootstrap.com/docs/4.3/getting-started/download/#jsdelivr) টা লিংক করব।

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
  integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
  crossorigin="anonymous"
/>
```

অতঃপর আমরা ধাপে ধাপে এগোতে থাকব এবং [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction) ম্যানিপুলেশনের প্রক্রিয়াটা বাস্তবায়ন করব।

আমাদের ইনডেক্স ফাইলের বর্তমান অবস্থাঃ

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

চলুন একটি এইচটিএমএল ফর্ম তৈরি করি।

```html
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
```
