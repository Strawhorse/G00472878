import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CastPage } from './cast.page';

describe('CastPage', () => {
  let component: CastPage;
  let fixture: ComponentFixture<CastPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CastPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
