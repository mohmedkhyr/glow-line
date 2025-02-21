import { Component } from '@angular/core';
import { RenderMode, ServerRoute } from '@angular/ssr';
import { ServicesComponent } from './services/services.component';

export const serverRoutes: ServerRoute[] = [
  {
    path: '',
    renderMode: RenderMode.Prerender
  }

];
