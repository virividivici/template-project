import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RestApiService } from './rest-api.service';

describe('RestApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({
  	  providers: [RestApiService],
      imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: RestApiService = TestBed.get(RestApiService);
    expect(service).toBeTruthy();
  });

  describe(':', () => {

      function setup() {
        const restApiService = TestBed.get(RestApiService);
        const httpTestingController = TestBed.get(HttpTestingController);
        return { restApiService, httpTestingController };
      }

      it('should call the item map data', () => {
        const { restApiService, httpTestingController } = setup();
        const mockItemData = {
	      "id": 1,
	      "ec2Id": "a-123456abcd",
	      "name": "magnolia",
	      "type": "t2.medium",
	      "state": "running",
	      "az": "us-east-1b",
	      "publicIP": "54.210.167.204",
	      "privateIP":"10.20.30.40"
	    };
        restApiService.getItems().subscribe(data => {
          console.log('======>',data)
          expect(data[0]).toEqual(mockItemData);
        });

        const req = httpTestingController.expectOne('http://localhost:3000/items');

        expect(req.request.method).toBe('GET');

        req.flush({
          data: mockItemData
        });
      });

      afterEach(() => {
        const { httpTestingController } = setup();
        httpTestingController.verify();
      });
    });


});
