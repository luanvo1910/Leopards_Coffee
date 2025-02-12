from django.apps import AppConfig

class LeopardsCoffeeConfig(AppConfig):
    name = 'leopardscoffee'

    def ready(self):
        import leopardscoffee.signals
