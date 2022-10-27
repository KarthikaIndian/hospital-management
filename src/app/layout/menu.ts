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
                label: 'Doctor',
                link: '/dashboard/doctor',
                parentId: 1
            },
            {
                id: 3,
                label: 'Patient Appiontment',
                link: '/dashboard/patientappointment',
                parentId: 1
            },
            
        ]
    },
            

];




