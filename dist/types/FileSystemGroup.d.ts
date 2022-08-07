import FileSystemUser from "./FileSystemUser";
export default interface FileSystemGroup {
    /**
     * The name of the user
     */
    name: string;
    /**
     * The users within the group
     */
    users: FileSystemUser[];
}
