import { Pipe, PipeTransform } from '@angular/core';
import { Member } from './member.model';
import { MemberService } from  './member.service';

@Pipe({
  name: 'filterPipe',
  pure: false
})
export class FilterPipePipe implements PipeTransform {

  transform(value: any, args?: any): any {

  }

}
