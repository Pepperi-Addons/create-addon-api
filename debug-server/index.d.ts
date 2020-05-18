export default class DebugServer {
    
    constructor(options: { 
        port: (string | number | undefined), 
        addonUUID: string | undefined,
        apiDirectory: string | undefined
    });
    
    start(): void;

    addStaticFolder(virtualPath: string, path: string): void;

}