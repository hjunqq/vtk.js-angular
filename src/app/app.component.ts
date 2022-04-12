import { Component } from '@angular/core';

import '@kitware/vtk.js/Rendering/Profiles/Geometry';

import vtkFullScreenRenderWindow from '@kitware/vtk.js/Rendering/Misc/FullScreenRenderWindow';
import vtkConeSource from '@kitware/vtk.js/Filters/Sources/ConeSource';
import vtkActor from '@kitware/vtk.js/Rendering/Core/Actor';
import vtkMapper from '@kitware/vtk.js/Rendering/Core/Mapper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blank-angular';

  fullscreenRenderWindow = null;

  ngAfterViewInit(): void {
    let fullscreenRenderWindow = vtkFullScreenRenderWindow.newInstance();
    const cone = vtkConeSource.newInstance();
    const actor = vtkActor.newInstance();
    const mapper = vtkMapper.newInstance();

    actor.setMapper(mapper);
    mapper.setInputConnection(cone.getOutputPort());

    const renderer = fullscreenRenderWindow.getRenderer();
    renderer.addActor(actor);
    renderer.resetCamera();

    const renderWindow = fullscreenRenderWindow.getRenderWindow();
    renderWindow.render();
  }

}
