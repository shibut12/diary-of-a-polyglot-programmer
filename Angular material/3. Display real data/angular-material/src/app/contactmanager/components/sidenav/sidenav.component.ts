import { Component, OnInit, NgZone } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { Observable } from 'rxjs/Observable';

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

  constructor(zone: NgZone, private userService: UserService) {
    this.mediaMatcher.addListener(mql => 
      zone.run(() => this.mediaMatcher = mql));
  }

  ngOnInit() {
    this.users = this.userService.users;
    this.userService.loadAll();

    this.users.subscribe(data=>{
      console.log(data);
    })
  }

  isScreenSmall(): boolean {
    return this.mediaMatcher.matches;
  }

}
