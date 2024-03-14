from django.shortcuts import render

# Create your views here.

def dash(request):
    return render(request, 'swiphr_dashboard\\dashboard\\templates\\dashboard\\index.html')