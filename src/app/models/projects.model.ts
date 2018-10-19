export interface Projects {
    projects: Project[];
    minis:    Project[];
}

export interface Project {
    name:              string;
    tags?:              string[];
    description?:      string;
    imageSrc?:         string;
    phoneImageSrc?:    string;
    githubSrc?:        string;
    backgroundColour?: string;
}