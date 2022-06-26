import { Injectable } from '@angular/core';
import Swal from 'sweetalert2'
@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  constructor() { }

  delete(msg:string){
    // console.log('Delete called');
    Swal.fire({
      title: 'Are you sure?',
      // text: "You won't be able to revert this!",
      text:msg,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }

  Success(message:string){
    Swal.fire(
      'Success!',
      message,
      'success'
    )
  }

  Failed(message:string){
    Swal.fire(
      'Failed!',
      message,
      'error'
    )
  }
}
