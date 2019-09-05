// import { Component, OnInit } from '@angular/core';
// import { NzFormatBeforeDropEvent, NzFormatEmitEvent } from 'ng-zorro-antd';
// import { Observable, of } from 'rxjs';
// import { delay } from 'rxjs/operators';


// @Component({
//   selector: 'app-sidebar',
//   templateUrl: './sidebar.component.html',
//   styleUrls: ['./sidebar.component.sass']
// })
// export class SidebarComponent implements OnInit {
//     nodes = [
//         {
//           title: 'Nokia',
//           key: '5d70ca7b1c9d440000e1ef0d',
//           children: [
//             {
//               title: 'monochrome',
//               key: '1001',
//               children: [{ title: '3410', key: '5d70cb411c9d440000e1ef0f', isLeaf: true }, { title: '3411', key: '10011', isLeaf: true }]
//             },
//             {
//               title: 'color',
//               key: '1002',
//               children: [{ title: '3910i', key: '10020', isLeaf: true }]
//             }
//           ]
//         }]

//   constructor() { }

//   ngOnInit() {
//   }

//   click(event: NzFormatEmitEvent) {
//       console.log(event);
//   }

//   beforeDrop(arg: NzFormatBeforeDropEvent): Observable<boolean> {
//     // if insert node into another node, wait 1s
//     if (arg.pos === 0) {
//       return of(true).pipe(delay(1000));
//     } else {
//       return of(false);
//     }
//   }

// }
