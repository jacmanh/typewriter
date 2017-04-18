# typewriter
A jquery plugin / Css animated to simulate a typewriter

Demo : https://codepen.io/jacmanh/pen/gWaeoO

# How to install

Insert ***jquery.typewriter.min.js*** and ***jquery.typewriter.min.css*** into your project.

Add ***typewriter__clip*** class into the container, like this :
```html
<div class="typewriter__clip js-typewriter">
    <p>When nothing is going right, go left.</p>
    <p>I’m not sad. I’m sober…</p>
    <p>Optimism – is a lack of information.</p>
</div>
```

Then call typewriter function as follow :
```js
<script>
    $('.js-typewriter').typewriter();
</script>
```

Voilà !

If you want to change the color, just edit some css :
```css
.typewriter__clip {
  position: relative;
  display: inline-block;
  overflow: hidden;
  border-right: 1px solid blue; /* change the cursor color here */
}
```

