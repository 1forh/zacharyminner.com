---
date: 2020-11-16T18:30:48Z
tags: ['WordPress', 'PHP', 'Gutenberg']
title: How to remove all default Gutenberg block patterns
summary: Quick explanation of how to remove the default Gutenberg block patterns.
---

Below is a snippet that you can add to your `functions.php` file to remove the default Gutenberg block patterns.

```php
function fire_theme_support() {
	remove_theme_support('core-block-patterns');
}

add_action('after_setup_theme', 'fire_theme_support');
```

> This needs to be added to either an [_init_](https://developer.wordpress.org/reference/hooks/init/) hook or to [_after_setup_theme_](https://developer.wordpress.org/reference/hooks/after_setup_theme/), and you will most likely place this inside a function, together with the rest of your theme support.

[Solution source](https://fullsiteediting.com/lessons/block-patterns-tips/)
