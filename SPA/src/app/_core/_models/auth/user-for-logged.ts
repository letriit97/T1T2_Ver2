import { ApplicationUser } from './application-user';

export interface UserForLogged {
  token: string;
  user: ApplicationUser;
  userPermissions: string[];
  supplier_no: string;
  category: string;
  supplier_id: string;
  area: string;
  roles: string[]
}