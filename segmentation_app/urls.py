from django.urls import path
from . import views

urlpatterns = [
    path('', views.SegmentationView.as_view(), name="segmentation-page")
]

