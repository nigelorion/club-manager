import { Pipe, PipeTransform } from '@angular/core';
import { Member } from './member.model';
import { MemberService } from  './member.service';

@Pipe({
  name: 'filterPipe',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(input: Member[], filter){
  var output: Member[] = [];
  if (filter === "young"){

    for (var i = 0; i < input.length; i++) {
      if (input[i].age <= 20) {
        output.push(input[i]);
      }
    }
    return output;
  } else if (filter === "old"){

      for (var i = 0; i < input.length; i++) {
        if (input[i].age >= 50) {
          output.push(input[i]);
        }
      }
      return output;
    } else {

  return input;
  }
}

}
