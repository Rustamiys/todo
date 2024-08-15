Скрипт PageLoadTime.py выводит время загрузки определенных url пользователей на seller и market.
## Для пользования нужно:
1. Поменять логин, пароль и URL селлера и маркета 
2. Посещяемые url заполняются в файле main_urls.txt в корне проекта. 
Пример: "market:/orers", "seller:/orders/order/pk/"
## Для запуска (Linux):
1. Создайте виртуальное окружение:
    ```sh
    virtualenv ./venv
    ```
2. Активируйте окружение и установите зависимости:
    ```sh
    source ./venv/bin/activate
    pip install selenium
    ```
6. Запустите скрипт
    ```sh
    python3 PageLoadTime.py
