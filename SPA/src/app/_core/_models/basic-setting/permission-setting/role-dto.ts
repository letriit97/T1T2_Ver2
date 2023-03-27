export interface RoleDto {
    id: string;
    name: string;
    isActive: boolean;
}
export interface RolesUserDto {
    userName: string;
    roles: RoleDto[];
}