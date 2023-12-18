from django.shortcuts import render

# Create your views here.
def index(resp):
    return render(resp, "dashboard/dash.html", {})