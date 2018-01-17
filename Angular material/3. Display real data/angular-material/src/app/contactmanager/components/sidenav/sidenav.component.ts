import { Component, OnInit, NgZone } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

const SMALL_WIDTH_BREAKPOINT = 720;

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  private mediaMatcher: MediaQueryList =
    matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`);
  
  users: Observable<User[]>;

  constructor(
    zone: NgZone,
    private userService: UserService, 
    private router: Router) {
    this.mediaMatcher.addListener(mql => 
      zone.run(() => this.mediaMatcher = mql));
  }

  ngOnInit() {
    this.users = this.userService.users;
    this.userService.loadAll();

    this.users.subscribe(data=>{
      if(data.length > 0 ){
        this.router.navigate(['/contactmanager', data[0].id]);
      }
    })
  }

  isScreenSmall(): boolean {
    return this.mediaMatcher.matches;
  }

}
