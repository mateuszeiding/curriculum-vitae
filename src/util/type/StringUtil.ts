export class StringUtil {
    static capitalizeFirstLetter(str: string): string {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    static range(start: string, end: string) {
        return [start, end].join(window.innerWidth > 600 ? ' - ' : ' ');
    }
}
