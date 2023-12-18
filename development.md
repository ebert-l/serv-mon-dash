# To Develop with us, you will need to
## Prerequisite
Running Python and pip on your System with the CLI Options to call `pip`, `py` and `python`. You will need at least python Version 3.9.
## Install Packages
### Django
```
pip install django
```
### Dotenv
```
pip install python-dotenv
```
## Configuration
### Environment
Create a `.env` File in the Root-Directory of the Repo and set all necessarry variables there corresponding to your local environment.

Vaiables to be set:
| Variable | Allowed | Description |
| :--- | :---: | :--- |
| DJANGO_DEBUG | Boolean | If the installation should run as a debug-Session or production session. Note, that the Prod Environment has this one set to false. |

### Migration
Run ```py manage.py migrate ``` in the console and then create your own local super user for Django if you do not have one set up already.

You can do this with ``` py manage.py createsuperuser```

## Developing
To start developing just run the dev-Server in your console and you should be good to go. ✌
```
py manage.py runserver
```