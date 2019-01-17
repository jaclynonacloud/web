export interface SearchData {
    text:string;
    type:string;
}

export class SearchType {
    static get OPTION() {
        return Object.freeze({
            "All" : "",
            "Web Apps" : "web",
            "Desktop Apps" : "desktop",
            "Flash Apps" : "flash"
        });
    }
}