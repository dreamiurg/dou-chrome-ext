# DOU Digester

Расширение для Google Chrome, которое дает возможность порекоммендовать ссылку для следующего [Дайджеста Недели](http://www.developers.org.ua/lenta/digests/digest-69/) ресурса [Developers.org.ua](http://developers.org.ua). Расширение можно установить [со страницы в Chrome Web Store](https://chrome.google.com/webstore/detail/nlalnfmniajkdoofjbolijlhpcpcniko).

## Changelog

### HEAD

### 0.4
* Switched back to sudoku server instead of localhost

### 0.3
* Fixed manifest issues

### 0.2
* Email address is shown in popup, along with link to options page
* Fixed issue with blank fields after pushing extension button on blank page or chrome://extensions page
* For is not submitted when URL field is empty
* Internal: Revised messages mechanism, using postMessage() instead
* Internal: Content script is loaded for http:// and https:// pages only, warning is shown for other schemas

### 0.1
* Initial release

