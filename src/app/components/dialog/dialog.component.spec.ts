import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ElementRef } from '@angular/core';
import { DialogComponent } from './dialog.component';

describe('DialogComponent', () => {
  let component: DialogComponent;
  let fixture: ComponentFixture<DialogComponent>;
  let elementSpy: jasmine.SpyObj<ElementRef>;

  beforeEach(async () => {
    const elementMock = jasmine.createSpyObj('ElementRef', ['nativeElement']);

    await TestBed.configureTestingModule({
      declarations: [ DialogComponent ],
      providers: [
        { provide: ElementRef, useValue: elementMock },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DialogComponent);
    component = fixture.componentInstance;
    elementSpy = TestBed.inject(ElementRef) as jasmine.SpyObj<ElementRef>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call nativeElement.showModal() when showModal() is called', () => {
    const nativeElement = { showModal: jasmine.createSpy('showModal') };

    elementSpy.nativeElement = nativeElement;
    component.showModal();
    expect(nativeElement.showModal).toHaveBeenCalled();
  });

  it('should call nativeElement.close() when closeModal() is called', () => {
    const nativeElement = { close: jasmine.createSpy('close') };

    elementSpy.nativeElement = nativeElement;
    component.closeModal();
    expect(nativeElement.close).toHaveBeenCalled();
  });
});