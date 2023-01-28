export class Color {
    r = 0;
    g = 0;
    b = 0;
    a = 1;

    constructor(r: string, alpha?: number);
    constructor(r?: string | number, g?: number, b?: number, a?: number) {
        if (typeof r === "string") {
            if (r.length !== 7 || r[0] !== "#") {
                throw new Error(`Invalid color code ${r}.`);
            }
            const code = r;
            this.r = parseInt(code.slice(1, 3), 16) & 255;
            this.g = parseInt(code.slice(3, 5), 16) & 255;
            this.b = parseInt(code.slice(5, 7), 16) & 255;
            this.a = g || 1;
        } else if (
            typeof r === "number" &&
            typeof g === "number" &&
            typeof b === "number"
        ) {
            this.r = r;
            this.g = g;
            this.b = b;
            this.a = a || 1;
        }
    }

    get rgba(): string {
        return `rgba(${this.r},${this.g},${this.b},${this.a})`;
    }

    public static fromColorCode(code: string, alpha = 1) {
        return new Color(code, alpha);
    }

    public toHexString() {
        return `#${this.r.toString(16)}${this.g.toString(16)}${this.b.toString(
            16
        )}`;
    }
}