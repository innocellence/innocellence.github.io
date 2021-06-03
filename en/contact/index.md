---
title: Contact Us
lang: en
section: contact
summary: Need an agency that can deliver innovative digital solutions customized to your company’s requirements? Then InnoCellence is the creative partner for you.
redirect_from:
  - /d/en/contact/index.html
  - /d/en/contact/
---
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
<section>
  <div class="container">
    <div class="row">
     <p class="centered">We have a fantastic track record of delivering <strong>best-in-class service</strong> to Fortune 500 companies — so imagine what we can do for your business.</p>
      <div class="col-m4 col-l6">
        <div class="col-t3 col-m4 col-l6">
          <img src="{{ site.baseurl }}/assets/img/contact/01.png">
          <p>We deliver <strong>customized digital solutions</strong> and <strong>strategies</strong>, not cookie-cutter products</p>
        </div>
        <div class="col-t3 col-m4 col-l6">
          <img src="{{ site.baseurl }}/assets/img/contact/02.png">
          <p>We conduct independent <strong>market research</strong> to understand your business needs</p>
        </div>
      </div>
      <div class="col-m4 col-l6">
        <div class="col-t3 col-m4 col-l6">
          <img src="{{ site.baseurl }}/assets/img/contact/03.png">
          <p>We <strong>measure</strong> and <strong>analyze customer feedback</strong> to maximize business results</p>
        </div>
        <div class="col-t3 col-m4 col-l6">
          <img src="{{ site.baseurl }}/assets/img/contact/04.png">
          <p>We provide <strong>full-service digital solutions</strong> with our <strong>in-house digital specialists</strong></p>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="contact" name="contact" id="contact-form">
  <div class="container">
    <h5 class="section-title">Contact Us</h5>
    <form action="https://formspree.io/market@innocellence.com" method="POST" id="contact-form">
      <label for="name"><span>Name</span><div class="message"><i class="fa fa-exclamation-circle">&nbsp;</i>Must contain at least 3 characters</div>
      </label>
      <input type="text" name="name" id="contact-form-name" class="validate-input" minlength="3" required>
      <label for="email"><span>Email</span><div class="message"><i class="fa fa-exclamation-circle">&nbsp;</i>Please enter a valid email address</div>
      </label>
      <input type="email" name="_replyto" id="contact-form-email" class="validate-input" required>
      <label for="subject"><span>Subject</span><div class="message"><i class="fa fa-exclamation-circle">&nbsp;</i>Must contain at least 3 characters</div>
      </label>
      <input type="text" name="subject" id="contact-form-subject" class="validate-input" minlength="3" required>
      <label for="message"><span>Message</span><div class="message"><i class="fa fa-exclamation-circle">&nbsp;</i>Message required</div>
      </label>
      <textarea name="message" id="contact-form-message" required></textarea>
      <input type="submit" value="Submit">
      <input type="hidden" name="_next" value="{{ site.baseurl }}/en/contact/thank-you/" />
      <input type="text" name="_gotcha" style="display:none" />
      <p>By submitting this form you agree to our <a href="{{ site.baseurl }}/en/corporate/terms/">Terms &amp; Conditions</a> and <a href="{{ site.baseurl }}/en/corporate/privacy/">Privacy Policy</a>.</p>
    </form>
  </div>
</section>

<section class="map">
  <div class="map-inner">
    <div class="map-card">
      <div id="singapore" class="map-card-container active">
        <div class="map-card-text">
          <h4>Singapore</h4>
          <p class="tel">T&#58; +65-6222-6959</p>
          <p class="fax">F&#58; +65-6222-6950</p>
          <a href="mailto:info@innocellence.com" class="email">info@innocellence.com</a>
          <p class="street-address">24 Peck Seah Street #05-01</p>
          <p class="building-name">Nehsons Building</p>
          <p class="postal-code">Singapore 079314</p>
        </div>
        <div id="map_canvas_singapore" class="map-area"></div>
      </div>
    </div>
    <div class="map-card">
      <div id="dalian" class="map-card-container">
        <div class="map-card-text">
          <h4>Dalian</h4>
          <p class="tel">T&#58; +86-411-6683-8010</p>
          <a href="mailto:info@innocellence.com" class="email">info@innocellence.com</a>
          <p class="street-address">#11-05, Block 2,</p>
          <p class="street-address">Dalian Ascendas IT Park</p>
          <p class="street-address">No.7 Hui Xian Yuan,</p>
          <p class="building-name">Dalian Hi-tech Industrial Zone</p>
          <p class="postal-code">LN 116025, P.R.C</p>
        </div>
        <div id="map_canvas_dalian" class="map-area"></div>
      </div>
    </div>
    <div class="map-card">
      <div id="tokyo" class="map-card-container">
        <div class="map-card-text">
          <h4>Tokyo</h4>
          <p class="tel">T&#58; +81 (0)3-5326-3124</p>
          <a href="mailto:info@innocellence.com" class="email">info@innocellence.com</a>
          <p class="building-name">新宿パークタワーＮ棟30階</p>
          <p class="street-address">東京都新宿区西新宿3-7-1</p>
          <p class="postal-code">〒163-1030</p>
        </div>
        <div id="map_canvas_tokyo" class="map-area"></div>
      </div>
    </div>
  </div>
</section>