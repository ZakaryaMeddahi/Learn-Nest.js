import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class BeltGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    // Get The Request Object From The ExecutionContext
    const request = context.switchToHttp().getRequest();

    // Validate Request
    if (request.body.rank !== 'black') {
      return false;
    }

    return true;
  }
}
