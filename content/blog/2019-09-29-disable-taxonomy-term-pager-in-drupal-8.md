---
title: Disable taxonomy term pager in Drupal 8
date: 2019-09-29T19:15:30.444Z
description: >-
  In order to disable the pager on a taxonomy term page, you can set the
  terms_per_page_admin setting to a really high number.
thumbnail: /img/drupal-pager.png
---
![Taxonomy term pager](/img/drupal-pager.png "Taxonomy term pager")

In order to disable the pager on a taxonomy term list page, you can set the `terms_per_page_admin` setting to a really high number.

In your `settings.php` file, add the below line and tweak to your liking.

```php
$config['taxonomy.settings']['terms_per_page_admin'] = 1000;
```
