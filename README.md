# Windrift Starter app

This repository is designed to help you get started writing a [Windrift](https://github.com/lizadaly/windrift) story. Windrift is a framework for creating interactive stories using React and Redux.

Windrift is not suitable for authors who are new to JavaScript development. You’ll be much happier using any of the fine, mature environments for interactive fiction, including [Twine](https://twinery.org/), [inklewriter](http://www.inklestudios.com/inklewriter/), [ChoiceScript](https://www.choiceofgames.com/make-your-own-games/choicescript-intro/), or [Texture](https://texturewriter.com/), to name just a few! Please see the main [Windrift](https://github.com/lizadaly/windrift) repository for more reasons not to use Windrift.

## Installation

Windrift itself is written in ES6+, and this starter package includes the necessary Babel dependencies to author stories in ES6. Of course, you’re free to use ES5 syntax if you prefer.


### Prerequisites

* npm

Everything you need to build a Windrift story is in this package. You’re on your own for deploying it, but it’s just a self-contained web application with no backend, so should be deployable anywhere once built.

In the windrift-starter directory:

```
npm install
```

You should be able to run the built-in dev server right away:

```
npm start
```

At the end of a lot of build statements, you should see:

```
[458] ./~/sockjs-client/lib/info-ajax.js 1.04 kB {0} [built]
[459] ./~/sockjs-client/lib/iframe-bootstrap.js 2.91 kB {0} [built]
[460] ./~/sockjs-client/lib/facade.js 724 bytes {0} [built]
webpack: bundle is now VALID.
```

Your application will be running on port 8080 by default.

The dev server is set up to hot-reload changes (whenever you modify the source, the browser should auto-refresh).

## Your first story

The entry point for the app at build time is `index.js`. You
should not need to modify it for a basic Windrift story.

```javascript
function start() {
  var chaptersList = require.context('./chapters', true, /\.js$/)
```

`start()` will automatically look in the `chapters/` directory and interpret each JS file in that directory as a Windrift "chapter." The filenames can be whatever you choose, but they should be ordered sequentially, like `chapter1.js`, `chapter2.js`.

### The sample chapters

This package comes with two sample chapters that make use of the primary components in Windrift: Lists and Maps. Feel free to use them as a reference or delete them entirely.

## Styling

### CSS Frameworks
Windrift outputs HTML that is designed to be compatible with the [Foundation for Sites](http://foundation.zurb.com/sites.html) CSS framework. Foundation isn’t bundled with Windrift, but this starter package references it in the head of `index.html`. Feel free to swap out Foundation for Bootstrap, or a custom framework of your choice.

### Windrift-specific CSS

Windrift will emit a few CSS classes that you may want to hook into:

```css
/* Applied to the most-recent chapter */
.current-chapter

/* Applied to the most-recent section */
.current-section

/* The special link that switches chapters */
.next-chapter-link
```

### Animations

In addition, there are special styles that get applied during transitions between states:

```css
/* Applied while displaying new sections */
.section-enter, .section-appear

/* Applied when removing new sections */
.section-leave
```

This is provided straight out of the [ReactTransitionGroup](https://facebook.github.io/react/docs/animation.html) add-on to React itself.

This is the CSS that was used in [Stone Harbor](https://stoneharborgame.com/), as a reference:


```css
.section-enter, .section-appear {
  opacity: 0.01;
}

.section-enter.section-enter-active, .section-appear.section-appear-active {
  opacity: 1;
  transition: opacity 500ms ease-in;
}

.section-leave {
  opacity: 1;
}

.section-leave.section-leave-active {
  opacity: 0.01;
  transition: opacity 300ms ease-in;
}
```

### Building and deploying

The included development runner will build a new `story.js` on each change.

When you’re ready to publish and deploy, you can simply copy the HTML tree as-is to a web-accessible location, such as Github Pages.

Because Windrift Starter uses webpack for building, you can use normal webpack extensions to minify, obfuscate, or otherwise optimize the outputted JS.
