---
title: The Blog
category: blog
lang: en
exclude: true
---
<section class="cards">
  <div class="container">
    <form action="https://formspree.io/jacob.tan@innocellence.com"
          method="POST">
        <label for ="name">Name</label>
        <input type="text" name="name">
        <label for ="email">Email</label>
        <input type="email" name="_replyto">
        <label for ="message">Message</label>
        <textarea name="message"></textarea>
        <input type="submit" value="Send">
        <input type="hidden" name="_next" value="http://blog.innocellence.com" />
        <input type="text" name="_gotcha" style="display:none" />

    </form>
  </div>
</section>


<section class="subscribe">
  <div class="subscribe_message">
    <img src="{{ site.baseurl }}/blog/images/like.png">
    <div class="intro">
      <h1 class="mw">Thank You for Your Enquiry</h1>
      <p>We’ll get in touch with you as soon as possible. In the meantime, check out the <a href = "http://blog.innocellence.com/">InnoCellence Blog</a> for more valuable content</p>
    </div>
  </div>
</section>
