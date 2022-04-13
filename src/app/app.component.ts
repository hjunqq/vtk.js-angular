import {Component, ElementRef, Renderer2, ViewChild, ViewRef} from '@angular/core';

import '@kitware/vtk.js/Rendering/Profiles/Geometry';

import vtkFullScreenRenderWindow from '@kitware/vtk.js/Rendering/Misc/FullScreenRenderWindow';
import vtkConeSource from '@kitware/vtk.js/Filters/Sources/ConeSource';
import vtkActor from '@kitware/vtk.js/Rendering/Core/Actor';
import vtkMapper from '@kitware/vtk.js/Rendering/Core/Mapper';
import vtkRenderWindow from "@kitware/vtk.js/Rendering/Core/RenderWindow";
import vtkOpenGLRenderWindow from "@kitware/vtk.js/Rendering/OpenGL/RenderWindow";
import vtkRenderWindowInteractor from "@kitware/vtk.js/Rendering/Core/RenderWindowInteractor";
import vtkRenderer from "@kitware/vtk.js/Rendering/Core/Renderer";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('container',{static: false,read:ElementRef}) container:any;

  title = 'blank-angular';

  constructor(private renderer:Renderer2) {
  }

  ngAfterViewInit(): void {
    // 全屏显示
    // let fullscreenRenderWindow = vtkFullScreenRenderWindow.newInstance();
    // const cone = vtkConeSource.newInstance();
    // const actor = vtkActor.newInstance();
    // const mapper = vtkMapper.newInstance();
    //
    // actor.setMapper(mapper);
    // mapper.setInputConnection(cone.getOutputPort());
    //
    // const renderer = fullscreenRenderWindow.getRenderer();
    // renderer.addActor(actor);
    // renderer.resetCamera();
    //
    // const renderWindow = fullscreenRenderWindow.getRenderWindow();
    // renderWindow.render();


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
    // interactor.setInteractorStyle(vtkInteractorStyleTrackballCamera.newInstance());

  }
}
