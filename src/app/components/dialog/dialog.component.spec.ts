import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ElementRef } from '@angular/core';
import { DialogComponent } from './dialog.component';

describe('DialogComponent', () => {
  let component: DialogComponent;
  let fixture: ComponentFixture<DialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogComponent ]
    }).compileComponents();

    fixture = TestBed.createComponent(DialogComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call nativeElement.showModal() when showModal() is called', () => {
    const nativeElement = { showModal: jasmine.createSpy('showModal') };

    component.element.nativeElement = nativeElement;
    component.showModal();
    expect(nativeElement.showModal).toHaveBeenCalled();
  });

  it('should call nativeElement.close() when closeModal() is called', () => {
    const nativeElement = { close: jasmine.createSpy('close') };

    component.element.nativeElement = nativeElement;
    component.closeModal();
    expect(nativeElement.close).toHaveBeenCalled();
  });
});