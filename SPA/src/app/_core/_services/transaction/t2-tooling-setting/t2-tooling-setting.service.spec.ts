/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { T2ToolingSettingService } from './t2-tooling-setting.service';

describe('Service: T2ToolingSetting', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [T2ToolingSettingService]
    });
  });

  it('should ...', inject([T2ToolingSettingService], (service: T2ToolingSettingService) => {
    expect(service).toBeTruthy();
  }));
});
