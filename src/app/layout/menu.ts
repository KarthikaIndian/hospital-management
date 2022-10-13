import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
    {
        id: 1,
        label: 'Master',
        subItems: [ 
           
          
            {
                id: 1,
                label: 'Patient',
                link: '/dashboard/patient',
                parentId: 1
            },
             {
                id: 2,
                label: 'Project',
                link: '/dashboard/project',
                parentId: 1
            },
            
            
        ]
    },
            

];




