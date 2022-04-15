import { Component, OnInit } from '@angular/core';

import '@kitware/vtk.js/Rendering/Profiles/Geometry';

import vtkConeSource from "@kitware/vtk.js/Filters/Sources/ConeSource";
import vtkMapper from "@kitware/vtk.js/Rendering/Core/Mapper";
import vtkFullScreenRenderWindow from "@kitware/vtk.js/Rendering/Misc/FullScreenRenderWindow";
import vtkActor from "@kitware/vtk.js/Rendering/Core/Actor";

@Component({
  selector: 'app-full-vtk',
  templateUrl: './full-vtk.component.html',
  styleUrls: ['./full-vtk.component.css']
})
export class FullVtkComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    // 全屏显示
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
