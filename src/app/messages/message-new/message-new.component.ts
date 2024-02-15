import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Department } from '../../shared/models/message.model';

@Component({
  selector: 'app-message-new',
  templateUrl: './message-new.component.html',
  styleUrl: './message-new.component.scss'
})
export class MessageNewComponent implements OnInit {
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  priorities: string[] = ['High', 'Medium', 'Low'];
  departments: Department[] = [
    {
      id: 1,
      name: 'Complaints'
    },
    {
      id: 2,
      name: 'Loyalty'
    },
    {
      id: 3,
      name: 'Promotions'
    }
  ];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.firstFormGroup = this.formBuilder.group({
      emailCtrl: ['', Validators.required],
      priorityCtrl: ['', Validators.required],
      departmentCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this.formBuilder.group({
      messageCtrl: ['', Validators.required]
    });
  }

  getDepartmentName(department: Department): string {
    return department ? department.name : '';
  }
}
