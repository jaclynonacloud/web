export interface Projects {
    projects: Project[];
    showcase:    string[];
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