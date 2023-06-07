import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindEnemyComponent } from './find-enemy.component';

describe('FindEnemyComponent', () => {
  let component: FindEnemyComponent;
  let fixture: ComponentFixture<FindEnemyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindEnemyComponent ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FindEnemyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
