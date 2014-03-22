jQuery scrolltop button plugin
==============================

jQuery plugin that adds a fading "back to top" button to a page.

## Installation

Include the production file after jquery.

```html
<script src="/path/jquery-latest-version.js"></script>
<script src="/path/jquery.scrolltop.button.min.js"></script>
```

## Usage

### HTML

Create a div element

```html
<div id="my_button"></div>
```

### jQuery

Initialize the plugin

```javascript
$(window).load(function() {
		$('#my_button').scrollToTopButton();
});
```

## Options

### scrollHeight

Scrolling distance from the top at which the button appears.
Deafult: 300

### scrollDuration

Scrolltop duration.
Default:500

### customCss

Apply your custom css styles for the button.
Default: 0

### Example with custom options

```javascript
$(window).load(function() {
		
		$('#my_button').scrollToTopButton({
			scrollHeight         : 800,
			scrollDuration       : 1000,
			customCss            : 1 // Define your custom styles for the button in your css file	
		});

});
```
