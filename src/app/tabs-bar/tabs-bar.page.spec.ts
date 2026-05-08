import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabsBarPage } from './tabs-bar.page';

describe('TabsBarPage', () => {
  let component: TabsBarPage;
  let fixture: ComponentFixture<TabsBarPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsBarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
