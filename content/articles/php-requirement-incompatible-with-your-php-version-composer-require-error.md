---
title: 'Composer Error: PHP requirement incompatible with your PHP Version'
date: 2020-07-22T04:00:00.000+00:00
summary: Add `--ignore-platform-reqs` flag to composer require command to get around
  this.
tags:
  - Drupal 8
  - PHP
  - Composer
---

![](/images/content/screen-shot-2020-07-22-at-9-54-28-am.png)

Add `--ignore-platform-reqs` flag to composer require command to get around this.

```bash
composer require drupal/date_recur:^2.0 --ignore-platform-reqs
```

[Solution source](https://magento.stackexchange.com/questions/207318/php-requirement-incompatible-with-your-php-version-composer-module-installatio)
