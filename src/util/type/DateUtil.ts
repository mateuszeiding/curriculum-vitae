export class DateUtil {
    static to2digMMNumericYYYY(date: Date): string {
        return date.toLocaleDateString('en-US', {
            month: '2-digit',
            year: 'numeric',
        });
    }
}
