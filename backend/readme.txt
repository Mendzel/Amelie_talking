To start virtual env:
source env/bin/activate

To stop virtual env:
deactivate

Making migrations:
Change your models (in models.py).
Run python manage.py makemigrations to create migrations for those changes
Run python manage.py migrate to apply those changes to the database.