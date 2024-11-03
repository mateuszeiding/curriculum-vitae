export class DateUtil {
    static toLocaleDateString(date: Date): string {
        return date.toLocaleDateString('en-US', {
            month: '2-digit',
            year: 'numeric',
        });
    }
}
