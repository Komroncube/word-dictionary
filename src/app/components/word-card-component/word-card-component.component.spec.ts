import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordCardComponentComponent } from './word-card-component.component';

describe('WordCardComponentComponent', () => {
  let component: WordCardComponentComponent;
  let fixture: ComponentFixture<WordCardComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WordCardComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WordCardComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
