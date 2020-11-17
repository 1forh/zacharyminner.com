---
title: Disable taxonomy term pager in Drupal 8
date: 09/29/2019
summary: In order to disable the pager on a taxonomy term page, you can set the `terms_per_page_admin`
  setting to a really high number.
tags:
  - Drupal 8
---

![drupal 8 pager](/images/content/drupal-8-pager.jpg)

In order to disable the pager on a taxonomy term list page, you can set the `terms_per_page_admin` setting to a really high number.

In your `settings.php` file, add the below line and tweak to your liking.

```php
	$config['taxonomy.settings']['terms_per_page_admin'] = 1000;
```
