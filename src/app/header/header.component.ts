import { Component, EventEmitter, Output } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    items: MenuItem[];
    @Output() featureSelected = new EventEmitter<string>();

    ngOnInit() {
        this.items = [
            { label: 'Recipe Book', style: { fontSize: '24px', fontWeight: 'bold' } },
            {
                label: 'Recipes',
                icon: 'pi pi-fw pi-book',
                command: () => this.onSelect('recipe')
            },
            {
                label: 'Shopping List',
                icon: 'pi pi-fw pi-shopping-cart',
                command: () => this.onSelect('shopping-list')
            },
            {
                label: 'Manage',
                icon: 'pi pi-fw pi-globe',
                items: [
                    { label: 'Save Data', icon: 'pi pi-fw pi-save' },
                    { label: 'Fetch Data', icon: 'pi pi-fw pi-download' }
                ]
            }
        ];
    }

    onSelect(feature: string) {
        this.featureSelected.emit(feature);
    }
}
