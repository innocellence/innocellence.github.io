# EXECUTE UPDATE USING

# Import Webflow files

- Export and unzip Webflow package
- Replace all files in /qa directory
- Jekyll related files (README, _config, etc.) will not be affected


# Convert to Jekyll

- Active Regular Expressions ('.*' Button)
- Find: <!DOCTYPE html><!--  This site was created in Webflow. http://www.webflow.com  -->
- Replace: ---\n---\n<!DOCTYPE html>
- Folders: qa, !qa/css, !qa/js, !qa/_site, !*README.md, !*sitemap.xml


# Replace Webflow .html links  

- Folders: qa, !qa/css, !qa/js, !qa/_site, !*README.md, !*sitemap.xml
- Active Regular Expressions ('.*' Button)
- Execute the following sequence:

1. Find all hrefs ending with .html (group 2)

    href="(\S*?)(.html)"

2. Replace href value - remove group 2 add a '/' to the start

    href="{{ site.baseurl }}$1"

3. Find all href values of 'index'

    href="{{ site.baseurl }}index"

4. Replace value with single '/'

    href="{{ site.baseurl }}"


# Set Absolute urls

- Folders: qa, !qa/css, !qa/js, !qa/_site, !*README.md, !*sitemap.xml
- Deactivate Regular Expressions ('.*' Button)
- Find: {{ site.baseurl }}../
- Replace: {{ site.baseurl }}

## Absolute Assets
- Find: ../
- Replace: {{ site.baseurl }}

## Absolute CSS

- Find: <link href="css/
- Replace: <link href="{{ site.baseurl }}css/

## Absolute JS

- Find: <script src="js/
- Replace: <script src="{{ site.baseurl }}js/

## Absolute Documents

- Find: data-src="documents/
- Replace: data-src="{{ site.baseurl }}documents/

- Find: <a href="documents/
- Replace: <a href="{{ site.baseurl }}documents/


## Absolute Images

- Find: src="images/
- Replace: src="{{ site.baseurl }}images/

- Find: <link href="images/
- Replace: <link href="{{ site.baseurl }}images/

- Find: srcset="images/
- Replace: srcset="{{ site.baseurl }}images/

- Active Regular Expressions ('.*' Button)
- Find: \simages/
- Replace: {{ site.baseurl }}images/


# Remove Scripts

- Remove all custom scripts at end of <body>
- Starting from, and including Moment.js <script>...</script>
- Replace with {% include scripts.html %}
- Update contents of the include /_includes/scripts.html


# Reapply 'redirects'

- Add: redirect_from:
         - old url

"/d/cn/about/": "http://localhost:8888/cn/about/",
"/d/en/about/": "http://localhost:8888/about/",
"/d/en/contact/": "http://localhost:8888/contact/",
"/d/cn/contact/": "http://localhost:8888/cn/contact/",
"/d/jp/contact-us/index.html": "http://localhost:8888/jp/contact/",
"/d/cn/corporate/terms.html": "http://localhost:8888/cn/disclaimer/",
"/d/jp/disclaimer/index.html": "http://localhost:8888/jp/disclaimer/",
"/d/cn/": "http://localhost:8888/cn/",
"/d/jp/": "http://localhost:8888/jp/",
"/d/jp/what-we-do/index.html": "http://localhost:8888/jp/",
"/d/jp/what-we-do/innovation.html": "http://localhost:8888/jp/",
"/d/jp/what-we-do/solutions.html": "http://localhost:8888/jp/",
"/d/jp/what-we-do/user-experience.html": "http://localhost:8888/jp/",
"/d/jp/what-we-do/applications.html": "http://localhost:8888/jp/",
"/d/jp/who-we-are/index.html": "http://localhost:8888/jp/",
"/d/jp/who-we-are/presence.html": "http://localhost:8888/jp/",
"/d/jp/who-we-are/management.html": "http://localhost:8888/jp/",
"/d/jp/who-we-are/about-you.html": "http://localhost:8888/jp/",
"/d/": "http://localhost:8888/",
"/d/en/corporate/privacy.html": "http://localhost:8888/privacy/",
"/d/jp/privacy/index.html": "http://localhost:8888/jp/privacy/",
"/d/cn/corporate/privacy.html": "http://localhost:8888/cn/privacy/",
"/d/en/capabilities/": "http://localhost:8888/services/",
"/d/en/capabilities/index.html": "http://localhost:8888/services/",
"/d/en/capabilities/digital_consultation.html": "http://localhost:8888/services/",
"/d/en/capabilities/design_user_experience.html": "http://localhost:8888/services/",
"/d/en/capabilities/rapid_prototyping.html": "http://localhost:8888/services/",
"/d/en/capabilities/mobile_solutions.html": "http://localhost:8888/services/",
"/d/en/capabilities/customer_insights_analytics.html": "http://localhost:8888/services/",
"/d/en/capabilities/website_application_development.html": "http://localhost:8888/services/",
"/d/sitemap.html": "http://localhost:8888/sitemap.xml",
"/sitemap.html": "http://localhost:8888/sitemap/",
"/d/en/corporate/terms.html": "http://localhost:8888/terms/"


# Serve, Check, Deploy

- cd dir
- jekyll s
- Check site
- Copy all files to 'Corporate Website - LIVE'
- Push to Git
