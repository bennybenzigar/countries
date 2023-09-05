import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  country: any = []
  data: any = []
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.getData()

    this.country = ["All", "Asia", "Europe"]
  }

  getData() {
    this.authService.getData().subscribe((res: any) => {

      this.data = res
     
    })
  }

  filter(searchText: any) {
    this.getData()

    if(searchText=="All"){
      this.getData()
    }
    else{
      setTimeout(() => {

        if (this.data.length != 0) {
  
          this.data = this.data.filter((res: any) => {
            {
             
              if (res.region == searchText) {
                
                return res
              }
  
            }
          })
  
  
        }
      }, 1000);
    }
    

  }
}
