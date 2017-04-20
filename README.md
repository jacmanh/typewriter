# A VERY lightweight Jquery Typewriter
A jquery plugin / Css animated to simulate a typewriter

![alt tag](https://image.noelshack.com/fichiers/2017/16/1492528673-gif-typewriter.gif)

***Demo here*** : https://codepen.io/jacmanh/pen/gWaeoO

# How to install

Insert ***jquery.typewriter.min.js*** and ***jquery.typewriter.min.css*** into your project.

Add ***typewriter__clip*** class into the container, like this :
```html
<div class="typewriter__clip">
    <div class="js-typewriter">
        <p class="typewriter__word">The series is fun !</p>
        <p class="typewriter__word">The rooting interests are many and varied...</p>
        <p class="typewriter__word">Watch it !</p>
    </div>
</div>
```

Then call typewriter function as follow :
```js
<script>
    $('.js-typewriter').typewriter();
</script>
```

Voilà !

# Customize it !

If you want to change the color, just edit some css :
```css
.typewriter__clip {
  position: relative;
  display: inline-block;
  overflow: hidden;
  border-right: 1px solid white; /* change the cursor color here */
}
```

To remove the cursor, add class 'typewriter__clip_no-cursor' next to the 'typewriter__clip' class :
```html
<div class="typewriter__clip typewriter__clip_no-cursor">
    <div class="js-typewriter">
        <p class="typewriter__word">The series is fun !</p>
        <p class="typewriter__word">The rooting interests are many and varied...</p>
        <p class="typewriter__word">Watch it !</p>
    </div>
</div>
```

# Options

```js
<script>
    $('.js-typewriter').typewriter({
        speed: 1000, // Speed animation, in ms
        delay: 5000, // Waiting time for the next switch, in ms
        marge: 10 // Right margin, in px
    });
</script>
```