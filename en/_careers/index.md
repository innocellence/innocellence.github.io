---
title: Join Us | Careers at InnoCellence
lang: en
section: careers
summary: 
---
<!--
<section class="full">
  <div class="container">
    <div class="row">
      <div class="col-t3 col-m5 col-l8">
        <h5 class="section-title">Ready to innovate?</h5>
        <h2>We're the Digital Solutions partner you're looking for.</h2>
      </div>
      <div class="col-t3 col-m3 col-l4">
        <img src="{{ site.baseurl }}/assets/img/contact/contact_partner.png">
      </div>
    </div>
  </div>
</section>
-->

<section class="grid">
  <div class="container">
    <h5 class="section-title">Job Listings</h5>
  
  <a href="javascript:void(0)" class="grid-item">
    <div class="grid-item-container">
      <div class="grid-item-text static">
        <h3><span>Solution&nbsp;Architect</span></h3>
        <p class="excerpt"><span>If you’re a UX designer, you’ve probably designed a lot of forms and web (or app) pages.</span></p>
        <p class="read-more"><span>Apply Now &raquo;</span></p>
       </div>
    </div>
  </a>
</div>
</section>


{% include module-careers.html %}

<section class="contact" name="contact" id="contact-form">
  <div class="container">
    <h5 class="section-title">Apply</h5>
    <form action="https://formspree.io/market@innocellence.com" method="POST" id="application-form">
      
      <label for="name"><span>Name</span><div class="message"><i class="fa fa-exclamation-circle">&nbsp;</i>Must contain at least 3 characters</div>
      </label>
      <input type="text" name="name" id="contact-form-name" class="validate-input" minlength="3" required>
      
      <label for="email"><span>Email</span><div class="message"><i class="fa fa-exclamation-circle">&nbsp;</i>Please enter a valid email address</div>
      </label>
      <input type="email" name="_replyto" id="contact-form-email" class="validate-input" required>
                
      <label for="position"><span>Position</span><div class="message"><i class="fa fa-exclamation-circle">&nbsp;</i>Please note the position you are applying for</div>
      </label>
      <input type="text" name="position" id="contact-form-position" class="validate-input" minlength="3" required>
      
      <label for="bio"><span>Bio</span><div class="message"><i class="fa fa-exclamation-circle">&nbsp;</i>Please tell us why you are suitable for this position (max 400 characters)</div>
      </label>
      <textarea name="bio" id="contact-form-bio" maxlength="400" required></textarea>
      
      <label for="url"><span>URL</span><div class="message"><i class="fa fa-exclamation-circle">&nbsp;</i>Please provide a valid link to your website or online profile</div>
      </label>
      <input type="url" name="url" id="contact-form-url" required>
      
      <label for="resume"><span>Resume</span><div class="message"><i class="fa fa-exclamation-circle">&nbsp;</i>Please provide a valid link to your resume</div>
      </label>
      <input type="url" name="resume" id="contact-form-resume" required>
      
      <input type="submit" value="Submit">
      <input type="hidden" name="_next" value="{{ site.baseurl }}/en/contact/thank-you.html" />
      <input type="text" name="_gotcha" style="display:none" />
      <p>By submitting this form you agree to our <a href="{{ site.baseurl }}/en/corporate/terms.html">Terms &amp; Conditions</a> and <a href="{{ site.baseurl }}/en/corporate/privacy.html">Privacy Policy</a>.</p>
    </form>
  </div>
</section>

<script>
/* Get Posts */
jQuery(document).ready(function () {
  $.get(
    ghost.url.api('posts', {
      filter: "tags:[seo]"
      // image:"-null",
      // status: draft
    })
  ).done(onSuccess);
});
</script>