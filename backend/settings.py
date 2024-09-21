ALLOWED_HOSTS = ['localhost', '127.0.0.1', '0.0.0.0']

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': os.environ.get('DB_NAME', 'my_db'),
        'USER': os.environ.get('DB_USER', 'wittcepter'),
        'PASSWORD': os.environ.get('DB_PASSWORD', 'theBestChromeExtension'),
        'HOST': os.environ.get('DB_HOST', 'database'),
        'PORT': os.environ.get('DB_PORT', '5432'),
    }
}