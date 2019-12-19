## KTUN öğrencilirinin mükemmel ötesi front-end projesi

#### Kurulum
---
1. Projeyi klonlayın.
    
    ```bash
    $ git clone https://github.com/School-Hub/samara-blog
    $ cd samara-blog
    ```
    **Not:** `$` işareti, komut satırı ön ekidir. Bu işaret komut satırında olduğunuz anlamına gelir.

2. Bağımlılıları yükleyin.

    ```bash
    $ npm install
    ```

3. Geliştirme ortamını ayarlayın.

    ```bash
    $ npm run gulp
    
    > samarablog@1.0.0 gulp C:\Users\simplex\samara-blog
    > gulp

    [20:37:18] Using gulpfile ~\samara-blog\gulpfile.js
    [20:37:18] Starting 'default'...
    [20:37:18] Starting 'watch'...
    [20:37:18] Starting 'server'...
    [20:37:18] Webserver started at http:/localhost:8080
    ```

    **Not:** Otomatik olarak tarayıcı penceresi açılacaktır. Proje yolları projenin yapısı ile belirlenir. Yani `footer1.html`'i görmek isterseniz. `http:/localhost:8080/pages/footer1.html` gidin.
    
    **Not:** Eğer yazdığınız css'lerin etkilerini göremiyorsanız `CTRL + F5` ile sayfayi yenilemeyi deneyin. 