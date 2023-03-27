import { StatusCRUD } from "./status-CRUD";

export interface RoleMenuDto extends StatusCRUD {
    id: string;
    name: string;
    roleName: string;
    seq: number;
    isActive: boolean;
}