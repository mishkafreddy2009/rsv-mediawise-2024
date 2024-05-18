from django.shortcuts import render
from django.urls import reverse_lazy
from django.views.generic import TemplateView


class SegmentationView(TemplateView):
    template_name = "index.html"
    
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["title"] = "pied piper"
        context["drag_n_drop"] = "перенесите или добавьте файл (.csv)"
        context["btn_seg"] = "сегментировать"
        return context