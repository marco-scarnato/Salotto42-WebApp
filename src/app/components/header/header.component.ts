import {AfterViewInit, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    let menu = document.querySelector('.header__hamburger');
    if(menu !== null){
      menu.addEventListener("click", function () {
        let content = document.querySelector('.header__content')
        let menu_h = document.querySelector('.header__menu')
        let ham = document.querySelector('.header__hamburger')
        if(content !== null){
            content.classList.toggle('menu_open');
        }
        if(menu_h !== null){
          menu_h.classList.toggle('menu_open');
        }
        if(ham !== null){
          ham.classList.toggle('menu_open');
        }
      });
    }

    let menuOpt1 = document.querySelector('.menu__opt--1');
    if(menuOpt1 !== null){
      menuOpt1.addEventListener("click", function () {
        let content = document.querySelector('.header__content')
        let menu_h = document.querySelector('.header__menu')
        let ham = document.querySelector('.header__hamburger')
        if(content !== null){
          content.classList.toggle('menu_open');
        }
        if(menu_h !== null){
          menu_h.classList.toggle('menu_open');
        }
        if(ham !== null){
          ham.classList.toggle('menu_open');
        }
      });
    }

    let menuOpt2 = document.querySelector('.menu__opt--2');
    if(menuOpt2 !== null){
      menuOpt2.addEventListener("click", function () {
        let content = document.querySelector('.header__content')
        let menu_h = document.querySelector('.header__menu')
        let ham = document.querySelector('.header__hamburger')
        if(content !== null){
          content.classList.toggle('menu_open');
        }
        if(menu_h !== null){
          menu_h.classList.toggle('menu_open');
        }
        if(ham !== null){
          ham.classList.toggle('menu_open');
        }
      });
    }

    let menuOpt3 = document.querySelector('.menu__opt--3');
    if(menuOpt3 !== null){
      menuOpt3.addEventListener("click", function () {
        let content = document.querySelector('.header__content')
        let menu_h = document.querySelector('.header__menu')
        let ham = document.querySelector('.header__hamburger')
        if(content !== null){
          content.classList.toggle('menu_open');
        }
        if(menu_h !== null){
          menu_h.classList.toggle('menu_open');
        }
        if(ham !== null){
          ham.classList.toggle('menu_open');
        }
      });
    }

    let menuOpt4 = document.querySelector('.menu__opt--4');
    if(menuOpt4 !== null){
      menuOpt4.addEventListener("click", function () {
        let content = document.querySelector('.header__content')
        let menu_h = document.querySelector('.header__menu')
        let ham = document.querySelector('.header__hamburger')
        if(content !== null){
          content.classList.toggle('menu_open');
        }
        if(menu_h !== null){
          menu_h.classList.toggle('menu_open');
        }
        if(ham !== null){
          ham.classList.toggle('menu_open');
        }
      });
    }
  }

}
