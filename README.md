# vtk.js + angular 13 in div and in full page

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.2.

This project shows how to integrate vtk.js in angular 13 project

Setting up build env starting from a blank Angular 13 template:

1. `yarn add @kitware/vtk.js`
2. Create `src/types` and `*.d.ts`, add the following:
```typescript
declare module '@kitware/vtk.js/Interaction/Style/InteractorStyleTrackballCamera';
```

The `In DIV` shows how to use vtk.js in div and the `Full Page` shows how to use vtk.js in full page.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.
