import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { environment } from 'src/environments/environment';
import { GenericResponse, Task } from '../models';
import { ApiRestTaskService } from './api-rest-task.service';

describe('ApiRestTaskService', () => {
  let httpMock: HttpTestingController;
  let service: ApiRestTaskService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiRestTaskService],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    httpMock = TestBed.inject(HttpTestingController);
    service = TestBed.inject(ApiRestTaskService);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('test createTask', async () => {
    const testTask: Task = new Task('test');

    const result = await service.createTask(testTask);

    result.subscribe((response) => expect(response.message).toBe('OK'));

    const req = httpMock.expectOne(`${environment.api}task/`);
    expect(req.request.method).toBe('POST');

    const reponse: GenericResponse = {
      message: 'OK',
    };
    req.flush(reponse);
  });

  it('test updateTask', async () => {
    const testTask: Task = new Task('test');
    testTask._id = 'asdasd213';

    const result = await service.update(testTask);

    result.subscribe((response) => expect(response.message).toBe('OK'));

    const req = httpMock.expectOne(`${environment.api}task/`);
    expect(req.request.method).toBe('PUT');

    const reponse: GenericResponse = {
      message: 'OK',
    };
    req.flush(reponse);
  });

  it('test deleteProject', async () => {
    const testTask: Task = new Task('test');
    testTask._id = 'asdas22213';

    const result = await service.delete(testTask);

    result.subscribe((response) => expect(response.message).toBe('OK'));

    const req = httpMock.expectOne(`${environment.api}task/${testTask._id}`);
    expect(req.request.method).toBe('DELETE');

    const reponse: GenericResponse = {
      message: 'OK',
    };
    req.flush(reponse);
  });

  it('test getAll', async () => {
    const testTask: Task = new Task('test');
    testTask._id = 'sadsa23213';
    const testTask2: Task = new Task('test2');
    testTask2._id = 'sadsa23214';

    const taskList: Task[] = [testTask, testTask2];

    const result = await service.getAll();

    result.subscribe((taskListResponse) =>
      expect(taskListResponse).toBe(taskList)
    );

    const req = httpMock.expectOne(`${environment.api}task/`);
    expect(req.request.method).toBe('GET');
    req.flush(taskList);
  });
});
