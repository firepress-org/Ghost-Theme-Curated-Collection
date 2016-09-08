# Caffeine Theme [![Codeship Status for kelyvin/caffeine-theme](https://codeship.com/projects/2670e310-6805-0133-8838-460d97cd31f0/status?branch=master)](https://codeship.com/projects/114177)

![](http://i.imgur.com/a2uhb1ol.jpg)

## Introduction

**Caffeine Theme** is a Material Design inspired Ghost theme. It originally began as a fork of [Uno-Zen](https://github.com/Kikobeats/uno-zen), but has since been drastically changed. Huge thanks to the original creator for the original theme layout and inspiration.

You can check out the theme in action on my official blog [Caffeine Coding](https://www.caffeinecoding.com)

## Theme Features

Because Caffeine Theme draws inspiration from Material design practices, you'll see familiar design patterns throughout the theme, such as cards, several buttons, etc.

Like the original Uno-zen theme that helped provide the skeleton for this project, there may still be some shared similiaries with the original project. However, there are some vast changes as well, especially around the mobile experience and animation logic.

The following is a list of key differences that include, but are not limited to:

 - **Masonry** support for pinterest-esque layouts
 - **Scroll reveal** support for Google+ like rendering
 - **Mailchimp** integration and support for email subscriptions
 - **Font-awesome** support to use the latest icons from Font Awesome
 - **Page notifications** support to keep your users informed when they hit your home page
 - **Prismjs** support for syntax highlighting in your posts
 - Special browser compatibility page for IE9 and below.
 - Mobile-first driven experience
 - Improved responsiveness for dynamic screen widths (no more hard-refreshing the page)
 - A search and tag overlay that can be used on both the desktop and mobile experience
 - Bigger emphasis on the splash page
 - Smoother animations and style

## Installation

You can install this theme in one of three ways, but the last two options require `git`.

### Option 1
Download the latest release on [Github](https://github.com/kelyvin/caffeine-theme/releases), download the zip, extract the folder, and paste it into your theme folder (`content/themes`) of your Ghost installation

### Option 2
Enter the theme folder (`content/themes`) of your Ghost installation and paste the following command:

```bash
$ git clone https://github.com/kelyvin/caffeine-theme
```

### Option 3
If you have your Ghost blog hosted on git and you want to continuously get the latest updates, you can add this repo as a submodule. Create a `.gitmodules` file in your root Ghost installation and add the following like so:
![](http://i.imgur.com/r6mN5U4l.png)


### Add JQuery and other libraries
This theme needs jQuery to work, but jQuery is not provided by the theme. Instead, you need to inject it into the `Blog Footer` in the `Code injection` of your Ghost installation:

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>

```

In addition, this theme also takes advantage of [Masonry](http://masonry.desandro.com/) to provide a nicer grid layout and [Scroll Reveal](https://scrollrevealjs.org/) for sleek scrolling animations. These are not mandatory and fallbacks are also provided for both. If you would like these feature(s), inject the following code as well. (Note: imagesloaded is not necessary, but recommended for smooth masonry layouts). 

```html
<script type="text/javascript" src="https://npmcdn.com/imagesloaded@4.1/imagesloaded.pkgd.min.js"></script>
<script type="text/javascript" src="https://npmcdn.com/masonry-layout@4.0/dist/masonry.pkgd.min.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/scrollreveal.js/3.0.9/scrollreveal.min.js"></script>

```

At the end, it should probably look something like this:
![](http://i.imgur.com/AqE46Sr.png)

## Development and Customization

### File System

The code for the theme is divided into 3 main sections: static files (as HTML and images), CSS and JS. Check out the directory structure below:

```
.
├── LICENSE.md
├── README.md
├── assets
│   ├── css
│   │   └── caffeine-theme.css # the production css
│   ├── fonts
│   ├── img # favicons and cover image
│   ├── js
│   │   ├── src
│   │   │   ├── __init.js
│   │   │   ├── cover.js
│   │   │   ├── main.js
│   │   │   └── search.js
│   │   └── caffeine-theme.js # the production js
│   └── scss
│   │   ├── components # specific stuff
│   │   │   ├── _aside.scss
│   │   │   ├── _loading.scss
│   │   │   ├── _media-queries.scss
│   │   │   ├── _page-error.scss
│   │   │   ├── _pagination.scss
│   │   │   ├── _post.scss
│   │   │   └── _search.scss
│   │   ├── modules # basic stuff
│   │   │   ├── _buttons.scss
│   │   │   ├── _effects.scss
│   │   │   ├── _fonts.scss
│   │   │   ├── _forms.scss
│   │   │   ├── _global.scss
│   │   │   ├── _grid.scss
│   │   │   ├── _mixins.scss
│   │   │   ├── _reset.scss
│   │   │   └── _variables.scss
│   │   └── caffeine-theme.scss # main file to create the CSS
|   └── vendor # frontend dependencies
├── bower.json
├── default.hbs
├── error.hbs
├── gulpfile.js
├── index.hbs
├── node_modules
├── package.json
├── partials # different partials view
│   ├── aside.hbs
│   ├── comments.hbs
│   ├── footer.hbs
│   ├── google-analytics.hbs
│   ├── links.hbs
│   ├── meta.hbs
│   ├── pagination.hbs
│   ├── search.hbs
│   └── social.hbs
├── post.hbs
└── tag.hbs
```

Putting the files in context:

- The JS inside `assets/js/src` is compiled into `assets/js/caffeine-theme.js`
- The SCSS (we use [SASS](http://sass-lang.com/)) files inside `assets/scss` are compiled into `assets/css/caffeine-theme.css`
- We have some static files like `post.hbs`, `tag.hbs`, `default.hbs`, `index.hbs`... the partials views inside `assets/partials` are used in these views.

To bundle, minify, and compile the stylesheets and js files, we use [Gulp](http://gulpjs.com/), check `gulpfile.js` for the build tasks.

### First Steps

For local development you need to have a locally running Ghost server, run this separately like this:

```bash
npm start

Migrations: Up to date at version 004
Ghost is running in development...
Listening on 127.0.0.1:2368
Url configured as: http://localhost:2368
Ctrl+C to shut down
```

Note that my local Ghost is running in the port `2368`.

With your local Ghost running, open another terminal and enter in the folder `content/themes` of your local Ghost and clone the theme repository and install the dependencies for local development:

```bash
$ git clone https://github.com/kelyvin/caffeine-theme && cd caffeine-theme && npm install && bower install
```

Then run the `gulp` command in the theme terminal. This should set you up for a development scenario, and looks like this:

![](http://i.imgur.com/QLTegAH.png)

With the `gulp` command you are automatically launching the task to compile the assets and reload the server when your assets change. To do this, we use [BrowserSync](http://www.browsersync.io). It is set up as middleware between the theme and Ghost. You can connect different devices and try the responsive of the website as well.

You need to use the same port as your Ghost server for proxying. If your Ghost server is in a different port than `2368` you need to modify `gulpfile.js` and put the correct port.


## Customizations

### Google Analytics

Go to Ghost Admin panel → `Code Injection` → `Blog Header` and add:

```html
<script>
var ga_id = 'UA-YOUR_ID_HERE';
</script>
```

### Comments

Go to Ghost Admin panel → `Code Injection` → `Blog Header` and add:

```html
<script>
var disqus_shortname = 'YOUR_DISQUS_SHORTCUT_HERE';
</script>
```

### Cover title

By default, the title that you see in the cover page of your blog is extracted from your blog settings (Admin panel → Blog Title).

If you want to customize it, you can do it like so:

Go to Ghost Admin panel → `Code Injection` → `Blog Header` and add:

```html
<script>
var profile_title = 'Caffeine Theme';
</script>
```

### Cover subtitle

The purpose of the subtitle is to describe your bio in a quick phrase.

Go to Ghost Admin panel → `Code Injection` → `Blog Header` and add:

```html
<script>
var profile_resume ='Software Engineer';
</script>
```

### Tags Overlay

To purpose of the tags overlay is to display a list of popular tags that you want your users to easily find and navigate to. You can continuously add to this list to create an "infinite" list of tags.

Go to Ghost Admin panel → `Code Injection` → `Blog Header` and add:

```html
<script>
var tag_names = ['code', 'career'];
</script>
```

### Mailchimp

This theme supports Mailchimp subscribing. We are using [Hello Byte's subbscribe](https://github.com/shlomnissan/subbscribe) library to create an opt-in popup form. Due to its lack of support for a package manager, I have included its assets as part of this project. I will try to keep that updated regularly.

To enable this feature, you'll need to obtain your Mailchimp embed signup form action URL, which is documented [here](http://kb.mailchimp.com/lists/signup-forms/host-your-own-signup-forms). Then inject it into your blog header like the example below.

Go to Ghost Admin panel → `Code Injection` → `Blog Header` and add:

```html
<script>
var mailchimp_url = "//1bytebeta.us9.list-manage.com/subscribe/post?u=1c261e60d8259c0c636801494&amp;id=7fa99bf359";
</script>
```

To modify its contents, go to `cover.js` and modify the code block below to your liking:

```javascript
if (window.mailchimp_url) {
    $("body").subbscribe({
        title: "Never miss a post!",
        text: "Stay up to the date with the latest posts from Caffeine Coding!",
        name: "<a href='https://www.facebook.com/caffeinecoding' target='_blank'>@caffeinecoding</a>",
        color: "#56817A",
        thumbnail: "http://i.imgur.com/39erIwp.png",
        list: "MailChimp",
        url : window.mailchimp_url
    });
}
```

### Notifications

This theme has support with [toastr](https://github.com/CodeSeven/toastr) to create custom notifications on your blog for your users to see. You can configure the notification through the Ghost admin panel, as seen in the example below:

Go to Ghost Admin panel → `Code Injection` → `Blog Header` and add:

```html
<script>
var notificationOptions = {
    type: "info",
    message: "I want to show this message",
    isShownOnce: true,
    escapeHtml: false
};
</script>
```

The `type` will define the type of notification to render, the `message` will display the message to render, `escapeHtml` will specify whether to escape the message to render HTML, and `isShownOnce` will set whether to only show our users the notification once.

**Note**: `isShownOnce` will be determined by setting a value in local storage that is set to the `message`. So if your message changes, the local storage value will be set to the new message. We determine whether to show the notification based on whether the current notification message is equal to their last visit.

### Colors

Edit the file `assets/scss/modules/_variables.scss`. Remember that before you deploy your changes to prod, it is necessary to compile the build to rebuild your new stylesheet, so keep running your gulp process in background.

### Social Networks

Edit the file `partials/social.hbs`.

### Links

Go to Ghost Admin panel → `Navigation` and add/edit items.

The "Home" link is always included by default, so you don't need to add it manually.

### Favicon

Create your favicons with [Favicon Generator](http://realfavicongenerator.net/) and put it in `assets/img`.

### Cover

Go to Ghost Admin panel → General → `Blog Cover`

### Browser Compatibility Page

This theme includes a special browser compatibility page for users who use IE9 and below. You can enable it by creating a static page with the post url as `browser-compatbility`, as seen in the example below.

![](http://i.imgur.com/unIDJxOl.png)

### Custom static pages

Check out the official [documentation](http://themes.ghost.org/docs/page-context) on Ghost.org.

## Preparing for production

When you are ready and want to deploy a new version, package your code using `gulp build` command, that will minify and concatenate all the necessary code.

