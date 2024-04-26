import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeTableModule } from './tree-table.module';
import { TreeTableComponent } from './tree-table.component';

describe('TreeTableComponent', () => {
  let component: TreeTableComponent;
  let fixture: ComponentFixture<TreeTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TreeTableModule],
      declarations: [TreeTableComponent],
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
