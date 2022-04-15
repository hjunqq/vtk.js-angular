import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

import '@kitware/vtk.js/Rendering/Profiles/Geometry';

import vtkRenderWindow from '@kitware/vtk.js/Rendering/Core/RenderWindow';
import vtkConeSource from "@kitware/vtk.js/Filters/Sources/ConeSource";
import vtkMapper from "@kitware/vtk.js/Rendering/Core/Mapper";
import vtkRenderer from "@kitware/vtk.js/Rendering/Core/Renderer";
import vtkRenderWindowInteractor from "@kitware/vtk.js/Rendering/Core/RenderWindowInteractor";
import vtkOpenGLRenderWindow from "@kitware/vtk.js/Rendering/OpenGL/RenderWindow";
import vtkActor from "@kitware/vtk.js/Rendering/Core/Actor";

import vtkInteractorStyleTrackballCamera from '@kitware/vtk.js/Interaction/Style/InteractorStyleTrackballCamera';

@Component({
  selector: 'app-div-vtk',
  templateUrl: './div-vtk.component.html',
  styleUrls: ['./div-vtk.component.css']
})
export class DivVtkComponent implements OnInit {
  @ViewChild('container',{static: false,read:ElementRef}) container:any;

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit():void{
    // 标准渲染设置
    const renderWindow = vtkRenderWindow.newInstance();
    const renderer = vtkRenderer.newInstance({background:[0.2,0.3,0.4]})
    renderWindow.addRenderer(renderer);

    // 简单的管道设置
    const coneSource = vtkConeSource.newInstance();
    const mapper = vtkMapper.newInstance();
    mapper.setInputConnection(coneSource.getOutputPort());

    const actor = vtkActor.newInstance();
    actor.setMapper(mapper);

    // 添加 actor 到 renderer，并设置camera
    renderer.addActor(actor);
    renderer.resetCamera();

    // 使用OpenGL作为后端来展示所有内容
    const openglRenderWindow = vtkOpenGLRenderWindow.newInstance();
    renderWindow.addView(openglRenderWindow);

    // 创建div，并放置
    openglRenderWindow.setContainer(this.container.nativeElement);

    // 获取容器大小并设置到renderWindow
    const {width, height} = this.container.nativeElement.getBoundingClientRect();
    console.log(width,height)
    openglRenderWindow.setSize(width,height);

    // 为鼠标事件添加交互
    const interactor = vtkRenderWindowInteractor.newInstance();
    interactor.setView(openglRenderWindow);
    interactor.initialize();
    interactor.bindEvents(this.container.nativeElement);

    // 设置交互样式
    interactor.setInteractorStyle(vtkInteractorStyleTrackballCamera.newInstance());
  }
}
