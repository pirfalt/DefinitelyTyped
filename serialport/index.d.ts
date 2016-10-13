// Type definitions for serialport 4.0.1
// Project: https://github.com/EmergingTechnologyAdvisors/node-serialport
// Definitions by: Jeremy Foster <https://github.com/codefoster>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'serialport' {
    class SerialPort {
        constructor(path: string, options?: SerialPortOptions, openImmediately?: boolean, callback?: (err: string) => void)
        isOpen: boolean;
        on(event: string, callback?: (data?: any) => void): void;
        open(callback?: () => void): void;
        write(buffer: any, callback?: (err: string, bytesWritten: number) => void): void
        pause(): void;
        resume(): void;
        disconnected(err: Error): void;
        close(callback?: (err:any) => void): void;
        flush(callback?: (err:any) => void): void;
        set(options: SerialPort.setOptions, callback: () => void): void;
        drain(callback?: (err:any) => void): void;
        update(options: SerialPort.updateOptions, callback?: () => void): void;
        static list(callback: (err: string, ports: SerialPort.portConfig[]) => void): void;
        static parsers: {
            readline: (delimiter: string) => void,
            raw: (emitter: any, buffer: string) => void
        };
    }

    namespace SerialPort {
        interface portConfig {
            comName: string;
            manufacturer: string;
            serialNumber: string;
            pnpId: string;
            locationId: string;
            vendorId: string;
            productId: string;
        }

        interface setOptions {
            brk?: boolean;
            cts?: boolean;
            dsr?: boolean;
            dtr?: boolean;
            rts?: boolean;
        }

        interface updateOptions {
            baudRate?: number;
        }
        
        interface SerialPortOptions {
            autoOpen?: boolean
            lock?: boolean
            baudRate?: 115200 | 57600 | 38400 | 19200 | 9600 | 4800 | 2400 | 1800 | 1200 | 600 | 300 | 200 | 150 | 134 | 110 | 75 | 50
            dataBits?: 8 | 7 | 6 | 5
            stopBits?: 1 | 2
            parity?: 'none' | 'even' | 'mark' | 'odd' | 'space'
            rtscts?: boolean
            xon?: boolean
            xoff?: boolean
            xany?: boolean
            bufferSize?: number
            parser?: (emitter: NodeJS.EventEmitter, buffer: Buffer) => void
            platformOptions?: { vmin: number, vtimer: number }
        }
    }

    export = SerialPort
}
