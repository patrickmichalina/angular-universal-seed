import { CookieService, ICookieService } from './cookie.service';
import { TestBed, async } from '@angular/core/testing';

export function main() {
  describe('Cookie Service', () => {

    it('should construct', async(() => {
      TestBed.configureTestingModule({
        providers: [
          CookieService,
        ]
      });
      const service = TestBed.get(CookieService) as ICookieService;
      expect(service).not.toBeNull();
    }));
  });
}
