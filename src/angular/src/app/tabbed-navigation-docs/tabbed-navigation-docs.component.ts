import { Component } from '@angular/core';

@Component({
  selector: 'sprk-tabbed-navigation-docs',
  template: `
    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">
        Tabbed Navigation 
      </h2>
      
      <sprk-tabbed-navigation>
        <button sprk-tabbed-navigation-tab>Tab 1</button>
        <button
          [defaultActive]=true
          sprk-tabbed-navigation-tab>Tab 2</button>
        <button
          sprk-tabbed-navigation-tab>Tab 3</button>
        <div sprk-tabbed-navigation-panel>
          <p>Tab 1 Content Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis rhoncus ipsum. Nulla 
            euismod nisi est, vel consequat ante consectetur in. Ut interdum dictum est at ornare. Nam nec dapibus nibh. 
            Integer venenatis ex eu mi euismod, non ultricies lacus venenatis.</p>
        </div>
        <div [defaultActive]="true" sprk-tabbed-navigation-panel>
          <p>Tab 2 Content Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis rhoncus ipsum. Nulla 
            euismod nisi est, vel consequat ante consectetur in. Ut interdum dictum est at ornare. Nam nec dapibus nibh. 
            Integer venenatis ex eu mi euismod, non ultricies lacus venenatis.</p>
        </div>
        <div sprk-tabbed-navigation-panel>
          <p>Tab 3 Content Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis rhoncus ipsum. Nulla 
            euismod nisi est, vel consequat ante consectetur in. Ut interdum dictum est at ornare. Nam nec dapibus nibh. 
            Integer venenatis ex eu mi euismod, non ultricies lacus venenatis.</p>
        </div>
      </sprk-tabbed-navigation>
    </div>
  `,
  styles: ['']
})
export class TabbedNavigationDocsComponent {
  constructor() { }
}
