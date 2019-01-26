import { Component } from '@angular/core';
import { jqxDomService } from './jqwidgets-dom.service';
// import { jqxButtonComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxbuttons';
import { RoutoutcomponentComponent } from './routoutcomponent/routoutcomponent.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    layout: any[] = this.generateLayout();
    constructor(
        private jqxDomService: jqxDomService
    ) {
    }

    getWidth(): any {
        return 800;
    }

    // onClickMe(event) {
    //     console.log("this.clickMessage = 'You are my hero ' + event.target.textContent;");
    // }

    generateLayout(): any[] {
        let layout = [
            {
                type: 'layoutGroup',
                orientation: 'horizontal',
                items: [{
                    type: 'autoHideGroup',
                    alignment: 'left',
                    width: 80,
                    unpinnedWidth: 200,
                    items: [{
                        type: 'layoutPanel',
                        title: 'Toolbox',
                        contentContainer: 'ToolboxPanel'
                    }, {
                        type: 'layoutPanel',
                        title: 'Help',
                        contentContainer: 'HelpPanel'
                    }]
                },
                {
                    type: 'layoutGroup',
                    orientation: 'vertical',
                    width: 420,
                    items: [{
                        type: 'documentGroup',
                        height: 400,
                        minHeight: 200,
                        items: [{
                            type: 'documentPanel',
                            title: 'Document 1',
                            contentContainer: 'Document1Panel'
                        },
                        {
                            type: 'documentPanel',
                            title: 'Document 2',
                            contentContainer: 'Document2Panel'
                        }]
                    },
                    {
                        type: 'tabbedGroup',
                        height: 200,
                        pinnedHeight: 30,
                        items: [{
                            type: 'layoutPanel',
                            title: 'Error List',
                            contentContainer: 'ErrorListPanel'
                        }]
                    }]
                },
                {
                    type: 'tabbedGroup',
                    width: 300,
                    minWidth: 200,
                    items: [
                        {
                            type: 'layoutPanel',
                            title: 'Solution Explorer',
                            contentContainer: 'SolutionExplorerPanel',
                            initContent: (element) => {
                                const that = this;

                                let container = document.createElement('div');
                                element[0].appendChild(container);

                                let result = this.jqxDomService.loadComponent(RoutoutcomponentComponent, container);

                                //   (<jqxButtonComponent>result.componentRef.instance).autoCreate = false;  
                                //   (<jqxButtonComponent>result.componentRef.instance).onClick.subscribe((clickEvent, value) => {  
                                //       that.onClickMe(clickEvent);
                                //       // console.log(2222, 'clickEvent');
                                //   });

                                //   (<jqxButtonComponent>result.componentRef.instance).createComponent({value: 'Click', width: 100});
                            }
                        },
                        {
                            type: 'layoutPanel',
                            title: 'Properties',
                            contentContainer: 'PropertiesPanel'
                        }]
                }]
            },
            {
                type: 'floatGroup',
                width: 500,
                height: 300,
                position: {
                    x: 100,
                    y: 250
                },
                items: [{
                    type: 'layoutPanel',
                    title: 'Output',
                    contentContainer: 'OutputPanel',
                    selected: true
                }]
            }];
        return layout;
    }
}
