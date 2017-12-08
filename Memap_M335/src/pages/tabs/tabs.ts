import { Component } from '@angular/core';

import { MapPage } from '../map/map';
import { ChatsPage } from '../chats/chats';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = MapPage;
  tab3Root = ChatsPage;

  constructor() {

  }
}
