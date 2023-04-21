import { format, subDays } from 'date-fns';

export class DateUtils {
    static getDaySubstract(substract: number, outputFormat: string = "yyyy-MM-dd"): string{
        return format(subDays(new Date(), substract), outputFormat);
    }

    static getPreviousDays(numberOfDays: number): string[] {
        let days: string[] = [];
        for (let i = 1;i <= numberOfDays; i++) {
          days.push(DateUtils.getDaySubstract(i));
        }
        return days;
    }
}