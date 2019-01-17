export interface Projects {
    projects: Project[];
    showcase: string[];
}

export interface Project {
    lookup: string;
    name: string;
    socials?: string;
    categories?: string[];
    description: string;
    details?: any[];
    cover?: string;
    screenshots?: string;
}