from django.shortcuts import render, HttpResponse

# Create your views here.

def dash(request):
    if request.method == 'GET':
        return render(request, template_name="dashboard\\index.html")